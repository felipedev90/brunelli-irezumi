export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
  cta?: {
    label: string;
    href: string;
  };
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  span?: "row" | "col" | "none";
}

export interface ServiceCard {
  id: number;
  slug: string;
  title: string;
  description: string;
  cta: string;
  image: {
    src: string;
    alt: string;
  };
  gallery: {
    src: string;
    alt: string;
  }[];
}

export interface NavLink {
  label: string;
  href: string;
}
