# REVISED DESIGN SPECIFICATION — MISSION: PROBABILITY
*An Authentic Among Us Game Experience & Statistical Investigation*

Dokumen ini merupakan revisi menyeluruh spesifikasi desain visual, struktur pengalaman pengguna (*User Experience*), arsitektur navigasi, dan integrasi pedagogis untuk website presentasi akademik **MISSION: PROBABILITY**.

Dokumen ini menggantikan paradigma *Sci-Fi HUD / Futuristic Admin Dashboard* sebelumnya dengan **Pengalaman Game Among Us Asli (*Authentic Among Us Game Experience*)**, menggunakan aset resmi Innersloth yang tersedia di `public/assets/among-us/`.

---

## 1. EVALUASI MASALAH DESAIN SEBELUMNYA & ARAH BARU

### 1.1 Masalah Desain Sebelumnya (The Sci-Fi Dashboard Trap)
Implementasi awal menghasilkan kesan antarmuka yang salah:
- **Terlalu Menyerupai Admin Panel / Dashboard Monitoring**: Penggunaan elemen seperti *"Ship Sensors Online"*, *"Location: Room Name // SECTOR 03"*, *"HUD Active"*, dan badge metadata teknis membuat website tampak seperti dashboard analitik web modern, bukan game Among Us.
- **Dekorasi Visual Artifisial**: Glowing cyan borders, kartu transparan bergaya glassmorphism, dan label telemetri palsu mengaburkan identitas visual Among Us yang sebenarnya berciri kartun 2D dengan garis tebal, flat color, dan elemen fisik kapal.
- **Navigasi Chip Horizontal yang Kaku**: 10 kotak navigasi horizontal yang menempel secara permanen di atas kanvas merusak imersi permainan dan terasa seperti tab pagination website biasa.

### 1.2 Arah Desain Baru: Authentic Among Us Game Experience
Website dirancang agar audiens merasa **benar-benar sedang membuka dan memainkan game Among Us asli**, di mana presentasi akademik terintegrasi secara mulus ke dalam alur permainan:
1. **Estetika Game Otentik**: Garis tepi tebal (*chunky black outlines*), tombol fisik game berkontur tegas dengan efek tekan 3D, tipografi khas kartun tebal (`Fredoka`), dan palette warna flat Among Us.
2. **Tanpa Telemetri Palsu**: Menghilangkan seluruh sensor palsu, label status sci-fi generic, dan glowing borders yang tidak ada dalam game asli.
3. **Materi sebagai Gameplay (In-Game Tasks & Terminals)**: Teori dan rumus tidak disajikan di dalam kartu dashboard generik, melainkan di dalam jendela **Task Tablet**, **Console Komputer Ruangan The Skeld**, dan **Emergency Meeting Voting Screen**.

---

## 2. ARSITEKTUR 4 SCENE PENGALAMAN PENGGUNA (SCENE FLOW)

Alur presentasi dibagi menjadi 4 scene berurutan:

```
[SCENE 01: LOADING SCREEN] 
       ↓ (Auto / Klik Masuk)
[SCENE 02: MAIN MENU] 
       ↓ (Klik "START MISSION")
[SCENE 03: MISSION LOBBY] 
       ↓ (Klik "START INVESTIGATION")
[SCENE 04: IN-GAME PRESENTATION (10 Slides as Gameplay Tasks)]
       ↓ (Selesai / Tombol Menu)
[RETURN TO MAIN MENU]
```

---

### SCENE 01 — LOADING SCREEN (Peluncuran Game)

Scene pertama yang muncul ketika website dibuka oleh audiens atau diproyeksikan di ruang kelas:

- **Atmosfer Visual**:
  - Fullscreen Deep Space Stars (`public/assets/among-us/backgrounds/space-stars-background.jpg`).
  - Animasi partikel bintang atau astronaut melayang perlahan di kejauhan.
- **Elemen Identitas**:
  - Logo Resmi Among Us (`public/assets/among-us/promotional/among-us-official-logo.png`) terpusat di tengah layar.
  - Judul Terintegrasi: **MISSION: PROBABILITY** dalam tipografi tebal rounded (Fredoka 700), warna putih dengan bayangan tegas.
  - Subjudul: *An Among Us Statistical Investigation* (Mint `#55D6A5`).
  - Label Akademik: *Mata Kuliah Probabilitas & Statistika*.
