// src/sanity/schema.js
import React from "react";

export const projectSchema = {
  name: "project",
  title: "Project & Experience",
  type: "document",
  fields: [
    { name: "title", title: "Project Title", type: "string" },
    {
      name: "coverImage",
      title: "Cover Image (Main)",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Web Dev", value: "web-dev" },
          { title: "Translation", value: "translation" },
          { title: "Operations", value: "operations" },
          { title: "Creative Content", value: "creative" },
          { title: "Graphic Design", value: "design" },
          { title: "Administrative Support", value: "admin" },
          { title: "Customer Service", value: "customer-service" },
        ],
      },
    },
    { name: "company", title: "Company", type: "string" },
    { name: "location", title: "Location", type: "string" },
    {
      name: "content",
      title: "Full Description (Word Style Pro)",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 1", value: "h1" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Blockquote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet List", value: "bullet" },
            { title: "Numbered List", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike" },
            ],
            annotations: [
              {
                title: "URL Link",
                name: "link",
                type: "object",
                fields: [{ name: "href", type: "url", title: "Target URL" }],
              },
            ],
          },
        },
        // FITUR BARU: Menyisipkan Gambar ala Word dengan Pengaturan Dimensi & Crop
        {
          type: "image",
          name: "inlineImage",
          title: "Inserted Image",
          options: {
            hotspot: true, // Fitur CROP otomatis aktif di dalam teks body!
          },
          fields: [
            {
              name: "width",
              title: "Custom Width (Pixel atau %)",
              type: "string",
              description:
                "Contoh: 300px, 500px, atau 50% (Kosongkan jika ingin ukuran penuh)",
              options: { isHighlighted: true },
            },
            {
              name: "height",
              title: "Custom Height (Optional)",
              type: "string",
              description:
                "Contoh: 200px (Kosongkan agar rasio gambar tetap proporsional)",
              options: { isHighlighted: true },
            },
            {
              name: "alt",
              title: "Alternative Text (Keterangan Gambar)",
              type: "string",
              options: { isHighlighted: true },
            },
          ],
        },
      ],
    },
  ],
};
