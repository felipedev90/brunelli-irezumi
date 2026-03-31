# Brunelli Irezumi - Site Institucional

Site institucional para estúdio de tatuagem japonesa em Jundiaí-SP, construído com Next.js 15 App Router.

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v3**
- **next/font** — fontes Epilogue + Manrope otimizadas
- **next/image** — imagens com lazy load, WebP automático e responsividade
- **Material Symbols Outlined** — ícones via CDN Google Fonts

## Estrutura

```
brunelli-irezumi/
├── app/
│   ├── layout.tsx        # Root layout: fonts, metadata, JSON-LD SEO
│   ├── page.tsx          # Home page
│   └── globals.css       # Tailwind + estilos globais
├── components/
│   ├── layout/           # Header, Footer, MobileNav
│   ├── sections/         # Uma section por arquivo
│   └── ui/               # Componentes reutilizáveis
├── constants/index.ts    # Todos os dados estáticos
└── types/index.ts        # Interfaces TypeScript
```

## Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build
npm run start

# Lint
npm run lint
```

## Customização

Todos os textos, URLs e imagens estão centralizados em `constants/index.ts`. Para alterar o número de WhatsApp, endereço, depoimentos, etc., edite apenas esse arquivo.

## Deploy

O projeto está pronto para deploy na Vercel:

```bash
npx vercel
```

Lembre-se de atualizar `next.config.ts` se trocar as imagens por um host diferente.