# ASSET CATALOG — MISSION: PROBABILITY
*Official Among Us Visual & Audio Asset Inventory*

Dokumen ini memuat katalog lengkap dan status verifikasi aktual dari seluruh file aset yang tersimpan secara lokal di folder `public/assets/among-us/`.

> [!NOTE]
> **Rekonsiliasi Inventaris**: Pada audit sebelumnya, tercatat referensi parsial (25 item). Setelah dilakukan verifikasi file riil per byte di disk, repositori memiliki **33 file aset resmi** (7 latar belakang, 14 karakter, 5 game UI, 3 ikon vektor SVG, dan 4 aset promosi/branding). Seluruh file 100% utuh dan siap digunakan.

---

## 1. KATALOG LATAR BELAKANG (`backgrounds/`) — 7 File

| Preview | Nama File & Format | Dimensi | Transparansi | Status Verifikasi | Rekomendasi Slide | Catatan Teknis & Penggunaan |
| :---: | :--- | :---: | :---: | :---: | :---: | :--- |
| ![Deep Space](./public/assets/among-us/backgrounds/space-stars-background.jpg) | `space-stars-background.jpg`<br>*(PNG Stream)* | 1438x810 | Ya | `FOUND_OFFICIAL` | Slide 01, 07, 08 | Latar belakang kanvas universal luar angkasa bertabur bintang resmi Steam. |
| ![Dropship Lobby](./public/assets/among-us/backgrounds/skeld-dropship-lobby.webp) | `skeld-dropship-lobby.webp`<br>*(WebP Lossless)* | 1920x1080 | Ya | `FOUND_OFFICIAL` | Slide 02 (Briefing) | Interior pesawat dropship pra-misi. Sangat cocok sebagai ruang briefing misi awal. |
| ![Cafeteria](./public/assets/among-us/backgrounds/skeld-cafeteria-meeting-table.jpg) | `skeld-cafeteria-meeting-table.jpg`<br>*(JPEG)* | 1920x1080 | Tidak | `FOUND_OFFICIAL` | Slide 03 (Binomial) | Meja meeting Cafeteria The Skeld. Representasi trial biner (Crewmate vs Impostor). |
| ![Admin Room](./public/assets/among-us/backgrounds/skeld-admin-map-room.jpg) | `skeld-admin-map-room.jpg`<br>*(JPEG)* | 1920x1080 | Tidak | `FOUND_OFFICIAL` | Slide 04 (Poisson) | Ruang monitor navigasi The Skeld. Representasi hitung anomali per interval waktu. |
| ![Electrical Room](./public/assets/among-us/backgrounds/skeld-electrical-room.jpg) | `skeld-electrical-room.jpg`<br>*(JPEG)* | 1920x1080 | Tidak | `FOUND_OFFICIAL` | Slide 05 (Eksponensial) | Ruang kelistrikan dan breaker panel. Latar belakang waktu tunggu perbaikan / cooldown. |
| ![Reactor Core](./public/assets/among-us/backgrounds/skeld-reactor-core-room.jpg) | `skeld-reactor-core-room.jpg`<br>*(JPEG)* | 1920x1080 | Tidak | `FOUND_OFFICIAL` | Slide 06 (Normal) | Ruang inti reaktor dengan manifold. Latar kalibrasi suhu sensor dan kurva Gaussian. |
| ![Space Ejection](./public/assets/among-us/backgrounds/space-ejection-sequence.png) | `space-ejection-sequence.png`<br>*(PNG Full HD)* | 1920x1080 | Ya | `FOUND_OFFICIAL` | Slide 10 (Completed) | Visual ejeksi resmi ke ruang hampa. Resolusi 3.65 MB, dramatis untuk penutup misi. |

---

## 2. KATALOG KARAKTER CREWMATE & IMPOSTOR (`characters/`) — 14 File

