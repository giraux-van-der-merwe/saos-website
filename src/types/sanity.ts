export interface SanitySlug {
  current: string;
}

export interface SanityImage {
  _type: "image";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  asset: any;
  alt?: string;
  hotspot?: { x: number; y: number; height: number; width: number };
}

export interface StorageUnit {
  _id: string;
  name: string;
  slug: SanitySlug;
  size: number;
  pricePerMonth: number;
  isAvailable: boolean;
  features: string[];
  images: SanityImage[];
  description?: unknown[];
}

export interface Page {
  _id: string;
  title: string;
  slug: SanitySlug;
  order?: number;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImage;
  };
  content?: unknown[];
}

export interface Faq {
  _id: string;
  question: string;
  answer: string;
  order: number;
}

export interface Service {
  _id: string;
  title: string;
  slug?: SanitySlug;
  icon?: string;
  description: string;
  order: number;
}

export interface Partner {
  _id: string;
  name: string;
  logo?: SanityImage;
  description?: string;
  website?: string;
  order: number;
}

export interface Post {
  _id: string;
  title: string;
  slug: SanitySlug;
  excerpt?: string;
  coverImage?: SanityImage;
  body?: unknown[];
  publishedAt?: string;
}

export interface SeoFields {
  metaTitle?: string;
  metaDescription?: string;
  ogImage?: SanityImage;
}

export interface PageSingleton {
  pageHeading?: string;
  pageIntro?: string;
  seo?: SeoFields;
}

export interface HomePage {
  heroHeadline?: string;
  heroSupportText?: string;
  heroCtaPrimary?: string;
  heroCtaSecondary?: string;
  trustStats?: Array<{ value: string; label: string }>;
  solutionHeading?: string;
  solutionBody?: string;
  servicesHeading?: string;
  howItWorksHeading?: string;
  howItWorksSteps?: Array<{ stepNumber: string; title: string; description: string }>;
  whySaosHeading?: string;
  whySaosPoints?: Array<{ title: string; description: string }>;
  founderHeading?: string;
  founderBody?: string;
  finalCtaHeading?: string;
  finalCtaBody?: string;
}

export interface Review {
  _id: string;
  quote: string;
  authorName: string;
  country?: string;
  vehicle?: string;
  storedSince?: string;
  photo?: SanityImage;
  order: number;
}

export interface SiteSettings {
  siteName: string;
  tagline?: string;
  contactEmail?: string;
  contactPhone?: string;
  address?: {
    street?: string;
    city?: string;
    province?: string;
    postalCode?: string;
    country?: string;
  };
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
  };
  defaultSeo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImage;
  };
}
