import { useState, useEffect } from 'react'
import { AMONG_US_ASSETS } from '../../lib/amongUsAssets'
import { playUiSfx, usePresentationSettings } from '../../lib/presentationSettings'
import AssetSlot from './AssetSlot'
import HowToPlayModal from './HowToPlayModal'
import SettingsModal from './SettingsModal'

interface MainMenuProps {
  onStartMission: () => void
}

export default function MainMenu({ onStartMission }: MainMenuProps) {
  const [isHowToPlayOpen, setIsHowToPlayOpen] = useState<boolean>(false)
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)
  const { settings } = usePresentationSettings()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search)
      if (params.get('settings') === '1') {
        setIsSettingsOpen(true)
      } else if (params.get('howtoplay') === '1') {
        setIsHowToPlayOpen(true)
      }
    }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-between overflow-hidden bg-[#070b14] bg-cover bg-center bg-no-repeat select-none p-4 sm:p-6 md:p-8"
      style={{
        backgroundImage: `url(${AMONG_US_ASSETS.backgrounds.deepSpace})`,
      }}
      role="region"
      aria-label="Scene 02: Among Us Main Menu"
    >
      {/* Background Dimmer */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
          settings.highContrastDimmer ? 'bg-black/70' : 'bg-black/40'
        }`}
      />

      {/* Floating Space Astronaut Lineup at Bottom/Background */}
      <div className="pointer-events-none absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 opacity-40 sm:opacity-55 transition-opacity max-w-4xl w-full px-4 flex justify-center">
        <AssetSlot
          src={AMONG_US_ASSETS.characters.crewmates15Lineup}
          alt="Among Us 15 Crewmates Lineup in Space"
          className="max-h-24 sm:max-h-32 md:max-h-36 w-auto object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
        />
      </div>

      {/* Top Header Branding Banner */}
      <div className="relative z-10 flex flex-col items-center pt-2 sm:pt-4">
        {/* Official Logo */}
        <AssetSlot
          src={AMONG_US_ASSETS.promotional.officialLogo}
          alt="Among Us"
          className="h-20 sm:h-28 md:h-32 w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.9)]"
        />

        {/* Integrated Title Badge */}
        <div className="mt-2 flex items-center gap-2">
          <span className="font-display text-sm sm:text-base md:text-lg font-black tracking-widest text-[#35C9F4] uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            MISSION: PROBABILITY
          </span>
          <span className="text-slate-400">•</span>
          <span className="font-body text-xs sm:text-sm font-medium text-[#55D6A5] drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Statistical Investigation
          </span>
        </div>
      </div>

      {/* Center Action Menu Button Stack */}
      <div className="relative z-20 my-auto flex w-full max-w-xs sm:max-w-sm flex-col gap-3.5 sm:gap-4">
        {/* 1. START MISSION (Primary Big Red Button) */}
        <button
          type="button"
          onClick={() => {
            playUiSfx('click')
            onStartMission()
          }}
          className="group relative flex w-full items-center justify-center gap-3 rounded-2xl border-4 border-black bg-[#EA2212] px-6 py-4 sm:py-4.5 font-display text-lg sm:text-2xl font-black uppercase tracking-wider text-white shadow-[0_6px_0_#000,0_12px_24px_rgba(0,0,0,0.6)] transition-all hover:bg-[#ff3b2d] active:translate-y-1 active:shadow-[0_2px_0_#000] cursor-pointer"
          autoFocus
        >
          <span>START MISSION</span>
          <svg
            className="h-6 w-6 fill-current transition-transform group-hover:translate-x-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
        </button>

        {/* 2. HOW TO PLAY (Secondary Button) */}
        <button
          type="button"
          onClick={() => {
            playUiSfx('click')
            setIsHowToPlayOpen(true)
          }}
          className="flex w-full items-center justify-center gap-2.5 rounded-2xl border-4 border-black bg-[#1e2430] px-6 py-3 sm:py-3.5 font-display text-base sm:text-lg font-bold uppercase tracking-wider text-white shadow-[0_5px_0_#000,0_8px_16px_rgba(0,0,0,0.5)] transition-all hover:bg-[#283142] active:translate-y-1 active:shadow-[0_2px_0_#000] cursor-pointer"
        >
          <span className="text-[#35C9F4]">?</span>
          <span>HOW TO PLAY</span>
        </button>

        {/* 3. SETTINGS (Secondary Button) */}
        <button
          type="button"
          onClick={() => {
            playUiSfx('click')
            setIsSettingsOpen(true)
          }}
          className="flex w-full items-center justify-center gap-2.5 rounded-2xl border-4 border-black bg-[#1e2430] px-6 py-3 sm:py-3.5 font-display text-base sm:text-lg font-bold uppercase tracking-wider text-white shadow-[0_5px_0_#000,0_8px_16px_rgba(0,0,0,0.5)] transition-all hover:bg-[#283142] active:translate-y-1 active:shadow-[0_2px_0_#000] cursor-pointer"
        >
          <span className="text-[#8B5CF6]">⚙</span>
          <span>SETTINGS</span>
        </button>
      </div>

      {/* Bottom Footer Info Strip */}
      <div className="relative z-10 flex w-full items-center justify-between px-2 text-[10px] sm:text-xs font-mono text-slate-400">
        <div>
          <span className="font-display font-bold text-slate-300">v1.0.0-academic</span>
          <span className="hidden sm:inline text-slate-500"> // The Skeld Expedition</span>
        </div>
        <div className="text-right">
          <span className="text-slate-400">
            Among Us &copy; Innersloth LLC • Academic Non-Profit
          </span>
        </div>
      </div>

      {/* Modals */}
      <HowToPlayModal
        isOpen={isHowToPlayOpen}
        onClose={() => setIsHowToPlayOpen(false)}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  )
}