| Preview | Nama File & Format | Dimensi | Transparansi | Status Verifikasi | Rekomendasi Slide | Catatan Teknis & Penggunaan |
| :---: | :--- | :---: | :---: | :---: | :---: | :--- |
| ![Red Standing](./public/assets/among-us/characters/crewmate-red-standing.png) | `crewmate-red-standing.png`<br>*(PNG)* | 150x198 | Ya (Alpha) | `FOUND_OFFICIAL` | Slide 01, 02 | Pose netral Red berdiri tegak. Maskot investigasi. |
| ![Red Alibi](./public/assets/among-us/characters/crewmate-red-alibi.png) | `crewmate-red-alibi.png`<br>*(PNG)* | 150x198 | Ya (Alpha) | `FOUND_OFFICIAL` | Slide 07, 09 | Red memegang berkas alibi / data statistik Z-score. |
| ![Red Task](./public/assets/among-us/characters/crewmate-red-task.png) | `crewmate-red-task.png`<br>*(PNG)* | 150x198 | Ya (Alpha) | `FOUND_OFFICIAL` | Slide 03 | Red pura-pura mengerjakan task. Kontras sukses/gagal. |
| ![Yellow Tablet](./public/assets/among-us/characters/crewmate-yellow-tablet.png) | `crewmate-yellow-tablet.png`<br>*(PNG)* | 150x198 | Ya (Alpha) | `FOUND_OFFICIAL` | Slide 04 | Yellow mencatat jumlah kejadian anomali pada tablet. |
| ![Purple Kill](./public/assets/among-us/characters/impostor-purple-kill.png) | `impostor-purple-kill.png`<br>*(PNG)* | 150x198 | Ya (Alpha) | `FOUND_OFFICIAL` | Slide 03, 09 | Purple Impostor mengintai. Simbol peluang kejadian langka/bahaya. |
| ![Purple Wires](./public/assets/among-us/characters/crewmate-purple-wires.png) | `crewmate-purple-wires.png`<br>*(PNG)* | 150x198 | Ya (Alpha) | `FOUND_OFFICIAL` | Slide 05 | Purple memperbaiki kabel. Representasi durasi waktu kontinu $t$. |
| ![Green Vent](./public/assets/among-us/characters/crewmate-green-vent.png) | `crewmate-green-vent.png`<br>*(PNG)* | 150x198 | Ya (Alpha) | `FOUND_OFFICIAL` | Slide 04, 05 | Green melompat ke ventilasi. Indikator interval perpindahan cepat. |
| ![Blue Tablet](./public/assets/among-us/characters/crewmate-blue-tablet.png) | `crewmate-blue-tablet.png`<br>*(PNG)* | 150x198 | Ya (Alpha) | `FOUND_OFFICIAL` | Slide 06 | Blue memantau data kalibrasi sensor reaktor normal $\mu, \sigma$. |
| ![Blue Emergency](./public/assets/among-us/characters/crewmate-blue-emergency.png) | `crewmate-blue-emergency.png`<br>*(PNG)* | 150x198 | Ya (Alpha) | `FOUND_OFFICIAL` | Slide 09 | Blue panik menekan emergency buzzer. Trigger kuis interaktif. |
| ![Blue Sabotage](./public/assets/among-us/characters/crewmate-blue-sabotage.png) | `crewmate-blue-sabotage.png`<br>*(PNG)* | 150x198 | Ya (Alpha) | `FOUND_OFFICIAL` | Slide 05 | Blue melakukan sabotase lampu/oksigen. Event laju kegagalan $\lambda$. |
| ![Blue Doors](./public/assets/among-us/characters/crewmate-blue-doors.png) | `crewmate-blue-doors.png`<br>*(PNG)* | 150x198 | Ya (Alpha) | `FOUND_OFFICIAL` | Slide 08 | Blue menutup pintu sekat. Pembatas kompartemen distribusi. |
| ![White Voting](./public/assets/among-us/characters/crewmate-white-voting.png) | `crewmate-white-voting.png`<br>*(PNG)* | 150x198 | Ya (Alpha) | `FOUND_OFFICIAL` | Slide 09, 10 | White menaruh suara voting. Simbol verifikasi audiens. |
| ![Impostor HD](./public/assets/among-us/characters/impostor-profile-hd.webp) | `impostor-profile-hd.webp`<br>*(WebP)* | 1920x1200 | Ya | `FOUND_OFFICIAL` | Slide 01, 09 | Profil resolusi tinggi Impostor resmi. Hero visual yang sangat kuat. |
| ![15 Lineup](./public/assets/among-us/characters/crewmates-15-lineup.webp) | `crewmates-15-lineup.webp`<br>*(WebP Ultra HD)* | 7778x4375 | Ya | `FOUND_OFFICIAL` | Slide 02, 10 | Banner 8K transparan berisi 15 warna kru lengkap melayang di angkasa. |

---

## 3. KATALOG GAME UI & SCREENSHOT RESMI (`game-ui/`) — 5 File

| Preview | Nama File & Format | Dimensi | Transparansi | Status Verifikasi | Rekomendasi Slide | Catatan Teknis & Penggunaan |
| :---: | :--- | :---: | :---: | :---: | :---: | :--- |
| ![Voting Screen](./public/assets/among-us/game-ui/emergency-meeting-voting-screen.webp) | `emergency-meeting-voting-screen.webp`<br>*(WebP)* | 1920x1080 | Ya | `FOUND_OFFICIAL` | Slide 03, 09 | Layar pemungutan suara resmi dengan kotak avatar nama pemain. |
| ![Card Swipe](./public/assets/among-us/game-ui/task-admin-card-swipe.webp) | `task-admin-card-swipe.webp`<br>*(WebP)* | 1920x1080 | Ya | `FOUND_OFFICIAL` | Slide 03 | Task gesek kartu Admin. Sangat pas untuk analogi percobaan Bernoulli. |
| ![Role Reveal](./public/assets/among-us/game-ui/role-reveal-shhh-screen.webp) | `role-reveal-shhh-screen.webp`<br>*(WebP)* | 1920x1080 | Ya | `FOUND_OFFICIAL` | Slide 01, 03 | Layar Shhh! dengan siluet merah menaruh jari di visor. |
| ![Guardian Angel](./public/assets/among-us/game-ui/guardian-angel-protect.webp) | `guardian-angel-protect.webp`<br>*(WebP)* | 1920x1080 | Ya | `FOUND_OFFICIAL` | Slide 08 | Antarmuka pelindung kru hantu. Analogi probabilitas komplementer. |
| ![Impostor Kill](./public/assets/among-us/game-ui/impostor-kill-action.webp) | `impostor-kill-action.webp`<br>*(WebP)* | 1920x1080 | Ya | `FOUND_OFFICIAL` | Slide 04 | Aksi eliminasi Impostor resmi. Analogi kejadian Poisson diskrit. |

