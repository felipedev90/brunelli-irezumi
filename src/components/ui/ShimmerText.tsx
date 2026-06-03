import { cn } from '@/lib/utils'

type ShimmerVariant = 'night'

type ShimmerTextProps = {
  variant?: ShimmerVariant
  className?: string
  children: React.ReactNode
}

const VARIANT_CLASSES: Record<ShimmerVariant, string> = {
  night:
    'bg-[linear-gradient(110deg,#ffffff_35%,var(--color-outline)_50%,#ffffff_65%)]',
}

export function ShimmerText({
  variant = 'night',
  className,
  children,
}: ShimmerTextProps) {
  return (
    <span
      className={cn(
        'inline bg-size-[250%_100%] bg-clip-text text-transparent',
        'motion-safe:animate-shimmer',
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
