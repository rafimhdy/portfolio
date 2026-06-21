// src/sanity/schemas/toolsschema.js
export const toolsSchema = {
  name: "tool",
  title: "Tools & Skills",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nama Tool / Skill",
      type: "string",
      description: "Contoh: VS Code, Figma, Wireshark, WordPress",
    },
    {
      name: "logo",
      title: "Logo / Ikon Tool",
      type: "image",
      options: {
        hotspot: true, // Biar bisa dicrop/atur fokus pas di-upload
      },
      description: "Upload logo resmi tool dalam format PNG/SVG transparan",
    },
    {
      name: "proficiency",
      title: "Level Kemahiran",
      type: "string",
      options: {
        list: [
          { title: "Advanced / Pro", value: "advanced" },
          { title: "Intermediate", value: "intermediate" },
          { title: "Basic / Familiar", value: "basic" },
        ],
      },
    },
    {
      name: "category",
      title: "Kategori Kompetensi (Posisi)",
      type: "string",
      description:
        "Pilih agar tool ini muncul di halaman kompetensi yang sesuai",
      options: {
        list: [
          { title: "Information Technology", value: "tech" },
          { title: "Translation", value: "translation" },
          { title: "Operations", value: "operations" },
          { title: "Creative Content", value: "creative" },
          { title: "Graphic Design", value: "design" },
          { title: "Administrative Support", value: "admin" },
          { title: "Customer Service", value: "customer-service" },
          { title: "Technical Writing", value: "technical-writing" },
        ],
      },
    },
  ],
};
