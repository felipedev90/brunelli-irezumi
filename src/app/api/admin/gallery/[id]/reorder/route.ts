import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params
    const { direction } = await request.json()

    const image = await prisma.galleryImage.findUnique({
      where: { id },
    })

    if (!image) {
      return NextResponse.json(
        { error: 'Imagem não encontrada' },
        { status: 404 },
      )
    }

    let neighbor

    if (direction === 'up') {
      neighbor = await prisma.galleryImage.findFirst({
        where: {
          category: image.category,
          order: { lt: image.order },
        },
        orderBy: { order: 'desc' },
      })
    } else {
      neighbor = await prisma.galleryImage.findFirst({
        where: {
          category: image.category,
          order: { gt: image.order },
        },
        orderBy: { order: 'asc' },
      })
    }

    if (!neighbor) {
      return NextResponse.json({ success: true })
    }

    await prisma.$transaction([
      prisma.galleryImage.update({
        where: { id: image.id },
        data: { order: neighbor.order },
      }),
      prisma.galleryImage.update({
        where: { id: neighbor.id },
        data: { order: image.order },
      }),
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Erro ao reordenar imagem da galeria:', error)
    return NextResponse.json(
      { error: 'Erro ao reordenar imagem da galeria' },
      { status: 500 },
    )
  }
}
