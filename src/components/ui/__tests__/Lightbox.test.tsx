import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Lightbox } from '../Lightbox'
import type { GalleryImage } from '@/types'

const MOCK_IMAGES: GalleryImage[] = [
  { id: 1, src: '/img/foto1.webp', alt: 'Foto 1' },
  { id: 2, src: '/img/foto2.webp', alt: 'Foto 2' },
  { id: 3, src: '/img/foto3.webp', alt: 'Foto 3' },
]

const onClose = vi.fn()
const onNext = vi.fn()
const onPrev = vi.fn()

beforeEach(() => {
  onClose.mockClear()
  onNext.mockClear()
  onPrev.mockClear()
})

describe('Lightbox', () => {
  it('renderiza a imagem atual corretamente', () => {
    render(
      <Lightbox
        images={MOCK_IMAGES}
        currentIndex={0}
        onClose={onClose}
        onNext={onNext}
        onPrev={onPrev}
      />,
    )
    expect(screen.getByAltText('Foto 1')).toBeInTheDocument()
  })

  it('mostra o contador correto', () => {
    render(
      <Lightbox
        images={MOCK_IMAGES}
        currentIndex={1}
        onClose={onClose}
        onNext={onNext}
        onPrev={onPrev}
      />,
    )
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
  })

  it('chama onClose ao clicar no overlay', async () => {
    const user = userEvent.setup()
    render(
      <Lightbox
        images={MOCK_IMAGES}
        currentIndex={0}
        onClose={onClose}
        onNext={onNext}
        onPrev={onPrev}
      />,
    )
    await user.click(screen.getByRole('dialog'))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('chama onClose ao pressionar Escape', () => {
    render(
      <Lightbox
        images={MOCK_IMAGES}
        currentIndex={0}
        onClose={onClose}
        onNext={onNext}
        onPrev={onPrev}
      />,
    )
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('chama onNext ao pressionar ArrowRight', () => {
    render(
      <Lightbox
        images={MOCK_IMAGES}
        currentIndex={1}
        onClose={onClose}
        onNext={onNext}
        onPrev={onPrev}
      />,
    )
    fireEvent.keyDown(window, { key: 'ArrowRight' })
    expect(onNext).toHaveBeenCalledTimes(1)
  })

  it('chama onPrev ao pressionar ArrowLeft', () => {
    render(
      <Lightbox
        images={MOCK_IMAGES}
        currentIndex={1}
        onClose={onClose}
        onNext={onNext}
        onPrev={onPrev}
      />,
    )
    fireEvent.keyDown(window, { key: 'ArrowLeft' })
    expect(onPrev).toHaveBeenCalledTimes(1)
  })

  it('não mostra seta anterior na primeira imagem', () => {
    render(
      <Lightbox
        images={MOCK_IMAGES}
        currentIndex={0}
        onClose={onClose}
        onNext={onNext}
        onPrev={onPrev}
      />,
    )
    expect(
      screen.queryByRole('button', { name: 'Imagem anterior' }),
    ).not.toBeInTheDocument()
  })

  it('não mostra seta próxima na última imagem', () => {
    render(
      <Lightbox
        images={MOCK_IMAGES}
        currentIndex={2}
        onClose={onClose}
        onNext={onNext}
        onPrev={onPrev}
      />,
    )
    expect(
      screen.queryByRole('button', { name: 'Próxima imagem' }),
    ).not.toBeInTheDocument()
  })

  it('não renderiza nada com index inválido', () => {
    render(
      <Lightbox
        images={MOCK_IMAGES}
        currentIndex={99}
        onClose={onClose}
        onNext={onNext}
        onPrev={onPrev}
      />,
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