- **Mekanisme Loading**:
  - Loading bar bergaya game kapsul tebal dengan outline hitam tegas (`border-4 border-black`) dan isian warna hijau mint/cyan yang terisi bertahap (simulasi loading aset 1.5 - 2 detik).
  - Teks status sederhana di bawah bar: *"Connecting to The Skeld Server..."* $\rightarrow$ *"Loading Crewmate Alibis..."* $\rightarrow$ *"Ready!"*.
- **Transisi ke Scene 02**:
  - Begitu loading selesai, tombol game tebal **"CLICK TO ENTER SHIP"** muncul dengan animasi pulse, atau transisi otomatis halus ke Main Menu.
- **Larangan Keras**:
  - Dilarang menampilkan chip navigasi, status sensor, grafik, atau kartu metadata pada scene ini.

---

### SCENE 02 — MAIN MENU (Menu Utama Game)

Tampilan menu yang 100% mereplikasi komposisi Main Menu game Among Us asli:

- **Atmosfer Visual**:
  - Fullscreen Deep Space dengan pemandangan astronaut melayang (`public/assets/among-us/characters/crewmates-15-lineup.webp` atau `among-us-space-crew-artwork.png`).
  - Logo Among Us besar di area atas-tengah.
- **Tombol Game Otentik (Chunky Rounded Game Buttons)**:
  Tombol didesain dengan karakteristik fisik game Among Us:
  - Bentuk kapsul persegi panjang membulat (`rounded-2xl` / `rounded-full`).
  - Outline hitam tebal (`border-4 border-black`).
  - Efek 3D fisik: Bayangan dasar tebal (`box-shadow: 0 8px 0 #000, 0 12px 20px rgba(0,0,0,0.5)`).
  - Interaksi Hover & Active: Tombol bergeser turun 4px saat ditekan (`active:translate-y-1 active:shadow-none`).
- **Pilihan Menu Utama**:
  1. **START MISSION (Tombol Utama — Merah / Cyan Tebal)**:
     - Ukuran paling mencolok, menjadi pintu masuk langsung menuju Scene 03 (Mission Lobby).
     - Ikon play atau helm astronaut kecil di samping teks.
  2. **HOW TO PLAY / BRIEFING (Tombol Sekunder)**:
     - Membuka popup dialog bergaya task game yang menjelaskan cara navigasi (keyboard shortcut `←` `→` `Space`, tombol navigasi in-game, peta kapal) serta tujuan investigasi 4 distribusi statistik.
  3. **SETTINGS & CREDITS (Tombol Tersier)**:
     - Membuka modal tim investigasi (Nama anggota kelompok mahasiswa, dosen pengampu, institusi).
- **Footer Game**:
  - Versi rilis: `v1.0.0-academic` di pojok kiri bawah.
  - Kredit hak cipta aset: *"All original Among Us assets copyright © Innersloth LLC. Used strictly for academic educational non-profit demonstration."* di pojok kanan bawah.

---

### SCENE 03 — MISSION LOBBY (The Skeld Dropship / Cafeteria Waiting Room)

Scene ruang tunggu sebelum presentasi formal dimulai, membangun konteks narasi investigasi:

- **Latar Belakang**:
  - Interior Dropship The Skeld (`public/assets/among-us/backgrounds/skeld-dropship-lobby.webp`) atau Meja Bundar Cafeteria (`skeld-cafeteria-meeting-table.jpg`).
- **Karakter & Lingkungan**:
  - Karakter Crewmate (`crewmate-red-standing.png` dan `crewmate-blue-tablet.png`) berdiri di samping konsol dropship.
  - Kotak laptop lobi game tempat memilih warna/topi.
- **Pengalaman Briefing**:
  - Kotak dialog bergaya balon pesan atau layar laptop kapal:
    > **EMERGENCY DISPATCH — CAPTAIN'S LOG:**
    > *"Perhatian seluruh awak The Skeld! Sistem kapal mendeteksi anomali transmisi dan fluktuasi reaktor yang mencurigakan. Investigasi ini membagi data menjadi dua kelompok besar: **Variabel Acak Diskrit** (kejadian terhitung) dan **Variabel Acak Kontinu** (pengukuran fisik/waktu). Pelajari karakteristik 4 distribusi untuk membersihkan nama kru kita!"*
- **Aksi Transisi**:
  - Tombol game besar di tengah/bawah layar: **"BEGIN INVESTIGATION / ENTER CAFETERIA"** dengan ikon megafon darurat (`emergency-meeting-megaphone.svg`).
  - Menekan tombol ini memicu transisi pintu kapal menutup-membuka (shutter transition) menuju Slide 01 / Slide 02 pada Scene 04.

