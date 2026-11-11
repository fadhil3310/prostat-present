import { useState, useEffect } from 'react'
import { AMONG_US_ASSETS } from '../../lib/amongUsAssets'
import AssetSlot from './AssetSlot'

interface LoadingScreenProps {
  onEnter: () => void
}

export default function LoadingScreen({ onEnter }: LoadingScreenProps) {
  const [progress, setProgress] = useState<number>(0)
  const [statusText, setStatusText] = useState<string>('Connecting to The Skeld...')
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  useEffect(() => {
    // Simulasi loading aset game 1.8 detik
    const duration = 1800
    const intervalTime = 30
    const increment = 100 / (duration / intervalTime)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(100, prev + increment)
        if (next >= 100) {
          clearInterval(timer)
          setIsLoaded(true)
          setStatusText('Ready!')
          return 100
        } else if (next >= 50) {
          setStatusText('Loading Crewmates...')
        } else {
          setStatusText('Connecting to The Skeld...')
        }
        return next
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[#070b14] bg-cover bg-center bg-no-repeat select-none"
      style={{
        backgroundImage: `url(${AMONG_US_ASSETS.backgrounds.deepSpace})`,
      }}
      role="region"
      aria-label="Scene 01: Among Us Loading Screen"
    >
      {/* Subtle Space Tint Overlay (Menjaga kontras tanpa glassmorphism) */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center px-6 text-center">
        {/* Official Among Us Logo */}
        <div className="mb-3 sm:mb-4 transition-transform duration-300 hover:scale-105">
          <AssetSlot
            src={AMONG_US_ASSETS.promotional.officialLogo}
            alt="Among Us Official Logo"
            className="h-20 sm:h-24 md:h-28 w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
          />
        </div>

        {/* Academic Presentation Titles */}
        <div className="flex flex-col items-center">
          <h1
            className="font-display text-2xl sm:text-4xl md:text-[2.75rem] font-black uppercase tracking-wide sm:whitespace-nowrap text-white leading-tight"
            style={{
              textShadow: '0 4px 0 #000, 0 8px 20px rgba(0,0,0,0.9)',
            }}
          >
            MISSION: PROBABILITY
          </h1>

          <p className="mt-2 font-body text-xs sm:text-[13px] font-semibold uppercase tracking-[0.22em] text-slate-200 drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
            An Among Us Statistical Investigation
          </p>

          <div className="mt-2.5 flex items-center justify-center gap-3 text-slate-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            <span className="h-px w-8 bg-white/25" aria-hidden="true" />
            <span className="font-body text-xs sm:text-[13px] font-normal tracking-wide">
              Mata Kuliah Probabilitas dan Statistika
            </span>
            <span className="h-px w-8 bg-white/25" aria-hidden="true" />
          </div>
        </div>

        {/* Loading Bar & Action Area */}
        <div className="mt-7 sm:mt-8 flex w-full flex-col items-center">
          {/* Authentic Among Us Capsule Loading Bar */}
          <div
            className="relative h-6 sm:h-7 w-64 sm:w-80 md:w-96 overflow-hidden rounded-full border-[3.5px] border-black bg-[#10141e] p-0.5 shadow-[0_4px_10px_rgba(0,0,0,0.8),inset_0_2px_4px_rgba(0,0,0,0.7)]"
            role="progressbar"
            aria-valuenow={Math.round(progress)}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div
              className="h-full rounded-full bg-white transition-all duration-100 ease-out shadow-[0_0_10px_rgba(255,255,255,0.45)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Simple Game Status Text */}
          <div className="mt-3 min-h-[1.5rem] flex items-center justify-center">
            <p className="font-display text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              {statusText}
            </p>
          </div>

          {/* Enter Button (Muncul setelah loading 100%, menunggu klik pengguna) */}
          <div className="mt-4 min-h-[4.5rem] flex items-center justify-center">
            {isLoaded ? (
              <button
                type="button"
                onClick={onEnter}
                className="group relative flex items-center justify-center gap-3 rounded-2xl border-4 border-black bg-[#EA2212] px-8 py-3.5 sm:px-10 sm:py-4 font-display text-base sm:text-xl font-bold uppercase tracking-wider text-white shadow-[0_6px_0_#000,0_12px_20px_rgba(0,0,0,0.6)] transition-all hover:bg-[#ff3b2d] active:translate-y-1 active:shadow-[0_2px_0_#000] cursor-pointer"
                autoFocus
              >
                <span>CLICK TO ENTER SHIP</span>
                <svg
                  className="h-5 w-5 fill-current transition-transform group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </button>
            ) : (
              <div className="h-12" aria-hidden="true" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

