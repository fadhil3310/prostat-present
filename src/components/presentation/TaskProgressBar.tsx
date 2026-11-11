interface TaskProgressBarProps {
  currentSlideId: number
  totalSlides: number
}

export default function TaskProgressBar({
  currentSlideId,
  totalSlides,
}: TaskProgressBarProps) {
  const percentage = Math.round((currentSlideId / totalSlides) * 100)
  const formattedCurrent = currentSlideId < 10 ? `0${currentSlideId}` : `${currentSlideId}`
  const formattedTotal = totalSlides < 10 ? `0${totalSlides}` : `${totalSlides}`

  return (
    <div className="flex min-w-0 items-center gap-2 sm:gap-3 select-none">
      {/* Authentic Among Us Task Progress Capsule */}
      <div
        className="relative h-5 sm:h-6 w-20 sm:w-52 md:w-64 shrink-0 overflow-hidden rounded-full border-[3px] border-black bg-[#10141e] p-0.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_2px_6px_rgba(0,0,0,0.5)]"
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progress Task Presentasi"
      >
        <div
          className="h-full rounded-full bg-[#44D934] transition-all duration-500 ease-out shadow-[0_0_8px_rgba(68,217,52,0.6)]"
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Clean Text Label */}
      <span className="font-display text-[11px] sm:text-sm font-bold text-white tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] whitespace-nowrap">
        <span className="hidden sm:inline">TASK </span>PROGRESS — <span className="text-[#44D934]">{formattedCurrent}</span>/{formattedTotal}
      </span>
    </div>
  )
}

