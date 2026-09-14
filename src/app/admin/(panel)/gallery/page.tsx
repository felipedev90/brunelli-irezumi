import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import { GalleryUploadForm } from '@/components/admin/GalleryUploadForm'
import { DeleteGalleryImageButton } from '@/components/admin/DeleteGalleryImageButton'
import { ReorderGalleryImageButtons } from '@/components/admin/ReorderGalleryImageButtons'

export default async function GaleriaPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { order: 'asc' },
  })

  return (
    <div>
      <GalleryUploadForm />

      {images.length === 0 ? (
        <p>Álbum vazio</p>
      ) : (
        images.map((image) => {
          const sameCategory = images.filter(
            (img) => img.category === image.category,
          )
          const isFirst = image.id === sameCategory[0]?.id
          const isLast = image.id === sameCategory[sameCategory.length - 1]?.id

          return (
            <div key={image.id}>
              <Image
                src={image.url}
                alt={'Gallery image'}
                width={500}
                height={500}
              />
              <ReorderGalleryImageButtons
                id={image.id}
                isFirst={isFirst}
                isLast={isLast}
              />
              <DeleteGalleryImageButton id={image.id} />
            </div>
          )
        })
      )}
    </div>
  )
}
