import { z } from 'zod'

export const productCategorySchema = z.enum(
  ['DRAWING', 'PRINT', 'TENUGUI', 'SOCKS', 'ECOBAG', 'CUSTOM'],
  { message: 'Selecione uma categoria' },
)

export const productTagSchema = z.enum([
  'MADE_TO_ORDER',
  'LIMITED',
  'SOLD_OUT',
  'ON_SALE',
])

export const createProductSchema = z
  .object({
    title: z.string().min(1, 'Título é obrigatório'),
    description: z.string().min(1, 'Descrição é obrigatória'),
    priceCents: z
      .number({ message: 'Preço é obrigatório' })
      .int()
      .positive('Preço deve ser maior que zero'),
    promoPriceCents: z.number().int().positive().optional(),
    category: productCategorySchema,
    tags: z.array(productTagSchema).default([]),
  })
  .refine(
    (data) => !data.promoPriceCents || data.promoPriceCents < data.priceCents,
    {
      message: 'Preço promocional deve ser menor que o preço normal',
      path: ['promoPriceCents'],
    },
  )

export type CreateProductData = z.input<typeof createProductSchema>
