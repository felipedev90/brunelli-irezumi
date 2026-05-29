'use client'

import { useCallback, useEffect } from 'react'
import Image from 'next/image'
import type { GalleryImage } from '@/types'

type LightboxProps = {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const currentImage = images[currentIndex]
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    },
    [onClose, onNext, onPrev],
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  if (!currentImage) return null

  return (
    // Overlay — clique fora fecha
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visualizador de imagem"
    >
      {/* Botão fechar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 transition-colors hover:text-white"
        aria-label="Fechar"
      >
        <span className="text-body cursor-pointer p-5 text-2xl text-red-600 transition-transform hover:scale-110 hover:text-red-400">
          x
        </span>
      </button>

      {/* Seta anterior */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="absolute top-1/2 left-2 z-10 -translate-y-1/2 p-2 text-white/70 transition-colors hover:text-white md:left-4"
          aria-label="Imagem anterior"
        >
          <span className="text-4xl text-orange-500 md:text-7xl">{'<'}</span>
        </button>
      )}

      {/* Imagem — stopPropagation evita fechar ao clicar na imagem */}
      <div
        className="relative h-full max-h-[90vh] w-full max-w-[90vw]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          quality={95}
          className="object-contain"
          sizes="90vw"
        />
      </div>

      {/* Seta próxima */}
      {currentIndex < images.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="absolute top-1/2 right-2 z-10 -translate-y-1/2 p-2 text-white/70 transition-colors hover:text-white md:right-4"
          aria-label="Próxima imagem"
        >
          <span className="text-4xl text-orange-500 md:text-7xl">{'>'}</span>
        </button>
      )}

      {/* Contador ex: 2 / 9 */}
      <div className="font-body absolute bottom-4 text-sm tracking-widest text-white/50">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
