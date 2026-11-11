import { usePresentationSettings } from '../../lib/presentationSettings'

interface PresentationControlsProps {
  currentSlideId: number
  totalSlides: number
  onPrev: () => void
  onNext: () => void
}

export default function PresentationControls({
  currentSlideId,
  totalSlides,
  onPrev,
  onNext,
}: PresentationControlsProps) {
  const { settings } = usePresentationSettings()
  const isFirstSlide = currentSlideId <= 1
  const isLastSlide = currentSlideId >= totalSlides

  return (
    <div className="flex w-full max-w-5xl items-center justify-between gap-3 px-2 select-none">
      {/* Previous Button */}
      <button
        type="button"
        onClick={onPrev}
        disabled={isFirstSlide}
        className={`flex items-center gap-2 rounded-xl border-[3.5px] border-black px-4 py-2 sm:px-6 sm:py-2.5 font-display text-xs sm:text-sm font-black uppercase tracking-wider transition-all ${
          isFirstSlide
            ? 'cursor-not-allowed bg-[#222834] text-slate-500 opacity-60 shadow-none'
            : 'cursor-pointer bg-[#1e2430] text-white shadow-[0_4px_0_#000] hover:bg-[#2c3444] active:translate-y-1 active:shadow-none'
        }`}
        aria-label="Kembali ke slide sebelumnya"
      >
        <span>◀</span>
        <span className="hidden sm:inline">PREV TASK</span>
        <span className="sm:hidden">PREV</span>
      </button>

      {/* Middle Hint */}
      <div className="hidden sm:flex flex-col items-center text-center">
        <span className="font-display text-xs font-bold text-slate-300 drop-shadow">
          SLIDE {currentSlideId < 10 ? `0${currentSlideId}` : currentSlideId} / {totalSlides}
        </span>
        <span className="font-mono text-[10px] text-slate-400">
          {settings.keyboardShortcuts
            ? 'Gunakan [← / →] atau [Space] untuk berpindah slide'
            : 'Gunakan [← / →] untuk berpindah slide'}
        </span>
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={onNext}
        className="flex items-center gap-2 rounded-xl border-[3.5px] border-black bg-[#EA2212] px-5 py-2 sm:px-7 sm:py-2.5 font-display text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-[0_4px_0_#000] hover:bg-[#ff3b2d] active:translate-y-1 active:shadow-none cursor-pointer transition-all"
        aria-label={isLastSlide ? 'Selesaikan investigasi' : 'Lanjut ke slide berikutnya'}
      >
        <span>{isLastSlide ? 'FINISH' : 'NEXT TASK'}</span>
        <span>▶</span>
      </button>
    </div>
  )
}

