import { groq } from "next-sanity";

// Fetch all storage units (for listings page)
export const storageUnitsQuery = groq`
  *[_type == "storageUnit"] | order(name asc) {
    _id,
    name,
    slug,
    size,
    pricePerMonth,
    features,
    isAvailable,
    images
  }
`;

// Fetch a single storage unit by slug
export const storageUnitBySlugQuery = groq`
  *[_type == "storageUnit" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    size,
    pricePerMonth,
    features,
    isAvailable,
    images,
    description
  }
`;

// Fetch site settings (singleton)
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    contactEmail,
    contactPhone,
    address,
    socialLinks
  }
`;

// Fetch all pages (for navigation)
export const pagesQuery = groq`
  *[_type == "page"] | order(order asc) {
    _id,
    title,
    slug
  }
`;

// Fetch a single page by slug
export const pageBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    seo,
    content
  }
`;
