import type {
  FaqItem,
  GalleryImage,
  NavLink,
  ServiceCard,
  Testimonial,
} from "@/types";

export const WHATSAPP_URL = "https://wa.me/5511976624286";
export const INSTAGRAM_URL = "https://instagram.com/brunelli.irezumi/";
export const MAPS_URL = "https://maps.app.goo.gl/UkwhKQAUF1nbwSTF7";

export const STUDIO_NAME = "Brunelli Irezumi";
export const STUDIO_TAGLINE = "The Modern Shokunin";

export const STUDIO_ADDRESS = {
  street: "R. Baronesa do Japi, 199 - Centro",
  city: "Jundiaí",
  state: "SP",
  cep: "13207-684",
  complement: "The Garden Estudio",
};

export const STUDIO_HOURS = "Segunda a Sábado: 10h às 20h";

export const STUDIO_RATING = {
  value: 4.9,
  count: 53,
};

export const NAV_LINKS: NavLink[] = [
  { label: "O Artista", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "FAQ", href: "#faq" },
];

export const HERO_IMG_CONTENT = {
  src: "/images/hero/hero1900p.webp",
  alt: "Felipe Brunelli aplicando uma tatuagem tradicional japonesa.",
};

export const SERVICES: ServiceCard[] = [
  {
    id: 1,
    slug: "tradicional",
    title: "Desenhos",
    description: "Arte original. Feita à mão. ",
    cta: "Saiba mais",
    image: {
      src: "/images/services/tradicional1000p.webp",
      alt: "Quadros de tatuagens tradicionais japonesas mostrando a arte do Irezumi",
    },
    gallery: [
      {
        src: "/images/servicesDrawings/servicesdrawings01.webp",
        alt: "Desenho tradicional feito à mão por Felipe Brunelli",
      },
      {
        src: "/images/servicesDrawings/servicesdrawings02.webp",
        alt: "Desenho tradicional feito à mão por Felipe Brunelli",
      },
      {
        src: "/images/servicesDrawings/servicesdrawings03.webp",
        alt: "Desenho tradicional feito à mão por Felipe Brunelli",
      },
      {
        src: "/images/servicesDrawings/servicesdrawings04.webp",
        alt: "Desenho tradicional feito à mão por Felipe Brunelli",
      },
      {
        src: "/images/servicesDrawings/servicesdrawings05.webp",
        alt: "Desenho tradicional feito à mão por Felipe Brunelli",
      },
      {
        src: "/images/servicesDrawings/servicesdrawings06.webp",
        alt: "Desenho tradicional feito à mão por Felipe Brunelli",
      },
      {
        src: "/images/servicesDrawings/servicesdrawings07.webp",
        alt: "Desenho tradicional feito à mão por Felipe Brunelli",
      },
      {
        src: "/images/servicesDrawings/servicesdrawings09.webp",
        alt: "Desenho tradicional feito à mão por Felipe Brunelli",
      },
      {
        src: "/images/servicesDrawings/servicesdrawings08.webp",
        alt: "Desenho tradicional feito à mão por Felipe Brunelli",
      },
    ],
  },
  {
    id: 2,
    slug: "coverup",
    title: "Coberturas",
    description: "Resgate sua autoestima.",
    cta: "Ver transformações",
    image: {
      src: "/images/services/cover1000p.webp",
      alt: "Antes e depois de uma cobertura de tatuagem mostrando a transformação",
    },
    gallery: [
      {
        src: "/images/servicesCoverups/servicescoverup01.webp",
        alt: "Cobertura de tatuagem feita à mão por Felipe Brunelli",
      },
      {
        src: "/images/servicesCoverups/servicescoverup02.webp",
        alt: "Cobertura de tatuagem feita à mão por Felipe Brunelli",
      },
    ],
  },
];

export const ABOUT_IMG = {
  src: "/images/about/about1200p.webp",
  alt: "Imagem do Felipe Brunelli",
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ricardo S.",
    text: "Fiz uma cobertura de uma tatuagem antiga e o resultado foi além das expectativas. O Brunelli é um mestre na arte japonesa.",
    rating: 5,
  },
  {
    id: 2,
    name: "Julia M.",
    text: "A atenção aos detalhes e o respeito pela tradição são incríveis. O estúdio é impecável.",
    rating: 5,
  },
  {
    id: 3,
    name: "Marcos P.",
    text: "Procurei por tatuagem em Jundiaí e encontrei o melhor. Atendimento excelente e trabalho de mestre.",
    rating: 5,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    question: "Como faço para agendar?",
    answer:
      "O agendamento é feito exclusivamente via WhatsApp após uma breve consultoria online para entender sua ideia e disponibilidade.",
    cta: {
      label: "Agendar agora via WhatsApp",
      href: WHATSAPP_URL,
    },
  },
  {
    id: 2,
    question: "Qual o tempo médio de cicatrização?",
    answer:
      "A cicatrização superficial leva de 7 a 14 dias, enquanto a regeneração total da pele ocorre em cerca de 4 a 6 semanas.",
  },
  {
    id: 3,
    question: "Quais os cuidados pós-tatuagem?",
    answer:
      "Mantenha o filme plástico pelo tempo indicado, lave suavemente com sabonete neutro e aplique a pomada recomendada 3 vezes ao dia. Evite sol, piscina e mar por 30 dias.",
  },
  {
    id: 4,
    question: "Quais materiais são utilizados?",
    answer:
      "Utilizamos apenas materiais descartáveis de primeira linha, tintas importadas certificadas e seguimos rigorosamente todos os protocolos da ANVISA.",
  },
  {
    id: 5,
    question: "Vocês fazem cobertura de tatuagens antigas?",
    answer:
      "Sim, trabalhamos com Cover-up, porém é necessária uma avaliação presencial para analisar a pigmentação antiga e planejar a nova arte.",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/brunelli_gallery01.webp",
    alt: "Backpiece Hannya e a Serpente",
    span: "none",
  },
  {
    id: 2,
    src: "/images/gallery/brunelli_gallery02.webp",
    alt: "Legpiece com Karajishi e peonias ",
    span: "none",
  },
  {
    id: 3,
    src: "/images/gallery/brunelli_gallery03.webp",
    alt: "Armpiece com Serpente e cranio",
    span: "none",
  },
  {
    id: 4,
    src: "/images/gallery/brunelli_gallery04.webp",
    alt: "Backpiece Hannya",
    span: "none",
  },
  {
    id: 5,
    src: "/images/gallery/brunelli_gallery05.webp",
    alt: "Backpiece Raijin e Fujin",
    span: "none",
  },
  {
    id: 6,
    src: "/images/gallery/brunelli_gallery06.webp",
    alt: "Mascara Tengu",
    span: "none",
  },
];
