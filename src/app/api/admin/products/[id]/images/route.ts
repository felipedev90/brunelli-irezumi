import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getPublicUrl } from '@/lib/r2'

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params
    const { key } = await request.json()

    const lastImg = await prisma.productImage.findFirst({
      where: { productId: id },
      orderBy: { order: 'desc' },
    })
    const order = lastImg ? lastImg.order + 1 : 0

    const url = getPublicUrl(key)

    const newImage = await prisma.productImage.create({
      data: {
        url,
        order,
        productId: id,
      },
    })

    return NextResponse.json(newImage, { status: 201 })
  } catch (error) {
    console.error('Erro ao adicionar imagem do produto:', error)
    return NextResponse.json(
      { error: 'Erro ao adicionar imagem do produto' },
      { status: 500 },
    )
  }
}
