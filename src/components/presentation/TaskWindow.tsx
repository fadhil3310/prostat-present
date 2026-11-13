import type { SlideMetadata } from '../../lib/presentationSlides'
import { usePresentationSettings } from '../../lib/presentationSettings'
import type { SlideTransitionDirection } from './PresentationShell'
import PresentationLayout from './PresentationLayout'

interface TaskWindowProps {
  currentSlide: SlideMetadata
  slideDirection?: SlideTransitionDirection
  onOpenPauseMenu: () => void
  onReplay?: () => void
  onBackToMenu?: () => void
}

export default function TaskWindow({
  currentSlide,
  slideDirection = 'none',
  onOpenPauseMenu,
  onReplay,
  onBackToMenu,
}: TaskWindowProps) {
  const { settings } = usePresentationSettings()
  const animateSlide = settings.smoothTransitions && slideDirection !== 'none'
  const slideMotionClass = animateSlide
    ? slideDirection === 'forward'
      ? 'slide-enter-forward'
      : 'slide-enter-backward'
    : ''

  return (
    <div
      className="relative mx-auto flex w-full max-w-5xl h-[66vh] sm:h-[70vh] md:h-auto md:aspect-[16/9] max-h-[77vh] flex-col justify-between overflow-hidden rounded-2xl border-4 border-black bg-[#1e2430] p-3 sm:p-4 shadow-[0_8px_0_#000,0_16px_32px_rgba(0,0,0,0.85)] text-white select-none"
      role="region"
      aria-label={`Task Window: ${currentSlide.title}`}
    >
      {/* Task Window Header Bar */}
      <div className="flex items-center justify-between border-b-2 border-black/50 pb-2.5 mb-2">
        {/* Left: Task Title & Room Badge */}
        <div
          key={animateSlide ? `hdr-${currentSlide.id}` : 'hdr-static'}
          className={`flex items-center gap-3 ${
            animateSlide ? 'slide-header-enter' : ''
          }`}
        >
          <div className="flex items-center gap-2 rounded-lg border-2 border-black bg-[#131722] px-3 py-1 shadow-inner">
            <span
              className="h-2.5 w-2.5 rounded-full transition-colors duration-300"
              style={{
                backgroundColor: currentSlide.accentColor,
                // boxShadow: `0 0 8px ${currentSlide.accentColor}`,
              }}
            />
            <span className="font-display text-xs font-bold uppercase tracking-wider text-white">
              {currentSlide.roomName}
            </span>
          </div>

          <div className="hidden sm:flex flex-col">
            <h2 className="font-display text-sm md:text-base font-bold uppercase tracking-wide text-white">
              {currentSlide.title}
            </h2>
            <span className="font-body text-[11px] text-slate-300 truncate max-w-md">
              {currentSlide.subtitle}
            </span>
          </div>
        </div>

        {/* Right: Pause Menu Button [ESC / X] */}
        <button
          type="button"
          onClick={onOpenPauseMenu}
          className="flex items-center gap-1.5 rounded-xl border-2 border-black bg-[#EA2212] px-3 py-1 font-display text-xs font-black uppercase text-white shadow-[0_2px_0_#000] hover:bg-[#ff3b2d] active:translate-y-0.5 active:shadow-none cursor-pointer transition-all"
          title="Buka Pause Menu [ESC]"
        >
          <span>PAUSE</span>
          <span className="hidden sm:inline font-mono text-[10px] bg-black/30 px-1 py-0.5 rounded">
            ESC
          </span>
        </button>
      </div>

      {/* Task Window Content Viewport */}
      <div className="relative flex-1 min-h-0 overflow-hidden">
        <div key={currentSlide.id} className={`h-full w-full ${slideMotionClass}`}>
          <PresentationLayout
            slide={currentSlide}
            onReplay={onReplay}
            onBackToMenu={onBackToMenu}
          />
        </div>
      </div>
    </div>
  )
}

