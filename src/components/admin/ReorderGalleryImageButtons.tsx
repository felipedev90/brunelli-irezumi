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
    <div>
      {!isFirst && (
        <>
          <button
            onClick={() => handleReorder('start')}
            aria-label="Mover para o início"
          >
            <ChevronsUp />
          </button>
          <button
            onClick={() => handleReorder('up')}
            aria-label="Mover para cima"
          >
            <ArrowUp />
          </button>
        </>
      )}
      {!isLast && (
        <>
          <button
            onClick={() => handleReorder('down')}
            aria-label="Mover para baixo"
          >
            <ArrowDown />
          </button>
          <button
            onClick={() => handleReorder('end')}
            aria-label="Mover para o fim"
          >
            <ChevronsDown />
          </button>
        </>
      )}
    </div>
  )
}
