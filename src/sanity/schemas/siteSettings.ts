import { defineField, defineType } from "sanity";

export const siteSettingsSchema = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // Singleton — only one document of this type should exist
  fields: [
    defineField({ name: "siteName", title: "Site Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "contactEmail", title: "Contact Email", type: "string" }),
    defineField({ name: "contactPhone", title: "Contact Phone", type: "string" }),
    defineField({
      name: "address",
      title: "Physical Address",
      type: "object",
      fields: [
        defineField({ name: "street", title: "Street", type: "string" }),
        defineField({ name: "city", title: "City", type: "string" }),
        defineField({ name: "province", title: "Province", type: "string" }),
        defineField({ name: "postalCode", title: "Postal Code", type: "string" }),
        defineField({ name: "country", title: "Country", type: "string", initialValue: "South Africa" }),
      ],
    }),
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        defineField({ name: "facebook", title: "Facebook URL", type: "url" }),
        defineField({ name: "instagram", title: "Instagram URL", type: "url" }),
        defineField({ name: "whatsapp", title: "WhatsApp Number", type: "string" }),
      ],
    }),
    defineField({
      name: "defaultSeo",
      title: "Default SEO",
      type: "object",
      fields: [
        defineField({ name: "metaTitle", title: "Default Meta Title", type: "string" }),
        defineField({ name: "metaDescription", title: "Default Meta Description", type: "text", rows: 3 }),
        defineField({ name: "ogImage", title: "Default OG Image", type: "image" }),
      ],
    }),
  ],
});
