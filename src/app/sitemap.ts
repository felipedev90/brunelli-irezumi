import type { MetadataRoute } from 'next'
import { SERVICES } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages = SERVICES.map((service) => ({
    url: `https://brunelli-irezumi.com.br/servicos/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://brunelli-irezumi.com.br',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    ...servicePages,
  ]
}
