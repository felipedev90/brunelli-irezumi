# Brunelli Irezumi

Site institucional para estúdio de tatuagem japonesa em Jundiaí-SP.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** — ícones pontuais
- **Material Symbols Outlined** — ícones via Google Fonts (CSS)
- **next/font** — Epilogue + Manrope otimizadas
- **next/image** — lazy load, WebP e responsividade automáticos

## Estrutura

```
brunelli-irezumi/
├── app/
│   ├── layout.tsx              # Root layout: fontes, metadata, JSON-LD
│   ├── page.tsx                # Home (composição das sections)
│   ├── sitemap.ts              # Sitemap automático
│   ├── styles/
│   │   └── globals.css         # Tailwind + tokens de cor + ícones
│   └── servicos/
│       └── [slug]/
│           └── page.tsx        # Página de serviço com galeria de imagens
├── components/
│   ├── layout/                 # Header, Footer, MobileNav
│   ├── sections/               # Uma section por arquivo
│   └── ui/                     # Componentes reutilizáveis (FaqItem, StarRating, etc.)
├── constants/
│   └── index.ts                # Todos os dados estáticos (textos, URLs, imagens)
├── types/
│   └── index.ts                # Interfaces TypeScript do projeto
└── public/
    └── images/                 # Imagens locais em .webp
```

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Acesse em `http://localhost:3000`.

> O projeto usa `--webpack` no script `dev` por estabilidade. O Turbopack pode ser reativado removendo essa flag quando o suporte for estável.

## Build e produção

```bash
npm run build
npm run start
```

## Lint

```bash
npm run lint
```

## Customização de conteúdo

Todos os textos, URLs e imagens ficam em `constants/index.ts`. Para alterar WhatsApp, endereço, depoimentos, galeria ou serviços, edite apenas esse arquivo — os componentes não têm strings hardcoded.

### Adicionar imagens a um serviço

Em `constants/index.ts`, popule o array `gallery` do serviço desejado:

```ts
gallery: [
  { src: "/images/services/tradicional/foto1.webp", alt: "descrição" },
],
```

## Deploy

Configurado para Vercel. Domínio alvo: `brunelliirezumi.com`

```bash
npx vercel
```

Hosts de imagem externos permitidos estão declarados em `next.config.ts`.
