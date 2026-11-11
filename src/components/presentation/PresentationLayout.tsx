import { useState } from 'react'
import type { SlideMetadata } from '../../lib/presentationSlides'
import { AMONG_US_ASSETS } from '../../lib/amongUsAssets'
import AssetSlot from './AssetSlot'

interface PresentationLayoutProps {
  slide: SlideMetadata
  onReplay?: () => void
  onBackToMenu?: () => void
}

export default function PresentationLayout({
  slide,
}: PresentationLayoutProps) {
  // Slide 03: Distribusi Binomial (Materi Akademik Penuh & Studi Kasus Interaktif)
  if (slide.id === 3 || slide.key === 'distribution-binomial') {
    return <BinomialTaskLayout slide={slide} />
  }

  // Slide 04: Distribusi Poisson (Full Width Task Interface)
  if (slide.id === 4 || slide.key === 'distribution-poisson') {
    return <PoissonTaskLayout slide={slide} />
  }

  // Slide 05: Distribusi Eksponensial (Full Width Task Interface)
  if (slide.id === 5 || slide.key === 'distribution-exponential') {
    return <ExponentialTaskLayout slide={slide} />
  }

  // Slide 06: Distribusi Normal (Full Width Scrollable Bell Curve Interface)
  if (slide.id === 6 || slide.key === 'distribution-normal') {
    return <NormalTaskLayout slide={slide} />
  }

  // Slide 07: Z-Score & Anomaly Detection (Security Scan Room Interface)
  if (slide.id === 7 || slide.key === 'z-score-investigation') {
    return <ZScoreSecurityLayout slide={slide} />
  }

  // Slide 08: Data & Statistical Investigation (Data Lab / Investigation Board)
  if (slide.id === 8 || slide.key === 'distribution-database') {
    return <DataLabLayout slide={slide} />
  }

  switch (slide.layoutType) {
    case 'formula':
      return <FormulaTaskLayout slide={slide} />
    case 'visualization':
      return <VisualizationTaskLayout slide={slide} />
    case 'comparison':
      return <ComparisonTaskLayout slide={slide} />
    case 'emergency-meeting':
      return <EmergencyMeetingLayout slide={slide} />
    case 'conclusion':
      return <ConclusionLayout slide={slide} />
    case 'standard':
    default:
      return <StandardTaskLayout slide={slide} />
  }
}

