import { prisma } from '@/lib/prisma'
import Image from 'next/image'
import GalleryUploadForm from '@/components/admin/GalleryUploadForm'

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
        images.map((image) => (
          <div key={image.id}>
            <Image
              src={image.url}
              alt={'Gallery image'}
              width={500}
              height={500}
            />
          </div>
        ))
      )}
    </div>
  )
}
