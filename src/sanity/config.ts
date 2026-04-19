import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export const sanityConfig = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "s0kg7aow",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "Southern Africa Overlanding Storage",
  apiVersion: "2024-01-01",
  basePath: "/studio",
  plugins: [
    structureTool(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
