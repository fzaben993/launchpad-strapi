import { strapiImage } from '../strapi/strapiImage';

export interface SEOData {
  metaTitle?: string;
  metaDescription?: string;
  ogTitle?: string;
  ogDescription?: string;
  metaImage?: { url: string };
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  [key: string]: unknown;
}

export function generateMetadataObject(seo: SEOData | undefined | null) {
  return {
    title: seo?.metaTitle || 'Default Title', // Fallback to 'Default Title' if title is not provided
    description: seo?.metaDescription || 'Default Description', // Fallback to 'Default Description'
    openGraph: {
      title: seo?.ogTitle || seo?.metaTitle || 'Default OG Title',
      description:
        seo?.ogDescription || seo?.metaDescription || 'Default OG Description',
      images: seo?.metaImage ? [{ url: strapiImage(seo?.metaImage.url) }] : [],
    },
    twitter: {
      card: seo?.twitterCard || 'summary_large_image',
      title: seo?.twitterTitle || seo?.metaTitle || 'Default Twitter Title',
      description:
        seo?.twitterDescription ||
        seo?.metaDescription ||
        'Default Twitter Description',
      images: seo?.twitterImage ? [{ url: seo.twitterImage }] : [],
    },
  };
}
