import { defineField, defineType } from "sanity";

export const storageUnitSchema = defineType({
  name: "storageUnit",
  title: "Storage Unit",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Unit Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "size",
      title: "Size (m²)",
      type: "number",
      description: "Floor area in square metres",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "pricePerMonth",
      title: "Price Per Month (ZAR)",
      type: "number",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "isAvailable",
      title: "Available",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [{ type: "string" }],
      description: "e.g. 24/7 Access, CCTV, Climate Controlled",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "size",
      media: "images.0",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `${subtitle} m²` : "No size set",
      };
    },
  },
});
