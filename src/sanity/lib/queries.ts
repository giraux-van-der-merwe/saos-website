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
    slug,
    icon,
    description,
    order
  }
`;

// Fetch a single service by slug
export const serviceBySlugQuery = groq`
  *[_type == "service" && slug.current == $slug && isActive == true][0] {
    _id,
    title,
    slug,
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

// Page singleton queries
export const homePageQuery = groq`
  *[_type == "homePage"][0] {
    heroHeadline,
    heroSupportText,
    heroCtaPrimary,
    heroCtaSecondary,
    trustStats,
    solutionHeading,
    solutionBody,
    servicesHeading,
    howItWorksHeading,
    howItWorksSteps,
    whySaosHeading,
    whySaosPoints,
    founderHeading,
    founderBody,
    finalCtaHeading,
    finalCtaBody
  }
`;

export const storageServicesPageQuery = groq`
  *[_type == "storageServicesPage"][0] { pageHeading, pageIntro, seo }
`;

export const ourFacilityPageQuery = groq`
  *[_type == "ourFacilityPage"][0] { pageHeading, pageIntro, galleryHeading, seo }
`;

export const partnersPageQuery = groq`
  *[_type == "partnersPage"][0] { pageHeading, pageIntro, seo }
`;

export const journalPageQuery = groq`
  *[_type == "journalPage"][0] { pageHeading, pageIntro, seo }
`;

export const faqPageContentQuery = groq`
  *[_type == "faqPageContent"][0] { pageHeading, pageIntro, seo }
`;

export const contactPageQuery = groq`
  *[_type == "contactPage"][0] { pageHeading, pageIntro, seo }
`;

export const calculatePageQuery = groq`
  *[_type == "calculatePage"][0] { pageHeading, pageIntro, seo }
`;

// Partner collection
export const partnersQuery = groq`
  *[_type == "partner" && isActive == true] | order(order asc) {
    _id,
    name,
    logo,
    description,
    website,
    order
  }
`;

// Journal posts
export const postsQuery = groq`
  *[_type == "post" && isActive == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug && isActive == true][0] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    body,
    publishedAt
  }
`;
