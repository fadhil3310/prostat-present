import { useState } from 'react'

interface AssetSlotProps {
  src?: string
  alt: string
  className?: string
  fallbackLabel?: string
  width?: number | string
  height?: number | string
}

export default function AssetSlot({
  src,
  alt,
  className = '',
  fallbackLabel,
  width,
  height,
}: AssetSlotProps) {
  const [hasError, setHasError] = useState(!src)

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center rounded-xl border border-cyan-500/30 bg-slate-900/80 p-3 text-center backdrop-blur-sm ${className}`}
        style={{ width, height }}
        role="img"
        aria-label={alt}
      >
        <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
        </div>
        <span className="font-mono text-[10px] font-semibold tracking-wider text-cyan-400 uppercase">
          {fallbackLabel || `[ASSET NEEDED: ${alt.toUpperCase()}]`}
        </span>
        <span className="mt-0.5 text-[10px] text-slate-400">
          Pending user asset
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onError={() => setHasError(true)}
      loading="lazy"
      decoding="async"
    />
  )
}

