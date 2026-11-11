export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-cyan-500/15 bg-[#070b14] px-4 py-8 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-slate-200">
            MISSION: PROBABILITY — An Among Us Statistical Investigation
          </p>
          <p className="mt-0.5 text-xs text-slate-500">
            Media Presentasi Akademik • Mata Kuliah Probabilitas dan Statistika &copy; {currentYear}
          </p>
        </div>

        <div className="max-w-md text-center sm:text-right">
          <p className="text-[11px] leading-relaxed text-slate-500">
            Among Us is a registered trademark of{' '}
            <a
              href="https://www.innersloth.com/"
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400 underline-offset-2 hover:underline"
            >
              Innersloth LLC
            </a>
            . Visual assets used under Innersloth Educational &amp; Fan Creation Policy.
          </p>
        </div>
      </div>
    </footer>
  )
}
