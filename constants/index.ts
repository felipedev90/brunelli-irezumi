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
    title: "Tatuagem Tradicional",
    description: "Tradicional Irezumi tattoo.",
    cta: "Saiba mais",
    image: {
      src: "/images/services/tradicional1000p.webp",
      alt: "Agulha de tatuagem aplicando tinta tradicional japonesa com dragão ao fundo",
    },
  },
  {
    id: 2,
    title: "Coberturas",
    description: "Resgate sua autoestima.",
    cta: "Ver transformações",
    image: {
      src: "/images/services/cover1000p.webp",
      alt: "Antes e depois de uma cobertura de tatuagem mostrando a transformação",
    },
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
    question: "Quais os cuidados pós-tatuagem?",
    answer:
      "Mantenha o filme plástico pelo tempo indicado, lave suavemente com sabonete neutro e aplique a pomada recomendada 3 vezes ao dia. Evite sol, piscina e mar por 30 dias.",
  },
  {
    id: 2,
    question: "Qual o tempo médio de cicatrização?",
    answer:
      "A cicatrização superficial leva de 7 a 14 dias, enquanto a regeneração total da pele ocorre em cerca de 4 a 6 semanas.",
  },
  {
    id: 3,
    question: "Como faço para agendar?",
    answer:
      "O agendamento é feito exclusivamente via WhatsApp após uma breve consultoria online para entender sua ideia e disponibilidade.",
  },
  {
    id: 4,
    question: "Vocês fazem cobertura de tatuagens antigas?",
    answer:
      "Sim, somos especialistas em Cover-up. É necessária uma avaliação presencial para analisar a pigmentação antiga e planejar a nova arte.",
  },
  {
    id: 5,
    question: "Quais materiais são utilizados?",
    answer:
      "Utilizamos apenas materiais descartáveis de primeira linha, tintas importadas certificadas e seguimos rigorosamente todos os protocolos da ANVISA.",
    cta: {
      label: "Agendar agora via WhatsApp",
      href: WHATSAPP_URL,
    },
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaLMs5br5Hun7cZXVCqzAMQG1awOs4Km9Z-6LxeTpQ2cq_VpRaivrhb9fns8uvTm_CTl9W-tVBFbBoekyZi240AtnsPHMt6jLjTbf7kNzpOW-s5YnDvD4rB-ggZc4B1vFYnBLSYNkAQer115EDYwPoIr5oNU-2h7eaDSBdSZ1xWSuzAYdo8NTMW9jzL4nJPefc4VEtv860gooDfc288iC5rnrA0FwvAvx9wsolR7uFLdZ_DALTHYsohQlutilChVH_zjLYxNVe1Pg",
    alt: "Tatuagem de fênix no estilo irezumi nas costas inteiras",
    span: "none",
  },
  {
    id: 2,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS77xfEQzQvqgcenADKJMIugBtjIA134T8hWUdGXtpjEDIHFFSfeTCKHWfdW8kGgUaJXE3LR3EF_Pnvb_IBGxs3v08kUq1-k93ORC0Pnr_Md_mpadAanO9dmkoBLqjNnuL2eRogBkaumSAU2wIr5GTCuVMpJgywVQARxCwdCmFJn6R8fE3WC2L_YT-kXIehx-FbTvyscOuCwVY9DubKJYJooMXol6shltFAJpNQtq0w-dgNgW8NgO1s_XnR9GDqtYQ8Vmm55US_rs",
    alt: "Manga com carpa japonesa realista entre flores de cerejeira",
    span: "none",
  },
  {
    id: 3,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_urG3SHOxmD3ddcc-Ik_T54iYgl5-byWI2oUPbazOGF4JRGSSRXCY7HSAvBmhcJD8SGpw6Cp1YbUpBOHSf-G0ArvmsqpI3bS9nc1ywBPx4axr5kQCDlAUWh4DHDDwOm8tlmQAh8OlfdSGr16orztebaJweCQhe9PsnVhNydw39xJ3k_6zGJdy_ADNxjNSyan0kmT4EwdNWSju6xemTc3bUBr56IZm2UNMj1kJfP-cgUt45z0DnhtjzHWi-e8yhsJrEAChwlufk74",
    alt: "Máscara Hannya detalhada no ombro com iluminação dramática",
    span: "row",
  },
  {
    id: 4,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4sPBOIeSQ2JTVmDe16JFY-W34HUIqYpbTEfsitTRgLOVYZ-Kuu26VjkSzBs3Hs4DG2jocUG9DLqmqTmgG6-u_h5UmQ9iKzgcSK1BxTWwnyaxjxJWDlSc2NX3G3okQqfG42iYNOZAcXd57wWWspVe4_pTrPKRB0r8dCHxHNkAiqqnf0pR3eIUDOgvqADUc3sGWll6gQgZiFRd3KKBfjjdUF7mLXPTT4wZMpNdCxi9LaTdh70Ua6zQSrP5rFMtid1g893MlO-9BMe8",
    alt: "Ondas japonesas tradicionais no peito com linework bold",
    span: "none",
  },
  {
    id: 5,
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWIVvVHTVqQup1yQ-2EauzjGeFKznyeOfayJQJP4sxC2u-uSgGjc2cQmSznMhdwvHe-W6WqK4ylIULFSdrScytGopHN9XXxfSVMJbZkSOKZ2oFGvKQE3SSDDTq-LMTWtPLS8gqTVCJ1x97_jPFs8ZrsPl_Uvgn3GDxBFvyPZFYl8bGK00Y4f8goJJgGePrEjojshQsnJlN0wvUVcjxon_pBbMNXFW7bF7y0TWTvxsKiCVf3Cgfgl4ArvQ6hAlzWuyDxJ501_GQwCE",
    alt: "Tigre espreitando em floresta de bambu na coxa",
    span: "none",
  },
];
