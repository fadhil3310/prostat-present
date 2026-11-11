/**
 * MISSION: PROBABILITY — An Among Us Statistical Investigation
 * Centralized Asset Mapping for Official Innersloth & Steam Assets
 *
 * To replace or customize an asset:
 * Simply overwrite the corresponding file in public/assets/among-us/
 * or update the relative path below.
 */

export const AMONG_US_ASSETS = {
  // Latar Belakang The Skeld & Deep Space (1080p Full HD)
  backgrounds: {
    deepSpace: '/assets/among-us/backgrounds/space-stars-background.jpg',
    dropshipLobby: '/assets/among-us/backgrounds/skeld-dropship-lobby.webp',
    cafeteria: '/assets/among-us/backgrounds/skeld-cafeteria-meeting-table.jpg',
    adminRoom: '/assets/among-us/backgrounds/skeld-admin-map-room.jpg',
    electricalRoom: '/assets/among-us/backgrounds/skeld-electrical-room.jpg',
    reactorRoom: '/assets/among-us/backgrounds/skeld-reactor-core-room.jpg',
    ejectionSequence: '/assets/among-us/backgrounds/space-ejection-sequence.png',
  },

  // Karakter Resmi Crewmate & Impostor (Transparent PNG / WebP)
  characters: {
    // Red Crewmate
    redStanding: '/assets/among-us/characters/crewmate-red-standing.png',
    redAlibi: '/assets/among-us/characters/crewmate-red-alibi.png',
    redTask: '/assets/among-us/characters/crewmate-red-task.png',

    // Yellow Crewmate
    yellowTablet: '/assets/among-us/characters/crewmate-yellow-tablet.png',

    // Purple Crewmate & Impostor
    impostorPurpleKill: '/assets/among-us/characters/impostor-purple-kill.png',
    purpleWires: '/assets/among-us/characters/crewmate-purple-wires.png',

    // Green Crewmate
    greenVent: '/assets/among-us/characters/crewmate-green-vent.png',

    // Blue Crewmate
    blueTablet: '/assets/among-us/characters/crewmate-blue-tablet.png',
    blueEmergency: '/assets/among-us/characters/crewmate-blue-emergency.png',
    blueSabotage: '/assets/among-us/characters/crewmate-blue-sabotage.png',
    blueDoors: '/assets/among-us/characters/crewmate-blue-doors.png',

    // White Crewmate
    whiteVoting: '/assets/among-us/characters/crewmate-white-voting.png',

    // High-Resolution Profiles & Groups
    impostorProfileHd: '/assets/among-us/characters/impostor-profile-hd.webp',
    crewmates15Lineup: '/assets/among-us/characters/crewmates-15-lineup.webp',
  },

  // Antarmuka Game Asli (Game UI)
  gameUi: {
    votingScreen: '/assets/among-us/game-ui/emergency-meeting-voting-screen.webp',
    cardSwipeTask: '/assets/among-us/game-ui/task-admin-card-swipe.webp',
    roleRevealShhh: '/assets/among-us/game-ui/role-reveal-shhh-screen.webp',
    guardianAngel: '/assets/among-us/game-ui/guardian-angel-protect.webp',
    impostorKillAction: '/assets/among-us/game-ui/impostor-kill-action.webp',
  },

  // Ikon Vektor SVG Resmi
  icons: {
    meetingMegaphone: '/assets/among-us/icons/emergency-meeting-megaphone.svg',
    impostorRedStar: '/assets/among-us/icons/impostor-red-star.svg',
    downloadArrow: '/assets/among-us/icons/innersloth-download-arrow.svg',
  },

  // Aset Promosi & Branding Resmi
  promotional: {
    officialLogo: '/assets/among-us/promotional/among-us-official-logo.png',
    crewmateBanner: '/assets/among-us/promotional/crewmate-objective-banner.png',
    impostorBanner: '/assets/among-us/promotional/impostor-objective-banner.png',
    spaceCrewArtwork: '/assets/among-us/promotional/among-us-space-crew-artwork.png',
  },
} as const

export type AmongUsAssets = typeof AMONG_US_ASSETS