---

### SCENE 04 — IN-GAME PRESENTATION (Penyampaian Materi sebagai Gameplay)

Setiap slide materi akademik dihadirkan seolah-olah audiens sedang membuka **Task Game**, **Layar Komputer Konsol Ruangan**, atau **Emergency Meeting Table**:

```
+------------------------------------------------------------------------------------+
| [Esc / Menu] [Top Progress: Task Bar Hijau Otentik]           [Minimap The Skeld] |
|------------------------------------------------------------------------------------|
|                                                                                    |
|                     JENDELA TASK / TERMINAL KOMPUTER RUANGAN                       |
|               (Background Asli Ruangan: Cafeteria / Admin / dll.)                  |
|                                                                                    |
|   +----------------------------------+  +--------------------------------------+   |
|   |  PANEL KONSEP / BUKU CATATAN KRU |  |   TERMINAL SIMULASI / RECHARTS       |   |
|   |  - Definisi & Asumsi Task        |  |   - Visualisasi Grafik PMF/PDF       |   |
|   |  - Formula KaTeX di Layar CRT    |  |   - Slider Kontrol Parameter Interaktif  |   |
|   |  - Interpretasi Variabel         |  |   - Output Nilai Probabilitas        |   |
|   +----------------------------------+  +--------------------------------------+   |
|                                                                                    |
| [◀ PREV TASK]                                                       [NEXT TASK ▶]  |
+------------------------------------------------------------------------------------+
```

---

## 3. NAVIGASI PRESENTASI BARU (GAME-INTEGRATED NAVIGATION)

### 3.1 Penghapusan Elemen Dashboard Kaku
- **HAPUS**: 10 kotak navigasi horizontal yang menempel kaku di atas kanvas.
- **HAPUS**: Badge *"HUD ACTIVE"*, *"LOCATION INDICATOR"*, dan telemetri palsu.

### 3.2 Sistem Navigasi Game yang Bersih & Otentik
1. **Total Tasks Completed Progress Bar (In-Game Task Bar)**:
   - Mereplikasi **Total Tasks Completed Bar** warna hijau khas Among Us yang terletak di kiri atas layar gameplay.
   - Mengisi secara proporsional sesuai nomor slide aktif (misal: Slide 3 = 30%, Slide 7 = 70%).
   - Dilengkapi teks font game: `TOTAL TASKS COMPLETED [3/10]`.
2. **Tombol Navigasi [PREV] dan [NEXT] Bergaya Game**:
   - Ditempatkan di pojok kiri bawah dan kanan bawah kanvas.
   - Desain tombol tebal dengan border hitam dan panah kartun yang jelas:
     - `[◀ PREVIOUS TASK]` (Warna Slate/Abu-abu gelap).
     - `[NEXT TASK ▶]` (Warna Cyan atau Hijau cerah).
3. **Peta Ruangan The Skeld (Interactive Minimap)**:
   - Ikon peta kapal di pojok kanan atas layar (`skeld-minimap-isolated.png` atau ikon peta game).
   - Saat diklik, membuka pop-up peta The Skeld yang menunjukkan denah ruangan:
     - **Cafeteria** $\rightarrow$ Binomial Distribution (Slide 03)
     - **Admin** $\rightarrow$ Poisson Distribution (Slide 04)
     - **Electrical** $\rightarrow$ Exponential Distribution (Slide 05)
     - **Reactor** $\rightarrow$ Normal Distribution (Slide 06)
     - **Navigation / Cockpit** $\rightarrow$ Z-Score Investigation (Slide 07)
     - **Meeting Table** $\rightarrow$ Emergency Quiz (Slide 09)
   - Klik pada salah satu ruangan langsung melompat ke materi ruangan tersebut!
4. **Tombol Kembali ke Main Menu**:
   - Ikon roda gigi / gear kecil di pojok kiri atas untuk kembali ke Main Menu kapan saja.
5. **Keyboard Navigation (Tetap Aktif Penuh)**:
   - `ArrowRight` / `Space` : Next Slide.
   - `ArrowLeft` : Previous Slide.
   - Angka `1` - `9`, `0` : Lompat langsung ke slide 1–10.
   - Tombol `M` : Toggle Peta Kapal (Minimap).
   - Tombol `F` : Fullscreen.

---

## 4. INTEGRASI GAMEPLAY PADA SETIAP SLIDE AKADEMIK

