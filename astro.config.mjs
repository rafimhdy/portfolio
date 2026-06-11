import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: "34z2llty",
    dataset: "production",
    useCdn: false,
    studioBasePath: "/studio", // <-- Ini kunci pembuka gerbang admin-nya
  }), react()],
});