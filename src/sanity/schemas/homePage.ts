import { defineField, defineType } from "sanity";

export const homePageSchema = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({ name: "_title", title: "Document Label", type: "string", readOnly: true, initialValue: "Home Page" }),

    // Hero
    defineField({ name: "heroHeadline", title: "Hero Headline", type: "string" }),
    defineField({ name: "heroSupportText", title: "Hero Support Text", type: "text", rows: 4 }),
    defineField({ name: "heroCtaPrimary", title: "Primary CTA Label", type: "string" }),
    defineField({ name: "heroCtaSecondary", title: "Secondary CTA Label", type: "string" }),

    // Trust strip
    defineField({
      name: "trustStats",
      title: "Trust Stats",
      type: "array",
      of: [
        defineField({
          name: "stat",
          title: "Stat",
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
    }),

    // Solution section
    defineField({ name: "solutionHeading", title: "Solution Heading", type: "string" }),
    defineField({ name: "solutionBody", title: "Solution Body", type: "text", rows: 5 }),

    // Services section
    defineField({ name: "servicesHeading", title: "Services Section Heading", type: "string" }),

    // How it works
    defineField({ name: "howItWorksHeading", title: "How It Works Heading", type: "string" }),
    defineField({
      name: "howItWorksSteps",
      title: "How It Works Steps",
      type: "array",
      of: [
        defineField({
          name: "step",
          title: "Step",
          type: "object",
          fields: [
            defineField({ name: "stepNumber", title: "Step Number", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "stepNumber", subtitle: "title" } },
        }),
      ],
    }),

    // Why SAOS
    defineField({ name: "whySaosHeading", title: "Why SAOS Heading", type: "string" }),
    defineField({
      name: "whySaosPoints",
      title: "Why SAOS Points",
      type: "array",
      of: [
        defineField({
          name: "point",
          title: "Point",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        }),
      ],
    }),

    // Founder story
    defineField({ name: "founderHeading", title: "Founder Section Heading", type: "string" }),
    defineField({ name: "founderBody", title: "Founder Story Body", type: "text", rows: 8 }),

    // Final CTA
    defineField({ name: "finalCtaHeading", title: "Final CTA Heading", type: "string" }),
    defineField({ name: "finalCtaBody", title: "Final CTA Body", type: "text", rows: 3 }),
  ],
  preview: { select: { title: "_title" }, prepare: () => ({ title: "Home Page" }) },
});
