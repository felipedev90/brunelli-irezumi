'use client'
import { useRouter } from 'next/navigation'
import { ArrowUp, ArrowDown } from 'lucide-react'

type ReorderProductImageButtonsProps = {
  productId: string
  imageId: string
  isFirst: boolean
  isLast: boolean
}

export function ReorderProductImageButtons({
  productId,
  imageId,
  isFirst,
  isLast,
}: ReorderProductImageButtonsProps) {
  const router = useRouter()

  const handleReorder = async (direction: 'up' | 'down') => {
    try {
      const response = await fetch(
        `/api/admin/products/${productId}/images/${imageId}/reorder`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ direction }),
        },
      )

      if (response.ok) {
        router.refresh()
      } else {
        console.error('Erro ao reordenar imagem do produto')
      }
    } catch (error) {
      console.error('Erro ao reordenar imagem do produto:', error)
    }
  }

  return (
    <div className="flex items-center gap-2">
      {!isFirst && (
        <button
          onClick={() => handleReorder('up')}
          aria-label="Mover para cima"
          className="text-on-surface hover:text-accent"
        >
          <ArrowUp size={18} />
        </button>
      )}
      {!isLast && (
        <button
          onClick={() => handleReorder('down')}
          aria-label="Mover para baixo"
          className="text-on-surface hover:text-accent"
        >
          <ArrowDown size={18} />
        </button>
      )}
    </div>
  )
}
