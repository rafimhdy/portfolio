// src/sanity/schemas/experienceschema.js
export const experienceSchema = {
  name: "experience",
  title: "Professional Experience",
  type: "document",
  fields: [
    {
      name: "role",
      title: "Jabatan / Posisi Kerja",
      type: "string",
      description:
        "Contoh: IT Specialist, Technical Translator, Server Maintainer",
    },
    {
      name: "company",
      title: "Perusahaan / Instansi",
      type: "string",
      description: "Contoh: Quansel, Kementerian Ketenagakerjaan",
    },
    {
      name: "companyLogo",
      title: "Logo Perusahaan / Instansi",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "location",
      title: "Lokasi",
      type: "string",
      description: "Contoh: Jakarta (Hybrid), Bandung (Remote)",
    },
    {
      name: "startDate",
      title: "Tanggal Mulai",
      type: "date",
      options: { dateFormat: "YYYY-MM" },
    },
    {
      name: "endDate",
      title: "Tanggal Selesai",
      type: "date",
      options: { dateFormat: "YYYY-MM" },
      hidden: ({ document }) => document?.currentJob, // Sembunyikan kalau centang 'Masih Aktif'
      description: "Kosongkan jika kamu masih aktif bekerja di posisi ini",
    },
    {
      name: "currentJob",
      title: "Masih Aktif Bekerja di Sini?",
      type: "boolean",
    },
    {
      name: "category",
      title: "Kategori Kompetensi (Posisi)",
      type: "string",
      description:
        "Pilih agar riwayat kerja ini dikelompokkan ke halaman kompetensi yang pas",
      options: {
        list: [
          { title: "Information Technology", value: "tech" },
          { title: "Translation", value: "translation" },
          { title: "Operations", value: "operations" },
          { title: "Creative Content", value: "creative" },
          { title: "Graphic Design", value: "design" },
          { title: "Administrative Support", value: "admin" },
          { title: "Customer Service", value: "customer-service" },
        ],
      },
    },
    {
      name: "description",
      title: "Detail Job Desk & Pencapaian",
      type: "array",
      of: [{ type: "block" }],
      description:
        "Gunakan poin-poin bullet list ala Word untuk menjabarkan tugas/prestasi kamu di sini",
    },
  ],
  initialValue: {
    currentJob: false,
  },
};
