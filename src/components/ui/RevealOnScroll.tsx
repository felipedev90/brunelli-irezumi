'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealOnScrollProps = {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  className?: string
}

export function RevealOnScroll({
  children,
  delay = 0,
  duration = 0.6,
  y = 30,
  className,
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
