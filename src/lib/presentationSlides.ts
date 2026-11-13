import { AMONG_US_ASSETS } from './amongUsAssets'

export type SlideLayoutType =
  | 'standard'
  | 'formula'
  | 'visualization'
  | 'comparison'
  | 'emergency-meeting'
  | 'conclusion'

export interface SlideMetadata {
  id: number // 1 to 10
  key: string
  title: string
  shortTitle: string
  subtitle: string
  roomName: string
  layoutType: SlideLayoutType
  accentColor: string
  backgroundAsset: string
  characterAsset?: string
  characterAlt?: string
  overlayOpacity?: number
  implementationStatus: 'ready' | 'in-progress' | 'placeholder'
}

export const PRESENTATION_SLIDES: SlideMetadata[] = [
  {
    id: 1,
    key: 'mission-start',
    title: '01. MISSION START',
    shortTitle: '01 START',
    subtitle: 'An Among Us Statistical Investigation',
    roomName: 'The Skeld Bridge / Orbit',
    layoutType: 'standard',
    accentColor: '#35C9F4', // Cyan
    backgroundAsset: AMONG_US_ASSETS.backgrounds.deepSpace,
    characterAsset: AMONG_US_ASSETS.characters.redStanding,
    characterAlt: 'Crewmate Red Standing at Navigation',
    implementationStatus: 'placeholder',
  },
  {
    id: 2,
    key: 'mission-briefing',
    title: '02. MISSION BRIEFING',
    shortTitle: '02 BRIEF',
    subtitle: 'Konsep Variabel Acak: Diskrit vs Kontinu',
    roomName: 'Dropship Briefing Hatch',
    layoutType: 'standard',
    accentColor: '#55D6A5', // Mint
    backgroundAsset: AMONG_US_ASSETS.backgrounds.electricalRoom,
    characterAsset: AMONG_US_ASSETS.characters.blueTablet,
    characterAlt: 'Crewmate Blue Reviewing Mission Data Tablet',
    implementationStatus: 'placeholder',
  },
  {
    id: 3,
    key: 'distribution-binomial',
    title: '03. DISTRIBUSI BINOMIAL',
    shortTitle: '03 BINO',
    subtitle: 'Pemodelan n Percobaan Bernoulli Independen',
    roomName: 'Cafeteria The Skeld',
    layoutType: 'formula',
    accentColor: '#FF6B6B', // Coral Red
    backgroundAsset: AMONG_US_ASSETS.backgrounds.amogus,
    characterAsset: AMONG_US_ASSETS.characters.redTask,
    characterAlt: 'Crewmate Red Executing Inspection Tasks',
    implementationStatus: 'ready',
  },
  {
    id: 4,
    key: 'distribution-poisson',
    title: '04. DISTRIBUSI POISSON',
    shortTitle: '04 POIS',
    subtitle: 'Pemodelan Frekuensi Kejadian dalam Interval Tertentu',
    roomName: 'Admin Navigation Room',
    layoutType: 'formula',
    accentColor: '#FFD166', // Yellow
    backgroundAsset: AMONG_US_ASSETS.backgrounds.ejectionSequence,
    characterAsset: AMONG_US_ASSETS.characters.yellowTablet,
    characterAlt: 'Crewmate Yellow Monitoring Signals',
    implementationStatus: 'ready',
  },
  {
    id: 5,
    key: 'distribution-exponential',
    title: '05. DISTRIBUSI EKSPONENSIAL',
    shortTitle: '05 EXPO',
    subtitle: 'Pemodelan Waktu Tunggu Antar-Kejadian',
    roomName: 'Electrical Room',
    layoutType: 'formula',
    accentColor: '#8B5CF6', // Purple
    backgroundAsset: AMONG_US_ASSETS.backgrounds.cafeteria,
    characterAsset: AMONG_US_ASSETS.characters.purpleWires,
    characterAlt: 'Crewmate Purple Repairing Wires',
    implementationStatus: 'ready',
  },
  {
    id: 6,
    key: 'distribution-normal',
    title: '06. DISTRIBUSI NORMAL',
    shortTitle: '06 NORM',
    subtitle: 'Pemodelan Distribusi Data dan Variasi Pengukuran',
    roomName: 'Reactor Room — The Skeld',
    layoutType: 'formula',
    accentColor: '#35C9F4', // Cyan
    backgroundAsset: AMONG_US_ASSETS.backgrounds.adminRoom,
    characterAsset: AMONG_US_ASSETS.characters.greenVent,
    characterAlt: 'Crewmate Green Calibrating Reactor Sensors',
    implementationStatus: 'ready',
  },
  {
    id: 7,
    key: 'z-score-investigation',
    title: '07. Z-SCORE & ANOMALY DETECTION',
    shortTitle: '07 Z-SCORE',
    subtitle: 'Standardisasi Data dan Identifikasi Nilai Ekstrem',
    roomName: 'Security Room — The Skeld',
    layoutType: 'visualization',
    accentColor: '#55D6A5', // Mint Security Scan
    backgroundAsset: AMONG_US_ASSETS.backgrounds.reactorRoom,
    characterAsset: AMONG_US_ASSETS.characters.redAlibi,
    characterAlt: 'Crewmate Red Cross-Referencing Crew Logs',
    implementationStatus: 'ready',
  },
  {
    id: 8,
    key: 'distribution-database',
    title: '08. DATA & STATISTICAL INVESTIGATION',
    shortTitle: '08 DATA',
    subtitle: 'Menghubungkan Data, Model Probabilitas, dan Interpretasi Hasil',
    roomName: 'Data Lab — The Skeld',
    layoutType: 'comparison',
    accentColor: '#35C9F4', // Data Lab Cyan
    backgroundAsset: AMONG_US_ASSETS.backgrounds.dropshipLobby,
    characterAsset: AMONG_US_ASSETS.characters.blueDoors,
    characterAlt: 'Crewmate Blue Accessing Data Records',
    implementationStatus: 'ready',
  },
  {
    id: 9,
    key: 'emergency-quiz',
    title: '09. EMERGENCY MEETING — STATISTICAL QUIZ',
    shortTitle: '09 QUIZ',
    subtitle: 'Test Your Probability Knowledge',
    roomName: 'Cafeteria — The Skeld',
    layoutType: 'emergency-meeting',
    accentColor: '#FF6B6B', // Coral Red
    backgroundAsset: AMONG_US_ASSETS.backgrounds.amogusGif,
    characterAsset: AMONG_US_ASSETS.characters.whiteVoting,
    characterAlt: 'Crewmate White Casting Vote',
    implementationStatus: 'ready',
  },
  {
    id: 10,
    key: 'investigation-conclusion',
    title: '10. KESIMPULAN INVESTIGASI',
    shortTitle: '10 KESIMPULAN',
    subtitle: 'Rangkuman Pembelajaran Distribusi Probabilitas',
    roomName: 'Command Bridge — The Skeld',
    layoutType: 'conclusion',
    accentColor: '#35C9F4', // Among Us Academic Cyan
    backgroundAsset: AMONG_US_ASSETS.backgrounds.electricalRoom,
    characterAsset: AMONG_US_ASSETS.characters.whiteVoting,
    characterAlt: 'Crewmate Cyan Presenting Research Conclusion',
    implementationStatus: 'ready',
  },
]
