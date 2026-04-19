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

// Fetch all active FAQs ordered by display order
export const faqsQuery = groq`
  *[_type == "faq" && isActive == true] | order(order asc) {
    _id,
    question,
    answer,
    order
  }
`;

// Fetch all active services ordered by display order
export const servicesQuery = groq`
  *[_type == "service" && isActive == true] | order(order asc) {
    _id,
    title,
    icon,
    description,
    order
  }
`;

// Fetch all active reviews ordered by display order
export const reviewsQuery = groq`
  *[_type == "review" && isActive == true] | order(order asc) {
    _id,
    quote,
    authorName,
    country,
    vehicle,
    storedSince,
    photo,
    order
  }
`;
