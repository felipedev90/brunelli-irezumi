import type { Metadata } from "next";
import { Epilogue, Manrope } from "next/font/google";
import "../app/styles/globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-epilogue",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BRUNELLI IREZUMI | TATUAGEM em JUNDIAÍ-SP ⭐️ 4.9",
  description:
    "Especialista em Tatuagem Japonesa Tradicional (Irezumi) e Coberturas de Alta Performance em Jundiaí. Mais de 10 anos de experiência como Modern Shokunin. Agende sua arte única.",
  keywords: [
    "tatuagem japonesa",
    "irezumi",
    "tatuagem Jundiaí",
    "cover-up tatuagem",
    "tatuador Jundiaí",
    "Brunelli Irezumi",
  ],
  openGraph: {
    title: "BRUNELLI IREZUMI | Tatuagem Japonesa em Jundiaí",
    description:
      "Mais de 10 anos criando obras únicas no corpo. Orçamento sem compromisso.",
    type: "website",
    locale: "pt_BR",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TattooParlor",
  name: "Brunelli Irezumi",
  url: "https://brunelliirezumi.com",
  telephone: "+5511976624286",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Baronesa do Japi, 199 - Centro",
    addressLocality: "Jundiaí",
    postalCode: "13207-684",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.1904,
    longitude: -46.8845,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "10:00",
    closes: "20:00",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "53",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${epilogue.variable} ${manrope.variable} font-body`}>
        {children}
      </body>
    </html>
  );
}
