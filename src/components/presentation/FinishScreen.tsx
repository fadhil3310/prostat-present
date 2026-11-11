import { AMONG_US_ASSETS } from '../../lib/amongUsAssets'
import CrewmateLineup from './CrewmateLineup'

interface FinishScreenProps {
  onPlayAgain: () => void
  onBackToMenu: () => void
}

const CONFETTI_PIECES = [
  { left: '8%', delay: '-0.9s', duration: '6.8s', color: '#44D934', width: 6, height: 11 },
  { left: '16%', delay: '-3.4s', duration: '7.6s', color: '#35C9F4', width: 5, height: 10 },
  { left: '24%', delay: '-2.1s', duration: '6.3s', color: '#FFD166', width: 7, height: 7 },
  { left: '33%', delay: '-4.8s', duration: '7.2s', color: '#FF6B6B', width: 6, height: 11 },
  { left: '44%', delay: '-1.6s', duration: '6.9s', color: '#FFFFFF', width: 5, height: 9 },
  { left: '56%', delay: '-5.2s', duration: '7.4s', color: '#44D934', width: 6, height: 11 },
  { left: '67%', delay: '-2.8s', duration: '6.5s', color: '#35C9F4', width: 6, height: 10 },
  { left: '76%', delay: '-4.1s', duration: '7.1s', color: '#FFD166', width: 5, height: 9 },
  { left: '85%', delay: '-1.3s', duration: '6.6s', color: '#A78BFA', width: 6, height: 11 },
  { left: '92%', delay: '-3.7s', duration: '7.0s', color: '#44D934', width: 5, height: 10 },
]

export default function FinishScreen({
  onPlayAgain,
  onBackToMenu,
}: FinishScreenProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-between overflow-hidden bg-[#020409] select-none"
      role="region"
      aria-label="Crewmates Win — Finish Screen"
    >
      {/* Layer Luar Angkasa Halus */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url(${AMONG_US_ASSETS.backgrounds.deepSpace})`,
          maskImage:
            'radial-gradient(ellipse at 50% 48%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.45) 55%, transparent 85%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 50% 48%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.45) 55%, transparent 85%)',
        }}
      />

      {/* Vignette Gelap Khas Layar Victory Game Asli */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 15%, rgba(2, 4, 9, 0.72) 62%, #020409 100%)',
        }}
      />

      {/* Pita Cahaya Horizontal Victory Khas Among Us yang Mekar dari Tengah */}
      <div
        className="victory-beam-expand pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[42vh] sm:h-[46vh]"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(16, 138, 178, 0.16) 24%, rgba(68, 217, 52, 0.24) 52%, rgba(20, 148, 184, 0.18) 76%, transparent 100%)',
        }}
      >
        <div
          className="victory-spotlight absolute inset-x-0 top-1/2 -translate-y-1/2 h-28 sm:h-36 blur-2xl"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(68, 217, 52, 0.42) 0%, rgba(53, 201, 244, 0.22) 48%, transparent 78%)',
          }}
        />
      </div>

      {/* Partikel Confetti Ringan */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {CONFETTI_PIECES.map((piece, idx) => (
          <span
            key={idx}
            className="victory-confetti absolute -top-6 rounded-sm"
            style={{
              left: piece.left,
              width: `${piece.width}px`,
              height: `${piece.height}px`,
              backgroundColor: piece.color,
              animationDelay: piece.delay,
              animationDuration: piece.duration,
              opacity: 0.7,
              boxShadow: `0 0 8px ${piece.color}55`,
            }}
          />
        ))}
      </div>

      {/* Konten Utama: Animasi Reveal Terbuka dari Tengah Layar */}
      <div className="victory-center-reveal relative z-10 flex w-full flex-1 flex-col items-center justify-center px-4 pt-6 sm:pt-8">
        <div className="victory-title-pop flex flex-col items-center text-center">
          <h1
            className="font-display text-5xl sm:text-7xl md:text-[5.2rem] font-black uppercase tracking-wider leading-none"
            style={{
              color: '#44D934',
              textShadow:
                '0 5px 0 #000, 0 0 28px rgba(68, 217, 52, 0.45), -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',
            }}
          >
            CREWMATES WIN!
          </h1>

          <p className="mt-2.5 font-display text-lg sm:text-2xl font-bold uppercase tracking-[0.24em] text-white drop-shadow-[0_3px_0_#000]">
            MISSION COMPLETED.
          </p>

          <p className="mt-1 font-body text-xs sm:text-sm text-[#7EE8C7] drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
            Statistical Investigation Successfully Completed.
          </p>
        </div>

        {/* 3 Crewmate Pemenang: Ahmad, Fadhil, dan Radit (tanpa Wowo) */}
        <CrewmateLineup glowGradient="radial-gradient(ellipse at center, rgba(68, 217, 52, 0.48) 0%, rgba(53, 201, 244, 0.2) 55%, transparent 80%)" />
      </div>

      {/* Bottom Game Bar: Posisi Kiri & Kanan Bawah Seperti Among Us Victory Screen */}
      <div className="victory-actions-reveal relative z-20 w-full max-w-5xl px-6 sm:px-10 pb-6 sm:pb-8 flex flex-wrap items-center justify-center sm:justify-between gap-4">
        <button
          type="button"
          onClick={onBackToMenu}
          className="group flex items-center justify-center gap-2.5 min-w-[170px] sm:min-w-[195px] rounded-2xl border-[3.5px] border-white/85 bg-[#0f1624]/85 px-6 py-3 font-display text-sm sm:text-base font-bold uppercase tracking-wider text-white shadow-[0_6px_0_rgba(0,0,0,0.85),0_10px_24px_rgba(0,0,0,0.65)] transition-all hover:bg-[#1a2438] hover:border-white active:translate-y-1 active:shadow-[0_2px_0_#000] cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            className="h-5 w-5 text-slate-300 transition-transform group-hover:-translate-x-0.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9"
            />
          </svg>
          <span>MAIN MENU</span>
        </button>

        <button
          type="button"
          onClick={onPlayAgain}
          className="group flex items-center justify-center gap-2.5 min-w-[175px] sm:min-w-[205px] rounded-2xl border-[3.5px] border-black bg-[#EA2212] px-7 py-3 font-display text-sm sm:text-base font-black uppercase tracking-wider text-white shadow-[0_6px_0_#000,0_10px_28px_rgba(234,34,18,0.35)] transition-all hover:bg-[#ff3b2d] active:translate-y-1 active:shadow-[0_2px_0_#000] cursor-pointer"
          autoFocus
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.75"
            className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-45"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 12a9 9 0 109-9 9.75 9.75 0 00-6.74 2.74L3 8"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v5h5" />
          </svg>
          <span>PLAY AGAIN</span>
        </button>
      </div>
    </div>
  )
}
