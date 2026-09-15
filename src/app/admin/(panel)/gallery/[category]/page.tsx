import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { GalleryUploadForm } from '@/components/admin/GalleryUploadForm'
import { DeleteGalleryImageButton } from '@/components/admin/DeleteGalleryImageButton'
import { ReorderGalleryImageButtons } from '@/components/admin/ReorderGalleryImageButtons'
import type { GalleryCategory } from '../../../../../generated/prisma/client'

const CATEGORY_MAP: Record<string, GalleryCategory> = {
  portfolio: 'PORTFOLIO',
  painting: 'PAINTING',
  coverup: 'COVERUP',
}

const CATEGORY_LABELS: Record<GalleryCategory, string> = {
  PORTFOLIO: 'Portfólio',
  PAINTING: 'Pintura',
  COVERUP: 'Cobertura',
}

type Props = {
  params: Promise<{ category: string }>
}

export default async function GalleryCategoryPage({ params }: Props) {
  const { category: slug } = await params
  const category = CATEGORY_MAP[slug]

  if (!category) {
    notFound()
  }

  const images = await prisma.galleryImage.findMany({
    where: { category },
    orderBy: { order: 'asc' },
  })

  return (
    <div>
      <h1>{CATEGORY_LABELS[category]}</h1>

      <GalleryUploadForm category={category} />

      {images.length === 0 ? (
        <p>Álbum vazio</p>
      ) : (
        images.map((image, index) => (
          <div key={image.id}>
            <Image
              src={image.url}
              alt={'Gallery image'}
              width={500}
              height={500}
            />
            <ReorderGalleryImageButtons
              id={image.id}
              isFirst={index === 0}
              isLast={index === images.length - 1}
            />
            <DeleteGalleryImageButton id={image.id} />
          </div>
        ))
      )}
    </div>
  )
}