---

## 4. KATALOG IKON VEKTOR (`icons/`) — 3 File

| Preview | Nama File & Format | Dimensi | Transparansi | Status Verifikasi | Rekomendasi Slide | Catatan Teknis & Penggunaan |
| :---: | :--- | :---: | :---: | :---: | :---: | :--- |
| ![Megaphone](./public/assets/among-us/icons/emergency-meeting-megaphone.svg) | `emergency-meeting-megaphone.svg`<br>*(SVG)* | 17x22 Vektor | Ya (Vector) | `FOUND_OFFICIAL` | Header, Slide 09 | Megafon resmi Emergency Meeting Innersloth. Ikon tajam tak terbatas resolusi. |
| ![Red Star](./public/assets/among-us/icons/impostor-red-star.svg) | `impostor-red-star.svg`<br>*(SVG)* | 27x42 Vektor | Ya (Vector) | `FOUND_OFFICIAL` | Slide 03, 04, 05, 06 | Bintang merah runcing penanda bahaya / formula kunci pada HUD. |
| ![Download Arrow](./public/assets/among-us/icons/innersloth-download-arrow.svg) | `innersloth-download-arrow.svg`<br>*(SVG)* | 18x13 Vektor | Ya (Vector) | Footer, Slide 10 | Ikon unduhan resmi untuk tombol ekspor ringkasan materi PDF. |

---

## 5. KATALOG PROMOSIONAL & BRANDING (`promotional/`) — 4 File

| Preview | Nama File & Format | Dimensi | Transparansi | Status Verifikasi | Rekomendasi Slide | Catatan Teknis & Penggunaan |
| :---: | :--- | :---: | :---: | :---: | :---: | :--- |
| ![Logo](./public/assets/among-us/promotional/among-us-official-logo.png) | `among-us-official-logo.png`<br>*(PNG)* | 948x258 | Ya (Alpha) | `FOUND_OFFICIAL` | Header, Slide 01 | Logo resmi transparan beresolusi tinggi. Elemen sekunder di samping judul. |
| ![Artwork](./public/assets/among-us/promotional/among-us-space-crew-artwork.png) | `among-us-space-crew-artwork.png`<br>*(PNG)* | 2500x1224 | Tidak | `FOUND_OFFICIAL` | Slide 02, 10 | Key art resmi kru berkumpul di kapal angkasa. Visual perkenalan tim. |
| ![Crew Banner](./public/assets/among-us/promotional/crewmate-objective-banner.png) | `crewmate-objective-banner.png`<br>*(WebP)* | 600x100 | Ya | `FOUND_OFFICIAL` | Slide 02, 08 | Banner tajam resmi Innersloth: *"Objective: Fill group task bar"*. |
| ![Impostor Banner](./public/assets/among-us/promotional/impostor-objective-banner.png) | `impostor-objective-banner.png`<br>*(WebP)* | 600x102 | Ya | `FOUND_OFFICIAL` | Slide 03, 07 | Banner tajam resmi Innersloth: *"Objective: Kill off the crew"*. |

---

## 6. INVENTARIS ASET YANG BELUM TERSEDIA (`NOT_FOUND_USER_ACTION_REQUIRED`)

Aset berikut tidak ditemukan dalam bentuk terisolasi di kanal resmi web. Sesuai prinsip proyek, **tidak diganti dengan AI** melainkan diberi penanda placeholder:

1. `[ASSET NEEDED: OFFICIAL AMONG US CYAN CREWMATE PNG]`
   - Lokasi Target: `public/assets/among-us/characters/crewmate-cyan-standing.png`
   - Spesifikasi: PNG Transparan, min. 500x650 px.
2. `[ASSET NEEDED: OFFICIAL EMERGENCY MEETING BUTTON]`
   - Lokasi Target: `public/assets/among-us/game-ui/emergency-button-isolated.png`
   - Spesifikasi: PNG Transparan 512x512 px.
3. `[ASSET NEEDED: OFFICIAL IN-GAME TASKBAR]`
   - Lokasi Target: `public/assets/among-us/game-ui/taskbar-empty.png`
   - Spesifikasi: PNG Transparan 800x60 px.
4. `[ASSET NEEDED: OFFICIAL THE SKELD MINIMAP]`
   - Lokasi Target: `public/assets/among-us/game-ui/skeld-minimap-isolated.png`
   - Spesifikasi: PNG Transparan / SVG 1920x1080 px.
5. `[ASSET NEEDED: OFFICIAL AUDIO SFX]`
   - Lokasi Target: `public/assets/among-us/audio/emergency-siren.mp3`, `task-complete.mp3`, `ui-click.mp3`
   - Spesifikasi: MP3/WAV 44.1kHz.

