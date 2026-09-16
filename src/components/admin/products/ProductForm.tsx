'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createProductSchema, type CreateProductData } from '@/schemas/product'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CurrencyInput } from '@/components/ui/CurrencyInput'

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

export function ProductForm() {
  const router = useRouter()
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateProductData>({
    resolver: zodResolver(createProductSchema),
  })

  async function onSubmit(data: CreateProductData) {
    setServerError(null)

    const res = await fetch('/api/admin/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (!res.ok) {
      setServerError('Erro ao criar produto')
      return
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
          <p role="alert" className="text-secondary-container text-xs">
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
          <p role="alert" className="text-secondary-container text-xs">
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
          <p role="alert" className="text-secondary-container text-xs">
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

      <button
        type="submit"
        disabled={isSubmitting}
        className="border-accent text-accent cursor-pointer rounded-sm border px-4 py-1.5 text-sm font-medium disabled:opacity-50"
      >
        {isSubmitting ? 'Salvando...' : 'Criar produto'}
      </button>
    </form>
  )
}
