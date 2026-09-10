# digital-agency-landing-page

Website landing page untuk VERSE Studio, sebuah agensi digital yang fokus pada UI/UX design, web development, serta maintenance & support.

## Tujuan Proyek

Proyek ini bertujuan untuk:
- Menampilkan profil, layanan, dan portofolio VERSE Studio secara profesional.
- Mendukung multi-bahasa (`id`, `en`, `ko`).
- Menyediakan struktur yang mudah dilanjutkan oleh tim untuk pengembangan lebih lanjut.
- Memudahkan update konten tanpa harus mengubah struktur utama aplikasi.

## Stack yang Digunakan

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- next-intl untuk i18n
- Vercel Analytics

## Struktur Proyek

```text
app/
  globals.css
  layout.tsx
  page.tsx
  [locale]/
    layout.tsx
    page.tsx
    ... halaman per layanan
components/
  ... komponen UI reusable
messages/
  id.json
  en.json
  ko.json
lib/
  services.ts
  utils.ts
i18n/
  navigation.ts
  request.ts
  routing.ts
```

## Persiapan Lokal

1. Clone repo ini.
2. Pastikan Node.js sudah terinstall.
3. Install dependency:

```bash
npm install
```

4. Jalankan development server:

```bash
npm run dev
```

5. Buka browser ke:

```text
http://localhost:3000
```

## Script yang Tersedia

```bash
npm run dev
npm run build
npm run start
```

## Panduan Tim untuk Mengembangkan Web Ini

### 1. Menambah atau Mengubah Konten

Konten utama website sebagian besar ada di file `messages/*.json`.

- `messages/id.json` untuk konten Bahasa Indonesia
- `messages/en.json` untuk konten Bahasa Inggris
- `messages/ko.json` untuk konten Bahasa Korea

Jika ingin mengubah teks halaman, bagian hero, layanan, profil, atau footer, perbarui file JSON sesuai bahasa yang relevan.

### 2. Menambah Halaman Baru

Untuk menambahkan halaman baru di route multi-bahasa:

1. Buat file di folder `app/[locale]/.../page.tsx`
2. Pastikan path route sesuai kebutuhan
3. Tambahkan label navigasi dan route di `messages/*.json`
4. Jika halaman baru perlu masuk ke header/footer, update komponen yang relevan

### 3. Menambah Komponen Baru

Komponen reusable diletakkan di folder `components/`.

Gunakan pendekatan berikut:
- Komponen yang reusable → `components/`
- Halaman spesifik → `app/[locale]/.../page.tsx`
- Utility/helper → `lib/`

### 4. Menyusun Bahasa / Lokal

Semua halaman terikat pada routing multi-bahasa yang sudah dibuat di `i18n/`.

Jika ingin menambah locale baru:
1. Update `i18n/routing.ts`
2. Tambahkan file bahasa baru di `messages/`
3. Pastikan konten dan route sudah konsisten

### 5. Menyusun Styling

Styling utama menggunakan Tailwind CSS.

- File global styling ada di `app/globals.css`
- Variabel tema dan class style custom bisa ditambahkan di sini
- Pastikan style baru konsisten dengan desain system yang sudah ada

### 6. Update Konten Layanan / Portofolio

Data layanan saat ini dikelola di `lib/services.ts`.

Jika ingin menambah:
- layanan baru
- deskripsi layanan
- harga / estimasi
- item yang ditampilkan di card

maka edit file `lib/services.ts` sesuai kebutuhan.

### 7. Workflow Tim

Rekomendasi workflow yang disarankan:

```bash
git checkout -b feature/nama-fiturnya
# lakukan perubahan
npm run build
git add .
git commit -m "Deskripsi perubahan"
git push origin feature/nama-fiturnya
```

Setelah review selesai, merge ke `main`.

## Catatan Penting

- Jangan langsung mengubah struktur utama tanpa koordinasi tim.
- Jika ada perubahan wording, lebih baik update di `messages/*.json` agar multi-bahasa tetap konsisten.
- Sebelum push ke branch utama, selalu jalankan `npm run build` untuk memastikan tidak ada error.
- Untuk konten yang sering berubah, prioritaskan edit di JSON dan data layer dibanding mengganti komponen besar.

## Rekomendasi Lanjutan

Untuk pengembangan selanjutnya, tim bisa menambahkan:
- halaman contact form backend integration
- CMS atau admin panel untuk edit konten
- SEO metadata per halaman
- analytics event tracking
- deploy automation / CI/CD

## Referensi

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Learn](https://nextjs.org/learn)
- [next-intl](https://next-intl.dev)
- [Tailwind CSS](https://tailwindcss.com)
