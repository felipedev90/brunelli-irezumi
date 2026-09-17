'use client'
import { useRouter } from 'next/navigation'
import { ArrowUp, ArrowDown, ChevronsUp, ChevronsDown } from 'lucide-react'

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

  const handleReorder = async (direction: 'up' | 'down' | 'start' | 'end') => {
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
    <div className="flex items-center gap-2">
      {!isFirst && (
        <div className="flex items-center justify-center gap-2">
          <button
            onClick={() => handleReorder('start')}
            aria-label="Mover para o início"
            className="text-on-surface hover:text-accent"
          >
            <ChevronsUp size={18} />
          </button>
          <button
            onClick={() => handleReorder('up')}
            aria-label="Mover para cima"
            className="text-on-surface hover:text-accent"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      )}
      {!isLast && (
        <>
          <button
            onClick={() => handleReorder('down')}
            aria-label="Mover para baixo"
            className="text-on-surface hover:text-accent"
          >
            <ArrowDown size={18} />
          </button>
          <button
            onClick={() => handleReorder('end')}
            aria-label="Mover para o fim"
            className="text-on-surface hover:text-accent"
          >
            <ChevronsDown size={18} />
          </button>
        </>
      )}
    </div>
  )
}
