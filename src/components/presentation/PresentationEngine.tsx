import { useState, useEffect, useCallback, useRef } from 'react'
import { PRESENTATION_SLIDES, type SlideMetadata } from '../../lib/presentationSlides'
import { usePresentationSettings } from '../../lib/presentationSettings'
import TaskProgressBar from './TaskProgressBar'
import TaskWindow from './TaskWindow'
import PresentationControls from './PresentationControls'
import PauseMenu from './PauseMenu'

import type { SlideTransitionDirection } from './PresentationShell'

interface PresentationEngineProps {
  currentSlideId: number
  slideDirection?: SlideTransitionDirection
  onSelectSlide: (id: number) => void
  onPrev: () => void
  onNext: () => void
  onBackToLobby: () => void
  onBackToMenu: () => void
}

export default function PresentationEngine({
  currentSlideId,
  slideDirection = 'none',
  onSelectSlide,
  onPrev,
  onNext,
  onBackToLobby,
  onBackToMenu,
}: PresentationEngineProps) {
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { settings } = usePresentationSettings()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      if (params.get('pause') === '1') {
        setIsPaused(true)
      }
    }
  }, [])

  const totalSlides = PRESENTATION_SLIDES.length
  const currentSlide: SlideMetadata =
    PRESENTATION_SLIDES.find((s) => s.id === currentSlideId) ||
    PRESENTATION_SLIDES[0]

  // Fullscreen management
  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen().catch((err) => {
          console.warn('Fullscreen request failed:', err)
        })
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch((err) => {
          console.warn('Exit fullscreen failed:', err)
        })
      }
    }
  }, [])

  // Sync fullscreen state with document events
  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement))
    }

    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  // Global Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.tagName === 'SELECT' ||
          target.isContentEditable)
      ) {
        return
      }

      // Escape toggles pause menu
      if (e.key === 'Escape') {
        e.preventDefault()
        setIsPaused((prev) => !prev)
        return
      }

      // If paused, ignore navigation shortcuts
      if (isPaused) return

      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault()
        onNext()
      } else if (settings.keyboardShortcuts && (e.key === ' ' || e.code === 'Space')) {
        e.preventDefault()
        onNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault()
        onPrev()
      } else if (settings.keyboardShortcuts && e.key >= '1' && e.key <= '9') {
        const targetId = parseInt(e.key, 10)
        if (targetId <= totalSlides) {
          e.preventDefault()
          onSelectSlide(targetId)
        }
      } else if (settings.keyboardShortcuts && e.key === '0') {
        if (totalSlides >= 10) {
          e.preventDefault()
          onSelectSlide(10)
        }
      } else if (e.key === 'f' || e.key === 'F') {
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
          e.preventDefault()
          handleToggleFullscreen()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleToggleFullscreen, isPaused, onNext, onPrev, onSelectSlide, settings.keyboardShortcuts, totalSlides])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-between overflow-hidden bg-[#070b14] bg-cover bg-center select-none p-2.5 sm:p-4 md:p-5 transition-colors duration-500"
      style={{
        backgroundImage: `url(${currentSlide.backgroundAsset})`,
      }}
      role="region"
      aria-label="Among Us In-Game Presentation Viewport"
    >
      {/* Subtle Space/Room Ambient Overlay */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
          settings.highContrastDimmer ? 'bg-black/75' : 'bg-black/45'
        }`}
      />

      {/* Top Header Bar: Task Progress & Control Buttons */}
      <div className="relative z-10 flex w-full max-w-5xl items-center justify-between gap-2 px-1 sm:px-2">
        {/* Authentic In-Game Taskbar */}
        <TaskProgressBar
          currentSlideId={currentSlideId}
          totalSlides={totalSlides}
        />

        {/* Right Action Icons: Fullscreen & Pause */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          {/* Fullscreen Button [F] */}
          <button
            type="button"
            onClick={handleToggleFullscreen}
            className="flex shrink-0 whitespace-nowrap items-center gap-1.5 rounded-xl border-2 border-black bg-[#1e2430] px-2.5 sm:px-3 py-1.5 font-display text-[11px] sm:text-xs font-bold text-white shadow-[0_2px_0_#000] hover:bg-[#2c3444] active:translate-y-0.5 active:shadow-none cursor-pointer transition-all"
            title="Layar Penuh [F]"
          >
            <span className="sm:hidden">{isFullscreen ? 'EXIT' : 'FS'}</span>
            <span className="hidden sm:inline">{isFullscreen ? 'EXIT' : 'FULLSCREEN'}</span>
            <span className="hidden sm:inline font-mono text-[10px] bg-black/40 px-1 py-0.5 rounded text-[#55D6A5]">
              F
            </span>
          </button>

          {/* Pause / Menu Button [ESC] */}
          <button
            type="button"
            onClick={() => setIsPaused(true)}
            className="flex shrink-0 whitespace-nowrap items-center gap-1.5 rounded-xl border-2 border-black bg-[#1e2430] px-2.5 sm:px-3 py-1.5 font-display text-[11px] sm:text-xs font-bold text-white shadow-[0_2px_0_#000] hover:bg-[#2c3444] active:translate-y-0.5 active:shadow-none cursor-pointer transition-all"
            title="Menu Jeda [ESC]"
          >
            <span>MENU</span>
            <span className="hidden sm:inline font-mono text-[10px] bg-black/40 px-1 py-0.5 rounded text-[#FFD166]">
              ESC
            </span>
          </button>
        </div>
      </div>

      {/* Center: In-Game Task Window */}
      <div className="relative z-10 my-auto w-full flex-1 min-h-0 flex items-center justify-center py-1 sm:py-2">
        <TaskWindow
          currentSlide={currentSlide}
          slideDirection={slideDirection}
          onOpenPauseMenu={() => setIsPaused(true)}
          onReplay={() => onSelectSlide(1)}
          onBackToMenu={onBackToMenu}
        />
      </div>

      {/* Bottom: Presentation Controls */}
      <div className="relative z-10 w-full flex justify-center pb-1">
        <PresentationControls
          currentSlideId={currentSlideId}
          totalSlides={totalSlides}
          onPrev={onPrev}
          onNext={onNext}
        />
      </div>

      {/* Pause Menu Modal */}
      <PauseMenu
        isOpen={isPaused}
        onResume={() => setIsPaused(false)}
        onBackToLobby={() => {
          setIsPaused(false)
          onBackToLobby()
        }}
        onBackToMenu={() => {
          setIsPaused(false)
          onBackToMenu()
        }}
      />
    </div>
  )
}
