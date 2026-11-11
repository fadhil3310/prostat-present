import { useState, useEffect, useCallback } from 'react'

export interface PresentationSettings {
  /** Animasi transisi antar scene dan slide (false = instan) */
  smoothTransitions: boolean
  /** Gelapkan latar belakang ruang agar konten slide lebih kontras di proyektor */
  highContrastDimmer: boolean
  /** Aktifkan pintasan tombol Space dan angka 1-0 untuk navigasi slide */
  keyboardShortcuts: boolean
  /** Efek suara sintetis ringan untuk klik UI dan perpindahan slide */
  soundEffects: boolean
}

export const DEFAULT_PRESENTATION_SETTINGS: PresentationSettings = {
  smoothTransitions: true,
  highContrastDimmer: false,
  keyboardShortcuts: true,
  soundEffects: false,
}

const STORAGE_KEY = 'amongus-prostat-settings-v1'
const SETTINGS_EVENT = 'amongus-prostat-settings-change'

export type SfxKind = 'click' | 'slide' | 'toggle'

let sharedAudioCtx: AudioContext | null = null

/** Reads persisted settings safely on client without touching SSR */
export function readPresentationSettings(): PresentationSettings {
  if (typeof window === 'undefined') {
    return DEFAULT_PRESENTATION_SETTINGS
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_PRESENTATION_SETTINGS
    const parsed = JSON.parse(raw) as Partial<PresentationSettings>
    return {
      smoothTransitions:
        typeof parsed.smoothTransitions === 'boolean'
          ? parsed.smoothTransitions
          : DEFAULT_PRESENTATION_SETTINGS.smoothTransitions,
      highContrastDimmer:
        typeof parsed.highContrastDimmer === 'boolean'
          ? parsed.highContrastDimmer
          : DEFAULT_PRESENTATION_SETTINGS.highContrastDimmer,
      keyboardShortcuts:
        typeof parsed.keyboardShortcuts === 'boolean'
          ? parsed.keyboardShortcuts
          : DEFAULT_PRESENTATION_SETTINGS.keyboardShortcuts,
      soundEffects:
        typeof parsed.soundEffects === 'boolean'
          ? parsed.soundEffects
          : DEFAULT_PRESENTATION_SETTINGS.soundEffects,
    }
  } catch {
    return DEFAULT_PRESENTATION_SETTINGS
  }
}

/** Persists settings to localStorage and broadcasts updates across components */
export function writePresentationSettings(next: PresentationSettings): void {
  if (typeof window === 'undefined') return

  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  } catch {
    // Ignore storage quota or private browsing errors
  }

  window.dispatchEvent(new CustomEvent<PresentationSettings>(SETTINGS_EVENT, { detail: next }))
}

/** Plays a subtle synthesized Among Us style UI cue via Web Audio API */
export function playUiSfx(kind: SfxKind, force = false): void {
  if (typeof window === 'undefined') return
  if (!force && !readPresentationSettings().soundEffects) return

  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!AudioCtx) return

    if (!sharedAudioCtx) {
      sharedAudioCtx = new AudioCtx()
    }
    if (sharedAudioCtx.state === 'suspended') {
      void sharedAudioCtx.resume()
    }

    const now = sharedAudioCtx.currentTime
    const osc = sharedAudioCtx.createOscillator()
    const gain = sharedAudioCtx.createGain()

    if (kind === 'slide') {
      osc.type = 'sine'
      osc.frequency.setValueAtTime(520, now)
      osc.frequency.exponentialRampToValueAtTime(760, now + 0.065)
      gain.gain.setValueAtTime(0.045, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.085)
    } else if (kind === 'toggle') {
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(640, now)
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.055)
      gain.gain.setValueAtTime(0.04, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.075)
    } else {
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(440, now)
      osc.frequency.exponentialRampToValueAtTime(560, now + 0.045)
      gain.gain.setValueAtTime(0.035, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06)
    }

    osc.connect(gain)
    gain.connect(sharedAudioCtx.destination)
    osc.start(now)
    osc.stop(now + 0.09)
  } catch {
    // Ignore audio errors in locked or headless environments
  }
}

/** SSR-safe React hook to read and update presentation settings */
export function usePresentationSettings() {
  const [settings, setSettings] = useState<PresentationSettings>(DEFAULT_PRESENTATION_SETTINGS)

  useEffect(() => {
    setSettings(readPresentationSettings())

    const handleCustomChange = (e: Event) => {
      const customEvent = e as CustomEvent<PresentationSettings>
      setSettings(customEvent.detail ?? readPresentationSettings())
    }

    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setSettings(readPresentationSettings())
      }
    }

    window.addEventListener(SETTINGS_EVENT, handleCustomChange)
    window.addEventListener('storage', handleStorage)
    return () => {
      window.removeEventListener(SETTINGS_EVENT, handleCustomChange)
      window.removeEventListener('storage', handleStorage)
    }
  }, [])

  const updateSetting = useCallback(
    <K extends keyof PresentationSettings>(key: K, value: PresentationSettings[K]) => {
      const next: PresentationSettings = {
        ...readPresentationSettings(),
        [key]: value,
      }
      setSettings(next)
      writePresentationSettings(next)
    },
    []
  )

  const resetSettings = useCallback(() => {
    setSettings(DEFAULT_PRESENTATION_SETTINGS)
    writePresentationSettings(DEFAULT_PRESENTATION_SETTINGS)
  }, [])

  return { settings, updateSetting, resetSettings }
}

