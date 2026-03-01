export interface Category {
  name: string;
}

export interface Image {
  url: string;
  alternativeText?: string;
}

export interface Localization {
  locale: string;
}

export interface DynamicZone {
  id: number;
  __component: string;
  [key: string]: unknown;
}

export interface Plan {
  name: string;
  price: number;
  features: string[];
}

export interface Perk {
  name: string;
  description: string;
}

export interface Article {
  title: string;
  description: string;
  slug: string;
  content: import('@strapi/blocks-react-renderer').BlocksContent;
  dynamic_zone: DynamicZone[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  image: Image;
  categories: Category[];
  localizations?: { locale: string; slug: string }[];
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  plans: Plan[];
  perks: Perk[];
  dynamic_zone: DynamicZone[];
  featured?: boolean;
  images: Image[];
  categories?: Category[];
}
