'use client'
import { useRouter } from 'next/navigation'
import { ArrowUp, ArrowDown } from 'lucide-react'

type ReorderGalleryImageButtonsProps = {
  id: string
  isFirst: boolean
  isLast: boolean
}

export function ReorderGalleryImageButtons({
  id,
  isFirst,
  isLast,
}: ReorderGalleryImageButtonsProps) {
  const router = useRouter()

  const handleReorder = async (direction: 'up' | 'down') => {
    try {
      const response = await fetch(`/api/admin/gallery/${id}/reorder`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ direction }),
      })

      if (response.ok) {
        router.refresh()
      } else {
        console.error('Erro ao reordenar imagem da galeria')
      }
    } catch (error) {
      console.error('Erro ao reordenar imagem da galeria:', error)
    }
  }

  return (
    <div>
      <button
        onClick={() => handleReorder('up')}
        disabled={isFirst}
        aria-label="Mover para cima"
      >
        <ArrowUp />
      </button>
      <button
        onClick={() => handleReorder('down')}
        disabled={isLast}
        aria-label="Mover para baixo"
      >
        <ArrowDown />
      </button>
    </div>
  )
}
