import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { deleteObject } from '@/lib/r2'

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  try {
    const product = await prisma.product.findUnique({
      where: { id: id },
      include: {
        images: true,
      },
    })

    if (!product) {
      return NextResponse.json(
        { error: 'Produto não encontrado' },
        { status: 404 },
      )
    }

    for (const image of product.images) {
      const key = image.url.replace(`${process.env.R2_PUBLIC_URL}/`, '')
      await deleteObject(key)
    }
    await prisma.product.delete({
      where: { id: id },
    })
    return NextResponse.json(
      { message: 'Produto excluído com sucesso' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Erro ao excluir produto', error)
    return NextResponse.json(
      { error: 'Erro ao excluir produto' },
      { status: 500 },
    )
  }
}
