interface StarRatingProps {
  value: number
  max?: number
}

export function StarRating({ value, max = 5 }: StarRatingProps) {
  const stars = Array.from({ length: max }, (_, i) => {
    const filled = i + 1 <= Math.floor(value)
    const half = !filled && i < value && value % 1 >= 0.5

    return { index: i, filled, half }
  })

  return (
    <span className="text-tertiary flex" aria-label={`Avaliação: ${value} de ${max}`}>
      {stars.map(({ index, filled, half }) => (
        <span
          key={index}
          className={`material-symbols-outlined ${filled || half ? 'fill-icon' : ''}`}
          aria-hidden="true"
        >
          {filled ? 'star' : half ? 'star_half' : 'star_border'}
        </span>
      ))}
    </span>
  )
}