import { useEffect } from 'react'
import { AMONG_US_ASSETS } from '../../lib/amongUsAssets'
import CrewmateLineup, { type CrewmateStageMember } from './CrewmateLineup'

interface RoleRevealScreenProps {
  onContinue: () => void
  onBackToLobby: () => void
}

const ROLE_REVEAL_CREW: CrewmateStageMember[] = [
  {
    src: AMONG_US_ASSETS.characters.blueEmergency,
    alt: 'Ahmad — Lime Crewmate',
    name: 'Ahmad',
    heightClass: 'h-24 sm:h-32 md:h-36',
    zIndex: 20,
    delay: '240ms',
    flip: false,
  },
  {
    src: AMONG_US_ASSETS.characters.whiteVoting,
    alt: 'Fadhil — Cyan Crewmate',
    name: 'Fadhil',
    heightClass: 'h-28 sm:h-36 md:h-44',
    zIndex: 30,
    delay: '160ms',
    flip: false,
  },
  {
    src: AMONG_US_ASSETS.characters.redAlibi,
    alt: 'Radit — Yellow Crewmate',
    name: 'Radit',
    heightClass: 'h-28 sm:h-36 md:h-44',
    zIndex: 30,
    delay: '160ms',
    flip: true,
  },
  {
    src: AMONG_US_ASSETS.characters.impostorPurpleKill,
    alt: 'Wowo — Red Impostor',
    name: 'Wowo',
    isImpostor: true,
    heightClass: 'h-24 sm:h-32 md:h-36',
    zIndex: 20,
    delay: '240ms',
    flip: true,
  },
]

/** Layar Role Reveal bergaya Among Us ("CREWMATE — There is 1 Statistical Anomaly among us") */
export default function RoleRevealScreen({
  onContinue,
  onBackToLobby,
}: RoleRevealScreenProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ' || e.code === 'Space') {
        e.preventDefault()
        onContinue()
      } else if (e.key === 'Escape') {
        e.preventDefault()
        onBackToLobby()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onBackToLobby, onContinue])

  return (
    <div
      className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-between overflow-hidden bg-[#020409] select-none"
      role="region"
      aria-label="Crewmate Role Reveal Screen"
    >
      {/* Layer Luar Angkasa Halus (Masked agar tepi tetap gelap pekat) */}
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-18"
        style={{
          backgroundImage: `url(${AMONG_US_ASSETS.backgrounds.deepSpace})`,
          maskImage:
            'radial-gradient(ellipse at 50% 48%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 52%, transparent 82%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 50% 48%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 52%, transparent 82%)',
        }}
      />

      {/* Vignette Gelap Khas Role Reveal Among Us */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, transparent 15%, rgba(2, 4, 9, 0.78) 60%, #020409 100%)',
        }}
      />

      {/* Pita Cahaya Horizontal Cyan Crewmate yang Mekar dari Tengah */}
      <div
        className="victory-beam-expand pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[44vh] sm:h-[48vh]"
        style={{
          background:
            'linear-gradient(180deg, transparent 0%, rgba(18, 128, 186, 0.16) 24%, rgba(53, 201, 244, 0.25) 52%, rgba(18, 128, 186, 0.16) 76%, transparent 100%)',
        }}
      >
        <div
          className="victory-spotlight absolute inset-x-0 top-1/2 -translate-y-1/2 h-28 sm:h-36 blur-2xl"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(53, 201, 244, 0.38) 0%, rgba(56, 189, 248, 0.16) 48%, transparent 78%)',
          }}
        />
      </div>

      {/* Konten Utama: Animasi Reveal Terbuka dari Tengah Layar */}
      <div className="victory-center-reveal relative z-10 flex w-full flex-1 flex-col items-center justify-center px-4 pt-6 sm:pt-8">
        <div className="victory-title-pop flex flex-col items-center text-center">
          <h1
            className="font-display text-5xl sm:text-7xl md:text-[5.4rem] font-black uppercase tracking-widest leading-none"
            style={{
              color: '#35C9F4',
              textShadow:
                '0 5px 0 #000, 0 0 30px rgba(53, 201, 244, 0.45), -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000',
            }}
          >
            CREWMATE
          </h1>

          <p className="mt-3 font-body text-base sm:text-xl md:text-2xl font-semibold text-white tracking-wide drop-shadow-[0_3px_0_#000]">
            There is{' '}
            <span className="text-[#FF3B30] font-bold">1 Statistical Anomaly</span>{' '}
            among us
          </p>

          <p className="mt-1.5 font-body text-xs sm:text-sm text-slate-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
            Investigate 4 Probability Distributions across The Skeld.
          </p>
        </div>

        {/* 4 Karakter: Ahmad, Fadhil, Radit (Crewmate) & Wowo (Merah Impostor) */}
        <CrewmateLineup
          members={ROLE_REVEAL_CREW}
          containerGapClass="gap-5 sm:gap-9 md:gap-12"
          glowGradient="radial-gradient(ellipse at center, rgba(53, 201, 244, 0.46) 0%, rgba(56, 189, 248, 0.18) 55%, transparent 80%)"
        />
      </div>

      {/* Bottom Game Bar: Kembali ke Lobby & Masuk ke Task Presentasi */}
      <div className="victory-actions-reveal relative z-20 w-full max-w-5xl px-6 sm:px-10 pb-6 sm:pb-8 flex flex-wrap items-center justify-center sm:justify-between gap-4">
        <button
          type="button"
          onClick={onBackToLobby}
          className="group flex items-center justify-center gap-2.5 min-w-[160px] sm:min-w-[180px] rounded-2xl border-[3.5px] border-white/80 bg-[#0f1624]/85 px-6 py-3 font-display text-sm sm:text-base font-bold uppercase tracking-wider text-white shadow-[0_6px_0_rgba(0,0,0,0.85),0_10px_24px_rgba(0,0,0,0.65)] transition-all hover:bg-[#1a2438] hover:border-white active:translate-y-1 active:shadow-[0_2px_0_#000] cursor-pointer"
        >
          <span>◀ LOBBY</span>
        </button>

        <button
          type="button"
          onClick={onContinue}
          className="group flex items-center justify-center gap-2.5 min-w-[190px] sm:min-w-[220px] rounded-2xl border-[3.5px] border-black bg-[#EA2212] px-7 py-3 font-display text-sm sm:text-base font-black uppercase tracking-wider text-white shadow-[0_6px_0_#000,0_10px_28px_rgba(234,34,18,0.35)] transition-all hover:bg-[#ff3b2d] active:translate-y-1 active:shadow-[0_2px_0_#000] cursor-pointer"
          autoFocus
        >
          <span>START TASKS</span>
          <span>▶</span>
        </button>
      </div>
    </div>
  )
}
