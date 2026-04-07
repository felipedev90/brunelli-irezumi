import type { Testimonial } from '@/types'
import { StarRating } from './StarRating'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="p-8 bg-surface-container-high relative">
      <span
        className="material-symbols-outlined text-secondary text-5xl opacity-20 absolute top-4 right-4"
        aria-hidden="true"
      >
        format_quote
      </span>

      <StarRating value={testimonial.rating} />

      <p className="text-lg text-on-surface mt-6 mb-6 italic leading-relaxed">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <footer className="font-headline font-bold uppercase tracking-widest text-sm text-secondary">
        {testimonial.name}
      </footer>
    </article>
  )
}