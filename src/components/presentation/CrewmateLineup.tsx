import { AMONG_US_ASSETS } from '../../lib/amongUsAssets'
import AssetSlot from './AssetSlot'

export interface CrewmateStageMember {
  src: string
  alt: string
  heightClass: string
  zIndex: number
  delay: string
  flip?: boolean
  offsetClass?: string
  name?: string
  isImpostor?: boolean
}

// Formasi 3 Crewmate anggota kelompok pemenang untuk Victory / Finish Screen (tanpa Wowo)
export const VICTORY_TEAM_CREWMATES: CrewmateStageMember[] = [
  {
    src: AMONG_US_ASSETS.characters.blueEmergency,
    alt: 'Ahmad — Lime Crewmate',
    name: 'Ahmad',
    heightClass: 'h-28 sm:h-36 md:h-40',
    zIndex: 20,
    delay: '260ms',
    flip: false,
  },
  {
    src: AMONG_US_ASSETS.characters.whiteVoting,
    alt: 'Fadhil — Cyan Crewmate',
    name: 'Fadhil',
    heightClass: 'h-32 sm:h-40 md:h-48',
    zIndex: 30,
    delay: '160ms',
    flip: false,
  },
  {
    src: AMONG_US_ASSETS.characters.redAlibi,
    alt: 'Radit — Yellow Crewmate',
    name: 'Radit',
    heightClass: 'h-28 sm:h-36 md:h-40',
    zIndex: 20,
    delay: '260ms',
    flip: true,
  },
]

interface CrewmateLineupProps {
  glowGradient: string
  members?: CrewmateStageMember[]
  containerGapClass?: string
}

/** Formasi karakter resmi bergaya layar pembuka & kemenangan Among Us */
export default function CrewmateLineup({
  glowGradient,
  members = VICTORY_TEAM_CREWMATES,
  containerGapClass = 'gap-6 sm:gap-10 md:gap-14',
}: CrewmateLineupProps) {
  return (
    <div className="relative mt-6 sm:mt-8 flex flex-col items-center justify-end w-full max-w-4xl">
      <div
        className="pointer-events-none absolute bottom-1 h-8 sm:h-10 w-[85%] max-w-2xl rounded-full blur-lg"
        style={{ background: glowGradient }}
      />

      <div className={`relative z-10 flex items-end justify-center px-2 ${containerGapClass}`}>
        {members.map((crew) => (
          <div
            key={crew.name || crew.alt}
            className={`victory-crew-emerge flex flex-col items-center ${crew.offsetClass || ''}`}
            style={{
              zIndex: crew.zIndex,
              animationDelay: crew.delay,
            }}
          >
            {crew.name && (
              <span
                className={`mb-2 font-display text-sm sm:text-base md:text-lg font-bold tracking-wide whitespace-nowrap ${
                  crew.isImpostor ? 'text-[#FF3B30]' : 'text-white'
                }`}
                style={{
                  textShadow: crew.isImpostor
                    ? '0 2px 0 #000, 0 0 12px rgba(255,59,48,0.55), -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'
                    : '0 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
                }}
              >
                {crew.name}
              </span>
            )}
            <AssetSlot
              src={crew.src}
              alt={crew.alt}
              className={`${crew.heightClass} w-auto object-contain ${
                crew.flip ? '-scale-x-100' : ''
              } ${
                crew.isImpostor
                  ? 'drop-shadow-[0_12px_20px_rgba(255,59,48,0.35)]'
                  : 'drop-shadow-[0_12px_18px_rgba(0,0,0,0.92)]'
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
