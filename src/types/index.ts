export type GalleryImage = {
  id: number
  src: string
  alt: string
  span?: 'row' | 'col' | 'none'
}

export type ServiceCard = {
  id: number
  slug: string
  title: string
  description: string
  cta: string
  image: {
    src: string
    alt: string
  }
  gallery: {
    src: string
    alt: string
  }[]
}

export type NavLink = {
  label: string
  href: string
}
