'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createProductSchema, type CreateProductData } from '@/schemas/product'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CurrencyInput } from '@/components/ui/CurrencyInput'
import { compressImage } from '@/lib/compress-image'

const CATEGORY_LABELS: Record<string, string> = {
  DRAWING: 'Desenho',
  PRINT: 'Print',
  TENUGUI: 'Tenugui',
  SOCKS: 'Meia',
  ECOBAG: 'Ecobag',
  CUSTOM: 'Personalização',
}

const TAG_LABELS: Record<string, string> = {
  MADE_TO_ORDER: 'Sob encomenda',
  LIMITED: 'Edição limitada',
  SOLD_OUT: 'Esgotado',
  ON_SALE: 'Promoção',
}

type ProductFormProps = {
  product?: {
    id: string
    title: string
    description: string
    priceCents: number
    promoPriceCents: number | null
    category: CreateProductData['category']
    tags: CreateProductData['tags']
  }
}

export function ProductForm({ product }: ProductFormProps) {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)
  const [files, setFiles] = useState<File[]>([])

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateProductData>({
    resolver: zodResolver(createProductSchema),
    defaultValues: product
      ? {
          title: product.title,
          description: product.description,
          priceCents: product.priceCents,
          promoPriceCents: product.promoPriceCents ?? undefined,
          category: product.category,
          tags: product.tags,
        }
      : undefined,
  })

  async function onSubmit(data: CreateProductData) {
    setServerError(null)

    const url = product
      ? `/api/admin/products/${product.id}`
      : '/api/admin/products'

    const method = product ? 'PATCH' : 'POST'

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      setServerError('Erro ao criar produto')
      return
    }

    const productId = product ? product.id : (await res.json()).id

    for (const file of files) {
      const compressedImage = await compressImage(file)

      const urlResponse = await fetch('/api/admin/products/upload-url', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ contentType: 'image/webp' }),
      })

      const { uploadUrl, key } = await urlResponse.json()

      await fetch(uploadUrl, {
        method: 'PUT',
        headers: { 'content-type': 'image/webp' },
        body: compressedImage,
      })

      await fetch(`/api/admin/products/${productId}/images`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ key }),
      })
    }

    router.refresh()
    reset()
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(onSubmit)(e)
      }}
      className="flex flex-col gap-4 md:mx-auto md:min-w-96"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="text-on-surface-variant text-sm">
          Título
        </label>
        <input
          id="title"
          {...register('title')}
          className="border-outline-variant bg-surface-container text-on-surface rounded-sm border px-3 py-2 text-sm"
        />
        {errors.title && (
          <p role="alert" className="text-secondary-container text-sm">
            {errors.title.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="description"
          className="text-on-surface-variant text-sm"
        >
          Descrição
        </label>
        <textarea
          id="description"
          rows={6}
          {...register('description')}
          className="border-outline-variant bg-surface-container text-on-surface rounded-sm border px-3 py-2 text-sm"
        />
        {errors.description && (
          <p role="alert" className="text-secondary-container text-sm">
            {errors.description.message}
          </p>
        )}
      </div>

      <CurrencyInput name="priceCents" control={control} label="Preço" />
      <CurrencyInput
        name="promoPriceCents"
        control={control}
        label="Preço promocional (opcional)"
      />

      <div className="flex flex-col gap-1">
        <label htmlFor="category" className="text-on-surface-variant text-sm">
          Categoria
        </label>
        <select
          id="category"
          {...register('category')}
          className="border-outline-variant bg-surface-container text-on-surface rounded-sm border px-3 py-2 text-sm"
        >
          <option value="">Selecione</option>
          {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {errors.category && (
          <p role="alert" className="text-secondary-container text-sm">
            {errors.category.message}
          </p>
        )}
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className="text-on-surface-variant text-sm">Tags</legend>
        {Object.entries(TAG_LABELS).map(([value, label]) => (
          <label
            key={value}
            className="text-on-surface flex items-center gap-2 text-sm"
          >
            <input type="checkbox" value={value} {...register('tags')} />
            {label}
          </label>
        ))}
      </fieldset>

      {serverError && (
        <p role="alert" className="text-secondary-container text-sm">
          {serverError}
        </p>
      )}

      <div className="flex flex-col gap-1">
        <label htmlFor="images" className="text-on-surface-variant text-sm">
          Imagens
        </label>
        <input
          id="images"
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
          className="text-on-surface-variant file:bg-surface-container-high file:text-on-surface flex-1 text-sm file:mr-3 file:rounded-sm file:border-0 file:px-3 file:py-1.5 file:text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="border-accent text-accent cursor-pointer rounded-sm border px-4 py-1.5 text-sm font-medium disabled:opacity-50"
      >
        {isSubmitting
          ? 'Salvando...'
          : product
            ? 'Atualizar produto'
            : 'Criar produto'}
      </button>
    </form>
  )
}
