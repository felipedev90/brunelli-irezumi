import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { deleteObject } from '@/lib/r2'

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params
  try {
    const galleryItem = await prisma.galleryImage.findUnique({
      where: { id },
    })
    if (!galleryItem) {
      return NextResponse.json(
        { error: 'Imagem não encontrada' },
        { status: 404 },
      )
    }

    const key = galleryItem.url.replace(`${process.env.R2_PUBLIC_URL}/`, '')

    await deleteObject(key)
    await prisma.galleryImage.delete({
      where: { id },
    })
    return NextResponse.json(
      { message: 'Imagem da galeria excluída com sucesso' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Erro ao excluir imagem da galeria:', error)
    return NextResponse.json(
      { error: 'Erro ao excluir imagem da galeria' },
      { status: 500 },
    )
  }
}
