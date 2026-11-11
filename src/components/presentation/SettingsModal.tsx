import { useEffect, useState, useCallback } from 'react'
import {
  DEFAULT_PRESENTATION_SETTINGS,
  playUiSfx,
  usePresentationSettings,
} from '../../lib/presentationSettings'

interface SettingsModalProps {
  isOpen: boolean
  onClose: () => void
}

interface SettingOptionRowProps {
  title: string
  description: string
  leftLabel: string
  rightLabel: string
  isRightActive: boolean
  onSelectLeft: () => void
  onSelectRight: () => void
}

function SettingOptionRow({
  title,
  description,
  leftLabel,
  rightLabel,
  isRightActive,
  onSelectLeft,
  onSelectRight,
}: SettingOptionRowProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 rounded-xl border-2 border-black bg-[#131722] px-3.5 py-3 shadow-inner">
      <div className="min-w-0">
        <p className="font-display text-xs sm:text-sm font-bold uppercase tracking-wide text-white">
          {title}
        </p>
        <p className="font-body text-[11px] sm:text-xs text-slate-400 leading-snug mt-0.5">
          {description}
        </p>
      </div>

      <div
        className="inline-flex shrink-0 self-start sm:self-center rounded-lg border-2 border-black bg-[#0b0e16] p-0.5 shadow-sm"
        role="group"
        aria-label={title}
      >
        <button
          type="button"
          onClick={onSelectLeft}
          aria-pressed={!isRightActive}
          className={`rounded-md px-3 py-1.5 font-display text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
            !isRightActive
              ? 'bg-white text-[#0b0e16] shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          {leftLabel}
        </button>
        <button
          type="button"
          onClick={onSelectRight}
          aria-pressed={isRightActive}
          className={`rounded-md px-3 py-1.5 font-display text-[11px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
            isRightActive
              ? 'bg-white text-[#0b0e16] shadow-sm'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          {rightLabel}
        </button>
      </div>
    </div>
  )
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
  const { settings, updateSetting, resetSettings } = usePresentationSettings()
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)

  useEffect(() => {
    if (typeof document === 'undefined') return
    const syncFullscreen = () => setIsFullscreen(Boolean(document.fullscreenElement))
    syncFullscreen()
    document.addEventListener('fullscreenchange', syncFullscreen)
    return () => document.removeEventListener('fullscreenchange', syncFullscreen)
  }, [isOpen])

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

  const handleSetFullscreen = useCallback((enable: boolean) => {
    if (typeof document === 'undefined') return
    playUiSfx('toggle')

    if (enable && !document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {})
    } else if (!enable && document.fullscreenElement) {
      document.exitFullscreen?.().catch(() => {})
    }
  }, [])

  if (!isOpen) return null

  const isDefault =
    settings.smoothTransitions === DEFAULT_PRESENTATION_SETTINGS.smoothTransitions &&
    settings.highContrastDimmer === DEFAULT_PRESENTATION_SETTINGS.highContrastDimmer &&
    settings.keyboardShortcuts === DEFAULT_PRESENTATION_SETTINGS.keyboardShortcuts &&
    settings.soundEffects === DEFAULT_PRESENTATION_SETTINGS.soundEffects

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm select-none"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Pengaturan Presentasi"
    >
      <div
        className="relative w-full max-w-xl rounded-2xl border-4 border-black bg-[#1e2430] p-5 sm:p-6 text-white shadow-[0_10px_0_#000,0_20px_40px_rgba(0,0,0,0.85)] max-h-[90vh] overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b-2 border-black/40 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-4 w-4 rounded-full bg-[#EA2212] shadow-[0_0_8px_rgba(234,34,18,0.8)]" />
            <h2 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
              SETTINGS
            </h2>
          </div>

          <button
            type="button"
            onClick={() => {
              playUiSfx('click')
              onClose()
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full border-[2.5px] border-black bg-[#EA2212] font-display text-lg font-black text-white shadow-[0_3px_0_#000] hover:bg-[#ff3b2d] active:translate-y-0.5 active:shadow-none cursor-pointer transition-all"
            aria-label="Tutup Jendela Settings"
          >
            ✕
          </button>
        </div>

        {/* Settings Controls */}
        <div className="mt-4 space-y-2.5">
          <SettingOptionRow
            title="Tampilan Layar"
            description="Aktifkan layar penuh agar lebih rapi saat presentasi [F]"
            leftLabel="WINDOWED"
            rightLabel="FULLSCREEN"
            isRightActive={isFullscreen}
            onSelectLeft={() => handleSetFullscreen(false)}
            onSelectRight={() => handleSetFullscreen(true)}
          />

          <SettingOptionRow
            title="Transisi Scene & Slide"
            description="Pilih animasi halus atau perpindahan instan antar halaman"
            leftLabel="INSTAN"
            rightLabel="SMOOTH"
            isRightActive={settings.smoothTransitions}
            onSelectLeft={() => {
              playUiSfx('toggle')
              updateSetting('smoothTransitions', false)
            }}
            onSelectRight={() => {
              playUiSfx('toggle')
              updateSetting('smoothTransitions', true)
            }}
          />

          <SettingOptionRow
            title="Kontras Latar Presentasi"
            description="Gelapkan background kapal agar teks lebih mudah dibaca di proyektor"
            leftLabel="STANDAR"
            rightLabel="GELAP"
            isRightActive={settings.highContrastDimmer}
            onSelectLeft={() => {
              playUiSfx('toggle')
              updateSetting('highContrastDimmer', false)
            }}
            onSelectRight={() => {
              playUiSfx('toggle')
              updateSetting('highContrastDimmer', true)
            }}
          />

          <SettingOptionRow
            title="Pintasan Spasi & Angka [1–0]"
            description="Pindah slide cepat dengan tombol Spacebar dan angka"
            leftLabel="OFF"
            rightLabel="ON"
            isRightActive={settings.keyboardShortcuts}
            onSelectLeft={() => {
              playUiSfx('toggle')
              updateSetting('keyboardShortcuts', false)
            }}
            onSelectRight={() => {
              playUiSfx('toggle')
              updateSetting('keyboardShortcuts', true)
            }}
          />

          <SettingOptionRow
            title="Efek Suara UI (SFX)"
            description="Bunyi klik ringan saat menekan tombol dan berpindah slide"
            leftLabel="OFF"
            rightLabel="ON"
            isRightActive={settings.soundEffects}
            onSelectLeft={() => updateSetting('soundEffects', false)}
            onSelectRight={() => {
              updateSetting('soundEffects', true)
              playUiSfx('toggle', true)
            }}
          />
        </div>

        {/* Footer Actions */}
        <div className="mt-5 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-2.5 border-t-2 border-black/40 pt-4">
          <button
            type="button"
            onClick={() => {
              playUiSfx('click')
              resetSettings()
            }}
            disabled={isDefault}
            className="w-full sm:w-auto rounded-xl border-[3px] border-black bg-[#131722] px-4 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-slate-300 shadow-[0_4px_0_#000] hover:bg-[#283142] hover:text-white active:translate-y-1 active:shadow-none disabled:opacity-45 disabled:cursor-not-allowed cursor-pointer transition-all"
          >
            RESET DEFAULT
          </button>

          <button
            type="button"
            onClick={() => {
              playUiSfx('click')
              onClose()
            }}
            className="w-full sm:w-auto rounded-xl border-[3px] border-black bg-[#EA2212] px-6 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-white shadow-[0_4px_0_#000] hover:bg-[#ff3b2d] active:translate-y-1 active:shadow-none cursor-pointer transition-all"
          >
            TUTUP / CLOSE
          </button>
        </div>

        <p className="mt-3 text-center text-[10px] text-slate-500">
          Among Us &copy; Innersloth LLC • Academic Non-Commercial Presentation
        </p>
      </div>
    </div>
  )
}

