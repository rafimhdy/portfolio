import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { projectSchema } from "./src/sanity/schemas/projectschema.js";
import { toolsSchema } from "./src/sanity/schemas/toolschema.js";
import { experienceSchema } from "./src/sanity/schemas/experienceschema.js";

// 1. Definisikan list posisi secara terpusat agar bisa digunakan berulang kali
const POSITIONS = [
  { title: "Web Dev", value: "web-dev" },
  { title: "Translation", value: "translation" },
  { title: "Operations", value: "operations" },
  { title: "Creative Content", value: "creative" },
  { title: "Graphic Design", value: "design" },
  { title: "Administrative Support", value: "admin" },
  { title: "Customer Service", value: "customer-service" },
];

export default defineConfig({
  name: "default",
  title: "Rafi Portfolio Hub",
  projectId: "34z2llty",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // ─── GRUP 1: PROJECT & EXPERIENCE ───
            S.listItem()
              .title("Project & Experience")
              .child(
                S.list()
                  .title("Projects by Position")
                  .items(
                    POSITIONS.map((pos) =>
                      S.listItem()
                        .title(pos.title)
                        .child(
                          S.documentList()
                            .title(pos.title)
                            .filter(
                              '_type == "project" && category == $posValue',
                            )
                            .params({ posValue: pos.value }),
                        ),
                    ),
                  ),
              ),

            // ─── GRUP 2: TOOLS & SKILLS ───
            S.listItem()
              .title("Tools & Skills")
              .child(
                S.list()
                  .title("Tools by Position")
                  .items(
                    POSITIONS.map((pos) =>
                      S.listItem()
                        .title(pos.title)
                        .child(
                          S.documentList()
                            .title(pos.title)
                            .filter('_type == "tool" && category == $posValue')
                            .params({ posValue: pos.value }),
                        ),
                    ),
                  ),
              ),

            // ─── GRUP 3: PROFESSIONAL EXPERIENCE ───
            S.listItem()
              .title("Professional Experience")
              .child(
                S.list()
                  .title("Experience by Position")
                  .items(
                    POSITIONS.map((pos) =>
                      S.listItem()
                        .title(pos.title)
                        .child(
                          S.documentList()
                            .title(pos.title)
                            .filter(
                              '_type == "experience" && category == $posValue',
                            )
                            .params({ posValue: pos.value }),
                        ),
                    ),
                  ),
              ),
          ]),
    }),
  ],

  schema: {
    types: [projectSchema, toolsSchema, experienceSchema],
  },
});
