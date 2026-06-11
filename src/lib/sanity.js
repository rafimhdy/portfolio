import { createClient } from "@sanity/client";

const sanityClient = createClient({
  projectId: "34z2llty",
  dataset: "production",
  apiVersion: "2025-06-01",
  useCdn: false,
});

export async function getAllProjects() {
  return sanityClient.fetch(`
    *[_type == "project"] | order(coalesce(featured, false) desc, _createdAt desc) {
      _id, title, summary, company, location, category, featured
    }
  `);
}

export async function getProjectsByCategory(category) {
  return sanityClient.fetch(
    `*[_type == "project" && category == $category] | order(coalesce(featured, false) desc, _createdAt desc) {
        _id, title, summary, company, location, category, featured
     }`,
    { category },
  );
}
