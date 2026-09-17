import { createProductSchema } from '@/schemas/product'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = createProductSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Dados do produto inválidos' },
        { status: 400 },
      )
    }

    const product = await prisma.product.create({
      data: {
        title: parsed.data.title,
        description: parsed.data.description,
        priceCents: parsed.data.priceCents,
        promoPriceCents: parsed.data.promoPriceCents,
        category: parsed.data.category,
        tags: { set: parsed.data.tags },
      },
    })
    return NextResponse.json(product, { status: 201 })
  } catch (error) {
    console.error('Erro ao criar produto', error)
    return NextResponse.json(
      { error: 'Algo de errado aconteceu...' },
      { status: 500 },
    )
  }
}
