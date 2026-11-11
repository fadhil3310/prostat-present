import { useEffect } from 'react'

interface HowToPlayModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function HowToPlayModal({ isOpen, onClose }: HowToPlayModalProps) {
  // Tutup modal jika tombol Escape ditekan
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Petunjuk Penggunaan Presentasi"
    >
      {/* Modal Box */}
      <div
        className="relative w-full max-w-xl rounded-2xl border-4 border-black bg-[#1e2430] p-5 sm:p-6 text-white shadow-[0_10px_0_#000,0_20px_40px_rgba(0,0,0,0.85)] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b-2 border-black/40 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-4 w-4 rounded-full bg-[#35C9F4] shadow-[0_0_8px_#35C9F4]" />
            <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
              HOW TO PLAY // PETUNJUK
            </h2>
          </div>

          {/* Close Button [X] */}
          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border-[2.5px] border-black bg-[#EA2212] font-display text-lg font-black text-white shadow-[0_3px_0_#000] hover:bg-[#ff3b2d] active:translate-y-0.5 active:shadow-none cursor-pointer transition-all"
            aria-label="Tutup Jendela"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-4 space-y-4 font-body text-xs sm:text-sm text-slate-200">
          {/* Mission Objective Briefing */}
          <div className="rounded-xl border-2 border-black bg-[#131722] p-3.5 shadow-inner">
            <h3 className="font-display text-xs sm:text-sm font-bold uppercase text-[#55D6A5] tracking-wide">
              Misi Investigasi Ilmiah
            </h3>
            <p className="mt-1 leading-relaxed text-slate-300 text-xs sm:text-sm">
              Presentasi ini adalah media pembelajaran akademik yang memodelkan kejadian acak di kapal <strong className="text-white">The Skeld</strong> melalui 4 Distribusi Probabilitas:
            </p>
            <div className="mt-2.5 grid grid-cols-2 gap-2 font-display text-xs">
              <div className="rounded-lg border border-black/60 bg-[#1e2430] p-2 text-center text-slate-200">
                <span className="block text-[10px] text-[#35C9F4] uppercase font-bold">Diskrit</span>
                1. Binomial • 2. Poisson
              </div>
              <div className="rounded-lg border border-black/60 bg-[#1e2430] p-2 text-center text-slate-200">
                <span className="block text-[10px] text-[#8B5CF6] uppercase font-bold">Kontinu</span>
                3. Eksponensial • 4. Normal
              </div>
            </div>
          </div>

          {/* Keyboard & Controls Guide */}
          <div className="rounded-xl border-2 border-black bg-[#131722] p-3.5 shadow-inner">
            <h3 className="font-display text-xs sm:text-sm font-bold uppercase text-[#FFD166] tracking-wide">
              Kontrol Navigasi Keyboard
            </h3>
            <div className="mt-2 space-y-2">
              <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                <span className="font-display text-xs text-white">Slide Selanjutnya</span>
                <span className="rounded border border-black bg-[#283040] px-2 py-0.5 font-mono text-[11px] font-bold text-[#35C9F4] shadow-sm">
                  [ArrowRight →] atau [Space]
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                <span className="font-display text-xs text-white">Slide Sebelumnya</span>
                <span className="rounded border border-black bg-[#283040] px-2 py-0.5 font-mono text-[11px] font-bold text-[#35C9F4] shadow-sm">
                  [ArrowLeft ←]
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-1.5">
                <span className="font-display text-xs text-white">Layar Penuh (Fullscreen)</span>
                <span className="rounded border border-black bg-[#283040] px-2 py-0.5 font-mono text-[11px] font-bold text-[#55D6A5] shadow-sm">
                  [F]
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-display text-xs text-white">Tutup Jendela Modal</span>
                <span className="rounded border border-black bg-[#283040] px-2 py-0.5 font-mono text-[11px] font-bold text-slate-300 shadow-sm">
                  [Escape]
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto rounded-xl border-[3px] border-black bg-[#EA2212] px-6 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-white shadow-[0_4px_0_#000] hover:bg-[#ff3b2d] active:translate-y-1 active:shadow-none cursor-pointer transition-all"
          >
            SAYA MENGERTI / CLOSE
          </button>
        </div>
      </div>
    </div>
  )
}

