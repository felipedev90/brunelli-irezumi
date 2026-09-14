import { prisma } from '@/lib/prisma'
import Image from 'next/image'

export default async function GaleriaPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { order: 'asc' },
  })

  if (images.length === 0) {
    return <div>Album vazio</div>
  }

  return (
    <div>
      {images.map((image) => (
        <div key={image.id}>
          <Image
            src={image.url}
            alt={'Gallery image'}
            width={500}
            height={500}
          />
        </div>
      ))}
    </div>
  )
}
