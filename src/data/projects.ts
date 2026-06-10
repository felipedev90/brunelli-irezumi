import type { GalleryImage, NavLink, ServiceCard } from '@/types'

export const WHATSAPP_URL = 'https://wa.me/5511976624286'
export const INSTAGRAM_URL = 'https://instagram.com/brunelli.irezumi/'
export const MAPS_URL = 'https://maps.app.goo.gl/UkwhKQAUF1nbwSTF7'
export const TIKTOK_URL = 'https://www.tiktok.com/@brunelli.irezumi'

export const STUDIO_NAME = 'Brunelli Irezumi'
export const STUDIO_TAGLINE = 'The Modern Shokunin'

export const STUDIO_ADDRESS = {
  street: 'R. Baronesa do Japi, 199 - Centro',
  city: 'Jundiaí',
  state: 'SP',
  cep: '13207-684',
  complement: 'The Garden Estudio',
}

export const STUDIO_HOURS = 'Segunda a Sábado: 10h às 20h'

export const NAV_LINKS: NavLink[] = [
  { label: 'O Artista', href: '/#sobre' },
  { label: 'Especialidades', href: '/#servicos' },
  { label: 'Galeria', href: '/#galeria' },
]

export const HERO_IMG_CONTENT = {
  src: '/images/hero/hero1900p.webp',
  alt: 'Felipe Brunelli aplicando uma tatuagem tradicional japonesa.',
}

export const CTA_IMAGE = {
  src: '/images/cta/studio2.webp',
  alt: 'Imagem do estúdio de tatuagem Brunelli Irezumi',
}

export const SERVICES: ServiceCard[] = [
  {
    id: 1,
    slug: 'tradicional',
    title: 'Pinturas',
    description: 'Arte original. Feita à mão. ',
    cta: 'Saiba mais',
    image: {
      src: '/images/services/tradicional1000p.webp',
      alt: 'Quadros de tatuagens tradicionais japonesas mostrando a arte do Irezumi',
    },
    gallery: [
      {
        id: 1,
        src: '/images/servicesDrawings/drawing01.webp',
        alt: 'Desenho tradicional de serpente feito à mão por Felipe Brunelli',
      },
      {
        id: 2,
        src: '/images/servicesDrawings/drawing00.webp',
        alt: 'Desenho tradicional de dragão feito à mão por Felipe Brunelli',
      },
      {
        id: 3,
        src: '/images/servicesDrawings/drawing07.webp',
        alt: 'Desenho tradicional de flor feito à mão por Felipe Brunelli',
      },
      {
        id: 4,
        src: '/images/servicesDrawings/drawing02.webp',
        alt: 'Desenho tradicional feito à mão por Felipe Brunelli',
      },
      {
        id: 5,
        src: '/images/servicesDrawings/drawing03.webp',
        alt: 'Desenho tradicional de cavalo feito à mão por Felipe Brunelli',
      },
      {
        id: 6,
        src: '/images/servicesDrawings/drawing04.webp',
        alt: 'Desenho tradicional de guerreiro feito à mão por Felipe Brunelli',
      },
      {
        id: 7,
        src: '/images/servicesDrawings/drawing05.webp',
        alt: 'Desenho tradicional de um ser místico feito à mão por Felipe Brunelli',
      },
      {
        id: 8,
        src: '/images/servicesDrawings/drawing06.webp',
        alt: 'Desenho tradicional de caveiras e serpente feito à mão por Felipe Brunelli',
      },

      {
        id: 9,
        src: '/images/servicesDrawings/drawing08.webp',
        alt: 'Desenho tradicional de máscaras Hannya feito à mão por Felipe Brunelli',
      },
      {
        id: 10,
        src: '/images/servicesDrawings/drawing09.webp',
        alt: 'Desenho tradicional de serpente e flores feito à mão por Felipe Brunelli',
      },
      {
        id: 11,
        src: '/images/servicesDrawings/drawing11.webp',
        alt: 'Desenho tradicional feito à mão por Felipe Brunelli',
      },
      {
        id: 12,
        src: '/images/servicesDrawings/drawing10.webp',
        alt: 'Desenho tradicional de uma serpente lutando feito à mão por Felipe Brunelli',
      },
      {
        id: 13,
        src: '/images/servicesDrawings/drawing13.webp',
        alt: 'Desenho tradicional de uma serpente lutando feito à mão por Felipe Brunelli',
      },
      {
        id: 14,
        src: '/images/servicesDrawings/drawing12.webp',
        alt: 'Desenho tradicional de uma serpente lutando feito à mão por Felipe Brunelli',
      },
    ],
  },
  {
    id: 2,
    slug: 'coverup',
    title: 'Coberturas',
    description: 'Resgate sua autoestima.',
    cta: 'Saiba mais',
    image: {
      src: '/images/services/cover1000p.webp',
      alt: 'Cobertura de tatuagem nas costas feita à mão por Felipe Brunelli',
    },
    gallery: [
      {
        id: 1,
        src: '/images/servicesCoverups/coverup01.webp',
        alt: 'Cobertura de tatuagem nas costas',
      },
      {
        id: 2,
        src: '/images/servicesCoverups/coverup06.webp',
        alt: 'Cobertura de tatuagem no peito',
      },
      {
        id: 3,
        src: '/images/servicesCoverups/coverup02.webp',
        alt: 'Cobertura de tatuagem nas costas com Hannya',
      },
      {
        id: 4,
        src: '/images/servicesCoverups/coverup03.webp',
        alt: 'Cobertura de tatuagem no braço feita à mão por Felipe Brunelli',
      },
      {
        id: 5,
        src: '/images/servicesCoverups/coverup05.webp',
        alt: 'Cobertura de tatuagem no peito',
      },
      {
        id: 6,
        src: '/images/servicesCoverups/coverup04.webp',
        alt: 'Cobertura de tatuagem no peito e ombro',
      },
    ],
  },
]

export const ABOUT_IMG = {
  src: '/images/about/about800p.webp',
  alt: 'Imagem do Felipe Brunelli',
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gallery/brunelli_portfolio11.webp',
    alt: 'Backpiece Hannya e a Serpente',
    span: 'none',
  },
  {
    id: 2,
    src: '/images/gallery/brunelli_portfolio02.webp',
    alt: 'Armpiece com máscaras tradicionais japonesas',
    span: 'none',
  },
  {
    id: 3,
    src: '/images/gallery/brunelli_portfolio01.webp',
    alt: 'Armpiece com pássaro, sol e flores',
    span: 'none',
  },
  {
    id: 4,
    src: '/images/gallery/brunelli_portfolio04.webp',
    alt: 'Máscaras tradicionais japonesas com serpente',
    span: 'none',
  },
  {
    id: 5,
    src: '/images/gallery/brunelli_portfolio03.webp',
    alt: 'Backpiece com Raijin e Fujin',
    span: 'none',
  },
  {
    id: 6,
    src: '/images/gallery/brunelli_portfolio05.webp',
    alt: 'Tatuagem de uma cabeça',
    span: 'none',
  },
  {
    id: 7,
    src: '/images/gallery/brunelli_portfolio06.webp',
    alt: 'Cabeça de dois guerreiros japoneses',
    span: 'none',
  },
  {
    id: 8,
    src: '/images/gallery/brunelli_portfolio07.webp',
    alt: 'Fechamento de peito e braço com caveiras',
    span: 'none',
  },
  {
    id: 9,
    src: '/images/gallery/brunelli_portfolio08.webp',
    alt: 'Máscara Hannya',
    span: 'none',
  },
]