Seluruh substansi akademik, rumus matematis KaTeX, dan visualisasi grafik Recharts tetap dipertahankan dengan tingkat akurasi 100%, namun dibungkus dalam analogi gameplay yang otentik:

| Slide # & Topik | Ruangan The Skeld | Metafora Gameplay & Format Jendela | Karakter Pendukung | Interaksi Utama |
| :--- | :--- | :--- | :--- | :--- |
| **01. Mission Start** | Deep Space Orbit | **Title Screen & Mission Dossier**: Buku panduan berkas investigasi kapal. | Lineup 15 Crewmates | Tombol "Open Dossier / Mulai". |
| **02. Mission Briefing** | Dropship Lobby | **Crew Tablet**: Layar tablet iPad biru crewmate menampilkan klasifikasi variabel acak. | Red Standing & Blue Tablet | Tombol tab: Diskrit vs Kontinu. |
| **03. Binomial** | Cafeteria | **Inspection Task**: Tablet pemeriksaan $n$ tugas kapal (berhasil/gagal) dengan peluang $p$. | Red Task (`crewmate-red-task.png`) | Slider $n$ & $p$ + Bar Chart PMF Recharts. |
| **04. Poisson** | Admin Room | **Admin Console & Radar**: Layar scanner radar Admin menghitung sinyal acak per satuan waktu $\lambda$. | Yellow Tablet (`crewmate-yellow-tablet.png`) | Slider $\lambda$ + Bar Chart Frekuensi Recharts. |
| **05. Eksponensial** | Electrical Room | **Electrical Wire Box Console**: Layar panel sirkuit kabel menganalisis waktu tunggu antar-konsleting. | Purple Wires (`crewmate-purple-wires.png`) | Slider $\lambda$ + Area Chart Peluruhan PDF. |
| **06. Normal (Gaussian)** | Reactor Room | **Reactor Core Mainframe**: Layar monitor suhu reaktor simetris di sekitar rata-rata $\mu$. | Blue Tablet / Green Vent | Slider $\mu$ & $\sigma$ + Bell Curve Area Chart. |
| **07. Z-Score** | Navigation Terminal | **Alibi Verification Scanner**: Standardisasi $Z = (X-\mu)/\sigma$ untuk memvalidasi posisi observasi. | Red Alibi (`crewmate-red-alibi.png`) | Kalkulator Live Z-Score + Klasifikasi Ambang Batas. |
| **08. Database** | Ship Mainframe | **Ship Computer Database Table**: Matriks perbandingan 4 distribusi dalam tampilan terminal retro. | Blue Doors (`crewmate-blue-doors.png`) | Tabel komparasi lengkap 4 kuadran. |
| **09. Emergency Quiz** | Cafeteria Meeting Table | **Emergency Meeting Voting Screen**: UI voting otentik untuk memilih model distribusi yang tepat. | White Voting & Blue Emergency | 4 Tombol Voting kru dengan feedback jawaban instan. |
| **10. Mission Summary** | Outer Space Ejection | **Ejection Screen / Victory Screen**: Teks deklarasi misi berhasil dan kredit anggota tim. | 15 Crewmates / Impostor Profile | Tombol "Play Again / Return to Menu". |

---

## 5. DESIGN TOKENS GAME OTENTIK (AUTHENTIC GAME TOKENS)

### 5.1 Palet Warna Game Asli (Game Accurate Colors)
| Warna | Hex Code | Penggunaan Otentik Among Us |
| :--- | :--- | :--- |
| **Crewmate Red** | `#C51111` / `#EA2212` | Tombol Emergency, highlight penting, border kartu aksi utama. |
| **Crewmate Cyan** | `#38FEDC` / `#35C9F4` | Tombol navigasi aktif, indikator visor astronaut, aksen panel. |
| **Crewmate Blue** | `#132ED1` | Header jendela task, panel komputer primer. |
| **Taskbar Green** | `#44D934` / `#55D6A5` | Isian progress taskbar, status jawaban benar, indikator valid. |
| **Electrical Yellow** | `#F6F657` / `#FFD166` | Parameter laju $\lambda$, peringatan penting, label tombol sekunder. |
| **Admin Gray** | `#2C313C` / `#1E2430` | Latar belakang jendela task dan bezel monitor komputer. |
| **Bezel Outline Black** | `#000000` / `#121214` | Garis tepi fisik tebal (3.5px - 4px) pada seluruh tombol dan jendela. |

