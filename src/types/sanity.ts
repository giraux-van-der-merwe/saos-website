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