/** LAYOUT A: STANDARD TASK (Teori & Konsep Dasar) */
function StandardTaskLayout({ slide }: { slide: SlideMetadata }) {
  const isCover = slide.id === 1

  if (isCover) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-2 text-center select-none">
        <div className="flex flex-col items-center max-w-2xl">
          <AssetSlot
            src={AMONG_US_ASSETS.promotional.officialLogo}
            alt="Among Us"
            className="h-16 sm:h-20 w-auto object-contain mb-3 drop-shadow-[0_8px_16px_rgba(0,0,0,0.8)]"
          />

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wider text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.95)]">
            MISSION: <span className="text-[#35C9F4]">PROBABILITY</span>
          </h2>
          <p className="mt-1 font-body text-xs sm:text-sm font-medium text-[#55D6A5]">
            An Among Us Statistical Investigation • The Skeld Expedition
          </p>

          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 w-full font-display text-[11px] font-bold">
            <div className="rounded-lg border-2 border-black/80 bg-[#141824] p-2 text-[#FF6B6B]">
              1. BINOMIAL
            </div>
            <div className="rounded-lg border-2 border-black/80 bg-[#141824] p-2 text-[#FFD166]">
              2. POISSON
            </div>
            <div className="rounded-lg border-2 border-black/80 bg-[#141824] p-2 text-[#8B5CF6]">
              3. EKSPONENSIAL
            </div>
            <div className="rounded-lg border-2 border-black/80 bg-[#141824] p-2 text-[#35C9F4]">
              4. NORMAL
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Slide 02: Briefing Klasifikasi Diskrit vs Kontinu
  return (
    <div className="h-full w-full min-h-0 overflow-y-auto custom-scrollbar pr-1 select-none text-slate-200">
      <div className="min-h-full w-full grid grid-cols-1 md:grid-cols-12 gap-3.5 items-stretch p-1">
        {/* Kolom Kiri: Klasifikasi Diskrit */}
        <div
          className="md:col-span-6 flex flex-col justify-between gap-3 rounded-xl border-2 border-black/80 bg-[#141824] p-4 shadow-inner"
          style={{ borderTopWidth: '3px', borderTopColor: '#35C9F4' }}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#35C9F4]" />
              <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wider text-white">
                Variabel Acak Diskrit
              </h3>
            </div>

            <p className="font-body text-sm text-slate-200 leading-relaxed">
              Mengukur data hasil pencacahan berupa nilai terpisah (bilangan bulat seperti 0, 1, 2, ...), dengan peluang dihitung langsung untuk setiap nilai.
            </p>

            {/* Ilustrasi Visual Batang Terpisah (Diskrit) */}
            <div className="rounded-lg border border-white/10 bg-[#0b0f18] px-3 py-2.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                <span>Bentuk Distribusi: Nilai Terpisah</span>
                <span className="text-[#35C9F4]">k ∈ &#123;0, 1, 2, 3, ...&#125;</span>
              </div>
              <svg viewBox="0 0 260 66" className="w-full h-16" aria-hidden="true">
                <line x1="16" y1="54" x2="244" y2="54" stroke="#334155" strokeWidth="1.5" />
                {[
                  { x: 46, h: 20 },
                  { x: 90, h: 38 },
                  { x: 134, h: 46 },
                  { x: 178, h: 28 },
                  { x: 222, h: 12 },
                ].map((bar, i) => (
                  <g key={i}>
                    <line
                      x1={bar.x}
                      y1="54"
                      x2={bar.x}
                      y2={54 - bar.h}
                      stroke="#35C9F4"
                      strokeWidth="6"
                      strokeLinecap="round"
                      opacity="0.85"
                    />
                    <circle cx={bar.x} cy={54 - bar.h} r="4.5" fill="#FFFFFF" stroke="#35C9F4" strokeWidth="2" />
                    <text x={bar.x} y="64" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">
                      {i}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Contoh & Model di Presentasi */}
            <div className="rounded-lg border border-black/60 bg-[#0d1017] p-3 space-y-2">
              <div className="text-xs font-body text-slate-300">
                <strong className="text-white">Contoh:</strong> Jumlah modul rusak, jumlah laporan anomali per 10 menit.
              </div>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs pt-1 border-t border-white/10">
                <div className="rounded bg-[#141824] px-2.5 py-1.5 text-[#FF6B6B]">
                  • Binomial <span className="text-slate-400 block text-[11px]">Trial Mandiri</span>
                </div>
                <div className="rounded bg-[#141824] px-2.5 py-1.5 text-[#FFD166]">
                  • Poisson <span className="text-slate-400 block text-[11px]">Frekuensi Interval</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-300">
            <span>Σ P(X = x) = 1</span>
            <span className="text-[#35C9F4]">Peluang di titik tepat</span>
          </div>
        </div>

        {/* Kolom Kanan: Klasifikasi Kontinu */}
        <div
          className="md:col-span-6 flex flex-col justify-between gap-3 rounded-xl border-2 border-black/80 bg-[#141824] p-4 shadow-inner"
          style={{ borderTopWidth: '3px', borderTopColor: '#A78BFA' }}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#A78BFA]" />
              <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wider text-white">
                Variabel Acak Kontinu
              </h3>
            </div>

            <p className="font-body text-sm text-slate-200 leading-relaxed">
              Mengukur besaran dalam rentang nilai berkesinambungan (dapat berupa pecahan seperti waktu atau suhu), dengan peluang dihitung pada suatu rentang nilai.
            </p>

            {/* Ilustrasi Visual Kurva Halus + Area Interval (Kontinu) */}
            <div className="rounded-lg border border-white/10 bg-[#0b0f18] px-3 py-2.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                <span>Bentuk Distribusi: Kurva Kontinu</span>
                <span className="text-[#A78BFA]">x ∈ [a, b]</span>
              </div>
              <svg viewBox="0 0 260 66" className="w-full h-16" aria-hidden="true">
                <path
                  d="M 88 54 L 88 30 C 106 11, 118 10, 130 10 C 142 10, 154 11, 172 30 L 172 54 Z"
                  fill="rgba(167, 139, 250, 0.28)"
                />
                <path
                  d="M 18 53 C 52 52, 74 44, 92 26 C 108 11, 119 10, 130 10 C 141 10, 152 11, 168 26 C 186 44, 208 52, 242 53"
                  fill="none"
                  stroke="#A78BFA"
                  strokeWidth="2.8"
                  strokeLinecap="round"
                />
                <line x1="16" y1="54" x2="244" y2="54" stroke="#334155" strokeWidth="1.5" />
                <line x1="88" y1="30" x2="88" y2="54" stroke="#A78BFA" strokeDasharray="3 2" strokeWidth="1.2" />
                <line x1="172" y1="30" x2="172" y2="54" stroke="#A78BFA" strokeDasharray="3 2" strokeWidth="1.2" />
                <text x="88" y="64" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">a</text>
                <text x="130" y="42" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontFamily="monospace">Luas = P</text>
                <text x="172" y="64" textAnchor="middle" fill="#94a3b8" fontSize="9" fontFamily="monospace">b</text>
              </svg>
            </div>

            {/* Contoh & Model di Presentasi */}
            <div className="rounded-lg border border-black/60 bg-[#0d1017] p-3 space-y-2">
              <div className="text-xs font-body text-slate-300">
                <strong className="text-white">Contoh:</strong> Waktu tunggu antar-kejadian, suhu sensor reaktor.
              </div>
              <div className="grid grid-cols-2 gap-2 font-mono text-xs pt-1 border-t border-white/10">
                <div className="rounded bg-[#141824] px-2.5 py-1.5 text-[#A78BFA]">
                  • Eksponensial <span className="text-slate-400 block text-[11px]">Waktu Tunggu</span>
                </div>
                <div className="rounded bg-[#141824] px-2.5 py-1.5 text-[#35C9F4]">
                  • Normal <span className="text-slate-400 block text-[11px]">Pengukuran</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-300">
            <span>∫ f(x) dx = 1</span>
            <span className="text-[#A78BFA]">Peluang pada interval P(a ≤ X ≤ b)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/** LAYOUT KHUSUS SLIDE 03: DISTRIBUSI BINOMIAL (Full Width Scrollable Interface) */
function BinomialTaskLayout({ slide }: { slide: SlideMetadata }) {
  const [hoveredX, setHoveredX] = useState<number | null>(null)

  // Distribusi probabilitas Binomial untuk n = 10, p = 0.05, q = 0.95 (x = 0 s/d 10)
  const binomialData = [
    { x: 0, p: 0.598737, pct: '59,87%' },
    { x: 1, p: 0.315125, pct: '31,51%' },
    { x: 2, p: 0.074635, pct: '7,46%', isTarget: true },
    { x: 3, p: 0.010475, pct: '1,05%' },
    { x: 4, p: 0.000965, pct: '0,10%' },
    { x: 5, p: 0.000061, pct: '0,01%' },
    { x: 6, p: 0.000003, pct: '<0,01%' },
    { x: 7, p: 0.000000, pct: '0,00%' },
    { x: 8, p: 0.000000, pct: '0,00%' },
    { x: 9, p: 0.000000, pct: '0,00%' },
    { x: 10, p: 0.000000, pct: '0,00%' },
  ]

  return (
    <div className="h-full w-full min-h-0 overflow-y-auto custom-scrollbar pr-2 select-none text-slate-200">
      {/* Panel Utama Full-Width (Scrollable untuk kenyamanan baca presentasi) */}
      <div className="w-full rounded-xl border-2 border-black/80 bg-[#0d121c] p-4 sm:p-5 shadow-inner space-y-6">

        {/* 1. PENGERTIAN & KARAKTERISTIK */}
        <section className="space-y-3.5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              01. Pengertian &amp; Karakteristik
            </h3>
          </div>

          <p className="font-body text-sm sm:text-[15px] text-slate-100 leading-relaxed">
            <strong className="text-[#FF6B6B] font-semibold">Distribusi Binomial</strong> memodelkan peluang munculnya sejumlah keberhasilan (<span className="font-mono text-white font-semibold">x</span>) dari <span className="font-mono text-white font-semibold">n</span> percobaan Bernoulli yang saling independen, dengan dua kemungkinan hasil di tiap percobaan: <strong>Sukses</strong> atau <strong>Gagal</strong>.
          </p>

          {/* 4 Karakteristik dalam Grid 2x2 agar lebar dan mudah dibaca */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                1. Jumlah Percobaan Tetap (n)
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Banyaknya total percobaan (<span className="font-mono text-slate-100">n</span>) ditentukan sejak awal sebelum eksperimen dilakukan.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                2. Dua Kemungkinan Hasil
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Setiap percobaan bersifat dikotomi, yaitu hanya berakhir sebagai kondisi Sukses atau Gagal.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                3. Peluang Sukses Konstan (p)
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Peluang sukses (<span className="font-mono text-slate-100">p</span>) sama di tiap percobaan, dengan peluang gagal <span className="font-mono text-slate-100">q = 1 - p</span>.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                4. Percobaan Saling Independen
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Hasil pada satu percobaan tidak memengaruhi peluang hasil pada percobaan lainnya.
              </p>
            </div>
          </div>
        </section>

        {/* 2. FUNGSI MASSA PELUANG & PARAMETER STATISTIK */}
        <section className="space-y-3.5 border-t border-white/10 pt-5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              02. Fungsi Massa Peluang (PMF) &amp; Parameter
            </h3>
          </div>

          {/* Kartu Formula Utama */}
          <div className="rounded-xl border border-white/15 bg-[#080c14] p-4 sm:p-5 space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 py-2">
              {/* Rumus Utama PMF */}
              <div className="font-mono text-xl sm:text-2xl font-bold text-white text-center">
                P(X = x) = <span className="text-[#FF6B6B]">C(n, x)</span> · p<sup>x</sup> · q<sup>n - x</sup>
              </div>

              <span className="hidden md:inline-block h-10 w-px bg-white/15" />

              {/* Rumus Kombinasi Berbentuk Pecahan */}
              <div className="flex items-center gap-2.5 font-mono text-base sm:text-lg text-slate-200">
                <span>C(n, x) =</span>
                <div className="inline-flex flex-col items-center leading-tight">
                  <span className="px-2 pb-0.5 text-white">n!</span>
                  <span className="w-full h-[1.5px] bg-slate-400" />
                  <span className="px-2 pt-0.5 text-slate-300">x! · (n - x)!</span>
                </div>
              </div>
            </div>

            {/* Keterangan Simbol Konsisten (n, x, p, q) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 border-t border-white/10 pt-3.5 font-body text-[13px] sm:text-sm text-slate-300">
              <div>
                <span className="font-mono font-bold text-white mr-2">n</span>
                Jumlah total percobaan (10 modul)
              </div>
              <div>
                <span className="font-mono font-bold text-[#FF6B6B] mr-2">x</span>
                Jumlah kejadian sukses target (2 modul rusak)
              </div>
              <div>
                <span className="font-mono font-bold text-white mr-2">p</span>
                Peluang sukses tiap percobaan (<span className="font-mono">0,05</span>)
              </div>
              <div>
                <span className="font-mono font-bold text-white mr-2">q</span>
                Peluang gagal tiap percobaan (<span className="font-mono">1 - p = 0,95</span>)
              </div>
            </div>
          </div>

          {/* Parameter Statistik: Mean, Varians, Standar Deviasi */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <span className="font-mono text-xs text-slate-400 block">
                Nilai Harapan (Mean) • E[X] = n · p
              </span>
              <div className="font-mono text-lg sm:text-xl font-bold text-white mt-1">
                0,5 Modul
              </div>
              <p className="font-body text-xs text-slate-400 mt-1 leading-relaxed">
                Ekspektasi rata-rata modul rusak: 10 × 0,05 = 0,5 modul.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <span className="font-mono text-xs text-slate-400 block">
                Varians • Var(X) = n · p · q
              </span>
              <div className="font-mono text-lg sm:text-xl font-bold text-white mt-1">
                0,475
              </div>
              <p className="font-body text-xs text-slate-400 mt-1 leading-relaxed">
                Mengukur tingkat penyebaran jumlah modul rusak terhadap nilai rata-rata, dengan satuan modul kuadrat.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <span className="font-mono text-xs text-slate-400 block">
                Standar Deviasi • σ = √Var(X)
              </span>
              <div className="font-mono text-lg sm:text-xl font-bold text-white mt-1">
                0,6892 Modul
              </div>
              <p className="font-body text-xs text-slate-400 mt-1 leading-relaxed">
                Simpangan baku penyebaran modul rusak: √0,475 ≈ 0,6892 modul.
              </p>
            </div>
          </div>
        </section>

        {/* 3. STUDI KASUS */}
        <section className="space-y-3.5 border-t border-white/10 pt-5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              03. Studi Kasus — Inspeksi Modul Kapal
            </h3>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#131926] p-4 space-y-4">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="floating-crewmate shrink-0">
                <AssetSlot
                  src={slide.characterAsset}
                  alt={slide.characterAlt || 'Crewmate Red Task'}
                  className="h-12 w-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                />
              </div>
              <div className="space-y-2.5 flex-1">
                <p className="font-body text-sm sm:text-[15px] text-slate-100 leading-relaxed italic">
                  "Setiap modul memiliki peluang mengalami kerusakan sebesar 5%. Jika terdapat 10 modul dan setiap kejadian kerusakan saling independen, berapa probabilitas tepat 2 modul mengalami kerusakan?"
                </p>

                {/* Keterangan Sukses & Gagal */}
                <div className="flex flex-wrap gap-x-6 gap-y-1 font-body text-xs sm:text-sm text-slate-300 border-t border-white/10 pt-2">
                  <span>
                    <strong className="text-[#FF6B6B]">Sukses:</strong> modul mengalami kerusakan
                  </span>
                  <span>
                    <strong className="text-white">Gagal:</strong> modul tidak mengalami kerusakan
                  </span>
                </div>
              </div>
            </div>

            {/* Diketahui */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-xs sm:text-sm">
              <div className="rounded-md border border-white/10 bg-[#080c14] px-3 py-2">
                <span className="text-slate-400 text-xs block">n (jumlah modul)</span>
                <strong className="text-white">10</strong>
              </div>
              <div className="rounded-md border border-white/10 bg-[#080c14] px-3 py-2">
                <span className="text-slate-400 text-xs block">x (modul rusak)</span>
                <strong className="text-[#FF6B6B]">2</strong>
              </div>
              <div className="rounded-md border border-white/10 bg-[#080c14] px-3 py-2">
                <span className="text-slate-400 text-xs block">p (peluang sukses)</span>
                <strong className="text-white">0,05</strong>
              </div>
              <div className="rounded-md border border-white/10 bg-[#080c14] px-3 py-2">
                <span className="text-slate-400 text-xs block">q = 1 - p (gagal)</span>
                <strong className="text-white">0,95</strong>
              </div>
            </div>

            {/* Langkah Perhitungan & Hasil */}
            <div className="rounded-lg border border-white/10 bg-[#080c14] p-4 space-y-3">
              <div className="font-mono text-sm text-slate-200 space-y-1.5 leading-relaxed">
                <div>
                  1. Substitusi ke rumus: <span className="text-white">P(X = 2) = C(10, 2) · (0,05)² · (0,95)⁸</span>
                </div>
                <div>
                  2. Hitung komponen: <span className="text-white">C(10, 2) = 45, (0,05)² = 0,0025, (0,95)⁸ ≈ 0,663420</span>
                </div>
                <div>
                  3. Kalikan hasil: <span className="text-white">45 × 0,0025 × 0,663420 ≈ 0,074635</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-3 flex flex-wrap items-center justify-between gap-2">
                <span className="font-body text-sm text-slate-300">
                  Probabilitas tepat 2 modul mengalami kerusakan:
                </span>
                <span className="font-mono text-base sm:text-lg font-bold text-[#FF6B6B] bg-[#FF6B6B]/10 border border-[#FF6B6B]/50 px-3.5 py-1 rounded-lg">
                  P(X = 2) = 7,46%
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. VISUALISASI DISTRIBUSI PROBABILITAS */}
        <section className="space-y-3.5 border-t border-white/10 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
              <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
                04. Visualisasi Distribusi Peluang (<span className="normal-case">n = 10, p = 0,05, q = 0,95</span>)
              </h3>
            </div>
            <span className="font-mono text-xs sm:text-sm text-slate-300">
              {hoveredX !== null ? (
                <span>
                  <strong className="text-[#FF6B6B]">x = {hoveredX}</strong> → P(X = {hoveredX}) ={' '}
                  <strong className="text-white">{binomialData[hoveredX].pct}</strong>
                </span>
              ) : (
                'Arahkan kursor ke batang grafik untuk melihat detail'
              )}
            </span>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#080c14] p-4">
            <svg
              viewBox="0 0 680 210"
              className="w-full h-48 sm:h-52 overflow-visible"
              aria-label="Grafik Batang Distribusi Binomial n=10 p=0.05 q=0.95"
            >
              {/* Horizontal Grid Lines (0%, 20%, 40%, 60%) */}
              <line x1="45" y1="32" x2="660" y2="32" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="45" y1="78.7" x2="660" y2="78.7" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="45" y1="125.3" x2="660" y2="125.3" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="45" y1="172" x2="660" y2="172" stroke="#475569" strokeWidth="1.5" />

              {/* Y Axis Ticks */}
              <text x="36" y="36" fill="#94a3b8" fontSize="10.5" textAnchor="end" fontFamily="monospace">60%</text>
              <text x="36" y="82.7" fill="#94a3b8" fontSize="10.5" textAnchor="end" fontFamily="monospace">40%</text>
              <text x="36" y="129.3" fill="#94a3b8" fontSize="10.5" textAnchor="end" fontFamily="monospace">20%</text>
              <text x="36" y="175" fill="#94a3b8" fontSize="10.5" textAnchor="end" fontFamily="monospace">0%</text>

              {/* 11 Bars (x = 0 to 10) */}
              {binomialData.map((d, idx) => {
                const barHeight = Math.max(3, (d.p / 0.6) * 140)
                const barY = 172 - barHeight
                const barX = 60 + idx * 54
                const isTarget = d.isTarget
                const isHovered = hoveredX === idx

                return (
                  <g
                    key={d.x}
                    onMouseEnter={() => setHoveredX(d.x)}
                    onMouseLeave={() => setHoveredX(null)}
                    className="cursor-pointer transition-all"
                  >
                    {/* Target Highlight Outline */}
                    {isTarget && (
                      <rect
                        x={barX - 3}
                        y={barY - 3}
                        width="40"
                        height={barHeight + 6}
                        fill="none"
                        stroke="#FF6B6B"
                        strokeWidth="2"
                        rx="5"
                      />
                    )}

                    {/* Bar Rect */}
                    <rect
                      x={barX}
                      y={barY}
                      width="34"
                      height={barHeight}
                      rx="4"
                      fill={
                        isTarget
                          ? '#FF6B6B'
                          : isHovered
                          ? '#94a3b8'
                          : '#334155'
                      }
                    />

                    {/* Persentase di Atas Batang (x <= 4 atau saat hover agar tidak tumpang tindih) */}
                    {(d.x <= 4 || isHovered) && (
                      <text
                        x={barX + 17}
                        y={barY - 9}
                        fill={isTarget || isHovered ? '#FF6B6B' : '#cbd5e1'}
                        fontSize="10"
                        fontWeight={isTarget || isHovered ? 'bold' : 'normal'}
                        textAnchor="middle"
                        fontFamily="monospace"
                      >
                        {d.pct}
                      </text>
                    )}

                    {/* Label Sumbu X */}
                    <text
                      x={barX + 17}
                      y="194"
                      fill={isTarget || isHovered ? '#FF6B6B' : '#cbd5e1'}
                      fontWeight={isTarget || isHovered ? 'bold' : 'normal'}
                      fontSize="11"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      x={d.x}
                    </text>
                  </g>
                )
              })}
            </svg>

            {/* Legend Singkat */}
            <div className="flex flex-wrap justify-between items-center gap-2 text-xs sm:text-[13px] font-body text-slate-400 border-t border-white/10 pt-3 mt-1">
              <span>
                Tanpa kerusakan: <strong className="text-slate-200">x = 0 (59,87%)</strong>
              </span>
              <span className="flex items-center gap-2 text-slate-200">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#FF6B6B]" />
                Target kasus: <strong className="text-[#FF6B6B]">x = 2 (7,46%)</strong>
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

/** LAYOUT KHUSUS SLIDE 04: DISTRIBUSI POISSON (Full Width Task Interface) */
function PoissonTaskLayout({ slide }: { slide: SlideMetadata }) {
  const [hoveredX, setHoveredX] = useState<number | null>(null)

  // Distribusi probabilitas Poisson untuk lambda = 2 (x = 0 s/d 8)
  const poissonData = [
    { x: 0, p: 0.1353, pct: '13,53%' },
    { x: 1, p: 0.2707, pct: '27,07%' },
    { x: 2, p: 0.2707, pct: '27,07%' },
    { x: 3, p: 0.1804, pct: '18,04%', isTarget: true },
    { x: 4, p: 0.0902, pct: '9,02%' },
    { x: 5, p: 0.0361, pct: '3,61%' },
    { x: 6, p: 0.0120, pct: '1,20%' },
    { x: 7, p: 0.0034, pct: '0,34%' },
    { x: 8, p: 0.0009, pct: '0,09%' },
  ]

  return (
    <div className="h-full w-full min-h-0 overflow-y-auto custom-scrollbar pr-2 select-none text-slate-200">
      {/* Panel Utama Full-Width (Scrollable untuk kenyamanan baca presentasi) */}
      <div className="w-full rounded-xl border-2 border-black/80 bg-[#0d121c] p-4 sm:p-5 shadow-inner space-y-6">
        
        {/* 1. PENGERTIAN & KARAKTERISTIK */}
        <section className="space-y-3.5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFD166]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              01. Pengertian &amp; Karakteristik
            </h3>
          </div>

          <p className="font-body text-sm sm:text-[15px] text-slate-100 leading-relaxed">
            <strong className="text-[#FFD166] font-semibold">Distribusi Poisson</strong> memodelkan peluang munculnya sejumlah kejadian dalam suatu interval waktu, ruang, atau area tertentu apabila rata-rata laju kejadiannya (<span className="font-mono text-white font-semibold">λ</span>) diketahui konstan.
          </p>

          {/* 4 Karakteristik dalam Grid 2x2 agar lebar dan mudah dibaca */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                1. Interval Pengamatan Tetap
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Kejadian dihitung di dalam batas waktu, jarak, luas, atau volume pengamatan yang jelas.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                2. Kejadian Saling Independen
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Munculnya suatu kejadian tidak memengaruhi peluang munculnya kejadian lain pada interval tersebut.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                3. Laju Rata-Rata Konstan (λ)
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Rata-rata frekuensi kejadian bernilai tetap pada setiap interval yang berukuran sama.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                4. Tidak Terjadi Bersamaan
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Peluang dua kejadian muncul tepat pada titik waktu yang sama dalam sub-interval sangat kecil dapat diabaikan.
              </p>
            </div>
          </div>
        </section>

        {/* 2. RUMUS & PARAMETER STATISTIK */}
        <section className="space-y-3.5 border-t border-white/10 pt-5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFD166]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              02. Fungsi Massa Peluang (PMF) &amp; Parameter
            </h3>
          </div>

          {/* Kartu Formula Utama */}
          <div className="rounded-xl border border-white/15 bg-[#080c14] p-4 sm:p-5 space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-2">
              <div className="flex items-center gap-3 font-mono text-xl sm:text-3xl font-bold text-white">
                <span>P(X = x) =</span>
                <div className="inline-flex flex-col items-center leading-tight">
                  <span className="px-3 pb-1 text-[#FFD166]">
                    e<sup>-λ</sup> · λ<sup>x</sup>
                  </span>
                  <span className="w-full h-[2px] bg-slate-300" />
                  <span className="px-3 pt-1 text-white">x!</span>
                </div>
              </div>
            </div>

            {/* Keterangan Simbol */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 border-t border-white/10 pt-3.5 font-body text-[13px] sm:text-sm text-slate-300">
              <div>
                <span className="font-mono font-bold text-white mr-2">X</span>
                Banyaknya kejadian dalam satu interval
              </div>
              <div>
                <span className="font-mono font-bold text-white mr-2">x</span>
                Jumlah kejadian yang dicari (0, 1, 2, …)
              </div>
              <div>
                <span className="font-mono font-bold text-[#FFD166] mr-2">λ</span>
                Rata-rata jumlah kejadian per interval (λ &gt; 0)
              </div>
              <div>
                <span className="font-mono font-bold text-white mr-2">e</span>
                Bilangan Euler (<span className="font-mono">≈ 2,71828</span>)
              </div>
            </div>
          </div>

          {/* Parameter Statistik: Mean, Varians, Standar Deviasi */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                Nilai Harapan (Mean)
              </span>
              <div className="font-mono text-lg sm:text-xl font-bold text-white mt-1">
                E(X) = λ
              </div>
              <p className="font-body text-xs text-slate-400 mt-1">
                Rata-rata teoretis kejadian per interval.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                Varians
              </span>
              <div className="font-mono text-lg sm:text-xl font-bold text-white mt-1">
                Var(X) = λ
              </div>
              <p className="font-body text-xs text-slate-400 mt-1">
                Ciri khas Poisson: varians sama dengan mean.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                Standar Deviasi
              </span>
              <div className="font-mono text-lg sm:text-xl font-bold text-white mt-1">
                σ = √λ
              </div>
              <p className="font-body text-xs text-slate-400 mt-1">
                Akar kuadrat dari nilai varians.
              </p>
            </div>
          </div>
        </section>

        {/* 3. STUDI KASUS */}
        <section className="space-y-3.5 border-t border-white/10 pt-5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFD166]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              03. Studi Kasus — Pemantauan Anomali The Skeld
            </h3>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#131926] p-4 space-y-4">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="floating-crewmate shrink-0">
                <AssetSlot
                  src={slide.characterAsset}
                  alt={slide.characterAlt || 'Crewmate Yellow Tablet'}
                  className="h-12 w-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                />
              </div>
              <p className="font-body text-sm sm:text-[15px] text-slate-100 leading-relaxed">
                Sistem pemantauan ruang navigasi kapal <em>The Skeld</em> mencatat rata-rata <strong>2 laporan anomali setiap 10 menit</strong>. Apabila setiap kemunculan anomali bersifat acak dan independen, berapa probabilitas munculnya <strong>tepat 3 laporan anomali</strong> dalam interval 10 menit berikutnya?
              </p>
            </div>

            {/* Diketahui */}
            <div className="flex flex-wrap gap-2 font-mono text-xs sm:text-sm">
              <span className="rounded-md border border-white/10 bg-[#080c14] px-3 py-1.5 text-slate-200">
                Diketahui: <strong className="text-[#FFD166]">λ = 2</strong> laporan / 10 menit
              </span>
              <span className="rounded-md border border-white/10 bg-[#080c14] px-3 py-1.5 text-slate-200">
                Target: <strong className="text-white">x = 3</strong> laporan
              </span>
              <span className="rounded-md border border-white/10 bg-[#080c14] px-3 py-1.5 text-slate-200">
                e ≈ <strong className="text-white">2,71828</strong>
              </span>
            </div>

            {/* Langkah Perhitungan & Hasil */}
            <div className="rounded-lg border border-white/10 bg-[#080c14] p-4 space-y-3">
              <div className="font-mono text-sm text-slate-200 space-y-1.5 leading-relaxed">
                <div>
                  1. Substitusi ke rumus: <span className="text-white">P(X = 3) = (e⁻² × 2³) / 3!</span>
                </div>
                <div>
                  2. Hitung nilai: <span className="text-white">(0,135335 × 8) / 6 = 1,08268 / 6 = 0,180447</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-3 flex flex-wrap items-center justify-between gap-2">
                <span className="font-body text-sm text-slate-300">
                  Probabilitas tepat 3 laporan anomali dalam 10 menit:
                </span>
                <span className="font-mono text-base sm:text-lg font-bold text-[#FFD166] bg-[#FFD166]/10 border border-[#FFD166]/50 px-3.5 py-1 rounded-lg">
                  P(X = 3) ≈ 18,04%
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. VISUALISASI DISTRIBUSI PROBABILITAS */}
        <section className="space-y-3.5 border-t border-white/10 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFD166]" />
              <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
                04. Visualisasi Distribusi Peluang (<span className="normal-case">λ</span> = 2)
              </h3>
            </div>
            <span className="font-mono text-xs sm:text-sm text-slate-300">
              {hoveredX !== null ? (
                <span>
                  <strong className="text-[#FFD166]">x = {hoveredX}</strong> → P(X = {hoveredX}) ={' '}
                  <strong className="text-white">{poissonData[hoveredX].pct}</strong>
                </span>
              ) : (
                'Arahkan kursor ke batang grafik untuk melihat detail'
              )}
            </span>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#080c14] p-4">
            <svg
              viewBox="0 0 680 210"
              className="w-full h-48 sm:h-52 overflow-visible"
              aria-label="Grafik Distribusi Probabilitas Poisson lambda=2"
            >
              {/* Horizontal Grid Lines (0%, 10%, 20%, 30%) */}
              <line x1="45" y1="32" x2="660" y2="32" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="45" y1="78.7" x2="660" y2="78.7" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="45" y1="125.3" x2="660" y2="125.3" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="45" y1="172" x2="660" y2="172" stroke="#475569" strokeWidth="1.5" />

              {/* Y Axis Ticks */}
              <text x="36" y="36" fill="#94a3b8" fontSize="10.5" textAnchor="end" fontFamily="monospace">30%</text>
              <text x="36" y="82.7" fill="#94a3b8" fontSize="10.5" textAnchor="end" fontFamily="monospace">20%</text>
              <text x="36" y="129.3" fill="#94a3b8" fontSize="10.5" textAnchor="end" fontFamily="monospace">10%</text>
              <text x="36" y="175" fill="#94a3b8" fontSize="10.5" textAnchor="end" fontFamily="monospace">0%</text>

              {/* 9 Bars (x = 0 to 8) */}
              {poissonData.map((d, idx) => {
                const barHeight = Math.max(3, (d.p / 0.3) * 140)
                const barY = 172 - barHeight
                const barX = 64 + idx * 66
                const isTarget = d.isTarget
                const isHovered = hoveredX === idx

                return (
                  <g
                    key={d.x}
                    onMouseEnter={() => setHoveredX(d.x)}
                    onMouseLeave={() => setHoveredX(null)}
                    className="cursor-pointer transition-all"
                  >
                    {/* Target Highlight Outline */}
                    {isTarget && (
                      <rect
                        x={barX - 3}
                        y={barY - 3}
                        width="44"
                        height={barHeight + 6}
                        fill="none"
                        stroke="#FFD166"
                        strokeWidth="2"
                        rx="5"
                      />
                    )}

                    {/* Bar Rect */}
                    <rect
                      x={barX}
                      y={barY}
                      width="38"
                      height={barHeight}
                      rx="4"
                      fill={
                        isTarget
                          ? '#FFD166'
                          : isHovered
                          ? '#94a3b8'
                          : '#334155'
                      }
                    />

                    {/* Persentase di Atas Batang */}
                    <text
                      x={barX + 19}
                      y={barY - 9}
                      fill={isTarget || isHovered ? '#FFD166' : '#cbd5e1'}
                      fontSize="10.5"
                      fontWeight={isTarget || isHovered ? 'bold' : 'normal'}
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      {d.pct}
                    </text>

                    {/* Label Sumbu X */}
                    <text
                      x={barX + 19}
                      y="194"
                      fill={isTarget || isHovered ? '#FFD166' : '#cbd5e1'}
                      fontWeight={isTarget || isHovered ? 'bold' : 'normal'}
                      fontSize="11.5"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      x = {d.x}
                    </text>
                  </g>
                )
              })}
            </svg>

            {/* Legend Singkat */}
            <div className="flex flex-wrap justify-between items-center gap-2 text-xs sm:text-[13px] font-body text-slate-400 border-t border-white/10 pt-3 mt-1">
              <span>
                Puncak distribusi: <strong className="text-slate-200">x = 1 dan x = 2 (27,07%)</strong>
              </span>
              <span className="flex items-center gap-2 text-slate-200">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#FFD166]" />
                Target kasus: <strong className="text-[#FFD166]">x = 3 (18,04%)</strong>
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

/** LAYOUT KHUSUS SLIDE 05: DISTRIBUSI EKSPONENSIAL (Full Width Scrollable Interface) */
function ExponentialTaskLayout({ slide }: { slide: SlideMetadata }) {
  const [hoveredMinute, setHoveredMinute] = useState<number | null>(null)

  const lambda = 0.2
  const xStart = 58
  const xEnd = 648
  const yZero = 174
  const yMaxHeight = 136

  const toSvgX = (x: number) => xStart + (x / 20) * (xEnd - xStart)
  const toSvgY = (fx: number) => yZero - (fx / 0.2) * yMaxHeight

  // Generate smooth points for curve & shaded regions (step 0.25 menit)
  const buildCurveSegment = (from: number, to: number) => {
    const pts: Array<{ x: number; y: number }> = []
    for (let t = from; t <= to + 0.0001; t += 0.25) {
      const clampedT = Math.min(to, Number(t.toFixed(2)))
      const fx = lambda * Math.exp(-lambda * clampedT)
      pts.push({ x: toSvgX(clampedT), y: toSvgY(fx) })
    }
    return pts
  }

  const fullPts = buildCurveSegment(0, 20)
  const leftPts = buildCurveSegment(0, 5)
  const rightPts = buildCurveSegment(5, 20)

  const curvePath = fullPts
    .map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`)
    .join(' ')

  const leftAreaPath = [
    `M ${toSvgX(0).toFixed(1)} ${yZero}`,
    ...leftPts.map((pt) => `L ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`),
    `L ${toSvgX(5).toFixed(1)} ${yZero} Z`,
  ].join(' ')

  const rightAreaPath = [
    `M ${toSvgX(5).toFixed(1)} ${yZero}`,
    ...rightPts.map((pt) => `L ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`),
    `L ${toSvgX(20).toFixed(1)} ${yZero} Z`,
  ].join(' ')

  const cutoffX = toSvgX(5)
  const cutoffY = toSvgY(lambda * Math.exp(-lambda * 5))

  const hoverStats =
    hoveredMinute !== null
      ? {
          x: hoveredMinute,
          fx: lambda * Math.exp(-lambda * hoveredMinute),
          cdfPct: ((1 - Math.exp(-lambda * hoveredMinute)) * 100).toFixed(2).replace('.', ','),
          survPct: (Math.exp(-lambda * hoveredMinute) * 100).toFixed(2).replace('.', ','),
        }
      : null

  return (
    <div className="h-full w-full min-h-0 overflow-y-auto custom-scrollbar pr-2 select-none text-slate-200">
      {/* Panel Utama Full-Width bernuansa Electrical Room */}
      <div className="w-full rounded-xl border-2 border-black/80 bg-[#0d121c] p-4 sm:p-5 shadow-inner space-y-6">

        {/* SECTION 1 — CONCEPT */}
        <section className="space-y-3.5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#A78BFA]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              01. Pengertian &amp; Karakteristik
            </h3>
          </div>

          <p className="font-body text-sm sm:text-[15px] text-slate-100 leading-relaxed">
            <strong className="text-[#A78BFA] font-semibold">Distribusi Eksponensial</strong> adalah distribusi probabilitas kontinu yang memodelkan <strong>waktu tunggu</strong> hingga munculnya kejadian berikutnya, seperti waktu tunggu perbaikan komponen, kedatangan pelanggan, atau laporan anomali berikutnya dalam proses Poisson.
          </p>

          {/* Perbedaan Poisson vs Eksponensial */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-xl border border-white/10 bg-[#080c14] p-3.5">
            <div className="sm:border-r sm:border-white/10 sm:pr-3">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block">
                Distribusi Poisson (Slide 04)
              </span>
              <p className="font-body text-[13px] sm:text-sm text-slate-200 mt-1 leading-relaxed">
                Menghitung <strong className="text-white">berapa banyak kejadian</strong> yang muncul dalam satu interval waktu tertentu.
              </p>
            </div>
            <div className="sm:pl-1">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A78BFA] block">
                Distribusi Eksponensial (Slide 05)
              </span>
              <p className="font-body text-[13px] sm:text-sm text-slate-200 mt-1 leading-relaxed">
                Menghitung <strong className="text-white">berapa lama menunggu</strong> sampai kejadian berikutnya terjadi.
              </p>
            </div>
          </div>

          {/* 5 Karakteristik Utama */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-0.5">
            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                1. Variabel Kontinu
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Mengukur selang waktu atau durasi secara kontinu, bukan cacahan bilangan bulat.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                2. Waktu Tunggu Antar-Kejadian
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Memodelkan jarak waktu dari pengamatan dimulai hingga kejadian berikutnya terjadi.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                3. Parameter Laju (λ)
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Bentuk kurva ditentukan oleh laju rata-rata kejadian per satuan waktu (<span className="font-mono text-slate-100">λ &gt; 0</span>).
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                4. Domain Non-Negatif (x ≥ 0)
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Karena <span className="font-mono text-slate-100">x</span> menyatakan lama waktu tunggu, nilainya tidak pernah negatif.
              </p>
            </div>

            <div className="sm:col-span-2 rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                5. Sifat Memoryless (Tanpa Memori)
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Waktu yang sudah dilewati untuk menunggu tidak memengaruhi peluang menunggu pada sisa waktu berikutnya.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — FORMULA */}
        <section className="space-y-4 border-t border-white/10 pt-5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#A78BFA]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              02. Rumus PDF, CDF, Parameter &amp; Memoryless
            </h3>
          </div>

          {/* Kartu PDF Utama */}
          <div className="rounded-xl border border-white/15 bg-[#080c14] p-4 sm:p-5 space-y-4">
            <div className="flex flex-col items-center justify-center gap-1 py-1 text-center">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Fungsi Densitas Peluang (PDF)
              </span>
              <div className="font-mono text-xl sm:text-3xl font-bold text-white mt-1">
                f(x) = <span className="text-[#A78BFA]">λ</span> · e<sup>-λx</sup>
                <span className="text-sm sm:text-base font-normal text-slate-400 ml-3">
                  untuk x ≥ 0
                </span>
              </div>
            </div>

            {/* Keterangan Simbol */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10 pt-3.5 font-body text-[13px] sm:text-sm text-slate-300">
              <div>
                <span className="font-mono font-bold text-white mr-2">x</span>
                Waktu tunggu hingga kejadian berikutnya
              </div>
              <div>
                <span className="font-mono font-bold text-[#A78BFA] mr-2">λ</span>
                Laju kejadian per satuan waktu
              </div>
              <div>
                <span className="font-mono font-bold text-white mr-2">e</span>
                Konstanta Euler (<span className="font-mono">≈ 2,71828</span>)
              </div>
            </div>

            {/* CDF & Komplemen */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 border-t border-white/10 pt-4">
              <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5 space-y-1.5">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                  Fungsi Distribusi Kumulatif (CDF)
                </span>
                <div className="font-mono text-base sm:text-lg font-bold text-[#A78BFA]">
                  F(x) = P(X ≤ x) = 1 - e<sup>-λx</sup>
                </div>
                <p className="font-body text-[13px] text-slate-300 leading-relaxed">
                  Mencari peluang kejadian muncul <strong>sebelum atau paling lambat</strong> pada waktu <span className="font-mono text-white">x</span>.
                </p>
              </div>

              <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5 space-y-1.5">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                  Peluang Komplemen (Ekor Kanan)
                </span>
                <div className="font-mono text-base sm:text-lg font-bold text-[#35C9F4]">
                  P(X &gt; x) = e<sup>-λx</sup>
                </div>
                <p className="font-body text-[13px] text-slate-300 leading-relaxed">
                  Mencari peluang harus menunggu <strong>lebih lama dari</strong> waktu <span className="font-mono text-white">x</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Mean, Varians, Standar Deviasi */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <span className="font-mono text-xs text-slate-400 block">
                Nilai Harapan (Mean)
              </span>
              <div className="font-mono text-lg sm:text-xl font-bold text-white mt-1">
                E(X) = 1 / λ
              </div>
              <p className="font-body text-xs text-slate-400 mt-1 leading-relaxed">
                Rata-rata waktu tunggu; satuannya mengikuti satuan waktu pengamatan.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <span className="font-mono text-xs text-slate-400 block">
                Varians
              </span>
              <div className="font-mono text-lg sm:text-xl font-bold text-white mt-1">
                Var(X) = 1 / λ²
              </div>
              <p className="font-body text-xs text-slate-400 mt-1 leading-relaxed">
                Penyebaran waktu tunggu dalam satuan waktu kuadrat (misal menit²).
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <span className="font-mono text-xs text-slate-400 block">
                Standar Deviasi
              </span>
              <div className="font-mono text-lg sm:text-xl font-bold text-white mt-1">
                σ = 1 / λ
              </div>
              <p className="font-body text-xs text-slate-400 mt-1 leading-relaxed">
                Nilainya sama dengan mean dan bersatuan sama (misal menit).
              </p>
            </div>
          </div>

          {/* Sifat Memoryless */}
          <div className="rounded-xl border border-white/10 bg-[#131926] p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A78BFA] font-semibold block">
                Sifat Memoryless
              </span>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Jika sistem sudah menunggu selama <span className="font-mono text-white">s</span> menit tanpa adanya kejadian, peluang menunggu lebih lama lagi untuk durasi tambahan <span className="font-mono text-white">t</span> menit tetap sama seperti baru mulai menunggu dari awal.
              </p>
            </div>
            <div className="rounded-lg border border-white/10 bg-[#080c14] px-4 py-2.5 font-mono text-sm sm:text-base font-bold text-white shrink-0 text-center">
              P(X &gt; s + t | X &gt; s) = P(X &gt; t)
            </div>
          </div>
        </section>

        {/* SECTION 3 — CASE STUDY */}
        <section className="space-y-3.5 border-t border-white/10 pt-5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#A78BFA]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              03. Studi Kasus — Electrical Room The Skeld
            </h3>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#131926] p-4 space-y-4">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="floating-crewmate shrink-0">
                <AssetSlot
                  src={slide.characterAsset}
                  alt={slide.characterAlt || 'Crewmate Purple Repairing Wires'}
                  className="h-12 w-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                />
              </div>
              <div className="space-y-2.5 flex-1">
                <p className="font-body text-sm sm:text-[15px] text-slate-100 leading-relaxed">
                  Pada sistem pemantauan kapal <em>The Skeld</em> (Slide 04), rata-rata muncul <strong>2 laporan anomali setiap 10 menit</strong>. Di ruang Electrical, kru ingin menghitung distribusi waktu tunggu hingga laporan anomali berikutnya muncul.
                </p>

                {/* Konversi Laju & Parameter Kasus */}
                <div className="flex flex-wrap gap-2 font-mono text-xs sm:text-sm pt-1">
                  <span className="rounded-md border border-[#A78BFA]/40 bg-[#080c14] px-3 py-1.5 text-slate-200">
                    Laju: <strong className="text-[#A78BFA]">λ = 2 / 10 = 0,2 kejadian/menit</strong>
                  </span>
                  <span className="rounded-md border border-white/10 bg-[#080c14] px-3 py-1.5 text-slate-200">
                    Mean: <strong className="text-white">5 menit</strong>
                  </span>
                  <span className="rounded-md border border-white/10 bg-[#080c14] px-3 py-1.5 text-slate-200">
                    Varians: <strong className="text-white">25 menit²</strong>
                  </span>
                  <span className="rounded-md border border-white/10 bg-[#080c14] px-3 py-1.5 text-slate-200">
                    σ: <strong className="text-white">5 menit</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Kasus 1 & Kasus 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* Kasus 1: P(X > 5) */}
              <div className="rounded-lg border border-white/10 bg-[#080c14] p-4 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-sm font-bold text-white">
                      Kasus 1 — Menunggu &gt; 5 Menit
                    </span>
                    <span className="font-mono text-xs text-[#35C9F4] font-semibold">
                      P(X &gt; 5)
                    </span>
                  </div>
                  <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                    Berapa peluang harus menunggu lebih dari 5 menit sampai laporan anomali berikutnya muncul?
                  </p>
                  <div className="rounded bg-[#131926] border border-white/10 p-3 font-mono text-xs sm:text-sm text-slate-200 space-y-1">
                    <div>P(X &gt; 5) = e<sup>-(0,2 × 5)</sup></div>
                    <div>= e<sup>-1</sup> ≈ <strong className="text-white">0,3679</strong></div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3 flex items-center justify-between gap-2">
                  <span className="font-body text-xs sm:text-[13px] text-slate-300">
                    Peluang tunggu &gt; 5 menit:
                  </span>
                  <span className="font-mono text-base font-bold text-[#35C9F4] bg-[#35C9F4]/10 border border-[#35C9F4]/40 px-3 py-1 rounded-md shrink-0">
                    36,79%
                  </span>
                </div>
              </div>

              {/* Kasus 2: P(X <= 5) */}
              <div className="rounded-lg border border-white/10 bg-[#080c14] p-4 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-sm font-bold text-white">
                      Kasus 2 — Muncul ≤ 5 Menit
                    </span>
                    <span className="font-mono text-xs text-[#A78BFA] font-semibold">
                      P(X ≤ 5)
                    </span>
                  </div>
                  <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                    Berapa peluang laporan anomali berikutnya muncul dalam 5 menit pertama?
                  </p>
                  <div className="rounded bg-[#131926] border border-white/10 p-3 font-mono text-xs sm:text-sm text-slate-200 space-y-1">
                    <div>P(X ≤ 5) = 1 - e<sup>-(0,2 × 5)</sup> = 1 - e<sup>-1</sup></div>
                    <div>≈ 1 - 0,3679 = <strong className="text-white">0,6321</strong></div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3 flex items-center justify-between gap-2">
                  <span className="font-body text-xs sm:text-[13px] text-slate-300">
                    Peluang muncul ≤ 5 menit:
                  </span>
                  <span className="font-mono text-base font-bold text-[#A78BFA] bg-[#A78BFA]/10 border border-[#A78BFA]/40 px-3 py-1 rounded-md shrink-0">
                    63,21%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — VISUALIZATION */}
        <section className="space-y-3.5 border-t border-white/10 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#A78BFA]" />
              <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
                04. Kurva Distribusi Eksponensial (<span className="normal-case">λ = 0,2 / menit</span>)
              </h3>
            </div>
            <span className="font-mono text-xs sm:text-sm text-slate-300">
              {hoverStats ? (
                <span>
                  <strong className="text-white">x = {hoverStats.x} mnt</strong> • f(x) ={' '}
                  {hoverStats.fx.toFixed(4).replace('.', ',')} •{' '}
                  <span className="text-[#A78BFA]">P(≤{hoverStats.x}) = {hoverStats.cdfPct}%</span> •{' '}
                  <span className="text-[#35C9F4]">P(&gt;{hoverStats.x}) = {hoverStats.survPct}%</span>
                </span>
              ) : (
                'Arahkan kursor ke sepanjang kurva untuk nilai detail'
              )}
            </span>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#080c14] p-4">
            <svg
              viewBox="0 0 680 225"
              className="w-full h-52 sm:h-56 overflow-visible"
              aria-label="Kurva Distribusi Eksponensial lambda=0.2 untuk x=0 sampai 20 menit"
            >
              {/* Horizontal Grid Lines */}
              <line x1="58" y1="38" x2="648" y2="38" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="58" y1="106" x2="648" y2="106" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="58" y1="174" x2="648" y2="174" stroke="#475569" strokeWidth="1.5" />

              {/* Y Axis Line */}
              <line x1="58" y1="32" x2="58" y2="174" stroke="#475569" strokeWidth="1.5" />

              {/* Y Axis Labels */}
              <text x="50" y="24" fill="#94a3b8" fontSize="10.5" textAnchor="end" fontFamily="monospace">f(x)</text>
              <text x="50" y="42" fill="#94a3b8" fontSize="10.5" textAnchor="end" fontFamily="monospace">0,20</text>
              <text x="50" y="110" fill="#94a3b8" fontSize="10.5" textAnchor="end" fontFamily="monospace">0,10</text>
              <text x="50" y="177" fill="#94a3b8" fontSize="10.5" textAnchor="end" fontFamily="monospace">0,00</text>

              {/* Shaded Areas under PDF Curve */}
              <path d={leftAreaPath} fill="rgba(167, 139, 250, 0.30)" />
              <path d={rightAreaPath} fill="rgba(53, 201, 244, 0.20)" />

              {/* Main PDF Curve */}
              <path
                d={curvePath}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Vertical Marker Line at x = 5 menit */}
              <line
                x1={cutoffX}
                y1="26"
                x2={cutoffX}
                y2="174"
                stroke="#FFFFFF"
                strokeDasharray="4 4"
                strokeWidth="1.5"
              />
              <circle cx={cutoffX} cy={cutoffY} r="4.5" fill="#FFFFFF" stroke="#080c14" strokeWidth="1.5" />
              <text
                x={cutoffX}
                y="19"
                fill="#FFFFFF"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
                fontFamily="monospace"
              >
                Batas x = 5 menit
              </text>

              {/* Probability Labels for Left & Right Regions */}
              <text
                x="132"
                y="148"
                fill="#DDD6FE"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
                fontFamily="monospace"
              >
                P(X ≤ 5) = 63,21%
              </text>

              <line x1="278" y1="164" x2="310" y2="128" stroke="#35C9F4" strokeWidth="1.2" strokeDasharray="2 2" />
              <text
                x="315"
                y="122"
                fill="#67E8F9"
                fontSize="11"
                fontWeight="bold"
                textAnchor="start"
                fontFamily="monospace"
              >
                P(X &gt; 5) = 36,79%
              </text>

              {/* Hover Indicator */}
              {hoverStats && (
                <g>
                  <line
                    x1={toSvgX(hoverStats.x)}
                    y1="38"
                    x2={toSvgX(hoverStats.x)}
                    y2="174"
                    stroke="#A78BFA"
                    strokeWidth="1.2"
                    strokeDasharray="2 2"
                  />
                  <circle
                    cx={toSvgX(hoverStats.x)}
                    cy={toSvgY(hoverStats.fx)}
                    r="4"
                    fill="#A78BFA"
                    stroke="#080c14"
                    strokeWidth="1.5"
                  />
                </g>
              )}

              {/* X Axis Ticks (0, 5, 10, 15, 20) */}
              {[0, 5, 10, 15, 20].map((tick) => (
                <g key={tick}>
                  <line
                    x1={toSvgX(tick)}
                    y1="174"
                    x2={toSvgX(tick)}
                    y2="179"
                    stroke="#64748b"
                    strokeWidth="1.5"
                  />
                  <text
                    x={toSvgX(tick)}
                    y="194"
                    fill={tick === 5 ? '#FFFFFF' : '#94a3b8'}
                    fontWeight={tick === 5 ? 'bold' : 'normal'}
                    fontSize="11"
                    textAnchor="middle"
                    fontFamily="monospace"
                  >
                    {tick}
                  </text>
                </g>
              ))}

              {/* X Axis Label */}
              <text
                x="353"
                y="214"
                fill="#94a3b8"
                fontSize="11"
                textAnchor="middle"
                fontFamily="sans-serif"
              >
                Waktu tunggu x (menit)
              </text>

              {/* Interactive Hover Zones (0..20 menit) */}
              {Array.from({ length: 21 }, (_, m) => (
                <rect
                  key={m}
                  x={toSvgX(m) - 14.75}
                  y="30"
                  width="29.5"
                  height="150"
                  fill="transparent"
                  onMouseEnter={() => setHoveredMinute(m)}
                  onMouseLeave={() => setHoveredMinute(null)}
                  className="cursor-crosshair"
                />
              ))}
            </svg>

            {/* Legend Kurva */}
            <div className="flex flex-wrap justify-between items-center gap-3 text-xs sm:text-[13px] font-body text-slate-300 border-t border-white/10 pt-3 mt-1">
              <span className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#A78BFA]" />
                Muncul ≤ 5 menit: <strong className="text-[#A78BFA]">P(X ≤ 5) = 63,21%</strong>
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#35C9F4]" />
                Menunggu &gt; 5 menit: <strong className="text-[#35C9F4]">P(X &gt; 5) = 36,79%</strong>
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

/** LAYOUT KHUSUS SLIDE 06: DISTRIBUSI NORMAL (Full Width Scrollable Bell Curve Interface) */
function NormalTaskLayout({ slide }: { slide: SlideMetadata }) {
  const [hoveredX, setHoveredX] = useState<number | null>(null)

  const mu = 10
  const sigma = 2
  const xMin = 4
  const xMax = 16

  const normalPdf = (x: number) => {
    const z = (x - mu) / sigma
    return (1 / (sigma * Math.sqrt(2 * Math.PI))) * Math.exp(-0.5 * z * z)
  }

  // Aproksimasi fungsi distribusi kumulatif Normal Φ(z) untuk readout hover interaktif
  const normalCdf = (x: number) => {
    const z = (x - mu) / sigma
    const sign = z < 0 ? -1 : 1
    const absZ = Math.abs(z) / Math.SQRT2
    const t = 1 / (1 + 0.3275911 * absZ)
    const erf =
      1 -
      (((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) *
        t) *
        Math.exp(-absZ * absZ)
    return 0.5 * (1 + sign * erf)
  }

  // Geometri Bell Curve utama (domain x = 4..16)
  const xStart = 58
  const xEnd = 648
  const yZero = 186
  const yMaxHeight = 146 // f(10) ≈ 0.1995 dipetakan terhadap max 0.20

  const toSvgX = (x: number) => xStart + ((x - xMin) / (xMax - xMin)) * (xEnd - xStart)
  const toSvgY = (fx: number) => yZero - (fx / 0.2) * yMaxHeight

  const buildBellSegment = (from: number, to: number) => {
    const pts: Array<{ x: number; y: number }> = []
    for (let t = from; t <= to + 0.0001; t += 0.15) {
      const clampedT = Math.min(to, Number(t.toFixed(2)))
      pts.push({ x: toSvgX(clampedT), y: toSvgY(normalPdf(clampedT)) })
    }
    return pts
  }

  const fullCurvePts = buildBellSegment(xMin, xMax)
  const midIntervalPts = buildBellSegment(8, 12)
  const rightTailPts = buildBellSegment(14, xMax)

  const bellCurvePath = fullCurvePts
    .map((pt, i) => `${i === 0 ? 'M' : 'L'} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`)
    .join(' ')

  const midAreaPath = [
    `M ${toSvgX(8).toFixed(1)} ${yZero}`,
    ...midIntervalPts.map((pt) => `L ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`),
    `L ${toSvgX(12).toFixed(1)} ${yZero} Z`,
  ].join(' ')

  const rightTailPath = [
    `M ${toSvgX(14).toFixed(1)} ${yZero}`,
    ...rightTailPts.map((pt) => `L ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`),
    `L ${toSvgX(xMax).toFixed(1)} ${yZero} Z`,
  ].join(' ')

  // Mini Bell Curve untuk Empirical Rule (±1σ, ±2σ, ±3σ dalam ruang standar Z = -3.5..3.5)
  const buildEmpiricalBand = (zFrom: number, zTo: number) => {
    const wStart = 20
    const wEnd = 540
    const base = 92
    const amp = 74
    const zx = (z: number) => wStart + ((z + 3.5) / 7) * (wEnd - wStart)
    const zy = (z: number) => base - Math.exp(-0.5 * z * z) * amp
    const pts: string[] = [`M ${zx(zFrom).toFixed(1)} ${base}`]
    for (let z = zFrom; z <= zTo + 0.0001; z += 0.1) {
      const cz = Math.min(zTo, Number(z.toFixed(2)))
      pts.push(`L ${zx(cz).toFixed(1)} ${zy(cz).toFixed(1)}`)
    }
    pts.push(`L ${zx(zTo).toFixed(1)} ${base} Z`)
    return pts.join(' ')
  }

  const empCurveStroke = (() => {
    const wStart = 20
    const wEnd = 540
    const base = 92
    const amp = 74
    const zx = (z: number) => wStart + ((z + 3.5) / 7) * (wEnd - wStart)
    const zy = (z: number) => base - Math.exp(-0.5 * z * z) * amp
    const pts: string[] = []
    for (let z = -3.5; z <= 3.501; z += 0.1) {
      pts.push(`${pts.length === 0 ? 'M' : 'L'} ${zx(z).toFixed(1)} ${zy(z).toFixed(1)}`)
    }
    return pts.join(' ')
  })()

  const hoverMetrics =
    hoveredX !== null
      ? {
          x: hoveredX,
          z: (hoveredX - mu) / sigma,
          fx: normalPdf(hoveredX),
          cdfPct: (normalCdf(hoveredX) * 100).toFixed(2).replace('.', ','),
          tailPct: ((1 - normalCdf(hoveredX)) * 100).toFixed(2).replace('.', ','),
        }
      : null

  const hoverBins = Array.from({ length: 25 }, (_, i) => xMin + i * 0.5)

  return (
    <div className="h-full w-full min-h-0 overflow-y-auto custom-scrollbar pr-2 select-none text-slate-200">
      {/* Panel Utama Full-Width bernuansa Reactor Calibration */}
      <div className="w-full rounded-xl border-2 border-black/80 bg-[#0d121c] p-4 sm:p-5 shadow-inner space-y-6">

        {/* SECTION 1 — CONCEPT & CHARACTERISTICS */}
        <section className="space-y-3.5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#35C9F4]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              01. Pengertian &amp; Karakteristik Distribusi Normal
            </h3>
          </div>

          <p className="font-body text-sm sm:text-[15px] text-slate-100 leading-relaxed">
            <strong className="text-[#35C9F4] font-semibold">Distribusi Normal</strong> adalah distribusi probabilitas kontinu berbentuk kurva lonceng (<em>Bell Curve</em>) yang simetris terhadap nilai rata-rata (<span className="font-mono text-white font-semibold">μ</span>). Data cenderung terkonsentrasi di sekitar pusat dan frekuensinya mengecil ketika menjauh dari rata-rata.
          </p>

          {/* Parameter μ & σ + Contoh Penerapan */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 rounded-xl border border-white/10 bg-[#080c14] p-3.5">
            <div className="sm:border-r sm:border-white/10 sm:pr-3 space-y-1">
              <span className="font-mono text-xs uppercase tracking-wider text-[#35C9F4] block">
                Peran Parameter <span className="normal-case">μ</span> dan{' '}
                <span className="normal-case">σ</span>
              </span>
              <p className="font-body text-[13px] sm:text-sm text-slate-200 leading-relaxed">
                <strong className="text-white">Mean (μ)</strong> menentukan titik pusat kurva, sedangkan <strong className="text-white">standar deviasi (σ)</strong> menentukan lebar dan tinggi sebaran kurva.
              </p>
            </div>
            <div className="sm:pl-1 space-y-1">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block">
                Contoh Penerapan
              </span>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Distribusi hasil pengukuran, variasi waktu penyelesaian tugas, kesalahan pengukuran sensor reaktor, serta variasi karakteristik suatu populasi.
              </p>
            </div>
          </div>

          {/* 5 Karakteristik Utama */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-0.5">
            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                1. Berbentuk Kurva Lonceng
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Memiliki satu puncak tunggal tepat di sekitar nilai rata-rata.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                2. Simetris
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Sisi kiri dan sisi kanan terhadap garis pusat memiliki bentuk yang identik.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                3. Mean = Median = Modus
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Ketiga ukuran pemusatan data berada tepat pada satu titik pusat yang sama.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                4. Luas Total = 1
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Seluruh area di bawah kurva dari −∞ hingga +∞ merepresentasikan peluang 100%.
              </p>
            </div>

            <div className="sm:col-span-2 rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                5. Bersifat Asimtotik
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Kedua ekor kurva semakin mendekati sumbu horizontal tanpa pernah benar-benar menyentuhnya.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2 — MATHEMATICAL FORMULA & Z-SCORE */}
        <section className="space-y-4 border-t border-white/10 pt-5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#35C9F4]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              02. Fungsi Densitas Peluang (PDF), Parameter &amp; Z-Score
            </h3>
          </div>

          {/* Kartu Rumus PDF Utama */}
          <div className="rounded-xl border border-white/15 bg-[#080c14] p-4 sm:p-5 space-y-4">
            <div className="flex flex-col items-center justify-center gap-2 py-1">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Fungsi Densitas Peluang (PDF)
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2.5 font-mono text-lg sm:text-2xl font-bold text-white mt-1">
                <span>f(x) =</span>
                <div className="inline-flex flex-col items-center leading-tight">
                  <span className="px-2 pb-0.5 text-white">1</span>
                  <span className="w-full h-[2px] bg-slate-300" />
                  <span className="px-2 pt-0.5 text-[#35C9F4]">σ√(2π)</span>
                </div>
                <span>×</span>
                <span>
                  e<sup className="text-xs sm:text-base text-[#35C9F4]"> -(x - μ)² / (2σ²)</sup>
                </span>
              </div>
            </div>

            {/* Keterangan Simbol */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-2 border-t border-white/10 pt-3.5 font-body text-[13px] sm:text-sm text-slate-300">
              <div>
                <span className="font-mono font-bold text-white mr-2">x</span>
                Nilai variabel acak pengamatan
              </div>
              <div>
                <span className="font-mono font-bold text-[#35C9F4] mr-2">μ</span>
                Rata-rata populasi (<em>mu</em>)
              </div>
              <div>
                <span className="font-mono font-bold text-[#35C9F4] mr-2">σ / σ²</span>
                Standar deviasi / Varians
              </div>
              <div>
                <span className="font-mono font-bold text-white mr-2">e</span>
                Konstanta Euler (<span className="font-mono">≈ 2,71828</span>)
              </div>
              <div>
                <span className="font-mono font-bold text-white mr-2">π</span>
                Konstanta Pi (<span className="font-mono">≈ 3,14159</span>)
              </div>
            </div>
          </div>

          {/* Mean, Varians, Standar Deviasi + Pengaruh Simpangan Baku */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <span className="font-mono text-xs text-slate-400 block">
                Nilai Harapan (Mean)
              </span>
              <div className="font-mono text-lg sm:text-xl font-bold text-white mt-1">
                E(X) = μ
              </div>
              <p className="font-body text-xs text-slate-400 mt-1 leading-relaxed">
                Menentukan letak sumbu simetri dan titik puncak kurva.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <span className="font-mono text-xs text-slate-400 block">
                Varians
              </span>
              <div className="font-mono text-lg sm:text-xl font-bold text-white mt-1">
                Var(X) = σ²
              </div>
              <p className="font-body text-xs text-slate-400 mt-1 leading-relaxed">
                Mengukur keragaman kuadrat jarak data terhadap mean.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <span className="font-mono text-xs text-slate-400 block">
                Standar Deviasi
              </span>
              <div className="font-mono text-lg sm:text-xl font-bold text-white mt-1">
                SD(X) = σ
              </div>
              <p className="font-body text-xs text-slate-400 mt-1 leading-relaxed">
                σ kecil → kurva sempit &amp; tinggi; σ besar → kurva lebar &amp; rendah.
              </p>
            </div>
          </div>

          {/* Standardisasi Z-Score */}
          <div className="rounded-xl border border-white/10 bg-[#131926] p-4 space-y-3.5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                <span className="font-mono text-xs uppercase tracking-wider text-[#35C9F4] font-semibold block">
                  Standardisasi Z-Score
                </span>
                <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                  Mengukur seberapa jauh posisi nilai pengamatan (<span className="font-mono text-white">X</span>) dari rata-rata (<span className="font-mono text-white">μ</span>) dalam satuan standar deviasi (<span className="font-mono text-white">σ</span>).
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#080c14] px-5 py-2.5 flex items-center justify-center gap-3 font-mono text-lg sm:text-xl font-bold text-white shrink-0">
                <span>Z =</span>
                <div className="inline-flex flex-col items-center leading-tight">
                  <span className="px-2 pb-0.5 text-[#35C9F4]">X - μ</span>
                  <span className="w-full h-[1.5px] bg-slate-300" />
                  <span className="px-2 pt-0.5 text-white">σ</span>
                </div>
              </div>
            </div>

            {/* 5 Titik Interpretasi Z-Score */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-t border-white/10 pt-3 font-body text-xs">
              <div className="rounded bg-[#080c14] border border-white/10 px-2.5 py-2">
                <strong className="font-mono text-[#35C9F4] block">Z = -2</strong>
                <span className="text-slate-300">2σ di bawah rata-rata</span>
              </div>
              <div className="rounded bg-[#080c14] border border-white/10 px-2.5 py-2">
                <strong className="font-mono text-[#35C9F4] block">Z = -1</strong>
                <span className="text-slate-300">1σ di bawah rata-rata</span>
              </div>
              <div className="rounded bg-[#080c14] border border-[#35C9F4]/40 px-2.5 py-2">
                <strong className="font-mono text-white block">Z = 0</strong>
                <span className="text-slate-300">Tepat pada rata-rata</span>
              </div>
              <div className="rounded bg-[#080c14] border border-white/10 px-2.5 py-2">
                <strong className="font-mono text-[#35C9F4] block">Z = 1</strong>
                <span className="text-slate-300">1σ di atas rata-rata</span>
              </div>
              <div className="rounded bg-[#080c14] border border-white/10 px-2.5 py-2 col-span-2 sm:col-span-1">
                <strong className="font-mono text-[#35C9F4] block">Z = 2</strong>
                <span className="text-slate-300">2σ di atas rata-rata</span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — EMPIRICAL RULE (68 - 95 - 99,7) */}
        <section className="space-y-3.5 border-t border-white/10 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#35C9F4]" />
              <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
                03. Aturan Empiris (Empirical Rule 68–95–99,7)
              </h3>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#080c14] p-4 space-y-4">
            {/* Visualisasi Mini Bell Curve untuk 68,27% | 95,45% | 99,73% */}
            <svg
              viewBox="0 0 560 158"
              className="w-full h-36 sm:h-40 overflow-visible"
              aria-label="Visualisasi Aturan Empiris 68,27% 95,45% 99,73%"
            >
              <path d={buildEmpiricalBand(-3, 3)} fill="rgba(53, 201, 244, 0.10)" />
              <path d={buildEmpiricalBand(-2, 2)} fill="rgba(53, 201, 244, 0.18)" />
              <path d={buildEmpiricalBand(-1, 1)} fill="rgba(53, 201, 244, 0.34)" />
              <path d={empCurveStroke} fill="none" stroke="#E2E8F0" strokeWidth="2" />
              <line x1="20" y1="92" x2="540" y2="92" stroke="#475569" strokeWidth="1.2" />
              {/* Center & Sigma guides */}
              {[-3, -2, -1, 0, 1, 2, 3].map((z) => {
                const xPos = 20 + ((z + 3.5) / 7) * 520
                return (
                  <g key={z}>
                    <line
                      x1={xPos}
                      y1={z === 0 ? 18 : 92 - Math.exp(-0.5 * z * z) * 74}
                      x2={xPos}
                      y2="92"
                      stroke={z === 0 ? '#FFFFFF' : '#64748b'}
                      strokeDasharray="3 3"
                      strokeWidth="1"
                    />
                    <text
                      x={xPos}
                      y="106"
                      fill={z === 0 ? '#FFFFFF' : '#94a3b8'}
                      fontSize="10"
                      fontWeight={z === 0 ? 'bold' : 'normal'}
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      {z === 0 ? 'μ' : `${z > 0 ? `+${z}` : z}σ`}
                    </text>
                  </g>
                )
              })}
              <text x="280" y="64" fill="#FFFFFF" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="monospace">
                68,27%
              </text>

              {/* Garis Rentang Interval Empiris Bersih (Bebas Tabrakan Kurva) */}
              {[
                { z: 1, y: 121, label: 'μ ± 1σ : 68,27%', color: '#35C9F4' },
                { z: 2, y: 136, label: 'μ ± 2σ : 95,45%', color: '#BAE6FD' },
                { z: 3, y: 151, label: 'μ ± 3σ : 99,73%', color: '#94A3B8' },
              ].map((band) => {
                const xLeft = 20 + ((-band.z + 3.5) / 7) * 520
                const xRight = 20 + ((band.z + 3.5) / 7) * 520
                return (
                  <g key={band.z}>
                    <line x1={xLeft} y1={band.y} x2={xRight} y2={band.y} stroke={band.color} strokeWidth="1.2" />
                    <line x1={xLeft} y1={band.y - 3} x2={xLeft} y2={band.y + 3} stroke={band.color} strokeWidth="1.2" />
                    <line x1={xRight} y1={band.y - 3} x2={xRight} y2={band.y + 3} stroke={band.color} strokeWidth="1.2" />
                    <rect x="220" y={band.y - 6} width="120" height="12" fill="#080c14" />
                    <text
                      x="280"
                      y={band.y + 3}
                      fill={band.color}
                      fontSize="9.5"
                      fontWeight="bold"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      {band.label}
                    </text>
                  </g>
                )
              })}
            </svg>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="rounded-lg border border-[#35C9F4]/40 bg-[#131926] p-3">
                <div className="font-mono text-base font-bold text-[#35C9F4]">
                  μ ± 1σ ≈ 68,27%
                </div>
                <p className="font-body text-xs sm:text-[13px] text-slate-300 mt-1">
                  Mayoritas data berada dekat dalam rentang 1 standar deviasi dari rata-rata.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#131926] p-3">
                <div className="font-mono text-base font-bold text-white">
                  μ ± 2σ ≈ 95,45%
                </div>
                <p className="font-body text-xs sm:text-[13px] text-slate-300 mt-1">
                  Hampir seluruh data berada di dalam rentang 2 standar deviasi.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#131926] p-3">
                <div className="font-mono text-base font-bold text-white">
                  μ ± 3σ ≈ 99,73%
                </div>
                <p className="font-body text-xs sm:text-[13px] text-slate-300 mt-1">
                  Sangat sedikit nilai ekstrem yang berada di luar rentang 3 standar deviasi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 — CASE STUDY */}
        <section className="space-y-3.5 border-t border-white/10 pt-5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#35C9F4]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              04. Studi Kasus — Kalibrasi Sensor Reaktor The Skeld
            </h3>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#131926] p-4 space-y-4">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="floating-crewmate shrink-0">
                <AssetSlot
                  src={slide.characterAsset}
                  alt={slide.characterAlt || 'Crewmate Green Calibrating Reactor Sensors'}
                  className="h-12 w-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                />
              </div>
              <div className="space-y-2.5 flex-1">
                <p className="font-body text-sm sm:text-[15px] text-slate-100 leading-relaxed">
                  Dalam simulasi latihan kru <em>The Skeld</em>, waktu penyelesaian tugas kalibrasi sensor reaktor berdistribusi normal dengan rata-rata <strong>μ = 10 menit</strong> dan standar deviasi <strong>σ = 2 menit</strong>.
                </p>

                <div className="flex flex-wrap gap-2 font-mono text-xs sm:text-sm">
                  <span className="rounded-md border border-[#35C9F4]/40 bg-[#080c14] px-3 py-1.5 text-slate-200">
                    Mean: <strong className="text-[#35C9F4]">μ = 10 menit</strong>
                  </span>
                  <span className="rounded-md border border-white/10 bg-[#080c14] px-3 py-1.5 text-slate-200">
                    Standar Deviasi: <strong className="text-white">σ = 2 menit</strong>
                  </span>
                  <span className="rounded-md border border-white/10 bg-[#080c14] px-3 py-1.5 text-slate-200">
                    Varians: <strong className="text-white">σ² = 4 menit²</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Kasus 1 & Kasus 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {/* Kasus 1: 8-12 menit */}
              <div className="rounded-lg border border-white/10 bg-[#080c14] p-4 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-sm font-bold text-white">
                      Kasus 1 — Antara 8–12 Menit
                    </span>
                    <span className="font-mono text-xs text-[#35C9F4] font-semibold">
                      P(8 ≤ X ≤ 12)
                    </span>
                  </div>
                  <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                    Berapa probabilitas kru menyelesaikan kalibrasi sensor antara 8 hingga 12 menit?
                  </p>
                  <div className="rounded bg-[#131926] border border-white/10 p-3 font-mono text-xs sm:text-sm text-slate-200 space-y-1">
                    <div>Z₁ = (8 - 10) / 2 = -1</div>
                    <div>Z₂ = (12 - 10) / 2 = 1</div>
                    <div>P(-1 ≤ Z ≤ 1) = Φ(1) - Φ(-1)</div>
                    <div>= 0,84134 - 0,15866 = <strong className="text-white">0,68268</strong></div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3 flex items-center justify-between gap-2">
                  <span className="font-body text-xs sm:text-[13px] text-slate-300">
                    Peluang selesai 8–12 menit:
                  </span>
                  <span className="font-mono text-base font-bold text-[#35C9F4] bg-[#35C9F4]/10 border border-[#35C9F4]/40 px-3 py-1 rounded-md shrink-0">
                    68,27%
                  </span>
                </div>
              </div>

              {/* Kasus 2: > 14 menit */}
              <div className="rounded-lg border border-white/10 bg-[#080c14] p-4 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-display text-sm font-bold text-white">
                      Kasus 2 — Lebih dari 14 Menit
                    </span>
                    <span className="font-mono text-xs text-[#FFD166] font-semibold">
                      P(X &gt; 14)
                    </span>
                  </div>
                  <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                    Berapa probabilitas kru membutuhkan waktu lebih dari 14 menit untuk menyelesaikan tugas?
                  </p>
                  <div className="rounded bg-[#131926] border border-white/10 p-3 font-mono text-xs sm:text-sm text-slate-200 space-y-1">
                    <div>Z = (14 - 10) / 2 = 2</div>
                    <div>P(X &gt; 14) = P(Z &gt; 2) = 1 - Φ(2)</div>
                    <div>= 1 - 0,97725 = <strong className="text-white">0,02275</strong></div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-3 flex items-center justify-between gap-2">
                  <span className="font-body text-xs sm:text-[13px] text-slate-300">
                    Peluang butuh &gt; 14 menit:
                  </span>
                  <span className="font-mono text-base font-bold text-[#FFD166] bg-[#FFD166]/10 border border-[#FFD166]/40 px-3 py-1 rounded-md shrink-0">
                    2,28%
                  </span>
                </div>
              </div>
            </div>

            <p className="font-body text-xs text-slate-400">
              Catatan: Seluruh angka pada studi kasus merupakan asumsi simulasi akademik, bukan data aktual permainan Among Us.
            </p>
          </div>
        </section>

        {/* SECTION 5 — BELL CURVE VISUALIZATION */}
        <section className="space-y-3.5 border-t border-white/10 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#35C9F4]" />
              <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
                05. Visualisasi Bell Curve (<span className="normal-case">μ = 10 menit, σ = 2 menit</span>)
              </h3>
            </div>
            <span className="font-mono text-xs sm:text-sm text-slate-300">
              {hoverMetrics ? (
                <span>
                  <strong className="text-white">x = {hoverMetrics.x} mnt</strong> (Z ={' '}
                  {hoverMetrics.z.toFixed(2).replace('.', ',')}) • f(x) ={' '}
                  {hoverMetrics.fx.toFixed(4).replace('.', ',')} •{' '}
                  <span className="text-[#35C9F4]">P(≤x) = {hoverMetrics.cdfPct}%</span>
                </span>
              ) : (
                'Arahkan kursor ke sepanjang kurva lonceng untuk detail nilai Z'
              )}
            </span>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#080c14] p-4">
            <svg
              viewBox="0 0 680 245"
              className="w-full h-56 sm:h-64 overflow-visible"
              aria-label="Visualisasi Bell Curve Distribusi Normal mu=10 sigma=2"
            >
              {/* Horizontal Grid Lines */}
              <line x1="58" y1="40" x2="648" y2="40" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="58" y1="113" x2="648" y2="113" stroke="#1e293b" strokeDasharray="4 4" strokeWidth="1" />
              <line x1="58" y1="186" x2="648" y2="186" stroke="#475569" strokeWidth="1.5" />

              {/* Y Axis Line */}
              <line x1="58" y1="32" x2="58" y2="186" stroke="#475569" strokeWidth="1.5" />

              {/* Y Axis Labels */}
              <text x="50" y="25" fill="#94a3b8" fontSize="10.5" textAnchor="end" fontFamily="monospace">f(x)</text>
              <text x="50" y="44" fill="#94a3b8" fontSize="10.5" textAnchor="end" fontFamily="monospace">0,20</text>
              <text x="50" y="117" fill="#94a3b8" fontSize="10.5" textAnchor="end" fontFamily="monospace">0,10</text>
              <text x="50" y="189" fill="#94a3b8" fontSize="10.5" textAnchor="end" fontFamily="monospace">0,00</text>

              {/* Shaded Area 1: 8 <= X <= 12 (68,27%) */}
              <path d={midAreaPath} fill="rgba(53, 201, 244, 0.30)" />

              {/* Shaded Area 2: X > 14 (2,28%) */}
              <path d={rightTailPath} fill="rgba(255, 209, 102, 0.42)" />

              {/* Vertical Marker Lines: -2σ (6), -1σ (8), Mean (10), +1σ (12), +2σ (14) */}
              {[6, 8, 10, 12, 14].map((val) => {
                const vx = toSvgX(val)
                const vy = toSvgY(normalPdf(val))
                const isMean = val === 10
                const isTailStart = val === 14
                return (
                  <g key={val}>
                    <line
                      x1={vx}
                      y1={isMean ? 24 : vy}
                      x2={vx}
                      y2="186"
                      stroke={isMean ? '#FFFFFF' : isTailStart ? '#FFD166' : '#35C9F4'}
                      strokeDasharray={isMean ? '4 4' : '3 3'}
                      strokeWidth={isMean ? 1.8 : 1.3}
                    />
                    <circle
                      cx={vx}
                      cy={vy}
                      r={isMean ? 4 : 3.2}
                      fill={isMean ? '#FFFFFF' : isTailStart ? '#FFD166' : '#35C9F4'}
                    />
                  </g>
                )
              })}

              {/* Full Bell Curve Stroke */}
              <path
                d={bellCurvePath}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Center Mean Badge */}
              <text
                x={toSvgX(10)}
                y="17"
                fill="#FFFFFF"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
                fontFamily="monospace"
              >
                Mean: 10 menit
              </text>

              {/* Area Probability Labels */}
              <text
                x={toSvgX(10)}
                y="138"
                fill="#FFFFFF"
                fontSize="11.5"
                fontWeight="bold"
                textAnchor="middle"
                fontFamily="monospace"
              >
                P(8 ≤ X ≤ 12) = 68,27%
              </text>

              <line x1="572" y1="176" x2="585" y2="140" stroke="#FFD166" strokeWidth="1.2" strokeDasharray="2 2" />
              <text
                x="585"
                y="133"
                fill="#FFD166"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
                fontFamily="monospace"
              >
                P(X &gt; 14) = 2,28%
              </text>

              {/* Hover Indicator */}
              {hoverMetrics && (
                <g>
                  <line
                    x1={toSvgX(hoverMetrics.x)}
                    y1="40"
                    x2={toSvgX(hoverMetrics.x)}
                    y2="186"
                    stroke="#35C9F4"
                    strokeWidth="1.2"
                    strokeDasharray="2 2"
                  />
                  <circle
                    cx={toSvgX(hoverMetrics.x)}
                    cy={toSvgY(hoverMetrics.fx)}
                    r="4.2"
                    fill="#35C9F4"
                    stroke="#080c14"
                    strokeWidth="1.5"
                  />
                </g>
              )}

              {/* X Axis Ticks & Labels (-2σ, -1σ, Mean, +1σ, +2σ) */}
              {[
                { val: 4, top: '4', sub: '-3σ' },
                { val: 6, top: '6', sub: '-2σ' },
                { val: 8, top: '8', sub: '-1σ: 8 mnt' },
                { val: 10, top: '10', sub: 'Mean: 10' },
                { val: 12, top: '12', sub: '+1σ: 12 mnt' },
                { val: 14, top: '14', sub: '+2σ: 14 mnt' },
                { val: 16, top: '16', sub: '+3σ' },
              ].map((tick) => {
                const tx = toSvgX(tick.val)
                const isMean = tick.val === 10
                const isOneSigma = tick.val === 8 || tick.val === 12
                const isTwoSigma = tick.val === 14
                return (
                  <g key={tick.val}>
                    <line x1={tx} y1="186" x2={tx} y2="191" stroke="#64748b" strokeWidth="1.5" />
                    <text
                      x={tx}
                      y="204"
                      fill={isMean ? '#FFFFFF' : isOneSigma ? '#35C9F4' : isTwoSigma ? '#FFD166' : '#94a3b8'}
                      fontWeight={isMean || isOneSigma || isTwoSigma ? 'bold' : 'normal'}
                      fontSize="11"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      {tick.top}
                    </text>
                    <text
                      x={tx}
                      y="218"
                      fill={isMean ? '#FFFFFF' : isOneSigma ? '#35C9F4' : isTwoSigma ? '#FFD166' : '#64748b'}
                      fontSize="9.5"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      {tick.sub}
                    </text>
                  </g>
                )
              })}

              {/* X Axis Title */}
              <text
                x="353"
                y="236"
                fill="#94a3b8"
                fontSize="11"
                textAnchor="middle"
                fontFamily="sans-serif"
              >
                Waktu penyelesaian kalibrasi sensor x (menit)
              </text>

              {/* Interactive Hover Bins across x = 4..16 */}
              {hoverBins.map((binVal) => (
                <rect
                  key={binVal}
                  x={toSvgX(binVal) - 12.2}
                  y="32"
                  width="24.4"
                  height="160"
                  fill="transparent"
                  onMouseEnter={() => setHoveredX(binVal)}
                  onMouseLeave={() => setHoveredX(null)}
                  className="cursor-crosshair"
                />
              ))}
            </svg>

            {/* Legend Bell Curve */}
            <div className="flex flex-wrap justify-between items-center gap-3 text-xs sm:text-[13px] font-body text-slate-300 border-t border-white/10 pt-3 mt-1">
              <span className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#35C9F4]" />
                Interval μ ± 1σ (8–12 menit): <strong className="text-[#35C9F4]">68,27%</strong>
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#FFD166]" />
                Ekor kanan (&gt; 14 menit / +2σ): <strong className="text-[#FFD166]">2,28%</strong>
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

/** LAYOUT KHUSUS SLIDE 07: Z-SCORE & ANOMALY DETECTION (Security Scan Room Interface) */
function ZScoreSecurityLayout({ slide }: { slide: SlideMetadata }) {
  const [hoveredObs, setHoveredObs] = useState<number | null>(null)

  const mu = 50
  const sigma = 5

  // 8 Data pengamatan suhu Reactor The Skeld (μ = 50°C, σ = 5°C acuan historis)
  const observations = [
    { id: 1, temp: 48, z: -0.4, zStr: '-0,4', status: 'Normal', isAnomaly: false },
    { id: 2, temp: 51, z: 0.2, zStr: '+0,2', status: 'Normal', isAnomaly: false },
    { id: 3, temp: 53, z: 0.6, zStr: '+0,6', status: 'Normal', isAnomaly: false },
    { id: 4, temp: 49, z: -0.2, zStr: '-0,2', status: 'Normal', isAnomaly: false },
    { id: 5, temp: 52, z: 0.4, zStr: '+0,4', status: 'Normal', isAnomaly: false },
    { id: 6, temp: 68, z: 3.6, zStr: '+3,6', status: 'Kandidat Anomali', isAnomaly: true },
    { id: 7, temp: 47, z: -0.6, zStr: '-0,6', status: 'Normal', isAnomaly: false },
    { id: 8, temp: 54, z: 0.8, zStr: '+0,8', status: 'Normal', isAnomaly: false },
  ]

  const zInterpretations = [
    { z: 'Z = 0', desc: 'Tepat pada rata-rata' },
    { z: 'Z = +1', desc: 'Satu standar deviasi di atas rata-rata' },
    { z: 'Z = -1', desc: 'Satu standar deviasi di bawah rata-rata' },
    { z: 'Z = +2', desc: 'Dua standar deviasi di atas rata-rata' },
    { z: 'Z = -2', desc: 'Dua standar deviasi di bawah rata-rata' },
    { z: 'Z = +3', desc: 'Tiga standar deviasi di atas rata-rata' },
    { z: 'Z = -3', desc: 'Tiga standar deviasi di bawah rata-rata' },
  ]

  // Geometri Security Scan Plot (sumbu Z: -4 sampai +4)
  const xLeft = 58
  const xRight = 648
  const toScanX = (z: number) => xLeft + ((z + 4) / 8) * (xRight - xLeft)

  // Siluet halus kurva normal sebagai referensi latar pemindaian
  const refBellPath = (() => {
    const base = 182
    const amp = 110
    const pts: string[] = []
    for (let z = -4; z <= 4.001; z += 0.15) {
      const px = toScanX(z)
      const py = base - Math.exp(-0.5 * z * z) * amp
      pts.push(`${pts.length === 0 ? 'M' : 'L'} ${px.toFixed(1)} ${py.toFixed(1)}`)
    }
    return pts.join(' ')
  })()

  const activeObs = hoveredObs !== null ? observations[hoveredObs - 1] : null

  return (
    <div className="h-full w-full min-h-0 overflow-y-auto custom-scrollbar pr-2 select-none text-slate-200">
      {/* Panel Utama Full-Width bernuansa Security Scan Room */}
      <div className="w-full rounded-xl border-2 border-black/80 bg-[#0d121c] p-4 sm:p-5 shadow-inner space-y-6">

        {/* SECTION 1 — Z-SCORE CONCEPT & FORMULA */}
        <section className="space-y-3.5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#55D6A5]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              01. Konsep &amp; Rumus Z-Score
            </h3>
          </div>

          <p className="font-body text-sm sm:text-[15px] text-slate-100 leading-relaxed">
            <strong className="text-[#55D6A5] font-semibold">Z-Score</strong> adalah ukuran statistik yang menunjukkan seberapa jauh posisi suatu nilai pengamatan dari nilai rata-ratanya dalam satuan standar deviasi.
          </p>

          {/* 4 Kegunaan Z-Score */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                1. Membandingkan Posisi Data
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Mengetahui posisi relatif sebuah pengamatan terhadap rata-rata kelompoknya.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                2. Mengidentifikasi Nilai Jauh
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Menandai pengamatan yang menyimpang jauh dari pusat distribusi normal.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                3. Standardisasi Skala Data
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Menyamakan skala pengukuran berbeda menjadi nilai tanpa satuan agar mudah dibandingkan.
              </p>
            </div>

            <div className="rounded-lg border border-white/10 bg-[#131926] p-3.5">
              <div className="font-display text-sm font-bold text-white mb-1">
                4. Deteksi Kandidat Anomali
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Membantu mendeteksi nilai ekstrem atau aktivitas sistem yang perlu diperiksa kru.
              </p>
            </div>
          </div>

          {/* Formula Utama & Sifat Tanpa Satuan */}
          <div className="rounded-xl border border-white/15 bg-[#080c14] p-4 sm:p-5 space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center justify-center gap-3 font-mono text-xl sm:text-2xl font-bold text-white mx-auto md:mx-0">
                <span>Z =</span>
                <div className="inline-flex flex-col items-center leading-tight">
                  <span className="px-3 pb-0.5 text-[#55D6A5]">X - μ</span>
                  <span className="w-full h-[2px] bg-slate-300" />
                  <span className="px-3 pt-0.5 text-white">σ</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 font-body text-[13px] sm:text-sm text-slate-300">
                <div>
                  <span className="font-mono font-bold text-[#55D6A5] mr-2">Z</span>
                  Skor standar
                </div>
                <div>
                  <span className="font-mono font-bold text-white mr-2">X</span>
                  Nilai pengamatan
                </div>
                <div>
                  <span className="font-mono font-bold text-white mr-2">μ</span>
                  Nilai rata-rata
                </div>
                <div>
                  <span className="font-mono font-bold text-white mr-2">σ</span>
                  Standar deviasi
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/10 pt-3.5 font-body text-[13px] text-slate-300">
              <div className="rounded-lg bg-[#131926] border border-white/10 p-3">
                <strong className="text-white block mb-0.5">Nilai Tanpa Satuan</strong>
                Z-Score tidak memiliki satuan (misal °C hilang setelah dibagi σ).
              </div>
              <div className="rounded-lg bg-[#131926] border border-white/10 p-3">
                <strong className="text-[#55D6A5] block mb-0.5">Tanda + dan -</strong>
                Z positif berada di atas rata-rata; Z negatif berada di bawah rata-rata.
              </div>
              <div className="rounded-lg bg-[#131926] border border-white/10 p-3">
                <strong className="text-white block mb-0.5">Besar Nilai Absolut |Z|</strong>
                Semakin besar |Z|, semakin jauh posisi nilai pengamatan dari rata-rata.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — ANOMALY CLASSIFICATION */}
        <section className="space-y-4 border-t border-white/10 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#55D6A5]" />
              <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
                02. Interpretasi &amp; Klasifikasi Zona Anomali
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Tabel Interpretasi Z-Score */}
            <div className="lg:col-span-7 rounded-xl border border-white/10 bg-[#080c14] overflow-hidden">
              <div className="px-4 py-2.5 border-b border-white/10 bg-[#131926]">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200">
                  Tabel Interpretasi Z-Score
                </span>
              </div>
              <table className="w-full text-left border-collapse font-body text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400 font-mono text-xs">
                    <th className="py-2.5 px-4">Z-Score</th>
                    <th className="py-2.5 px-4">Interpretasi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-200">
                  {zInterpretations.map((row) => (
                    <tr key={row.z} className={row.z === 'Z = 0' ? 'bg-white/5' : ''}>
                      <td className="py-2 px-4 font-mono font-bold text-[#35C9F4] whitespace-nowrap">
                        {row.z}
                      </td>
                      <td className="py-2 px-4">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Aturan Praktis Deteksi Anomali */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3">
              <div className="rounded-xl border border-white/10 bg-[#080c14] p-4 space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-200 block">
                  Pedoman Zona Pemindaian (|Z|)
                </span>

                <div className="rounded-lg border border-[#55D6A5]/40 bg-[#131926] p-3">
                  <div className="flex items-center justify-between font-mono text-sm font-bold text-[#55D6A5]">
                    <span>|Z| &lt; 2</span>
                    <span className="text-xs uppercase">Zona Normal</span>
                  </div>
                  <p className="font-body text-xs sm:text-[13px] text-slate-300 mt-1">
                    Variasi relatif normal dan masih dekat dengan rata-rata operasi.
                  </p>
                </div>

                <div className="rounded-lg border border-[#FFD166]/40 bg-[#131926] p-3">
                  <div className="flex items-center justify-between font-mono text-sm font-bold text-[#FFD166]">
                    <span>2 ≤ |Z| &lt; 3</span>
                    <span className="text-xs uppercase">Zona Peringatan</span>
                  </div>
                  <p className="font-body text-xs sm:text-[13px] text-slate-300 mt-1">
                    Perlu perhatian karena menunjukkan indikasi nilai tidak biasa.
                  </p>
                </div>

                <div className="rounded-lg border border-[#FF5A5F]/50 bg-[#131926] p-3">
                  <div className="flex items-center justify-between font-mono text-sm font-bold text-[#FF5A5F]">
                    <span>|Z| ≥ 3</span>
                    <span className="text-xs uppercase">Zona Ekstrem</span>
                  </div>
                  <p className="font-body text-xs sm:text-[13px] text-slate-300 mt-1">
                    Nilai ekstrem atau kandidat anomali yang perlu diinvestigasi.
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#131926] p-3.5 text-xs sm:text-[13px] font-body text-slate-300 leading-relaxed">
                <strong className="text-white block mb-0.5">Catatan Akademik</strong>
                Ambang batas di atas adalah pedoman praktis, bukan aturan universal. Nilai ekstrem tidak otomatis membuktikan kerusakan sistem; pemeriksaan konteks dan kualitas data tetap diperlukan.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — REACTOR SENSOR CASE STUDY */}
        <section className="space-y-4 border-t border-white/10 pt-5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#55D6A5]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              03. Studi Kasus — Reactor Sensor Security Scan
            </h3>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#131926] p-4 space-y-4">
            {/* Skenario & Parameter Historis */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="floating-crewmate shrink-0">
                <AssetSlot
                  src={slide.characterAsset}
                  alt={slide.characterAlt || 'Crewmate Red Security Logs'}
                  className="h-12 w-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                />
              </div>
              <div className="space-y-2.5 flex-1">
                <p className="font-body text-sm sm:text-[15px] text-slate-100 leading-relaxed">
                  Sistem pemantauan suhu Reactor <em>The Skeld</em> menggunakan parameter acuan historis operasi normal dengan rata-rata <strong>μ = 50°C</strong> dan standar deviasi <strong>σ = 5°C</strong>. Pada pemeriksaan berikutnya tercatat delapan data suhu:
                </p>

                <div className="flex flex-wrap gap-2 font-mono text-xs sm:text-sm">
                  <span className="rounded-md border border-[#55D6A5]/40 bg-[#080c14] px-3 py-1.5 text-slate-200">
                    Acuan: <strong className="text-[#55D6A5]">μ = {mu}°C</strong> &nbsp;|&nbsp; <strong className="text-white">σ = {sigma}°C</strong>
                  </span>
                  <span className="rounded-md border border-white/10 bg-[#080c14] px-3 py-1.5 text-slate-300">
                    Data uji: 48, 51, 53, 49, 52, <strong className="text-[#FF5A5F]">68</strong>, 47, 54 (°C)
                  </span>
                </div>
              </div>
            </div>

            {/* Contoh Perhitungan Pengamatan #6 (68°C) */}
            <div className="rounded-lg border border-[#FF5A5F]/40 bg-[#080c14] p-4 space-y-2.5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-display text-sm font-bold text-white">
                  Contoh Perhitungan — Pengamatan #6 (68°C)
                </span>
                <span className="font-mono text-sm font-bold text-[#FF5A5F] bg-[#FF5A5F]/10 border border-[#FF5A5F]/40 px-3 py-0.5 rounded">
                  Z-Score = +3,6
                </span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-slate-200 space-y-1">
                <div>Z = (X - μ) / σ = (68 - 50) / 5 = 18 / 5 = <strong className="text-[#FF5A5F]">+3,6</strong></div>
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                Suhu 68°C berada 3,6 standar deviasi di atas rata-rata acuan operasi normal (50°C), sehingga tergolong nilai ekstrem dan perlu diperiksa lebih lanjut.
              </p>
            </div>

            {/* Tabel Hasil 8 Pengamatan */}
            <div className="rounded-xl border border-white/10 bg-[#080c14] overflow-x-auto">
              <table className="w-full text-left border-collapse font-body text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-[#131926] text-slate-400 font-mono text-xs">
                    <th className="py-2.5 px-4">Pengamatan</th>
                    <th className="py-2.5 px-4 text-right">Suhu</th>
                    <th className="py-2.5 px-4 text-right">Z-Score</th>
                    <th className="py-2.5 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {observations.map((obs) => {
                    const isHighlighted = hoveredObs === obs.id
                    return (
                      <tr
                        key={obs.id}
                        onMouseEnter={() => setHoveredObs(obs.id)}
                        onMouseLeave={() => setHoveredObs(null)}
                        className={`transition-colors cursor-pointer ${
                          obs.isAnomaly
                            ? 'bg-[#FF5A5F]/12 text-white'
                            : isHighlighted
                            ? 'bg-white/8 text-white'
                            : 'text-slate-200'
                        }`}
                      >
                        <td className="py-2 px-4 font-mono">#{obs.id}</td>
                        <td className="py-2 px-4 text-right font-mono font-semibold">
                          {obs.temp}°C
                        </td>
                        <td
                          className={`py-2 px-4 text-right font-mono font-bold ${
                            obs.isAnomaly ? 'text-[#FF5A5F]' : 'text-[#55D6A5]'
                          }`}
                        >
                          {obs.zStr}
                        </td>
                        <td className="py-2 px-4">
                          <span
                            className={`inline-block font-mono text-xs px-2 py-0.5 rounded font-semibold ${
                              obs.isAnomaly
                                ? 'bg-[#FF5A5F]/20 text-[#FF5A5F] border border-[#FF5A5F]/40'
                                : 'bg-[#55D6A5]/15 text-[#55D6A5]'
                            }`}
                          >
                            {obs.status}
                          </span>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* Kesimpulan Studi Kasus */}
            <div className="rounded-lg border border-white/10 bg-[#080c14] p-3.5 font-body text-[13px] sm:text-sm text-slate-200 leading-relaxed">
              <strong className="text-white">Kesimpulan:</strong> Dari delapan pengamatan suhu, terdapat satu titik dengan Z-Score di atas +3, yaitu pengamatan #6 (<strong className="text-[#FF5A5F]">68°C, Z = +3,6</strong>). Nilai ini menjadi <strong>kandidat anomali</strong> agar kru memeriksa kondisi fisik sensor dan pendingin Reactor.
            </div>
          </div>
        </section>

        {/* SECTION 4 — SECURITY SCAN VISUALIZATION */}
        <section className="space-y-3.5 border-t border-white/10 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#55D6A5]" />
              <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
                04. Security Scan — Z-Score Anomaly Detection Plot
              </h3>
            </div>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
              Scan Range: -4σ .. +4σ
            </span>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#080c14] p-4 space-y-3">
            {/* Bar Inspeksi Tetap (Tinggi terkunci agar tidak bergeser saat hover) */}
            <div className="h-9 rounded-lg border border-white/10 bg-[#131926] px-3 flex items-center justify-between gap-2 font-mono text-xs sm:text-sm overflow-hidden">
              <span className="text-slate-400 text-xs uppercase tracking-wider shrink-0">
                Channel Inspector
              </span>
              <span className="truncate whitespace-nowrap text-slate-200">
                {activeObs ? (
                  <>
                    <strong className="text-white">Pengamatan #{activeObs.id}</strong> •{' '}
                    {activeObs.temp}°C •{' '}
                    <strong className={activeObs.isAnomaly ? 'text-[#FF5A5F]' : 'text-[#55D6A5]'}>
                      Z = {activeObs.zStr} ({activeObs.status})
                    </strong>
                  </>
                ) : (
                  <span className="text-slate-400">
                    Arahkan kursor ke jalur #1–#8 atau baris tabel untuk detail
                  </span>
                )}
              </span>
            </div>

            <svg
              viewBox="0 0 680 235"
              className="w-full h-56 sm:h-64 overflow-visible"
              onMouseLeave={() => setHoveredObs(null)}
              aria-label="Security Scan Plot Z-Score dari -4 sampai +4 untuk 8 pengamatan"
            >
              {/* Zone Backgrounds (-4..-3 Ekstrem, -3..-2 Peringatan, -2..+2 Normal, +2..+3 Peringatan, +3..+4 Ekstrem) */}
              <rect x={toScanX(-4)} y="30" width={toScanX(-3) - toScanX(-4)} height="152" fill="rgba(255, 90, 95, 0.16)" />
              <rect x={toScanX(-3)} y="30" width={toScanX(-2) - toScanX(-3)} height="152" fill="rgba(255, 209, 102, 0.14)" />
              <rect x={toScanX(-2)} y="30" width={toScanX(2) - toScanX(-2)} height="152" fill="rgba(85, 214, 165, 0.12)" />
              <rect x={toScanX(2)} y="30" width={toScanX(3) - toScanX(2)} height="152" fill="rgba(255, 209, 102, 0.14)" />
              <rect x={toScanX(3)} y="30" width={toScanX(4) - toScanX(3)} height="152" fill="rgba(255, 90, 95, 0.22)" />

              {/* Zone Header Badges */}
              <text x={(toScanX(-4) + toScanX(-3)) / 2} y="21" fill="#FF5A5F" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">EKSTREM</text>
              <text x={(toScanX(-3) + toScanX(-2)) / 2} y="21" fill="#FFD166" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">PERINGATAN</text>
              <text x={toScanX(0)} y="21" fill="#55D6A5" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">ZONA NORMAL (|Z| &lt; 2)</text>
              <text x={(toScanX(2) + toScanX(3)) / 2} y="21" fill="#FFD166" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">PERINGATAN</text>
              <text x={(toScanX(3) + toScanX(4)) / 2} y="21" fill="#FF5A5F" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="monospace">EKSTREM</text>

              {/* Subtle Normal Reference Curve Silhouette */}
              <path d={refBellPath} fill="none" stroke="rgba(226, 232, 240, 0.22)" strokeWidth="1.5" strokeDasharray="3 3" />

              {/* Vertical Threshold Lines (-3, -2, 0, +2, +3) */}
              {[-3, -2, 0, 2, 3].map((zLine) => (
                <line
                  key={zLine}
                  x1={toScanX(zLine)}
                  y1="30"
                  x2={toScanX(zLine)}
                  y2="182"
                  stroke={
                    zLine === 0
                      ? '#E2E8F0'
                      : Math.abs(zLine) === 2
                      ? '#FFD166'
                      : '#FF5A5F'
                  }
                  strokeWidth={zLine === 0 ? 1.4 : 1.2}
                  strokeDasharray="4 4"
                  opacity="0.7"
                />
              ))}

              {/* Baseline X Axis */}
              <line x1="58" y1="182" x2="648" y2="182" stroke="#475569" strokeWidth="1.5" />

              {/* 8 Security Scan Channels (#1..#8) */}
              {observations.map((obs, idx) => {
                const cy = 44 + idx * 17.5
                const cx = toScanX(obs.z)
                const isActive = hoveredObs === obs.id
                const dotColor = obs.isAnomaly ? '#FF5A5F' : '#35C9F4'

                return (
                  <g
                    key={obs.id}
                    onMouseEnter={() => setHoveredObs(obs.id)}
                    className="cursor-pointer"
                  >
                    {/* Area Hitbox Full-Row agar Hover Mulus Tanpa Glitch */}
                    <rect
                      x="30"
                      y={cy - 8.75}
                      width="625"
                      height="17.5"
                      rx="3"
                      fill={
                        isActive
                          ? obs.isAnomaly
                            ? 'rgba(255, 90, 95, 0.14)'
                            : 'rgba(255, 255, 255, 0.06)'
                          : 'transparent'
                      }
                      style={{ transition: 'fill 150ms ease-out' }}
                    />

                    {/* Scan Horizontal Track */}
                    <line
                      x1="58"
                      y1={cy}
                      x2="648"
                      y2={cy}
                      stroke={
                        isActive
                          ? obs.isAnomaly
                            ? 'rgba(255, 90, 95, 0.65)'
                            : 'rgba(53, 201, 244, 0.45)'
                          : obs.isAnomaly
                          ? 'rgba(255, 90, 95, 0.30)'
                          : 'rgba(255, 255, 255, 0.07)'
                      }
                      strokeWidth={obs.isAnomaly || isActive ? 1.4 : 1}
                      style={{ pointerEvents: 'none', transition: 'stroke 150ms ease-out' }}
                    />

                    {/* Channel Label on Left */}
                    <text
                      x="48"
                      y={cy + 3.5}
                      fill={obs.isAnomaly ? '#FF5A5F' : isActive ? '#FFFFFF' : '#94a3b8'}
                      fontSize="9.5"
                      fontWeight={obs.isAnomaly ? 'bold' : 'normal'}
                      textAnchor="end"
                      fontFamily="monospace"
                      style={{ pointerEvents: 'none', transition: 'fill 150ms ease-out' }}
                    >
                      #{obs.id}
                    </text>

                    {/* Anomaly Radar Ring & Crosshair */}
                    {obs.isAnomaly && (
                      <g style={{ pointerEvents: 'none' }}>
                        <circle
                          cx={cx}
                          cy={cy}
                          r={isActive ? 11.5 : 10}
                          fill="none"
                          stroke="#FF5A5F"
                          strokeWidth="1.5"
                          strokeDasharray="3 2"
                          style={{ transition: 'all 160ms ease-out' }}
                        />
                        <rect
                          x={cx - 178}
                          y={cy - 7.5}
                          width="164"
                          height="15"
                          rx="3"
                          fill="#080c14"
                          fillOpacity="0.92"
                          stroke="rgba(255, 90, 95, 0.55)"
                          strokeWidth="1"
                        />
                        <text
                          x={cx - 19}
                          y={cy + 3.2}
                          fill="#FF5A5F"
                          fontSize="10"
                          fontWeight="bold"
                          textAnchor="end"
                          fontFamily="monospace"
                        >
                          68°C (Z = +3,6) • ANOMALI
                        </text>
                      </g>
                    )}

                    {/* Normal Point Temperature Readout */}
                    {!obs.isAnomaly && (
                      <>
                        <circle
                          cx={cx}
                          cy={cy}
                          r="8.5"
                          fill="none"
                          stroke="#35C9F4"
                          strokeWidth="1.4"
                          opacity={isActive ? 0.85 : 0}
                          style={{ pointerEvents: 'none', transition: 'opacity 150ms ease-out' }}
                        />
                        <text
                          x={obs.z < 0 ? cx - 11 : cx + 11}
                          y={cy + 3.5}
                          fill={isActive ? '#FFFFFF' : '#cbd5e1'}
                          fontSize="9.5"
                          textAnchor={obs.z < 0 ? 'end' : 'start'}
                          fontFamily="monospace"
                          style={{ pointerEvents: 'none', transition: 'fill 150ms ease-out' }}
                        >
                          {obs.temp}°C ({obs.zStr})
                        </text>
                      </>
                    )}

                    {/* Observation Node */}
                    <circle
                      cx={cx}
                      cy={cy}
                      r={obs.isAnomaly ? 5.5 : isActive ? 5.2 : 4}
                      fill={isActive && !obs.isAnomaly ? '#FFFFFF' : dotColor}
                      stroke="#080c14"
                      strokeWidth="1.5"
                      style={{ pointerEvents: 'none', transition: 'all 150ms ease-out' }}
                    />
                  </g>
                )
              })}

              {/* X Axis Ticks (-4 to +4) */}
              {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((tick) => {
                const tx = toScanX(tick)
                const label = tick > 0 ? `+${tick}` : `${tick}`
                return (
                  <g key={tick}>
                    <line x1={tx} y1="182" x2={tx} y2="187" stroke="#64748b" strokeWidth="1.5" />
                    <text
                      x={tx}
                      y="201"
                      fill={
                        Math.abs(tick) >= 3
                          ? '#FF5A5F'
                          : Math.abs(tick) === 2
                          ? '#FFD166'
                          : tick === 0
                          ? '#FFFFFF'
                          : '#94a3b8'
                      }
                      fontWeight={Math.abs(tick) >= 2 || tick === 0 ? 'bold' : 'normal'}
                      fontSize="10.5"
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      {label}
                    </text>
                  </g>
                )
              })}

              <text x="353" y="223" fill="#94a3b8" fontSize="11" textAnchor="middle" fontFamily="sans-serif">
                Skala Z-Score (μ = 50°C pada Z = 0, setiap 1 unit Z = 5°C)
              </text>
            </svg>

            {/* Zone Legend */}
            <div className="flex flex-wrap justify-between items-center gap-3 text-xs sm:text-[13px] font-body text-slate-300 border-t border-white/10 pt-3 mt-1">
              <span className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#55D6A5]" />
                Normal (|Z| &lt; 2)
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#FFD166]" />
                Peringatan (2 ≤ |Z| &lt; 3)
              </span>
              <span className="flex items-center gap-2">
                <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#FF5A5F]" />
                Ekstrem / Kandidat Anomali (|Z| ≥ 3): <strong className="text-[#FF5A5F]">#6 • 68°C (+3,6)</strong>
              </span>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

/** LAYOUT KHUSUS SLIDE 08: DATA & STATISTICAL INVESTIGATION (Data Lab Investigation Board) */
function DataLabLayout({ slide }: { slide: SlideMetadata }) {
  type DistKey = 'binomial' | 'poisson' | 'exponential' | 'normal'
  const [focusedDist, setFocusedDist] = useState<DistKey | null>(null)

  const distMeta: Record<DistKey, { label: string; color: string }> = {
    binomial: { label: 'BINOMIAL', color: '#FF6B6B' },
    poisson: { label: 'POISSON', color: '#FFD166' },
    exponential: { label: 'EKSPONENSIAL', color: '#A78BFA' },
    normal: { label: 'NORMAL', color: '#35C9F4' },
  }

  const decisionSteps: Array<{
    step: number
    question: string
    target: DistKey
  }> = [
    {
      step: 1,
      question: 'Apakah kita menghitung jumlah keberhasilan dari sejumlah percobaan tetap?',
      target: 'binomial',
    },
    {
      step: 2,
      question:
        'Apakah kita menghitung jumlah kejadian dalam interval waktu atau ruang tertentu dengan laju rata-rata konstan?',
      target: 'poisson',
    },
    {
      step: 3,
      question: 'Apakah kita mengukur waktu tunggu sampai kejadian berikutnya dalam proses Poisson?',
      target: 'exponential',
    },
    {
      step: 4,
      question:
        'Apakah kita mengukur variabel kontinu yang memiliki pola penyebaran simetris menyerupai kurva lonceng?',
      target: 'normal',
    },
  ]

  const comparisonRows: Array<{
    attribute: string
    binomial: string
    poisson: string
    exponential: string
    normal: string
    mono?: boolean
  }> = [
    {
      attribute: 'Jenis Variabel',
      binomial: 'Diskrit',
      poisson: 'Diskrit',
      exponential: 'Kontinu',
      normal: 'Kontinu',
    },
    {
      attribute: 'Fokus Utama',
      binomial: 'Jumlah keberhasilan dalam n percobaan tetap',
      poisson: 'Jumlah kejadian dalam interval tertentu',
      exponential: 'Waktu tunggu antar-kejadian',
      normal: 'Penyebaran pengukuran di sekitar rata-rata',
    },
    {
      attribute: 'Parameter',
      binomial: 'n dan p',
      poisson: 'λ',
      exponential: 'λ',
      normal: 'μ dan σ',
      mono: true,
    },
    {
      attribute: 'Fungsi Peluang',
      binomial: 'Probability Mass Function (PMF)',
      poisson: 'Probability Mass Function (PMF)',
      exponential: 'Probability Density Function (PDF)',
      normal: 'Probability Density Function (PDF)',
    },
    {
      attribute: 'Mean E(X)',
      binomial: 'np',
      poisson: 'λ',
      exponential: '1 / λ',
      normal: 'μ',
      mono: true,
    },
    {
      attribute: 'Varians Var(X)',
      binomial: 'np(1 - p)',
      poisson: 'λ',
      exponential: '1 / λ²',
      normal: 'σ²',
      mono: true,
    },
    {
      attribute: 'Contoh Kasus',
      binomial: 'Jumlah modul yang mengalami kerusakan dari 10 modul yang diperiksa',
      poisson: 'Jumlah laporan anomali dalam 10 menit',
      exponential: 'Waktu tunggu sampai laporan anomali berikutnya muncul',
      normal: 'Variasi waktu penyelesaian tugas kalibrasi sensor',
    },
  ]

  const investigations: Array<{
    code: string
    distKey: DistKey
    title: string
    params: string[]
    question: string
    result: string
    interpretation: string
  }> = [
    {
      code: 'INVESTIGATION 01',
      distKey: 'binomial',
      title: 'BINOMIAL',
      params: ['n = 10', 'p = 0,05', 'x = 2'],
      question: 'Berapa probabilitas tepat dua modul mengalami kerusakan?',
      result: 'P(X = 2) ≈ 7,46%',
      interpretation:
        'Kemungkinan tepat dua modul mengalami kerusakan dalam 10 pemeriksaan adalah sekitar 7,46%.',
    },
    {
      code: 'INVESTIGATION 02',
      distKey: 'poisson',
      title: 'POISSON',
      params: ['λ = 2 kejadian / 10 menit', 'x = 3'],
      question: 'Berapa probabilitas muncul tepat tiga laporan anomali dalam 10 menit?',
      result: 'P(X = 3) ≈ 18,04%',
      interpretation:
        'Kemungkinan muncul tepat tiga laporan anomali dalam interval 10 menit adalah sekitar 18,04%.',
    },
    {
      code: 'INVESTIGATION 03',
      distKey: 'exponential',
      title: 'EKSPONENSIAL',
      params: ['λ = 0,2 kejadian / menit', 't = 5 menit'],
      question: 'Berapa probabilitas harus menunggu lebih dari lima menit?',
      result: 'P(X > 5) ≈ 36,79%',
      interpretation:
        'Kemungkinan waktu tunggu sampai laporan berikutnya melebihi lima menit adalah sekitar 36,79%.',
    },
    {
      code: 'INVESTIGATION 04',
      distKey: 'normal',
      title: 'NORMAL',
      params: ['μ = 10 menit', 'σ = 2 menit'],
      question: 'Berapa probabilitas waktu penyelesaian tugas berada antara 8 hingga 12 menit?',
      result: 'P(8 ≤ X ≤ 12) ≈ 68,27%',
      interpretation:
        'Sekitar 68,27% waktu penyelesaian tugas diperkirakan berada pada rentang 8–12 menit.',
    },
  ]

  const workflowSteps = [
    {
      num: '01',
      title: 'IDENTIFY THE VARIABLE',
      desc: 'Tentukan variabel acak yang ingin diamati.',
    },
    {
      num: '02',
      title: 'CLASSIFY THE DATA',
      desc: 'Identifikasi apakah data bersifat diskrit atau kontinu.',
    },
    {
      num: '03',
      title: 'SELECT THE DISTRIBUTION',
      desc: 'Pilih distribusi berdasarkan karakteristik dan asumsi data.',
    },
    {
      num: '04',
      title: 'CALCULATE THE PROBABILITY',
      desc: 'Tentukan parameter dan hitung probabilitas menggunakan formula yang sesuai.',
    },
    {
      num: '05',
      title: 'INTERPRET THE RESULT',
      desc: 'Terjemahkan hasil perhitungan menjadi informasi yang bermakna dalam konteks permasalahan.',
    },
  ]

  const toggleFocus = (key: DistKey) => {
    setFocusedDist((prev) => (prev === key ? null : key))
  }

  return (
    <div className="h-full w-full min-h-0 overflow-y-auto custom-scrollbar pr-2 select-none text-slate-200">
      {/* Panel Utama Full-Width: DATA LAB / INVESTIGATION BOARD */}
      <div className="w-full rounded-xl border-2 border-black/80 bg-[#0d121c] p-4 sm:p-5 shadow-inner space-y-6">

        {/* SECTION 1 — MODEL SELECTION */}
        <section className="space-y-3.5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#35C9F4]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              01. Memilih Model Distribusi yang Tepat
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="floating-crewmate shrink-0">
              <AssetSlot
                src={slide.characterAsset}
                alt={slide.characterAlt || 'Crewmate Blue Accessing Data Records'}
                className="h-12 w-auto object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
              />
            </div>
            <p className="font-body text-sm sm:text-[15px] text-slate-100 leading-relaxed">
              Pemilihan distribusi probabilitas bergantung pada karakteristik variabel acak serta mekanisme kejadian yang diamati. Klik salah satu pertanyaan untuk menyorot model terkait pada papan investigasi.
            </p>
          </div>

          {/* 4-Step Decision Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            {decisionSteps.map((item) => {
              const meta = distMeta[item.target]
              const isSelected = focusedDist === item.target
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => toggleFocus(item.target)}
                  className="text-left rounded-xl border bg-[#131926] p-3.5 flex flex-col justify-between gap-2.5 cursor-pointer transition-colors"
                  style={{
                    borderColor: isSelected ? meta.color : 'rgba(255,255,255,0.1)',
                    backgroundColor: isSelected ? 'rgba(255,255,255,0.04)' : '#131926',
                  }}
                >
                  <div className="space-y-1">
                    <span className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                      Pertanyaan {item.step}
                    </span>
                    <p className="font-body text-[13px] sm:text-sm text-slate-100 leading-relaxed">
                      {item.question}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-2 font-mono text-xs">
                    <span className="text-slate-400">YA →</span>
                    <span
                      className="px-2.5 py-0.5 rounded font-bold tracking-wide"
                      style={{
                        color: meta.color,
                        backgroundColor: `${meta.color}18`,
                        border: `1px solid ${meta.color}55`,
                      }}
                    >
                      DISTRIBUSI {meta.label}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="rounded-lg border border-white/10 bg-[#080c14] px-3.5 py-2.5 text-xs sm:text-[13px] font-body text-slate-300 leading-relaxed">
            <strong className="text-white">Catatan Pemilihan Model:</strong> Pemilihan model tidak hanya didasarkan pada bentuk grafik atau data yang terkumpul, tetapi juga pada asumsi dan mekanisme yang menghasilkan data tersebut.
          </div>
        </section>

        {/* SECTION 2 — COMPARISON MATRIX (Elemen Utama) */}
        <section className="space-y-3.5 border-t border-white/10 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2">
            <div className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#35C9F4]" />
              <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
                02. Empat Distribusi, Empat Karakteristik
              </h3>
            </div>
            {focusedDist && (
              <button
                type="button"
                onClick={() => setFocusedDist(null)}
                className="font-mono text-xs text-slate-300 hover:text-white underline cursor-pointer"
              >
                Tampilkan Semua Model
              </button>
            )}
          </div>

          <div className="rounded-xl border border-white/15 bg-[#080c14] overflow-x-auto">
            <table className="w-full min-w-[680px] text-left border-collapse font-body text-xs sm:text-[13px]">
              <thead>
                <tr className="border-b border-white/15 bg-[#131926]">
                  <th className="py-3 px-3.5 font-mono text-xs uppercase tracking-wider text-slate-400 w-36">
                    Aspek
                  </th>
                  {(['binomial', 'poisson', 'exponential', 'normal'] as DistKey[]).map((key) => {
                    const meta = distMeta[key]
                    const dimmed = focusedDist !== null && focusedDist !== key
                    return (
                      <th
                        key={key}
                        onClick={() => toggleFocus(key)}
                        className={`py-3 px-3.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider cursor-pointer transition-opacity ${
                          dimmed ? 'opacity-35' : 'opacity-100'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="h-2.5 w-2.5 rounded-full shrink-0"
                            style={{ backgroundColor: meta.color }}
                          />
                          <span style={{ color: meta.color }}>{meta.label}</span>
                        </div>
                      </th>
                    )
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {comparisonRows.map((row) => (
                  <tr key={row.attribute} className="hover:bg-white/[0.02]">
                    <td className="py-2.5 px-3.5 font-mono text-xs font-semibold text-slate-300 align-top bg-white/[0.02]">
                      {row.attribute}
                    </td>
                    {(['binomial', 'poisson', 'exponential', 'normal'] as DistKey[]).map((key) => {
                      const dimmed = focusedDist !== null && focusedDist !== key
                      const val = row[key]
                      return (
                        <td
                          key={key}
                          className={`py-2.5 px-3.5 align-top leading-relaxed transition-opacity ${
                            row.mono ? 'font-mono font-bold text-white' : 'text-slate-200'
                          } ${dimmed ? 'opacity-35' : 'opacity-100'}`}
                        >
                          {val}
                        </td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Penekanan Perbedaan PMF vs PDF */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-[#131926] p-3.5 space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white">
                <span className="h-2 w-2 rounded-full bg-[#FF6B6B]" />
                <span className="h-2 w-2 rounded-full bg-[#FFD166]" />
                Distribusi Diskrit → PMF
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">Probability Mass Function (PMF)</strong> menghitung probabilitas tepat pada suatu nilai titik tertentu (<span className="font-mono text-slate-100">P(X = x)</span>).
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#131926] p-3.5 space-y-1">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white">
                <span className="h-2 w-2 rounded-full bg-[#A78BFA]" />
                <span className="h-2 w-2 rounded-full bg-[#35C9F4]" />
                Distribusi Kontinu → PDF
              </div>
              <p className="font-body text-[13px] sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-white">Probability Density Function (PDF)</strong> menggambarkan kepadatan probabilitas; peluang dicari melalui luas area interval, bukan tepat di satu titik tunggal.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3 — INVESTIGATION RESULTS */}
        <section className="space-y-3.5 border-t border-white/10 pt-5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#35C9F4]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              03. Hasil Investigasi Armada The Skeld
            </h3>
          </div>

          {/* Empat Kartu Ringkasan Distribusi (Investigation 01–04) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {investigations.map((inv) => {
              const meta = distMeta[inv.distKey]
              const dimmed = focusedDist !== null && focusedDist !== inv.distKey
              return (
                <div
                  key={inv.code}
                  className={`rounded-xl border border-white/10 bg-[#131926] p-4 flex flex-col justify-between gap-3 transition-opacity ${
                    dimmed ? 'opacity-40' : 'opacity-100'
                  }`}
                  style={{
                    borderTopWidth: '3px',
                    borderTopColor: meta.color,
                  }}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                        {inv.code}
                      </span>
                      <span
                        className="font-display text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded"
                        style={{ color: meta.color, backgroundColor: `${meta.color}18` }}
                      >
                        {inv.title}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 font-mono text-xs text-slate-300">
                      {inv.params.map((p) => (
                        <span
                          key={p}
                          className="rounded border border-white/10 bg-[#080c14] px-2 py-0.5"
                        >
                          {p}
                        </span>
                      ))}
                    </div>

                    <p className="font-body text-[13px] sm:text-sm text-slate-100 font-medium leading-snug">
                      {inv.question}
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-white/10 pt-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs text-slate-400">Hasil:</span>
                      <span
                        className="font-mono text-sm sm:text-base font-bold px-2.5 py-0.5 rounded"
                        style={{
                          color: meta.color,
                          backgroundColor: `${meta.color}15`,
                          border: `1px solid ${meta.color}45`,
                        }}
                      >
                        {inv.result}
                      </span>
                    </div>
                    <p className="font-body text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                      {inv.interpretation}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Investigation 05 — Anomaly Detection (Slide 07) */}
          <div className="rounded-xl border border-[#FF5A5F]/45 bg-[#131926] p-4 space-y-2.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">
                  INVESTIGATION 05 —
                </span>
                <span className="font-display text-sm font-bold text-[#FF5A5F] uppercase tracking-wide">
                  ANOMALY DETECTION (SLIDE 07)
                </span>
              </div>
              <span className="font-mono text-sm font-bold text-[#FF5A5F] bg-[#FF5A5F]/15 border border-[#FF5A5F]/40 px-3 py-0.5 rounded">
                Z-Score = +3,6
              </span>
            </div>

            <div className="flex flex-wrap gap-2 font-mono text-xs text-slate-300">
              <span className="rounded border border-white/10 bg-[#080c14] px-2.5 py-1">
                Mean suhu = <strong className="text-white">50°C</strong>
              </span>
              <span className="rounded border border-white/10 bg-[#080c14] px-2.5 py-1">
                Standar deviasi = <strong className="text-white">5°C</strong>
              </span>
              <span className="rounded border border-[#FF5A5F]/40 bg-[#080c14] px-2.5 py-1">
                Pengamatan ekstrem = <strong className="text-[#FF5A5F]">68°C</strong>
              </span>
            </div>

            <p className="font-body text-[13px] sm:text-sm text-slate-200 leading-relaxed">
              <strong className="text-white">Kesimpulan:</strong> Pengamatan suhu 68°C merupakan kandidat anomali berdasarkan ambang batas praktis Z-Score dan membutuhkan pemeriksaan lebih lanjut.
            </p>
          </div>

          <p className="font-body text-xs text-slate-400">
            Catatan: Seluruh angka merupakan asumsi simulasi akademik yang digunakan secara konsisten pada presentasi, bukan data aktual permainan Among Us.
          </p>
        </section>

        {/* SECTION 4 — STATISTICAL INVESTIGATION WORKFLOW */}
        <section className="space-y-3.5 border-t border-white/10 pt-5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#35C9F4]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              04. How To Conduct a Probability Investigation
            </h3>
          </div>

          {/* 5-Stage Connected Investigation Pipeline */}
          <div className="rounded-xl border border-white/10 bg-[#080c14] p-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
              {workflowSteps.map((step, idx) => (
                <div key={step.num} className="relative flex flex-col">
                  <div className="flex-1 rounded-lg border border-white/10 bg-[#131926] p-3 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#35C9F4] bg-[#35C9F4]/10 border border-[#35C9F4]/40 px-2 py-0.5 rounded">
                        STEP {step.num}
                      </span>
                      {idx < workflowSteps.length - 1 && (
                        <span className="hidden md:inline font-mono text-xs text-slate-400">
                          →
                        </span>
                      )}
                    </div>
                    <div className="font-display text-xs font-bold uppercase tracking-wide text-white leading-snug pt-0.5">
                      {step.title}
                    </div>
                    <p className="font-body text-xs text-slate-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — KEY FINDINGS */}
        <section className="space-y-3.5 border-t border-white/10 pt-5">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#35C9F4]" />
            <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
              05. What Did We Discover?
            </h3>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#131926] p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="rounded-lg border border-white/10 bg-[#080c14] p-3.5 space-y-1">
                <span className="font-mono text-xs font-bold text-[#35C9F4]">TEMUAN 01</span>
                <p className="font-body text-[13px] sm:text-sm text-slate-200 leading-relaxed">
                  Setiap distribusi memiliki karakteristik dan kegunaan berbeda.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#080c14] p-3.5 space-y-1">
                <span className="font-mono text-xs font-bold text-[#35C9F4]">TEMUAN 02</span>
                <p className="font-body text-[13px] sm:text-sm text-slate-200 leading-relaxed">
                  Pemilihan model probabilitas harus mempertimbangkan jenis variabel, parameter, dan asumsi yang mendasarinya.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-[#080c14] p-3.5 space-y-1">
                <span className="font-mono text-xs font-bold text-[#35C9F4]">TEMUAN 03</span>
                <p className="font-body text-[13px] sm:text-sm text-slate-200 leading-relaxed">
                  Probabilitas membantu mengukur ketidakpastian, sedangkan interpretasi hasil membantu menentukan tindakan selanjutnya.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-[#35C9F4]/40 bg-[#35C9F4]/10 px-4 py-3 text-center">
              <p className="font-display text-sm sm:text-base font-semibold text-white tracking-wide">
                &ldquo;Statistika bukan sekadar menghitung peluang, tetapi memahami pola di balik ketidakpastian.&rdquo;
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

/** LAYOUT B: FORMULA TASK (Rumus Matematis & Penjelasan Parameter) */
function FormulaTaskLayout({ slide }: { slide: SlideMetadata }) {
  // Spesifikasi parameter tematik per distribusi
  const getParameterSpecs = () => {
    switch (slide.key) {
      case 'distribution-binomial':
        return [
          { symbol: 'n', desc: 'Jumlah total percobaan Bernoulli independen' },
          { symbol: 'p', desc: 'Peluang keberhasilan tiap percobaan (0 ≤ p ≤ 1)' },
          { symbol: 'k', desc: 'Banyaknya kejadian sukses target yang diamati' },
        ]
      case 'distribution-poisson':
        return [
          { symbol: 'λ', desc: 'Rata-rata frekuensi kejadian acak per interval acuan' },
          { symbol: 'k', desc: 'Banyaknya kejadian acak aktual dalam interval' },
          { symbol: 'e', desc: 'Bilangan Euler konstan (≈ 2.71828...)' },
        ]
      case 'distribution-exponential':
        return [
          { symbol: 'λ', desc: 'Laju parameter kejadian per satuan interval kontinu' },
          { symbol: 'x', desc: 'Rentang waktu tunggu hingga kejadian berikutnya (x ≥ 0)' },
          { symbol: 'Sifat', desc: 'Karakteristik Memoryless: P(X > s+t | X > s) = P(X > t)' },
        ]
      case 'distribution-normal':
      default:
        return [
          { symbol: 'μ', desc: 'Titik pusat rata-rata data / tendensi sentral kurva' },
          { symbol: 'σ', desc: 'Standar deviasi / tingkat dispersi sebaran data simetris' },
          { symbol: 'x', desc: 'Variabel acak observasi kontinu (-∞ < x < +∞)' },
        ]
    }
  }

  const parameters = getParameterSpecs()

  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-12 gap-3 items-center p-1">
      {/* Sisi Kiri: Terminal Rumus KaTeX CRT Style */}
      <div className="md:col-span-7 flex flex-col justify-between h-full rounded-xl border-2 border-black/80 bg-[#0e121a] p-3.5 shadow-inner">
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: slide.accentColor }}
              />
              <span className="font-display text-xs font-bold uppercase tracking-wider text-white">
                MATHEMATICAL FORMULA // {slide.roomName}
              </span>
            </div>
            <span className="font-mono text-[10px] bg-[#1e2430] border border-black/60 px-2 py-0.5 rounded text-slate-300">
              FORMULA TASK
            </span>
          </div>

          {/* Terminal Layar Rumus Utama */}
          <div className="rounded-xl border-2 border-black/80 bg-[#07090e] p-3 text-center my-auto shadow-inner">
            <span className="font-mono text-[10px] text-[#35C9F4] uppercase tracking-widest block mb-1 font-bold">
              TERMINAL FORMULA KALIBRASI // THE SKELD SENSORS
            </span>
            <div className="font-mono text-sm sm:text-base text-white font-bold tracking-wider py-2 border-y border-white/10 bg-black/40 rounded">
              {slide.key === 'distribution-binomial' && 'P(X = k) = C(n, k) · p^k · (1 - p)^(n - k)'}
              {slide.key === 'distribution-poisson' && 'P(X = k) = (λ^k · e^(-λ)) / k!'}
              {slide.key === 'distribution-exponential' && 'f(x) = λ · e^(-λx), x ≥ 0'}
              {slide.key === 'distribution-normal' && 'f(x) = (1 / (σ√(2π))) · exp(-½ · ((x - μ)/σ)²)'}
              {!['distribution-binomial', 'distribution-poisson', 'distribution-exponential', 'distribution-normal'].includes(slide.key) &&
                'f(x) = Formula Distribusi Terkalibrasi'}
            </div>
            <p className="mt-1.5 font-body text-[11px] text-slate-400">
              Konten perumusan matematis lengkap akan dikalibrasi pada tahap pengisian materi.
            </p>
          </div>
        </div>

        {/* Nilai Harapan (Mean) & Varians Monitor Blocks */}
        <div className="grid grid-cols-2 gap-2 mt-2 font-mono text-[11px]">
          <div className="rounded-lg bg-[#141824] border border-black/70 p-2 text-center shadow-inner">
            <span className="text-[#35C9F4] block text-[10px] uppercase font-bold tracking-wider">
              Nilai Harapan (Mean) • E[X]
            </span>
            <span className="text-white text-xs font-semibold mt-0.5 block">
              Menunggu pengisian materi
            </span>
          </div>
          <div className="rounded-lg bg-[#141824] border border-black/70 p-2 text-center shadow-inner">
            <span className="text-[#55D6A5] block text-[10px] uppercase font-bold tracking-wider">
              Varians (Variance) • Var(X)
            </span>
            <span className="text-white text-xs font-semibold mt-0.5 block">
              Menunggu pengisian materi
            </span>
          </div>
        </div>
      </div>

      {/* Sisi Kanan: Parameter Breakdown & Operator Crewmate */}
      <div className="md:col-span-5 flex flex-col justify-between h-full rounded-xl border-2 border-black/80 bg-[#141824] p-3.5 shadow-inner">
        <div>
          <div className="border-b border-white/10 pb-1.5 mb-2 font-display text-xs font-bold uppercase text-white flex justify-between items-center">
            <span>SPESIFIKASI PARAMETER</span>
            <span className="font-mono text-[10px] text-[#FFD166] bg-black/40 px-1.5 py-0.5 rounded">
              {slide.shortTitle}
            </span>
          </div>

          {/* Daftar Parameter Terstruktur */}
          <div className="space-y-1.5">
            {parameters.map((param, i) => (
              <div
                key={i}
                className="flex items-start gap-2 rounded-lg bg-[#0d1017] border border-white/5 p-1.5 text-[11px]"
              >
                <span className="font-mono font-bold text-[#FFD166] min-w-[28px] text-center bg-black/50 px-1 py-0.5 rounded border border-white/10">
                  {param.symbol}
                </span>
                <span className="font-body text-slate-300 leading-tight">
                  {param.desc}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Operator Crewmate Badge */}
        <div className="my-2 flex flex-col items-center justify-center p-2.5 border border-dashed border-white/20 rounded-xl bg-black/25 text-center">
          <div className="floating-crewmate mb-1">
            <AssetSlot
              src={slide.characterAsset}
              alt={slide.characterAlt || 'Crewmate In Action'}
              className="max-h-20 w-auto object-contain filter drop-shadow-[0_6px_12px_rgba(0,0,0,0.8)]"
            />
          </div>
          <span className="font-display text-xs font-bold text-white">
            {slide.characterAlt}
          </span>
          <span className="font-mono text-[10px] text-slate-400 mt-0.5">
            Panel kontrol parameter interaktif akan aktif pada tahap materi
          </span>
        </div>

        <div className="text-[10px] font-mono text-slate-400 text-right border-t border-white/10 pt-1">
          STATUS SISTEM: MENUNGGU KALIBRASI PARAMETER
        </div>
      </div>
    </div>
  )
}

/** LAYOUT C: VISUALIZATION TASK (Grafik Distribusi & Z-Score) */
function VisualizationTaskLayout({ slide }: { slide: SlideMetadata }) {
  return (
    <div className="grid h-full grid-cols-1 md:grid-cols-12 gap-3 items-center p-1">
      {/* Sisi Kiri: Teori Standardisasi & Skor Baku */}
      <div className="md:col-span-5 flex flex-col justify-between h-full rounded-xl border-2 border-black/80 bg-[#141824] p-3.5 shadow-inner">
        <div>
          <div className="flex items-center gap-2 border-b border-white/10 pb-2 mb-2">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: slide.accentColor }}
            />
            <h3 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              STANDARDISASI Z-SCORE
            </h3>
          </div>

          <div className="space-y-2 font-body text-xs text-slate-200">
            <p className="leading-relaxed">
              Transformasi observasi variabel acak Normal kontinu ke skor baku <span className="font-mono text-[#35C9F4]">Z ~ N(0, 1)</span>:
            </p>

            <div className="rounded-lg border border-black/70 bg-[#07090e] p-2.5 font-mono text-sm text-center text-[#8B5CF6] font-bold shadow-inner">
              Z = (X - μ) / σ
            </div>

            {/* Panduan Deviasi Baku */}
            <div className="space-y-1.5 text-[11px] font-mono mt-2">
              <div className="flex justify-between items-center rounded bg-[#0d1017] p-1.5 border border-white/5">
                <span className="text-white font-bold">|Z| ≤ 1σ:</span>
                <span className="text-[#55D6A5]">Rentang Mayoritas (68.27%)</span>
              </div>
              <div className="flex justify-between items-center rounded bg-[#0d1017] p-1.5 border border-white/5">
                <span className="text-white font-bold">|Z| ≤ 2σ:</span>
                <span className="text-[#35C9F4]">Toleransi Wajar (95.45%)</span>
              </div>
              <div className="flex justify-between items-center rounded bg-[#0d1017] p-1.5 border border-white/5">
                <span className="text-white font-bold">|Z| &gt; 2σ:</span>
                <span className="text-[#FFD166]">Deviasi Tidak Lazim (4.55%)</span>
              </div>
              <div className="flex justify-between items-center rounded bg-[#0d1017] p-1.5 border border-white/5">
                <span className="text-white font-bold">|Z| &gt; 3σ:</span>
                <span className="text-[#FF6B6B]">Anomali Ekstrem Outlier (0.27%)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-1.5 flex items-center justify-between text-[10px] font-mono text-slate-400">
          <span>Standard Normal Curve</span>
          <span className="text-[#8B5CF6] font-bold">Z-Score Stage</span>
        </div>
      </div>

      {/* Sisi Kanan: Panggung Grafik Visualisasi Luas (Radar / Oscilloscope Canvas) */}
      <div className="md:col-span-7 flex flex-col justify-between h-full rounded-xl border-2 border-black/80 bg-[#0a0d14] p-3.5 shadow-inner">
        {/* Header Canvas & Legend */}
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2">
          <span className="font-display text-xs font-bold uppercase text-white">
            PANGGUNG VISUALISASI KURVA GAUSSIAN
          </span>
          <div className="flex items-center gap-2 font-mono text-[10px]">
            <span className="flex items-center gap-1 text-[#55D6A5]">
              <span className="h-2 w-2 rounded-full bg-[#55D6A5]" />
              Wajar (|Z|≤2)
            </span>
            <span className="flex items-center gap-1 text-[#FF6B6B]">
              <span className="h-2 w-2 rounded-full bg-[#FF6B6B]" />
              Outlier (|Z|&gt;2)
            </span>
          </div>
        </div>

        {/* Area Grafik Luas Bergrid (Oscilloscope Viewport) */}
        <div className="relative my-auto flex flex-col items-center justify-between p-3 rounded-xl border border-white/15 bg-[#06080e] shadow-inner h-[76%] overflow-hidden">
          {/* Subtle Gridlines Background */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(to right, #35C9F4 1px, transparent 1px), linear-gradient(to bottom, #35C9F4 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />

          {/* Sumbu Y Label */}
          <div className="w-full flex justify-between font-mono text-[10px] text-slate-400 z-10">
            <span>↑ Kerapatan Peluang f(z)</span>
            <span className="text-[#35C9F4] font-bold">N(0, 1) STANDARD</span>
          </div>

          {/* Center Graphic: Kurva Bell Gaussian SVG Terstruktur */}
          <div className="relative z-10 w-full flex flex-col items-center justify-center my-auto">
            <svg
              viewBox="0 0 400 120"
              className="w-full max-w-md h-24 stroke-current overflow-visible"
              aria-label="Kurva Distribusi Normal Simetris Gaussian"
            >
              {/* Shaded Area ±2σ */}
              <path
                d="M 50 110 Q 150 110 180 50 Q 200 10 220 50 Q 250 110 350 110 Z"
                fill="rgba(53, 201, 244, 0.12)"
              />
              {/* Bell Curve Line */}
              <path
                d="M 20 110 Q 140 110 180 45 Q 200 8 220 45 Q 260 110 380 110"
                fill="none"
                stroke="#35C9F4"
                strokeWidth="2.5"
              />
              {/* Center Mean Line */}
              <line
                x1="200"
                y1="8"
                x2="200"
                y2="110"
                stroke="#55D6A5"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              {/* Base Axis Line */}
              <line x1="10" y1="110" x2="390" y2="110" stroke="#475569" strokeWidth="1.5" />
            </svg>

            {/* Sumbu X Ticks & Labels */}
            <div className="w-full max-w-md flex justify-between font-mono text-[10px] text-slate-300 mt-1 px-3">
              <span className="text-[#FF6B6B]">-3σ</span>
              <span className="text-[#FFD166]">-2σ</span>
              <span className="text-[#55D6A5]">-1σ</span>
              <span className="text-white font-bold">0 (μ)</span>
              <span className="text-[#55D6A5]">+1σ</span>
              <span className="text-[#FFD166]">+2σ</span>
              <span className="text-[#FF6B6B]">+3σ</span>
            </div>
          </div>

          {/* Bottom Note */}
          <div className="w-full text-center font-mono text-[10px] text-slate-400 z-10 border-t border-white/5 pt-1">
            Kanvas siap diintegrasikan dengan modul Recharts pada tahap pengembangan materi.
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-1.5 font-mono text-[10px] text-slate-400">
          <span>SAFE-ZONE 16:9 VIEWPORT</span>
          <span className="text-[#55D6A5] font-bold">RECHARTS ENGINE READY</span>
        </div>
      </div>
    </div>
  )
}

/** LAYOUT D: COMPARISON TASK (Matriks Tabel Komparasi 4 Distribusi) */
function ComparisonTaskLayout({ slide }: { slide: SlideMetadata }) {
  const comparisonData = [
    {
      name: '1. BINOMIAL',
      accent: '#FF6B6B',
      type: 'Diskrit',
      typeColor: '#35C9F4',
      params: 'n (percobaan), p (peluang sukses)',
      formula: 'P(X=k) = C(n,k)·p^k·(1-p)^(n-k)',
      mean: 'E[X] = n·p',
      variance: 'Var(X) = n·p·(1-p)',
    },
    {
      name: '2. POISSON',
      accent: '#FFD166',
      type: 'Diskrit',
      typeColor: '#35C9F4',
      params: 'λ (laju kejadian per interval)',
      formula: 'P(X=k) = (λ^k · e^(-λ)) / k!',
      mean: 'E[X] = λ',
      variance: 'Var(X) = λ',
    },
    {
      name: '3. EKSPONENSIAL',
      accent: '#8B5CF6',
      type: 'Kontinu',
      typeColor: '#8B5CF6',
      params: 'λ (laju kedatangan kontinu)',
      formula: 'f(x) = λ·e^(-λx), x ≥ 0',
      mean: 'E[X] = 1/λ',
      variance: 'Var(X) = 1/λ²',
    },
    {
      name: '4. NORMAL',
      accent: '#35C9F4',
      type: 'Kontinu',
      typeColor: '#8B5CF6',
      params: 'μ (rata-rata), σ (deviasi baku)',
      formula: 'f(x) = (1/(σ√(2π)))·exp(-½((x-μ)/σ)²)',
      mean: 'E[X] = μ',
      variance: 'Var(X) = σ²',
    },
  ]

  return (
    <div className="flex flex-col justify-between h-full p-1 select-none">
      <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-2">
        <span className="font-display text-xs font-bold uppercase tracking-wider text-[#55D6A5]">
          {slide.roomName} // TABEL PERBANDINGAN 4 DISTRIBUSI
        </span>
        <span className="font-mono text-[10px] bg-[#141824] px-2 py-0.5 rounded border border-black/60 text-white">
          DATABASE TEMPLATE
        </span>
      </div>

      {/* Tabel Komparasi Terstruktur & Terbaca */}
      <div className="my-auto h-[78%] overflow-hidden rounded-xl border-2 border-black/80 bg-[#10141f] shadow-inner">
        <div className="overflow-x-auto h-full">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b-2 border-black/80 bg-[#161c2b] text-[11px] font-display uppercase tracking-wider text-slate-300">
                <th className="p-2 sm:p-2.5">Distribusi</th>
                <th className="p-2 sm:p-2.5">Tipe Variabel</th>
                <th className="p-2 sm:p-2.5">Parameter Kunci</th>
                <th className="p-2 sm:p-2.5">Fungsi Peluang</th>
                <th className="p-2 sm:p-2.5">Mean (E[X])</th>
                <th className="p-2 sm:p-2.5">Varians (Var(X))</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-mono text-[11px]">
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  <td className="p-2 sm:p-2.5 font-display font-bold" style={{ color: row.accent }}>
                    {row.name}
                  </td>
                  <td className="p-2 sm:p-2.5">
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-bold uppercase border border-black/40"
                      style={{
                        backgroundColor: `${row.typeColor}22`,
                        color: row.typeColor,
                      }}
                    >
                      {row.type}
                    </span>
                  </td>
                  <td className="p-2 sm:p-2.5 text-slate-200">{row.params}</td>
                  <td className="p-2 sm:p-2.5 text-white font-semibold">{row.formula}</td>
                  <td className="p-2 sm:p-2.5 text-[#35C9F4] font-bold">{row.mean}</td>
                  <td className="p-2 sm:p-2.5 text-[#55D6A5] font-bold">{row.variance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="border-t border-white/10 pt-1.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
        <span>Matriks Komparasi Lengkap Siap Dihubungkan dengan Data Interaktif</span>
        <span className="text-[#55D6A5] font-bold">Slide Database</span>
      </div>
    </div>
  )
}

/** LAYOUT E: EMERGENCY MEETING (Slide 09 — Kuis Evaluasi Interaktif 6 Soal) */
function EmergencyMeetingLayout({ slide }: { slide: SlideMetadata }) {
  type QuizStage = 'intro' | 'quiz' | 'result' | 'review'

  interface QuizQuestion {
    id: number
    topic: string
    scenario: string
    question: string
    options: Array<{ label: 'A' | 'B' | 'C' | 'D'; text: string }>
    correctIdx: number
    steps?: string[]
    explanation: string
  }

  const QUESTIONS: QuizQuestion[] = [
    {
      id: 1,
      topic: 'BINOMIAL DISTRIBUTION',
      scenario:
        'Pada Slide 03, sebuah inspeksi modul menggunakan Distribusi Binomial dengan dua kemungkinan hasil: Sukses (rusak) atau Gagal (normal).',
      question:
        'Manakah pernyataan yang merupakan empat syarat utama Distribusi Binomial?',
      options: [
        {
          label: 'A',
          text: 'Jumlah percobaan terus bertambah acak, peluang berubah, dan tiap hasil saling memengaruhi.',
        },
        {
          label: 'B',
          text: 'Jumlah percobaan (n) tetap, dua hasil dikotomi, peluang sukses konstan, dan saling independen.',
        },
        {
          label: 'C',
          text: 'Hanya mengukur waktu tunggu kontinu hingga kejadian berikutnya muncul.',
        },
        {
          label: 'D',
          text: 'Nilai rata-rata, median, dan modus wajib membentuk kurva lonceng simetris.',
        },
      ],
      correctIdx: 1, // B
      explanation:
        'Sesuai Slide 03, Distribusi Binomial mensyaratkan jumlah percobaan tetap (n), hanya dua kemungkinan hasil (Sukses/Gagal), peluang sukses (p) konstan, dan percobaan saling independen.',
    },
    {
      id: 2,
      topic: 'POISSON DISTRIBUTION',
      scenario:
        'Pada Slide 04 (Admin Navigation Room), Distribusi Poisson memodelkan jumlah laporan anomali dalam interval waktu tertentu menggunakan parameter λ.',
      question:
        'Apakah arti parameter λ pada Distribusi Poisson dan hubungan antara nilai Mean dan Variansnya?',
      options: [
        {
          label: 'A',
          text: 'λ adalah peluang gagal tiap percobaan; nilai varians selalu lebih besar daripada mean.',
        },
        {
          label: 'B',
          text: 'λ adalah standar deviasi waktu; nilai mean selalu lebih besar daripada varians.',
        },
        {
          label: 'C',
          text: 'λ adalah rata-rata jumlah kejadian per interval; nilai Mean dan Varians sama-sama bernilai λ.',
        },
        {
          label: 'D',
          text: 'λ adalah jumlah total percobaan tetap; nilai mean dan varians selalu bernilai 1.',
        },
      ],
      correctIdx: 2, // C
      explanation:
        'Pada Slide 04 dijelaskan bahwa λ menyatakan rata-rata frekuensi kejadian dalam interval tetap, dengan sifat khusus E(X) = λ dan Var(X) = λ (mean dan varians bernilai sama).',
    },
    {
      id: 3,
      topic: 'EXPONENTIAL DISTRIBUTION',
      scenario:
        'Pada Slide 05 (Electrical Room), Distribusi Eksponensial memodelkan waktu tunggu antar-kejadian dan memiliki sifat khusus yang disebut Memoryless.',
      question: 'Apa makna dari sifat Memoryless pada Distribusi Eksponensial?',
      options: [
        {
          label: 'A',
          text: 'Semakin lama sistem menunggu tanpa gangguan, peluang gangguan berikutnya pasti membesar.',
        },
        {
          label: 'B',
          text: 'Peluang menunggu tambahan waktu tertentu tidak dipengaruhi oleh berapa lama waktu tunggu yang sudah berlalu.',
        },
        {
          label: 'C',
          text: 'Waktu tunggu hanya dapat berupa bilangan bulat terpisah seperti 0, 1, atau 2.',
        },
        {
          label: 'D',
          text: 'Sistem selalu mencatat riwayat kerusakan sebelumnya untuk memprediksi kegagalan berikutnya.',
        },
      ],
      correctIdx: 1, // B
      explanation:
        'Sesuai Slide 05, sifat Memoryless berarti proses tidak mengingat waktu yang sudah lewat: peluang menunggu tambahan waktu t menit tetap sama seperti baru mulai menunggu dari awal.',
    },
    {
      id: 4,
      topic: 'NORMAL DISTRIBUTION',
      scenario:
        'Pada Slide 06 (Reactor Room), Distribusi Normal digambarkan dengan kurva lonceng kontinu yang dipengaruhi oleh parameter μ dan σ.',
      question:
        'Manakah pernyataan yang BENAR mengenai karakteristik utama kurva Distribusi Normal?',
      options: [
        {
          label: 'A',
          text: 'Kurva tidak simetris dan ekornya memotong sumbu horizontal tepat di batas tertentu.',
        },
        {
          label: 'B',
          text: 'Nilai Mean = Median = Modus tepat di titik pusat, kurva simetris, dan ekornya bersifat asimtotik.',
        },
        {
          label: 'C',
          text: 'Total seluruh luas area di bawah kurva dari −∞ hingga +∞ bernilai 0,5 (50%).',
        },
        {
          label: 'D',
          text: 'Parameter μ menentukan lebar kurva, sedangkan σ menentukan titik tengah kurva.',
        },
      ],
      correctIdx: 1, // B
      explanation:
        'Sesuai Slide 06, Distribusi Normal berbentuk kurva lonceng simetris satu puncak dengan Mean = Median = Modus, luas total area di bawah kurva = 1 (100%), serta kedua ekor bersifat asimtotik.',
    },
    {
      id: 5,
      topic: 'Z-SCORE & ANOMALY',
      scenario:
        'Pada Slide 07 (Security Room), kru menggunakan Z-Score untuk melakukan standardisasi pengamatan sensor dan memindai potensi anomali.',
      question:
        'Berdasarkan pedoman zona pemindaian pada Slide 07, kondisi Z-Score manakah yang menandai Zona Ekstrem / kandidat anomali?',
      options: [
        {
          label: 'A',
          text: 'Ketika Z = 0, karena pengamatan tepat sama dengan rata-rata.',
        },
        {
          label: 'B',
          text: 'Ketika |Z| < 2, karena variasi masih dekat dengan pusat distribusi.',
        },
        {
          label: 'C',
          text: 'Ketika |Z| ≥ 3, karena nilai menyimpang sangat jauh dari rata-rata.',
        },
        {
          label: 'D',
          text: 'Ketika tanda Z bernilai positif (+), karena semua nilai di atas rata-rata adalah anomali.',
        },
      ],
      correctIdx: 2, // C
      explanation:
        'Sesuai Pedoman Zona Pemindaian (|Z|) pada Slide 07: |Z| < 2 adalah Zona Normal, 2 ≤ |Z| < 3 adalah Zona Peringatan, dan |Z| ≥ 3 adalah Zona Ekstrem / kandidat anomali.',
    },
    {
      id: 6,
      topic: 'MODEL SELECTION',
      scenario:
        'Pada Slide 08 (Data Lab), pemilihan distribusi probabilitas bergantung pada jenis variabel acak serta apa yang sedang diamati.',
      question:
        'Manakah perbedaan tepat antara penggunaan Distribusi Poisson dan Distribusi Eksponensial?',
      options: [
        {
          label: 'A',
          text: 'Poisson menghitung banyaknya kejadian dalam suatu interval, sedangkan Eksponensial memodelkan waktu tunggu antar-kejadian.',
        },
        {
          label: 'B',
          text: 'Poisson memodelkan waktu tunggu antar-kejadian, sedangkan Eksponensial menghitung jumlah keberhasilan.',
        },
        {
          label: 'C',
          text: 'Poisson digunakan untuk data pengukuran kontinu, sedangkan Eksponensial untuk data diskrit bulat.',
        },
        {
          label: 'D',
          text: 'Keduanya digunakan untuk memodelkan kurva lonceng simetris dari hasil pengukuran sensor.',
        },
      ],
      correctIdx: 0, // A
      explanation:
        'Sesuai perbandingan pada Slide 05 dan Decision Flow Slide 08: Distribusi Poisson (diskrit) menghitung frekuensi jumlah kejadian dalam interval tertentu, sedangkan Distribusi Eksponensial (kontinu) memodelkan waktu tunggu antar-kejadian.',
    },
  ]

  const [stage, setStage] = useState<QuizStage>('intro')
  const [currentIdx, setCurrentIdx] = useState<number>(0)
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)
  const [confirmedAnswers, setConfirmedAnswers] = useState<Array<number | null>>(() =>
    Array(QUESTIONS.length).fill(null)
  )

  const currentQ = QUESTIONS[currentIdx]
  const confirmedSelection = confirmedAnswers[currentIdx]
  const isConfirmed = confirmedSelection !== null
  const activeSelection = isConfirmed ? confirmedSelection : selectedIdx
  const isCurrentCorrect = isConfirmed && confirmedSelection === currentQ.correctIdx

  const correctCount = confirmedAnswers.reduce<number>(
    (acc, ans, idx) => (ans === QUESTIONS[idx].correctIdx ? acc + 1 : acc),
    0
  )
  const totalQuestions = QUESTIONS.length
  const wrongCount = totalQuestions - correctCount
  const score = correctCount * 10
  const maxScore = totalQuestions * 10
  const successRate = Math.round((correctCount / totalQuestions) * 100)

  const getRankInfo = (pts: number) => {
    if (pts >= 50) {
      return {
        title: 'CHIEF INVESTIGATOR',
        color: '#44D934',
        desc: 'Pemahaman sangat kuat dalam konsep keempat distribusi, pemilihan model, dan interpretasi Z-Score.',
      }
    }
    if (pts >= 30) {
      return {
        title: 'CREWMATE ANALYST',
        color: '#35C9F4',
        desc: 'Konsep dasar sudah terbentuk dengan baik; tinjau kembali karakteristik tiap distribusi untuk hasil maksimal.',
      }
    }
    return {
      title: 'JUNIOR CREWMATE',
      color: '#FF6B6B',
      desc: 'Terus pelajari karakteristik keempat distribusi probabilitas serta pedoman Z-Score lalu coba ulangi Emergency Meeting!',
    }
  }

  const handleStartQuiz = () => {
    setConfirmedAnswers(Array(QUESTIONS.length).fill(null))
    setCurrentIdx(0)
    setSelectedIdx(null)
    setStage('quiz')
  }

  const handleSelectOption = (optIdx: number) => {
    if (isConfirmed) return
    setSelectedIdx(optIdx)
  }

  const handleConfirmVote = () => {
    if (selectedIdx === null || isConfirmed) return
    setConfirmedAnswers((prev) => {
      const next = [...prev]
      next[currentIdx] = selectedIdx
      return next
    })
  }

  const handleNextQuestion = () => {
    if (!isConfirmed) return
    if (currentIdx < totalQuestions - 1) {
      setCurrentIdx((prev) => prev + 1)
      setSelectedIdx(null)
    } else {
      setStage('result')
    }
  }

  const handleRetakeQuiz = () => {
    setConfirmedAnswers(Array(QUESTIONS.length).fill(null))
    setCurrentIdx(0)
    setSelectedIdx(null)
    setStage('quiz')
  }

  const handleContinueMission = () => {
    const nextBtn = document.querySelector<HTMLButtonElement>(
      'button[aria-label="Lanjut ke slide berikutnya"]'
    )
    if (nextBtn) {
      nextBtn.click()
    } else {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: '0', bubbles: true }))
    }
  }

  return (
    <div className="h-full w-full min-h-0 overflow-y-auto custom-scrollbar pr-2 select-none text-slate-200">
      <div className="w-full min-h-full rounded-xl border-2 border-black/80 bg-[#0d121c] p-4 sm:p-5 shadow-inner flex flex-col justify-between">

        {/* ==================== STAGE A: EMERGENCY MEETING INTRO ==================== */}
        {stage === 'intro' && (
          <div className="my-auto flex flex-col items-center text-center max-w-2xl mx-auto py-3 space-y-5">
            {/* Kru Berkumpul Mengelilingi Tombol Emergency Meeting */}
            <div className="flex items-end justify-center gap-3 sm:gap-5">
              <div className="hidden sm:block">
                <AssetSlot
                  src={AMONG_US_ASSETS.characters.redStanding}
                  alt="Crewmate Orange Meeting"
                  className="h-14 w-auto object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.8)]"
                />
              </div>
              <AssetSlot
                src={slide.characterAsset}
                alt={slide.characterAlt || 'Crewmate Voting'}
                className="h-16 sm:h-20 w-auto object-contain drop-shadow-[0_6px_10px_rgba(0,0,0,0.85)]"
              />

              {/* Tombol Emergency Meeting Merah Bergaya Game Asli */}
              <div className="relative flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-4 border-black bg-[#2b3344] shadow-[0_6px_0_#000,inset_0_2px_0_rgba(255,255,255,0.15)] flex items-center justify-center relative">
                  {/* Hazard Corner Bolts */}
                  <span className="absolute top-1.5 left-1.5 w-2 h-2 rounded-full bg-slate-500 border border-black" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-slate-500 border border-black" />
                  <span className="absolute bottom-1.5 left-1.5 w-2 h-2 rounded-full bg-slate-500 border border-black" />
                  <span className="absolute bottom-1.5 right-1.5 w-2 h-2 rounded-full bg-slate-500 border border-black" />
                  {/* Inner Red Dome Button */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-black bg-gradient-to-b from-[#ff4a3a] to-[#c91408] shadow-[0_4px_0_#7f0b04,inset_0_4px_8px_rgba(255,255,255,0.4)] flex items-center justify-center">
                    <div className="w-8 h-3 -mt-6 -ml-3 rounded-full bg-white/35 rotate-[-25deg]" />
                  </div>
                </div>
                <span className="mt-1.5 font-mono text-[10px] tracking-widest uppercase text-[#FF6B6B] font-bold">
                  EMERGENCY BUTTON
                </span>
              </div>

              <AssetSlot
                src={AMONG_US_ASSETS.characters.blueEmergency}
                alt="Crewmate Green Emergency"
                className="h-16 sm:h-20 w-auto object-contain scale-x-[-1] drop-shadow-[0_6px_10px_rgba(0,0,0,0.85)]"
              />
              <div className="hidden sm:block">
                <AssetSlot
                  src={AMONG_US_ASSETS.characters.purpleWires}
                  alt="Crewmate Pink Meeting"
                  className="h-14 w-auto object-contain scale-x-[-1] drop-shadow-[0_6px_10px_rgba(0,0,0,0.8)]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#FF6B6B]/40 bg-[#EA2212]/15 px-3.5 py-1 font-mono text-xs font-bold uppercase tracking-widest text-[#FF6B6B]">
                <span className="h-2 w-2 rounded-full bg-[#EA2212]" />
                6 QUESTIONS • 4 DISTRIBUTIONS
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-wider text-[#EA2212] drop-shadow-[0_3px_0_#000]">
                EMERGENCY MEETING!
              </h3>

              <p className="font-body text-sm sm:text-base text-slate-200 max-w-lg mx-auto leading-relaxed">
                &ldquo;Anomaly detected. Time to test your statistical knowledge.&rdquo;
              </p>
            </div>

            <div className="pt-1 flex flex-col items-center gap-2">
              <button
                type="button"
                onClick={handleStartQuiz}
                className="rounded-xl border-[3.5px] border-black bg-[#EA2212] px-10 py-3 font-display text-sm sm:text-base font-black uppercase tracking-widest text-white shadow-[0_5px_0_#000] hover:bg-[#ff3b2d] active:translate-y-1 active:shadow-none cursor-pointer transition-all"
              >
                START QUIZ
              </button>
              <span className="font-mono text-xs text-slate-400">
                10 poin per jawaban benar • Skor maksimum 60 poin
              </span>
            </div>
          </div>
        )}

        {/* ==================== STAGE B: QUIZ SESSION ==================== */}
        {stage === 'quiz' && (
          <div className="flex flex-col justify-between gap-3 flex-1">
            {/* Top Progress & Score Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold bg-[#EA2212]/15 border border-[#EA2212]/45 text-[#FF6B6B] px-2.5 py-1 rounded">
                  QUESTION 0{currentIdx + 1}/0{totalQuestions}
                </span>
                <span className="font-mono text-xs text-[#35C9F4] uppercase tracking-wider font-semibold">
                  {currentQ.topic}
                </span>
              </div>

              {/* 6-Step Progress Bar + Live Score */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1">
                  {QUESTIONS.map((q, idx) => {
                    const ans = confirmedAnswers[idx]
                    const dotBg =
                      ans !== null
                        ? ans === q.correctIdx
                          ? '#44D934'
                          : '#EA2212'
                        : idx === currentIdx
                        ? '#35C9F4'
                        : '#1e293b'
                    return (
                      <span
                        key={q.id}
                        className="h-2.5 w-5 rounded-sm border border-black/80"
                        style={{ backgroundColor: dotBg }}
                      />
                    )
                  })}
                </div>
                <span className="font-mono text-xs sm:text-sm font-bold text-white bg-[#131926] border border-white/15 px-3 py-1 rounded">
                  SKOR: <span className="text-[#FFD166]">{score}</span> / {maxScore}
                </span>
              </div>
            </div>

            {/* Question Voting Card */}
            <div className="rounded-xl border border-white/15 bg-[#131926] p-3.5 space-y-1.5 shadow-inner">
              <p className="font-body text-sm sm:text-[15px] text-slate-300 leading-relaxed">
                {currentQ.scenario}
              </p>
              <p className="font-display text-sm sm:text-base font-bold text-white leading-snug pt-0.5">
                {currentQ.question}
              </p>
            </div>

            {/* 4 Voting Option Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentQ.options.map((opt, idx) => {
                const isSelected = activeSelection === idx
                const isCorrectOption = idx === currentQ.correctIdx
                const isConfirmedWrongChoice = isConfirmed && isSelected && !isCorrectOption

                let cardStyle =
                  'border-black bg-[#131926] text-slate-200 shadow-[0_3px_0_#000] hover:bg-[#1a2234]'
                if (!isConfirmed && isSelected) {
                  cardStyle =
                    'border-[#35C9F4] bg-[#13293f] text-white shadow-[0_4px_0_#000]'
                } else if (isConfirmed && isCorrectOption) {
                  cardStyle =
                    'border-[#44D934] bg-emerald-950/75 text-white shadow-[0_3px_0_#000]'
                } else if (isConfirmedWrongChoice) {
                  cardStyle =
                    'border-[#EA2212] bg-red-950/75 text-white shadow-[0_3px_0_#000]'
                } else if (isConfirmed) {
                  cardStyle = 'border-black/70 bg-[#0d121c] text-slate-400 opacity-65'
                }

                return (
                  <button
                    key={opt.label}
                    type="button"
                    disabled={isConfirmed}
                    onClick={() => handleSelectOption(idx)}
                    className={`rounded-xl border-[2.5px] p-3 text-left flex items-start justify-between gap-2.5 transition-colors ${
                      isConfirmed ? 'cursor-default' : 'cursor-pointer'
                    } ${cardStyle}`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 rounded border shrink-0 mt-0.5 ${
                          isConfirmed && isCorrectOption
                            ? 'bg-[#44D934] text-black border-black'
                            : isConfirmedWrongChoice
                            ? 'bg-[#EA2212] text-white border-black'
                            : !isConfirmed && isSelected
                            ? 'bg-[#35C9F4] text-black border-black'
                            : 'bg-[#080c14] text-slate-300 border-white/15'
                        }`}
                      >
                        {opt.label}
                      </span>
                      <span className="font-body text-xs sm:text-sm font-medium leading-snug">
                        {opt.text}
                      </span>
                    </div>

                    {!isConfirmed && isSelected && (
                      <span className="font-mono text-[10px] font-bold uppercase bg-[#35C9F4] text-black px-2 py-0.5 rounded shrink-0">
                        VOTED
                      </span>
                    )}
                    {isConfirmed && isCorrectOption && (
                      <span className="font-mono text-[10px] font-bold uppercase bg-[#44D934] text-black px-2 py-0.5 rounded shrink-0">
                        ✓ BENAR
                      </span>
                    )}
                    {isConfirmedWrongChoice && (
                      <span className="font-mono text-[10px] font-bold uppercase bg-[#EA2212] text-white px-2 py-0.5 rounded shrink-0">
                        ✕ SALAH
                      </span>
                    )}
                  </button>
                )
              })}
            </div>

            {/* Action Area: CONFIRM VOTE or EXPLANATION + NEXT QUESTION */}
            {!isConfirmed ? (
              <div className="flex justify-center pt-1">
                <button
                  type="button"
                  onClick={handleConfirmVote}
                  disabled={selectedIdx === null}
                  className={`rounded-xl border-[3px] border-black px-8 py-2.5 font-display text-xs sm:text-sm font-black uppercase tracking-wider transition-all ${
                    selectedIdx !== null
                      ? 'bg-[#44D934] text-black shadow-[0_4px_0_#000] hover:bg-[#52ed40] active:translate-y-1 active:shadow-none cursor-pointer'
                      : 'bg-[#1e2430] text-slate-500 opacity-60 cursor-not-allowed shadow-none'
                  }`}
                >
                  CONFIRM VOTE
                </button>
              </div>
            ) : (
              <div
                className={`rounded-xl border-2 p-3 space-y-2 ${
                  isCurrentCorrect
                    ? 'border-[#44D934]/70 bg-emerald-950/45'
                    : 'border-[#EA2212]/70 bg-red-950/45'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span
                    className={`font-display text-xs sm:text-sm font-bold uppercase ${
                      isCurrentCorrect ? 'text-[#44D934]' : 'text-[#FF6B6B]'
                    }`}
                  >
                    {isCurrentCorrect
                      ? '✓ VOTE CONFIRMED — JAWABAN BENAR (+10 POIN)'
                      : `✕ VOTE CONFIRMED — JAWABAN SALAH (BENAR: ${currentQ.options[currentQ.correctIdx].label})`}
                  </span>

                  <button
                    type="button"
                    onClick={handleNextQuestion}
                    className="rounded-xl border-[2.5px] border-black bg-[#35C9F4] px-5 py-1.5 font-display text-xs sm:text-sm font-black uppercase tracking-wider text-black shadow-[0_3px_0_#000] hover:bg-[#52d5fa] active:translate-y-0.5 active:shadow-none cursor-pointer transition-all"
                  >
                    {currentIdx < totalQuestions - 1 ? 'NEXT QUESTION ▶' : 'LIHAT HASIL MEETING ▶'}
                  </button>
                </div>

                {currentQ.steps && (
                  <div className="rounded-lg bg-[#080c14] border border-white/10 px-3 py-1.5 font-mono text-xs text-slate-200 space-y-0.5">
                    {currentQ.steps.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                )}

                <p className="font-body text-xs sm:text-[13px] text-slate-200 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            )}
          </div>
        )}

        {/* ==================== STAGE C: QUIZ RESULT ==================== */}
        {stage === 'result' && (
          <div className="my-auto flex flex-col items-center text-center max-w-3xl mx-auto py-2 space-y-5 w-full">
            <div className="space-y-1.5">
              <span className="font-mono text-xs uppercase tracking-widest text-[#35C9F4] font-bold">
                VOTING SESSION SUMMARY • CAFETERIA THE SKELD
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-wider text-white">
                EMERGENCY MEETING CONCLUDED!
              </h3>
            </div>

            {/* Rank Banner + Crewmate */}
            <div className="w-full rounded-xl border-2 border-black bg-[#131926] p-4 flex flex-col sm:flex-row items-center gap-4 text-left shadow-inner">
              <AssetSlot
                src={slide.characterAsset}
                alt="Chief Investigator Crewmate"
                className="h-16 w-auto object-contain shrink-0 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
              />
              <div className="flex-1 space-y-1 text-center sm:text-left">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block">
                  KATEGORI INVESTIGATOR
                </span>
                <div
                  className="font-display text-xl sm:text-2xl font-black uppercase tracking-wide"
                  style={{ color: getRankInfo(score).color }}
                >
                  {getRankInfo(score).title}
                </div>
                <p className="font-body text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {getRankInfo(score).desc}
                </p>
              </div>
            </div>

            {/* 4 Metric Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
              <div className="rounded-xl border border-white/15 bg-[#080c14] p-3">
                <span className="font-mono text-xs text-slate-400 block">TOTAL SKOR</span>
                <strong className="font-display text-xl sm:text-2xl font-black text-[#FFD166]">
                  {score} / {maxScore}
                </strong>
              </div>
              <div className="rounded-xl border border-[#44D934]/40 bg-[#080c14] p-3">
                <span className="font-mono text-xs text-slate-400 block">BENAR</span>
                <strong className="font-display text-xl sm:text-2xl font-black text-[#44D934]">
                  {correctCount} Soal
                </strong>
              </div>
              <div className="rounded-xl border border-[#EA2212]/40 bg-[#080c14] p-3">
                <span className="font-mono text-xs text-slate-400 block">SALAH</span>
                <strong className="font-display text-xl sm:text-2xl font-black text-[#FF6B6B]">
                  {wrongCount} Soal
                </strong>
              </div>
              <div className="rounded-xl border border-[#35C9F4]/40 bg-[#080c14] p-3">
                <span className="font-mono text-xs text-slate-400 block">KEBERHASILAN</span>
                <strong className="font-display text-xl sm:text-2xl font-black text-[#35C9F4]">
                  {successRate}%
                </strong>
              </div>
            </div>

            {/* 3 Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => setStage('review')}
                className="rounded-xl border-[3px] border-black bg-[#1e293b] px-5 py-2.5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-[#35C9F4] shadow-[0_4px_0_#000] hover:bg-[#273549] active:translate-y-1 active:shadow-none cursor-pointer transition-all"
              >
                REVIEW ANSWERS
              </button>
              <button
                type="button"
                onClick={handleRetakeQuiz}
                className="rounded-xl border-[3px] border-black bg-[#FFD166] px-5 py-2.5 font-display text-xs sm:text-sm font-black uppercase tracking-wider text-black shadow-[0_4px_0_#000] hover:bg-[#ffdc8a] active:translate-y-1 active:shadow-none cursor-pointer transition-all"
              >
                ↻ RETAKE QUIZ
              </button>
              <button
                type="button"
                onClick={handleContinueMission}
                className="rounded-xl border-[3px] border-black bg-[#EA2212] px-6 py-2.5 font-display text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-[0_4px_0_#000] hover:bg-[#ff3b2d] active:translate-y-1 active:shadow-none cursor-pointer transition-all"
              >
                CONTINUE MISSION ▶
              </button>
            </div>
          </div>
        )}

        {/* ==================== STAGE D: REVIEW ANSWERS ==================== */}
        {stage === 'review' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-2.5">
              <div>
                <h3 className="font-display text-sm sm:text-base font-bold uppercase tracking-wide text-white">
                  REVIEW ANSWERS — PEMBAHASAN 6 PERTANYAAN
                </h3>
                <span className="font-mono text-xs text-slate-400">
                  Total Skor: <strong className="text-[#FFD166]">{score}/{maxScore}</strong> •{' '}
                  {correctCount} Benar, {wrongCount} Salah ({successRate}%)
                </span>
              </div>
              <button
                type="button"
                onClick={() => setStage('result')}
                className="rounded-lg border border-white/15 bg-[#131926] px-3 py-1.5 font-mono text-xs font-semibold text-slate-200 hover:text-white cursor-pointer"
              >
                ← KEMBALI KE HASIL
              </button>
            </div>

            <div className="space-y-3">
              {QUESTIONS.map((q, idx) => {
                const userChoice = confirmedAnswers[idx]
                const isRight = userChoice === q.correctIdx
                const userOpt = userChoice !== null ? q.options[userChoice] : null
                const correctOpt = q.options[q.correctIdx]

                return (
                  <div
                    key={q.id}
                    className={`rounded-xl border p-4 bg-[#131926] space-y-2.5 ${
                      isRight ? 'border-[#44D934]/45' : 'border-[#EA2212]/45'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold text-[#35C9F4]">
                        QUESTION 0{q.id} • {q.topic}
                      </span>
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                          isRight
                            ? 'bg-emerald-950/80 text-[#44D934] border border-[#44D934]/40'
                            : 'bg-red-950/80 text-[#FF6B6B] border border-[#EA2212]/40'
                        }`}
                      >
                        {isRight ? '✓ BENAR (+10)' : '✕ SALAH (+0)'}
                      </span>
                    </div>

                    <p className="font-body text-xs sm:text-sm text-slate-200 leading-relaxed">
                      {q.scenario} <strong className="text-white">{q.question}</strong>
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                      <div
                        className={`rounded-lg border px-3 py-2 ${
                          isRight
                            ? 'border-[#44D934]/50 bg-emerald-950/40 text-emerald-200'
                            : 'border-[#EA2212]/50 bg-red-950/40 text-red-200'
                        }`}
                      >
                        Jawaban Anda:{' '}
                        <strong>
                          {userOpt ? `${userOpt.label}. ${userOpt.text}` : 'Belum dijawab'}
                        </strong>
                      </div>
                      <div className="rounded-lg border border-[#44D934]/50 bg-emerald-950/40 px-3 py-2 text-emerald-200">
                        Jawaban Benar:{' '}
                        <strong>
                          {correctOpt.label}. {correctOpt.text}
                        </strong>
                      </div>
                    </div>

                    {q.steps && (
                      <div className="rounded-lg border border-white/10 bg-[#080c14] px-3 py-2 font-mono text-xs text-slate-300 space-y-0.5">
                        {q.steps.map((s) => (
                          <div key={s}>{s}</div>
                        ))}
                      </div>
                    )}

                    <p className="font-body text-xs text-slate-300 leading-relaxed">
                      {q.explanation}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-3">
              <button
                type="button"
                onClick={handleRetakeQuiz}
                className="rounded-xl border-[3px] border-black bg-[#FFD166] px-5 py-2 font-display text-xs sm:text-sm font-black uppercase tracking-wider text-black shadow-[0_3px_0_#000] hover:bg-[#ffdc8a] cursor-pointer"
              >
                ↻ RETAKE QUIZ
              </button>
              <button
                type="button"
                onClick={handleContinueMission}
                className="rounded-xl border-[3px] border-black bg-[#EA2212] px-6 py-2 font-display text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-[0_3px_0_#000] hover:bg-[#ff3b2d] cursor-pointer"
              >
                CONTINUE MISSION ▶
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

/** LAYOUT F: CONCLUSION (Slide 10 — Kesimpulan Investigasi Akademik) */
function ConclusionLayout({ slide }: { slide: SlideMetadata }) {
  const distributions = [
    {
      num: '01',
      name: 'Distribusi Binomial',
      kind: 'Diskrit',
      color: '#FF6B6B',
      desc: 'Digunakan untuk menghitung probabilitas jumlah keberhasilan dalam sejumlah percobaan independen dengan probabilitas sukses yang konstan.',
    },
    {
      num: '02',
      name: 'Distribusi Poisson',
      kind: 'Diskrit',
      color: '#FFD166',
      desc: 'Digunakan untuk menghitung probabilitas jumlah kejadian dalam interval waktu, ruang, atau periode tertentu berdasarkan rata-rata kejadian.',
    },
    {
      num: '03',
      name: 'Distribusi Eksponensial',
      kind: 'Kontinu',
      color: '#A78BFA',
      desc: 'Digunakan untuk memodelkan waktu tunggu hingga terjadinya kejadian berikutnya dalam proses Poisson.',
    },
    {
      num: '04',
      name: 'Distribusi Normal',
      kind: 'Kontinu',
      color: '#35C9F4',
      desc: 'Digunakan untuk memodelkan distribusi data kontinu yang berbentuk kurva lonceng dan simetris terhadap nilai rata-rata.',
    },
  ]

  const keyPoints = [
    {
      color: '#35C9F4',
      text: 'Distribusi probabilitas membantu memodelkan ketidakpastian.',
    },
    {
      color: '#44D934',
      text: 'Pemilihan distribusi harus disesuaikan dengan karakteristik variabel dan kejadian.',
    },
    {
      color: '#FFD166',
      text: 'Variabel diskrit menggunakan PMF, sedangkan variabel kontinu menggunakan PDF.',
    },
    {
      color: '#FF6B6B',
      text: 'Z-Score membantu mengidentifikasi posisi suatu pengamatan terhadap rata-rata dan mendeteksi nilai ekstrem.',
    },
  ]

  return (
    <div className="h-full w-full min-h-0 overflow-y-auto custom-scrollbar pr-1 select-none text-slate-200">
      <div className="min-h-full w-full rounded-xl border-2 border-black/80 bg-[#0d121c] p-2.5 sm:p-3 shadow-inner flex flex-col justify-between gap-2">
        {/* A. RINGKASAN EMPAT DISTRIBUSI */}
        <section className="space-y-1">
          <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-0.5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#35C9F4]" />
              <h3 className="font-display text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white">
                A. Ringkasan Empat Distribusi
              </h3>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
              Diskrit &amp; Kontinu
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
            {distributions.map((dist) => (
              <div
                key={dist.name}
                className="rounded-lg border border-white/10 bg-[#131926] px-3 py-1.5 flex flex-col justify-between gap-0.5"
                style={{ borderLeftWidth: '3px', borderLeftColor: dist.color }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    className="font-display text-xs sm:text-[13px] font-bold tracking-wide"
                    style={{ color: dist.color }}
                  >
                    {dist.num}. {dist.name}
                  </span>
                  <span className="font-mono text-[10px] rounded border border-white/15 bg-[#080c14] px-1.5 py-0.5 text-slate-300">
                    {dist.kind}
                  </span>
                </div>
                <p className="font-body text-xs sm:text-[12.5px] text-slate-200 leading-snug">
                  {dist.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* B. POIN PEMBELAJARAN UTAMA */}
        <section className="space-y-1">
          <div className="flex items-center gap-2 border-b border-white/10 pb-0.5">
            <span className="h-2 w-2 rounded-full bg-[#FFD166]" />
            <h3 className="font-display text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white">
              B. Poin Pembelajaran Utama
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
            {keyPoints.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 rounded-lg border border-white/10 bg-[#131926] px-2.5 py-1.5"
              >
                <span
                  className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: point.color }}
                />
                <p className="font-body text-xs sm:text-[12.5px] text-slate-200 leading-snug">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* C. KESIMPULAN AKHIR */}
        <section className="rounded-xl border border-[#35C9F4]/35 bg-[#080c14] px-3 py-2 flex items-center gap-3">
          <div className="hidden sm:flex shrink-0 items-center justify-center rounded-lg border border-white/10 bg-[#131926] p-1">
            <AssetSlot
              src={slide.characterAsset || AMONG_US_ASSETS.characters.whiteVoting}
              alt={slide.characterAlt || 'Crewmate Cyan'}
              className="h-10 w-auto object-contain"
            />
          </div>
          <div className="min-w-0 flex-1 space-y-0.5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-display text-[11px] font-bold uppercase tracking-wider text-[#35C9F4]">
                C. Kesimpulan Akhir
              </span>
              <span className="font-mono text-[10px] text-slate-400">
                Tekan <strong className="text-[#EA2212]">FINISH ▶</strong> untuk menyelesaikan misi
              </span>
            </div>
            <p className="font-body text-xs sm:text-[13px] font-medium text-white leading-snug">
              &ldquo;Distribusi probabilitas memberikan pendekatan matematis untuk memahami pola kejadian, mengukur ketidakpastian, dan mendukung pengambilan keputusan berbasis data.&rdquo;
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
