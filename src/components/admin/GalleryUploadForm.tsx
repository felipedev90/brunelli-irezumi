'use client'

import { useState } from 'react'
import { compressImage } from '@/lib/compress-image'
import { useRouter } from 'next/navigation'

export function GalleryUploadForm() {
  const router = useRouter()
  const [uploading, setUploading] = useState(false)
  const [category, setCategory] = useState<
    'PORTFOLIO' | 'PAINTING' | 'COVERUP'
  >('PORTFOLIO')
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files?.[0]
    if (selected) setFile(selected)
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    try {
      const compressedImg = await compressImage(file)

      const urlResponse = await fetch('/api/admin/gallery/upload-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contentType: 'image/webp' }),
      })
      const { uploadUrl, key } = await urlResponse.json()

      const uploadResponse = await fetch(uploadUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'image/webp' },
        body: compressedImg,
      })

      if (!uploadResponse.ok) {
        throw new Error('Falha ao enviar a imagem')
      }
      console.log('Upload concluído:', key)

      const createResponse = await fetch('/api/admin/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key, category }),
      })

      if (!createResponse.ok) {
        throw new Error('Falha ao criar a imagem da galeria')
      }
      console.log('Imagem da galeria criada com sucesso:', key)
      router.refresh()
    } catch (error) {
      console.error('Erro ao comprimir ou enviar imagem:', error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <form>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={uploading}
      />
      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value as 'PORTFOLIO' | 'PAINTING' | 'COVERUP')
        }
        disabled={uploading}
      >
        <option value="PORTFOLIO">Portfólio</option>
        <option value="PAINTING">Pintura</option>
        <option value="COVERUP">Cobertura</option>
      </select>
      {uploading && <p>Carregando...</p>}

      <button
        type="button"
        onClick={handleUpload}
        disabled={!file || uploading}
      >
        Enviar
      </button>
    </form>
  )
}
