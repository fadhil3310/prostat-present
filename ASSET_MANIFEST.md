# ASSET MANIFEST — MISSION: PROBABILITY
*An Among Us Statistical Investigation*

Dokumen ini mencatat seluruh inventaris aset visual dan audio resmi untuk proyek presentasi akademik **MISSION: PROBABILITY**, termasuk status verifikasi sumber resmi, lisensi penggunaan, struktur penyimpanan lokal, serta daftar aset yang belum ditemukan dan memerlukan tindakan pengguna.

---

## 1. KEBIJAKAN SUMBER & LISENSI RESMI (INNERSLOTH IP)

Seluruh materi visual Among Us merupakan kekayaan intelektual (IP) milik **Innersloth LLC**. 

Berdasarkan [Innersloth Fan Creation Policy & IP Guidelines](https://www.innersloth.com/fan-creation-policy/) resmi:
- **Bagian 1 — Non-Commercial Use**: Penggunaan IP Among Us diizinkan untuk kebutuhan personal dan non-komersial (nirlaba).
- **Bagian 2 — Educational Use/Teaching**: Innersloth secara eksplisit mengizinkan pengajar dan mahasiswa untuk:
  > *"Using Among Us IP in an interactive slideshow or school-wide program"*
  > *"Creating and playing an interactive game with your class based on Among Us IP"*
- **Press Kit & Media Kit**: Aset grafis beresolusi tinggi disediakan secara resmi oleh Innersloth melalui [Innersloth Press Kit](https://www.innersloth.com/press-kit/) dan [Among Us Press Kit](https://www.innersloth.com/press-kit/press-kit-among-us/) untuk keperluan presentasi, editorial, dan edukasi publik.

---

## 2. STRUKTUR DIREKTORI PENYIMPANAN LOKAL

Semua aset resmi yang telah diunduh tersimpan secara lokal di folder `public/assets/among-us/` sehingga dapat langsung diakses oleh aplikasi tanpa ketergantungan hotlink eksternal:

```
public/assets/among-us/
├── characters/     # Karakter crewmate individual, pose aksi, dan lineup
├── backgrounds/    # Latar belakang kapal The Skeld, ruangan, dan luar angkasa
├── game-ui/        # Screenshot antarmuka game asli (voting, task, role reveal)
├── icons/          # Ikon vektor SVG resmi (meeting megaphone, impostor star)
├── promotional/    # Logo resmi Among Us, banner objektif, dan key artwork
└── audio/          # Placeholder & direktori audio SFX resmi
```

---

## 3. DAFTAR ASET RESMI YANG BERHASIL DIUNDUH (`FOUND_OFFICIAL`)

### A. Karakter Crewmate & Impostor (`characters/`)

| Nama File Lokal | Format & Dimensi | Transparansi | Sumber Resmi | Penggunaan Presentasi |
| :--- | :--- | :--- | :--- | :--- |
| `crewmate-red-standing.png` | PNG (150x198) | Ya (Alpha) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/06/Crew7.png) | Karakter Red Crewmate / Presenter avatar |
| `crewmate-red-alibi.png` | PNG (150x198) | Ya (Alpha) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/06/Crew8.png) | Investigasi Hipotesis / Data Alibi |
| `crewmate-red-task.png` | PNG (150x198) | Ya (Alpha) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/06/Crew9.png) | Modul Poisson / Deteksi Aktivitas Sabotase |
| `crewmate-yellow-tablet.png` | PNG (150x198) | Ya (Alpha) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/06/Crew10.png) | Modul Binomial / Monitoring Probabilitas |
| `impostor-purple-kill.png` | PNG (150x198) | Ya (Alpha) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/06/Crew3.png) | Kartu Identifikasi Impostor / Skenario Bahaya |
| `crewmate-purple-wires.png` | PNG (150x198) | Ya (Alpha) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/06/Crew6.png) | Modul Eksponensial / Waktu Perbaikan Kabel |
| `crewmate-green-vent.png` | PNG (150x198) | Ya (Alpha) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/06/Crew11.png) | Visual Anomali Ventilasi / Kecepatan Impostor |
| `crewmate-blue-tablet.png` | PNG (150x198) | Ya (Alpha) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/06/Crew1.png) | Modul Normal / Kalibrasi Data Sensor |
| `crewmate-blue-emergency.png` | PNG (150x198) | Ya (Alpha) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/06/Crew2.png) | Visual Trigger Emergency Meeting |
| `crewmate-blue-sabotage.png` | PNG (150x198) | Ya (Alpha) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/06/Crew4.png) | Skenario Sabotase Oksigen / Distribusi Kontinu |
| `crewmate-blue-doors.png` | PNG (150x198) | Ya (Alpha) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/06/Crew5.png) | Skenario Isolasi Ruangan / Probabilitas Bersyarat |
| `crewmate-white-voting.png` | PNG (150x198) | Ya (Alpha) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/06/Crew12.png) | Visual Sesi Diskusi & Evaluasi Presentasi |
| `impostor-profile-hd.webp` | WebP (1920x1200) | Tidak (Full Art) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2026/10/au_profile_impostor.png) | Hero Banner Misi Investigasi Impostor |
| `crewmates-15-lineup.webp` | WebP (7778x4375) | Ya (Alpha) | [Innersloth Press Kit](https://www.innersloth.com/wp-content/uploads/2021/06/15player_promo_noText.png) | Lineup Lengkap Seluruh Crewmate (Slide Pembuka) |

---

### B. Backgrounds Latar Belakang (`backgrounds/`)

| Nama File Lokal | Format & Dimensi | Sumber Resmi | Penggunaan Presentasi |
| :--- | :--- | :--- | :--- |
| `space-stars-background.jpg` | JPG (1438x810) | [Valve Steam / Innersloth](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/page_bg_raw.jpg) | Background Utama Website / Sci-Fi Deep Space |
| `skeld-dropship-lobby.webp` | WebP (1920x1080) | [Innersloth Press Kit](https://www.innersloth.com/wp-content/uploads/2021/06/Lobby-1.png) | Slide Pengantar / Ruang Briefing Misi |
| `skeld-cafeteria-meeting-table.jpg` | JPG (1920x1080) | [Valve Steam / Innersloth](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/ss_ffd9c8926cbd7fce3ca5e5efb4399c47bb196bc8.1920x1080.jpg) | Modul 1 (Binomial): Emergency Discussion |
| `skeld-admin-map-room.jpg` | JPG (1920x1080) | [Valve Steam / Innersloth](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/ss_b7374128e5b786a302a716bca038d604b00ffe46.1920x1080.jpg) | Modul 2 (Poisson): Pemantauan Anomali Admin |
| `skeld-electrical-room.jpg` | JPG (1920x1080) | [Valve Steam / Innersloth](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/ss_9d11502fa973580a82b532b25f1901b8425c28f9.1920x1080.jpg) | Modul 3 (Eksponensial): Ruang Electrical Wiring |
| `skeld-reactor-core-room.jpg` | JPG (1920x1080) | [Valve Steam / Innersloth](https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/945360/ss_1fbd9dc9fd6a2710d233a088ef426a6d78fcf884.1920x1080.jpg) | Modul 4 (Normal): Kalibrasi Inti Reaktor |
| `space-ejection-sequence.png` | PNG (1920x1080) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2026/10/map5_ejectScreen_Mockup_raft2.00_00_06_58.Still011.png) | Slide Penutup / Hasil Kesimpulan Investigasi |

---

### C. Game UI & Antarmuka (`game-ui/`)

| Nama File Lokal | Format & Dimensi | Sumber Resmi | Penggunaan Presentasi |
| :--- | :--- | :--- | :--- |
| `emergency-meeting-voting-screen.webp` | WebP (1920x1080) | [Innersloth Press Kit](https://www.innersloth.com/wp-content/uploads/2021/06/Discussion.png) | Antarmuka Voting / Studi Kasus Binomial |
| `task-admin-card-swipe.webp` | WebP (1920x1080) | [Innersloth Press Kit](https://www.innersloth.com/wp-content/uploads/2021/06/CardSlideTask.png) | Simulasi Task / Uji Coba Bernoulli |
| `role-reveal-shhh-screen.webp` | WebP (1920x1080) | [Innersloth Press Kit](https://www.innersloth.com/wp-content/uploads/2021/06/RoleScreen.png) | Layar Transisi "Shhh! An Impostor is Among Us" |
| `guardian-angel-protect.webp` | WebP (1920x1080) | [Innersloth Press Kit](https://www.innersloth.com/wp-content/uploads/2021/06/Guardian-Angel.png) | Konsep Proteksi & Probabilitas Komplementer |
| `impostor-kill-action.webp` | WebP (1920x1080) | [Innersloth Press Kit](https://www.innersloth.com/wp-content/uploads/2021/06/Impostor_Kill_1.png) | Visualisasi Kejadian Kejutan / Rare Event |

---

### D. Ikon Vektor (`icons/`)

| Nama File Lokal | Format | Sumber Resmi | Penggunaan Presentasi |
| :--- | :--- | :--- | :--- |
| `emergency-meeting-megaphone.svg` | SVG (Vector) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/06/ico-meeting.svg) | Ikon Tombol Navigasi / Alert Meeting |
| `impostor-red-star.svg` | SVG (Vector) | [Innersloth Official](https://www.innersloth.com/wp-content/themes/innersloth/markup/assets/img/ico/ico-red-star03.svg) | Badge Indikator Parameter Kritis / Impostor |
| `innersloth-download-arrow.svg` | SVG (Vector) | [Innersloth Official](https://www.innersloth.com/wp-content/themes/innersloth/markup/assets/img/ico/ico-download.svg) | Ikon Aksi / Download Report |

---

### E. Promosional & Branding Resmi (`promotional/`)

| Nama File Lokal | Format & Dimensi | Transparansi | Sumber Resmi | Penggunaan Presentasi |
| :--- | :--- | :--- | :--- | :--- |
| `among-us-official-logo.png` | PNG (948x258) | Ya (Alpha) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/08/img08@2x.png) | Header Brand Logo Resmi Presentasi |
| `crewmate-objective-banner.png` | PNG (600x100) | Ya (Alpha) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/06/steam_AboutCrew-copy-e1629741065184.png) | Banner Modul Objektif Crewmate |
| `impostor-objective-banner.png` | PNG (600x102) | Ya (Alpha) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/06/steam_AboutImpostor-copy-e1629741082923.png) | Banner Modul Objektif Impostor |
| `among-us-space-crew-artwork.png` | PNG (2500x1224) | Tidak (Full Art) | [Innersloth Official](https://www.innersloth.com/wp-content/uploads/2021/06/hellowhatanicesurprise.png) | Artwork Promosional / Slide Penutup Tim |

---

## 4. DAFTAR ASET YANG BELUM DITEMUKAN (`NOT_FOUND_USER_ACTION_REQUIRED`)

Sesuai instruksi proyek, kami **TIDAK MENGGANTIKAN** aset-aset berikut dengan ilustrasi AI generatif atau clip art generik. Komponen dalam website akan menyematkan placeholder teks terstandar hingga aset resmi disuplai.

### 1. `[ASSET NEEDED: OFFICIAL AMONG US CYAN CREWMATE PNG]`
- **Status**: `NOT_FOUND_USER_ACTION_REQUIRED`
- **Deskripsi**: Gambar karakter Crewmate berwarna Cyan (biru muda) berdiri tegak tampak penuh (*full body*).
- **Format Rekomendasi**: PNG transparan 32-bit (RGBA).
- **Dimensi / Rasio Disarankan**: Min. 500x650 px atau rasio ~1:1.3.
- **Rencana Penggunaan Slide**: Avatar pemandu investigasi (tokoh utama) pada pengantar dan modul presentasi.
- **Alasan Belum Ditemukan**: Server publik Innersloth hanya menyediakan `Crew1.png` hingga `Crew12.png` (Blue, Red, Yellow, Purple, Green, White), sedangkan Cyan hanya muncul dalam banner gabungan 15 pemain.
- **Kata Kunci Pencarian Manual**: `"Innersloth Among Us Cyan Crewmate transparent png press kit"` atau diekspor langsung dari press kit dropbox zip.

### 2. `[ASSET NEEDED: OFFICIAL EMERGENCY MEETING BUTTON]`
- **Status**: `NOT_FOUND_USER_ACTION_REQUIRED`
- **Deskripsi**: Tombol darurat merah (*Emergency Button*) bulat terisolasi dalam wadah kaca/kuning tanpa latar belakang meja Cafeteria.
- **Format Rekomendasi**: PNG transparan (RGBA) atau SVG.
- **Dimensi / Rasio Disarankan**: 512x512 px (1:1).
- **Rencana Penggunaan Slide**: Tombol trigger interaktif untuk memunculkan modal parameter evaluasi / emergency meeting.
- **Alasan Belum Ditemukan**: Tombol hanya tersedia sebagai bagian dari screenshot ruangan Cafeteria utuh (`skeld-cafeteria-meeting-table.jpg`), belum ada sprite isolated resmi di press kit web.
- **Kata Kunci Pencarian Manual**: `"Among Us emergency button standalone asset official"`.

### 3. `[ASSET NEEDED: OFFICIAL IN-GAME TASKBAR]`
- **Status**: `NOT_FOUND_USER_ACTION_REQUIRED`
- **Deskripsi**: Komponen progress bar hijau/kuning khas Among Us (*Total Tasks Completed*).
- **Format Rekomendasi**: PNG transparan atau potongan frame 9-slice.
- **Dimensi / Rasio Disarankan**: 800x60 px (~13:1).
- **Rencana Penggunaan Slide**: Progress bar penyelesaian 4 materi modul distribusi.
- **Alasan Belum Ditemukan**: Pada screenshot resmi, taskbar selalu menyatu dengan HUD game lengkap dan terisi sesuai status permainan.
- **Kata Kunci Pencarian Manual**: `"Among Us clean taskbar HUD asset"`.

### 4. `[ASSET NEEDED: OFFICIAL THE SKELD MINIMAP]`
- **Status**: `NOT_FOUND_USER_ACTION_REQUIRED`
- **Deskripsi**: Denah layout kapal The Skeld (blueprint navigasi ruangan: Cafeteria, Admin, Electrical, Reactor, MedBay, Security) dengan garis neon transparan.
- **Format Rekomendasi**: PNG transparan beresolusi tinggi atau SVG.
- **Dimensi / Rasio Disarankan**: 1920x1080 px (16:9).
- **Rencana Penggunaan Slide**: Peta navigasi interaktif (*Mission Map*) untuk memilih modul investigasi.
- **Alasan Belum Ditemukan**: Minimap di press kit hanya terlihat di tablet Admin (`skeld-admin-map-room.jpg`), bukan sebagai asset grafis terisolasi.
- **Kata Kunci Pencarian Manual**: `"The Skeld map official Innersloth transparent"`.

### 5. `[ASSET NEEDED: OFFICIAL AUDIO SFX]`
- **Status**: `NOT_FOUND_USER_ACTION_REQUIRED`
- **Deskripsi**: 
  1. *Emergency Meeting Siren / Klaxon sound* (`emergency-meeting.mp3` / `.wav`)
  2. *Task Complete Chime* (`task-complete.mp3` / `.wav`)
  3. *Button Click / Visor Click* (`ui-click.mp3` / `.wav`)
- **Format Rekomendasi**: MP3 / WAV 44.1kHz.
- **Rencana Penggunaan Slide**: Audio feedback saat parameter simulasi diubah, task diselesaikan, atau meeting dibuka.
- **Alasan Belum Ditemukan**: Innersloth tidak menyediakan standalone audio pack berlisensi publik di web press kit; audio game hanya berada di dalam bundle instalasi tertutup.
- **Kata Kunci Pencarian Manual**: `"Innersloth Among Us official sound effects kit"`.

---

## 5. REKOMENDASI TAHAP BERIKUTNYA

Dengan telah tersedianya 25 aset visual resmi Innersloth dan Valve Steam beresolusi tinggi (meliputi karakter warna Red, Blue, Yellow, Green, Purple, White, background 4 ruangan kunci The Skeld, voting screen, dan logo resmi), repositori telah siap untuk memasuki:

1. **Tahap Desain Visual (Among Us Sci-Fi Cockpit HUD)**: Memanfaatkan `space-stars-background.jpg`, `among-us-official-logo.png`, dan palet warna Among Us pada [`src/styles.css`](file:///d:/2026/project%20web/prostat-present/src/styles.css).
2. **Integrasi Rute Misi**: Menghubungkan 4 ruangan The Skeld yang sudah diunduh ke 4 materi distribusi probabilitas:
   - Cafeteria -> Distribusi Binomial (Investigasi 1)
   - Admin Room -> Distribusi Poisson (Investigasi 2)
   - Electrical Room -> Distribusi Eksponensial (Investigasi 3)
   - Reactor Room -> Distribusi Normal (Investigasi 4)