### 5.2 Tipografi Game
- **Judul Game, Tombol & Label UI**:
  - Font: `'Fredoka', 'Baloo 2', system-ui, sans-serif`
  - Karakteristik: Rounded, bold, punchy, ramah, identik dengan font resmi game.
- **Teks Penjelasan & Rumus Akademik**:
  - Font: `'Poppins', ui-sans-serif, sans-serif`
  - Karakteristik: Bersih, geometris, mudah dibaca untuk teks paragraf akademik.
- **Display Rumus Matematika (KaTeX)**:
  - Ditampilkan dalam format tajam di atas latar panel CRT retro `#111625` dengan kontras tinggi (putih/cyan/kuning terang), ukuran display minimal `1.3rem`.

### 5.3 Komponen Tombol Fisik Among Us (Game Button CSS Specification)
```css
.among-us-btn {
  font-family: var(--font-display);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 3.5px solid #000000;
  border-radius: 1rem;
  box-shadow: 0 6px 0 #000000, 0 10px 15px rgba(0, 0, 0, 0.4);
  transition: transform 100ms ease, box-shadow 100ms ease;
  user-select: none;
}

.among-us-btn:hover {
  filter: brightness(1.08);
}

.among-us-btn:active {
  transform: translateY(4px);
  box-shadow: 0 2px 0 #000000, 0 4px 8px rgba(0, 0, 0, 0.4);
}
```

---

## 6. PRESERVASI AKURASI MATEMATIS & PEDAGOGIS

Seluruh perbaikan akurasi matematis yang telah dikunci pada revisi sebelumnya **wajib dipertahankan secara utuh**:

1. **Ketepatan Standardisasi Z-Score**:
   - Jika $X \sim N(\mu, \sigma^2)$, maka $Z = \frac{X - \mu}{\sigma} \sim N(0, 1)$.
   - Ditegaskan bahwa standardisasi Z-score **TIDAK** secara otomatis mengubah data non-normal menjadi distribusi normal.
   - Kategori deviasi:
     - $|Z| \le 2$: Rentang observasi wajar ($\approx 95.45\%$).
     - $|Z| > 2$: Observasi tidak lazim (*unusual observation*).
     - $|Z| > 3$: Observasi ekstrem (*extreme outlier*).
2. **Kejelasan Satuan Parameter**:
   - **Poisson $\lambda$**: Rata-rata frekuensi kejadian dalam interval ruang/waktu tertentu ($\text{kejadian}/\text{interval}$).
   - **Eksponensial $\lambda$**: Parameter laju dengan satuan kebalikan waktu ($\text{waktu}^{-1}$), berbanding terbalik dengan rata-rata waktu tunggu $E[X] = 1/\lambda$.
3. **Status Draf Pertanyaan Kuis**:
   - Dua soal studi kasus pada Slide 09 tetap bertanda `[DRAFT / CONTENT SOURCE REQUIRED: Contoh Soal Akademik]`, mencantumkan asumsi kejadian independen dan laju konstan pada Poisson.
4. **Proteksi Aset Fallback (`<AssetSlot />`)**:
   - Seluruh aset dibungkus dengan komponen pelindung yang menampilkan badge `[ASSET NEEDED: ...]` bergaya game jika ada file yang hilang, tanpa memunculkan broken image.

---

## 7. RENCANA TAHAPAN IMPLEMENTASI (STAGED IMPLEMENTATION PLAN)

Implementasi kode baru akan dilakukan secara bertahap setelah rancangan ini disetujui:

1. **Tahap 1 — Styling & Token Game Among Us**:
   - Menambahkan utilitas tombol game fisik, container jendela task, dan taskbar otentik pada CSS.
2. **Tahap 2 — Scene 01 (Loading Screen) & Scene 02 (Main Menu)**:
   - Membangun transisi peluncuran game dan antarmuka menu utama Among Us.
3. **Tahap 3 — Scene 03 (Mission Lobby) & Scene 04 (In-Game Presentation Framework)**:
   - Membangun alur lobby briefing dan wadah task presentasi yang terintegrasi minimap The Skeld.
4. **Tahap 4 — Pengisian Konten Slide Akademik (Slide 01 - Slide 10)**:
   - Memasukkan rumus KaTeX, Recharts interaktif, dan kuis Emergency Meeting.

---
*Dokumen ini sekarang siap untuk ditinjau oleh pengguna. Tidak ada perubahan kode yang dilakukan sebelum persetujuan resmi diberikan.*
