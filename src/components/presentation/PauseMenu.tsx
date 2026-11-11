import { useEffect } from 'react'

interface PauseMenuProps {
  isOpen: boolean
  onResume: () => void
  onBackToLobby: () => void
  onBackToMenu: () => void
}

export default function PauseMenu({
  isOpen,
  onResume,
  onBackToLobby,
  onBackToMenu,
}: PauseMenuProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onResume()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onResume])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm select-none"
      onClick={onResume}
      role="dialog"
      aria-modal="true"
      aria-label="Menu Jeda Presentasi"
    >
      <div
        className="relative w-full max-w-sm rounded-2xl border-4 border-black bg-[#1e2430] p-6 text-white shadow-[0_10px_0_#000,0_20px_40px_rgba(0,0,0,0.9)] flex flex-col items-center text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Indicator */}
        <div className="flex items-center gap-2 mb-2">
          <span className="h-3 w-3 rounded-full bg-[#FFD166] animate-pulse" />
          <span className="font-display text-xs font-bold uppercase tracking-widest text-[#FFD166]">
            INVESTIGATION PAUSED
          </span>
        </div>

        <h2 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-wider text-white">
          PAUSE MENU
        </h2>
        <p className="mt-1 font-body text-xs text-slate-300">
          Misi dijeda sementara. Pilih tindakan untuk melanjutkan:
        </p>

        {/* Action Button Stack */}
        <div className="mt-6 flex w-full flex-col gap-3">
          {/* 1. RESUME (Primary Action) */}
          <button
            type="button"
            onClick={onResume}
            className="w-full rounded-xl border-4 border-black bg-[#EA2212] py-3 font-display text-base font-black uppercase tracking-wider text-white shadow-[0_5px_0_#000] hover:bg-[#ff3b2d] active:translate-y-1 active:shadow-none cursor-pointer transition-all"
            autoFocus
          >
            RESUME MISSION
          </button>

          {/* 2. RETURN TO MISSION LOBBY */}
          <button
            type="button"
            onClick={onBackToLobby}
            className="w-full rounded-xl border-4 border-black bg-[#131722] py-2.5 font-display text-sm font-bold uppercase tracking-wider text-[#35C9F4] shadow-[0_4px_0_#000] hover:bg-[#1a2130] active:translate-y-1 active:shadow-none cursor-pointer transition-all"
          >
            RETURN TO LOBBY
          </button>

          {/* 3. RETURN TO MAIN MENU */}
          <button
            type="button"
            onClick={onBackToMenu}
            className="w-full rounded-xl border-4 border-black bg-[#131722] py-2.5 font-display text-sm font-bold uppercase tracking-wider text-slate-300 shadow-[0_4px_0_#000] hover:bg-[#1a2130] active:translate-y-1 active:shadow-none cursor-pointer transition-all"
          >
            MAIN MENU
          </button>
        </div>

        <p className="mt-4 font-mono text-[10px] text-slate-400">
          Tekan [ESC] untuk kembali melanjutkan presentasi
        </p>
      </div>
    </div>
  )
}

