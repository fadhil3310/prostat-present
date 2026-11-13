import { useState, useCallback, useRef, useEffect } from 'react'
import { PRESENTATION_SLIDES } from '../../lib/presentationSlides'
import { playUiSfx, usePresentationSettings } from '../../lib/presentationSettings'
import LoadingScreen from './LoadingScreen'
import MainMenu from './MainMenu'
import MissionLobby from './MissionLobby'
import PresentationEngine from './PresentationEngine'
import RoleRevealScreen from './RoleRevealScreen'
import FinishScreen from './FinishScreen'

export type PresentationScene =
  | 'loading'
  | 'main-menu'
  | 'lobby'
  | 'role-reveal'
  | 'presentation'
  | 'finish'

export type SlideTransitionDirection = 'none' | 'forward' | 'backward'

const SCENE_EXIT_DURATION_MS = 360

export default function PresentationShell() {
  const [currentScene, setCurrentScene] = useState<PresentationScene>('loading')
  const [currentSlideId, setCurrentSlideId] = useState<number>(1)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const sceneParam = params.get('scene') as PresentationScene | null
    const slideParam = parseInt(params.get('slide') || '', 10)

    if (!isNaN(slideParam) && slideParam >= 1 && slideParam <= PRESENTATION_SLIDES.length) {
      setCurrentSlideId(slideParam)
    }

    if (
      sceneParam &&
      ['loading', 'main-menu', 'lobby', 'role-reveal', 'presentation', 'finish'].includes(
        sceneParam
      )
    ) {
      setCurrentScene(sceneParam)
    } else if (params.has('slide')) {
      setCurrentScene('presentation')
    }
  }, [])

  const { settings } = usePresentationSettings()
  const [isExitingScene, setIsExitingScene] = useState<boolean>(false)
  const [hasSceneTransitioned, setHasSceneTransitioned] = useState<boolean>(false)
  const [slideDirection, setSlideDirection] = useState<SlideTransitionDirection>('none')
  const transitionTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current)
      }
    }
  }, [])

  const navigateScene = useCallback(
    (nextScene: PresentationScene, slideIdOverride?: number) => {
      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current)
        transitionTimerRef.current = null
      }

      playUiSfx('slide')

      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches

      const commitTransition = () => {
        if (typeof slideIdOverride === 'number') {
          setCurrentSlideId(slideIdOverride)
        }
        setSlideDirection('none')
        setHasSceneTransitioned(true)
        setCurrentScene(nextScene)
        setIsExitingScene(false)
      }

      if (prefersReducedMotion || !settings.smoothTransitions) {
        commitTransition()
        return
      }

      setIsExitingScene(true)
      transitionTimerRef.current = window.setTimeout(() => {
        transitionTimerRef.current = null
        commitTransition()
      }, SCENE_EXIT_DURATION_MS)
    },
    [settings.smoothTransitions]
  )

  const totalSlides = PRESENTATION_SLIDES.length

  // Slide navigation handlers
  const handleSelectSlide = useCallback(
    (id: number) => {
      const targetId = Math.max(1, Math.min(id, totalSlides))
      setCurrentSlideId((prev) => {
        if (targetId !== prev) {
          playUiSfx('slide')
          setSlideDirection(targetId > prev ? 'forward' : 'backward')
        }
        return targetId
      })
    },
    [totalSlides]
  )

  const handlePrev = useCallback(() => {
    setCurrentSlideId((prev) => {
      if (prev <= 1) return prev
      playUiSfx('slide')
      setSlideDirection('backward')
      return prev - 1
    })
  }, [])

  const handleNext = useCallback(() => {
    if (currentSlideId >= totalSlides) {
      navigateScene('finish')
      return
    }
    playUiSfx('slide')
    setSlideDirection('forward')
    setCurrentSlideId((prev) => Math.min(totalSlides, prev + 1))
  }, [currentSlideId, navigateScene, totalSlides])

  const renderScene = () => {
    // Scene 01: Loading Screen (Default view on initial load)
    if (currentScene === 'loading') {
      return <LoadingScreen onEnter={() => navigateScene('main-menu')} />
    }

    // Scene 02: Main Menu (Authentic Among Us Game Menu)
    if (currentScene === 'main-menu') {
      return <MainMenu onStartMission={() => navigateScene('lobby')} />
    }

    // Scene 03: Mission Lobby (The Skeld Dropship Waiting Room)
    if (currentScene === 'lobby') {
      return (
        <MissionLobby
          onBeginInvestigation={() => navigateScene('role-reveal')}
          onBackToMenu={() => navigateScene('main-menu')}
        />
      )
    }

    // Scene 03.5: Role Reveal Screen ("CREWMATE — There is 1 Statistical Anomaly among us")
    if (currentScene === 'role-reveal') {
      return (
        <RoleRevealScreen
          onContinue={() => {
            navigateScene('presentation', 1)
             new Audio("/shinese-gong.mp3").play();
          }}
          onBackToLobby={() => navigateScene('lobby')}
        />
      )
    }

    // Scene 05: Finish Screen (Standalone Among Us Victory Screen, bukan Slide 11)
    if (currentScene === 'finish') {
      return (
        <FinishScreen
          onPlayAgain={() => navigateScene('presentation', 1)}
          onBackToMenu={() => navigateScene('main-menu')}
        />
      )
    }

    // Scene 04: In-Game Slide Presentation (Among Us Task Interface)
    return (
      <PresentationEngine
        currentSlideId={currentSlideId}
        slideDirection={slideDirection}
        onSelectSlide={handleSelectSlide}
        onPrev={handlePrev}
        onNext={handleNext}
        onBackToLobby={() => navigateScene('lobby')}
        onBackToMenu={() => navigateScene('main-menu')}
      />
    )
  }

  const sceneAnimationClass = isExitingScene
    ? 'opacity-0 scale-[0.985] pointer-events-none'
    : settings.smoothTransitions &&
        hasSceneTransitioned &&
        currentScene !== 'finish' &&
        currentScene !== 'role-reveal'
    ? 'scene-enter'
    : 'opacity-100 scale-100'

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#020409]">
      <div
        key={currentScene}
        className={`h-full w-full ${
          settings.smoothTransitions ? 'transition-all duration-300 ease-in-out ' : ''
        }${sceneAnimationClass}`}
      >
        {renderScene()}
      </div>
    </div>
  )
}
