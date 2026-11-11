import { Link } from '@tanstack/react-router'
import { AMONG_US_ASSETS } from '../lib/amongUsAssets'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-500/20 bg-[#0a0f24]/90 px-4 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-2 py-2.5 sm:py-3">
        {/* Left Branding: Official Logo + Title */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <img
              src={AMONG_US_ASSETS.promotional.officialLogo}
              alt="Among Us"
              className="h-7 w-auto object-contain transition-transform hover:scale-105 sm:h-9"
              width={120}
              height={33}
            />
            <div className="flex flex-col">
              <span className="font-display text-base font-bold tracking-wide text-white sm:text-lg">
                MISSION: <span className="text-[#35C9F4]">PROBABILITY</span>
              </span>
              <span className="font-body text-[10px] font-medium tracking-wider text-slate-400 uppercase sm:text-[11px]">
                An Among Us Statistical Investigation
              </span>
            </div>
          </Link>
        </div>

        {/* Center: Educational Presentation Badge */}
        <div className="hidden items-center gap-2 rounded-full border border-black/40 bg-[#10141e]/90 px-3 py-1 md:flex shadow-inner">
          <span className="font-display text-[11px] font-bold tracking-wider text-[#35C9F4] uppercase">
            ACADEMIC PRESENTATION
          </span>
        </div>

        {/* Right Navigation & Controls */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            activeProps={{ className: 'text-[#35C9F4] font-bold' }}
          >
            Slides
          </Link>
          <Link
            to="/about"
            className="rounded-lg px-2.5 py-1 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
            activeProps={{ className: 'text-[#35C9F4] font-bold' }}
          >
            About
          </Link>

          <div className="h-4 w-px bg-slate-700" />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
