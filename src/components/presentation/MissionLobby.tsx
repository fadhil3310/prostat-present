import { useEffect } from 'react'
import { AMONG_US_ASSETS } from '../../lib/amongUsAssets'
import { usePresentationSettings } from '../../lib/presentationSettings'
import AssetSlot from './AssetSlot'

interface MissionLobbyProps {
  onBeginInvestigation: () => void
  onBackToMenu: () => void
}

export default function MissionLobby({
  onBeginInvestigation,
  onBackToMenu,
}: MissionLobbyProps) {
  const { settings } = usePresentationSettings()
  // Dukungan keyboard: Escape untuk kembali, Enter / Space untuk mulai
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

      if (e.key === 'Escape') {
        e.preventDefault()
        onBackToMenu()
      } else if (e.key === 'Enter') {
        e.preventDefault()
        onBeginInvestigation()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onBackToMenu, onBeginInvestigation])

  return (
    <div
      className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-between overflow-hidden bg-[#070b14] bg-cover bg-center bg-no-repeat select-none p-3 sm:p-5 md:p-6"
      style={{
        backgroundImage: `url(${AMONG_US_ASSETS.backgrounds.deepSpace})`,
      }}
      role="region"
      aria-label="Scene 03: The Skeld Mission Lobby"
    >
      {/* Subtle Ambient Overlay (Mempertahankan keterbacaan tanpa menggelapkan berlebihan) */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
          settings.highContrastDimmer ? 'bg-black/65' : 'bg-black/35'
        }`}
      />

      {/* Top Bar: Navigasi Kembali & Identitas Lobby */}
      <div className="relative z-10 flex w-full max-w-6xl items-center justify-between">
        {/* Tombol Kembali ke Main Menu */}
        <button
          type="button"
          onClick={onBackToMenu}
          className="flex items-center gap-2 rounded-xl border-[3px] border-black bg-[#1e2430] px-3.5 py-2 font-display text-xs sm:text-sm font-bold uppercase text-white shadow-[0_3px_0_#000] hover:bg-[#283142] active:translate-y-0.5 active:shadow-none cursor-pointer transition-all"
          aria-label="Kembali ke Main Menu"
        >
          <span>◀</span>
          <span>MAIN MENU</span>
        </button>

        {/* Identitas Ruang Tunggu The Skeld */}
        <div className="flex flex-col items-center text-center sm:absolute sm:left-1/2 sm:-translate-x-1/2">
          <span className="font-display text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#35C9F4] drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
            THE SKELD • CREW LOBBY
          </span>
          <h1 className="font-display text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-wider text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)]">
            CREWMATES, ASSEMBLE!
          </h1>
        </div>
      </div>

      {/* Center Area: Karakter Crewmate & Panel Mission Objectives */}
      <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 md:grid-cols-12 gap-4 items-center my-auto px-2">
        {/* Sisi Kiri: Karakter Crewmates Berkumpul di Dropship */}
        <div className="hidden md:flex md:col-span-6 flex-col items-center justify-center relative min-h-[300px]">
          {/* Dialog Balon Pesan Crewmate */}
          <div className="mb-3 rounded-2xl border-4 border-black bg-white px-4 py-2.5 font-display text-xs sm:text-sm font-bold text-slate-900 shadow-[0_5px_0_#000] relative max-w-xs text-center animate-bounce-subtle">
            <span>&ldquo;Anomali data terdeteksi! Siapkan model distribusi probabilitas!&rdquo;</span>
            {/* Segitiga Balon Pesan */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 border-solid border-t-white border-t-8 border-x-transparent border-x-8 border-b-0" />
          </div>

          {/* Posisi Karakter Asli Berkumpul */}
          <div className="flex items-end justify-center gap-4">
            {/* Crewmate Red Standing */}
            <div className="floating-crewmate transition-transform hover:scale-105">
              <AssetSlot
                src={AMONG_US_ASSETS.characters.redStanding}
                alt="Crewmate Red Standing"
                className="max-h-48 sm:max-h-56 md:max-h-64 w-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
              />
            </div>

            {/* Crewmate Blue Tablet */}
            <div className="transition-transform hover:scale-105" style={{ animationDelay: '1s' }}>
              <AssetSlot
                src={AMONG_US_ASSETS.characters.blueTablet}
                alt="Crewmate Blue Analyzing Data Tablet"
                className="max-h-44 sm:max-h-52 md:max-h-60 w-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)]"
              />
            </div>
          </div>
        </div>

        {/* Sisi Kanan: Panel Mission Objectives Bergaya In-Game Task List */}
        <div className="col-span-12 md:col-span-6 flex justify-center">
          <div className="w-full max-w-md rounded-2xl border-4 border-black bg-[#1e2430]/95 p-5 sm:p-6 shadow-[0_8px_0_#000,0_16px_30px_rgba(0,0,0,0.85)] text-white backdrop-blur-xs">
            {/* Header Task List */}
            <div className="flex items-center gap-2 border-b-2 border-black/40 pb-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFD166] font-display text-xs font-black text-black">
                !
              </span>
              <h2 className="font-display text-base sm:text-lg font-bold uppercase tracking-wider text-white">
                MISSION OBJECTIVES
              </h2>
            </div>

            {/* 4 Task Items */}
            <div className="my-4 space-y-2.5">
              <div className="flex items-start gap-2.5 rounded-lg border-2 border-black/60 bg-[#131722] p-2.5 transition-transform hover:translate-x-1">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#EA2212] text-[10px] font-bold text-white shadow-sm">
                  1
                </span>
                <div className="text-xs sm:text-sm font-body">
                  <strong className="text-white font-semibold block">
                    Investigate 4 Probability Distributions
                  </strong>
                  <p className="text-[11px] text-slate-300">
                    Binomial, Poisson, Exponential, dan Normal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-lg border-2 border-black/60 bg-[#131722] p-2.5 transition-transform hover:translate-x-1">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#35C9F4] text-[10px] font-bold text-black shadow-sm">
                  2
                </span>
                <div className="text-xs sm:text-sm font-body">
                  <strong className="text-white font-semibold block">
                    Understand Statistical Formulas
                  </strong>
                  <p className="text-[11px] text-slate-300">
                    Fungsi Peluang PMF/PDF, Nilai Harapan E[X], &amp; Varians Var(X)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-lg border-2 border-black/60 bg-[#131722] p-2.5 transition-transform hover:translate-x-1">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#FFD166] text-[10px] font-bold text-black shadow-sm">
                  3
                </span>
                <div className="text-xs sm:text-sm font-body">
                  <strong className="text-white font-semibold block">
                    Analyze Probability Models
                  </strong>
                  <p className="text-[11px] text-slate-300">
                    Standardisasi Z-Score dan deteksi anomali ekstrem
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-lg border-2 border-black/60 bg-[#131722] p-2.5 transition-transform hover:translate-x-1">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#55D6A5] text-[10px] font-bold text-black shadow-sm">
                  4
                </span>
                <div className="text-xs sm:text-sm font-body">
                  <strong className="text-white font-semibold block">
                    Complete the Emergency Quiz
                  </strong>
                  <p className="text-[11px] text-slate-300">
                    Uji pemahaman kasus nyata di ruang rapat Cafeteria
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Metadata Strip Inside Panel */}
            <div className="flex items-center justify-between border-t-2 border-black/40 pt-2.5 font-display text-xs font-bold text-slate-300">
              <span className="flex items-center gap-1.5 text-[#35C9F4]">
                <span className="h-2 w-2 rounded-full bg-[#35C9F4]" />
                4 DISTRIBUTIONS
              </span>
              <span className="flex items-center gap-1.5 text-[#55D6A5]">
                <span className="h-2 w-2 rounded-full bg-[#55D6A5]" />
                10 PRESENTATION SLIDES
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action Area: Tombol BEGIN INVESTIGATION */}
      <div className="relative z-10 flex flex-col items-center gap-2 pb-2">
        <button
          type="button"
          onClick={onBeginInvestigation}
          className="group relative flex items-center justify-center gap-3 rounded-2xl border-4 border-black bg-[#EA2212] px-8 py-3.5 sm:px-12 sm:py-4 font-display text-lg sm:text-2xl font-black uppercase tracking-wider text-white shadow-[0_6px_0_#000,0_12px_24px_rgba(0,0,0,0.6)] transition-all hover:bg-[#ff3b2d] active:translate-y-1 active:shadow-[0_2px_0_#000] cursor-pointer"
          autoFocus
        >
          <span>BEGIN INVESTIGATION</span>
          <svg
            className="h-6 w-6 fill-current transition-transform group-hover:translate-x-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
        </button>

        <span className="font-display text-[10px] sm:text-xs text-slate-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
          Tekan [Enter] atau [Space] untuk memulai • [ESC] untuk kembali ke Menu
        </span>
      </div>
    </div>
  )
}

