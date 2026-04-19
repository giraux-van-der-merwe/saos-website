import { defineField, defineType } from "sanity";

export const partnerSchema = defineType({
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Partner Name", type: "string", validation: (R) => R.required() }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
    }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "website", title: "Website URL", type: "url" }),
    defineField({ name: "order", title: "Display Order", type: "number", initialValue: 10 }),
    defineField({ name: "isActive", title: "Active", type: "boolean", initialValue: true }),
  ],
  orderings: [{ title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: {
    select: { title: "name", media: "logo" },
    prepare: ({ title, media }) => ({ title, media }),
  },
});
