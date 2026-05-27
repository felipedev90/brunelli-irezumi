import { render, screen } from '@testing-library/react'
import { WhatsAppButton } from '../WhatsAppButton'
import { WHATSAPP_URL } from '@/data/projects'

describe('WhatsAppButton', () => {
  it('renderiza o link com o href correto', () => {
    render(<WhatsAppButton />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', WHATSAPP_URL)
  })

  it('tem aria-label para acessibilidade', () => {
    render(<WhatsAppButton />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('aria-label')
  })

  it('abre em nova aba', () => {
    render(<WhatsAppButton />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
