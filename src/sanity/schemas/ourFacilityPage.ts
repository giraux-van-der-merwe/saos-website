import { defineField, defineType } from "sanity";

export const ourFacilityPageSchema = defineType({
  name: "ourFacilityPage",
  title: "Our Facility Page",
  type: "document",
  fields: [
    defineField({ name: "pageHeading", title: "Page Heading", type: "string" }),
    defineField({ name: "pageIntro", title: "Page Introduction", type: "text", rows: 4 }),
    defineField({ name: "galleryHeading", title: "Gallery Section Heading", type: "string" }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({ name: "metaTitle", title: "Meta Title", type: "string" }),
        defineField({ name: "metaDescription", title: "Meta Description", type: "text", rows: 3 }),
        defineField({ name: "ogImage", title: "OG Image", type: "image" }),
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Our Facility Page" }) },
});
