import type { Metadata } from 'next'
import { Epilogue, Manrope } from 'next/font/google'
import { cookies } from 'next/headers'
import { Skeleton } from '@/components/layout/Skeleton'
import './globals.css'

const epilogue = Epilogue({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-epilogue',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '600', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://brunelli-irezumi.com.br'),
  title: {
    default: 'BRUNELLI IREZUMI | Tatuagem Japonesa em Jundiaí-SP | 4.9★',
    template: '%s | Brunelli Irezumi',
  },
  description:
    'Especialista em Tatuagem Japonesa Tradicional (Irezumi) e Coberturas de Alta Performance em Jundiaí. Mais de 10 anos de experiência como Modern Shokunin. Agende sua arte única.',
  keywords: [
    'tatuagem japonesa',
    'irezumi',
    'tatuagem Jundiaí',
    'cover-up tatuagem',
    'tatuador Jundiaí',
    'Brunelli Irezumi',
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'BRUNELLI IREZUMI | Tatuagem Japonesa em Jundiaí',
    description:
      'Mais de 10 anos criando obras únicas no corpo. Orçamento sem compromisso.',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://brunelli-irezumi.com.br',
    siteName: 'Brunelli Irezumi',
    images: [
      {
        url: 'https://brunelli-irezumi.com.br/images/hero/hero1900p.webp',
        width: 1900,
        height: 1267,
        alt: 'Brunelli Irezumi — Tatuagem Japonesa Tradicional em Jundiaí-SP',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BRUNELLI IREZUMI | Tatuagem Japonesa em Jundiaí',
    description:
      'Mais de 10 anos criando obras únicas no corpo. Orçamento sem compromisso.',
    images: ['/images/hero/hero1900p.webp'],
  },
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TattooParlor',
  name: 'Brunelli Irezumi',
  url: 'https://brunelli-irezumi.com.br',
  telephone: '+5511976624286',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Baronesa do Japi, 199 - Centro',
    addressLocality: 'Jundiaí',
    postalCode: '13207-684',
    addressRegion: 'SP',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.1904,
    longitude: -46.8845,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    opens: '10:00',
    closes: '20:00',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '53',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const skeletonShown = cookieStore.get('skeleton_shown')?.value === '1'

  return (
    <html lang="pt-BR" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className={`${epilogue.variable} ${manrope.variable} font-body`}>
        <Skeleton initialShown={skeletonShown} />
        {children}
      </body>
    </html>
  )
}
