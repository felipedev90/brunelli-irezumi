# CLAUDE.md — Brunelli Irezumi

Contexto do projeto para uso com Claude e GitHub Copilot.

---

## Sobre o Projeto

Site institucional para estúdio de tatuagem japonesa em Jundiaí-SP.
Stack: **Next.js 15 App Router · TypeScript · Tailwind CSS v4**

---

## Estrutura de Pastas

```
app/
  layout.tsx          # Root layout: fonts, metadata, JSON-LD
  page.tsx            # Página home (composição das sections)
  globals.css         # Tailwind + @import Material Symbols

components/
  layout/             # Header, Footer, MobileNav
  sections/           # Uma section por arquivo (HeroSection, etc.)
  ui/                 # Componentes reutilizáveis (StarRating, FaqItem, etc.)

constants/
  index.ts            # Todos os dados estáticos: textos, URLs, imagens

types/
  index.ts            # Interfaces TypeScript do projeto

public/
  images/             # Imagens locais otimizadas em .webp
```

---

## Convenções de Código

### Componentes

- Sempre **named export** — nunca `export default` em componentes
- Um componente por arquivo
- Props tipadas com `interface`, não `type`

```tsx
// ✅ Correto
interface CardProps {
  title: string
}
export function Card({ title }: CardProps) {}

// ❌ Errado
export default function Card() {}
```

### Dados Estáticos

- Todo texto, URL e dado estático fica em `constants/index.ts`
- Componentes **nunca** têm strings hardcoded — sempre importam de constants

```tsx
// ✅ Correto
import { WHATSAPP_URL } from '@/constants'

// ❌ Errado
href = 'https://wa.me/5511999999999'
```

### Imagens

- Sempre usar `next/image` com `fill` + `sizes` correto
- Sempre incluir `quality={90}` em imagens de destaque (hero, services, about)
- Formato `.webp` para todas as imagens locais
- `object-position` ajustado por breakpoint quando necessário

```tsx
// ✅ Padrão correto
<Image
  src={img.src}
  alt={img.alt}
  fill
  quality={90}
  className="object-cover object-[center_top]"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Links Externos

- Sempre com `target="_blank" rel="noopener noreferrer"`

### Tailwind

- Projeto usa **Tailwind v3** — não usar classes v4 (`bg-linear-to-*`, `text-shadow-*`, etc.)
- Gradientes: `bg-gradient-to-t`, `bg-gradient-to-l`, etc.
- Altura de tela: sempre `min-h-[100dvh]`, nunca `min-h-screen` (quebra no mobile)
- Aspect ratio: usar `aspect-[3/2]`, `aspect-square`, etc.

### Fontes

- `font-headline` → Epilogue (títulos, labels, botões)
- `font-body` → Manrope (parágrafos, textos corridos)
- Variáveis CSS: `--font-epilogue`, `--font-manrope`

---

## Tokens de Cor (Material You — Dark Theme)

Os tokens principais usados no projeto:

| Token                         | Uso                                       |
| ----------------------------- | ----------------------------------------- |
| `bg-surface`                  | Fundo padrão `#131313`                    |
| `bg-surface-container-low`    | Fundo alternado de sections `#1c1b1b`     |
| `bg-surface-container-high`   | Cards, blockquotes `#2a2a2a`              |
| `text-on-surface`             | Texto primário `#e5e2e1`                  |
| `text-on-surface-variant`     | Texto secundário/subtítulos `#c4c7c7`     |
| `text-secondary`              | Accent rosa (destaques, links) `#ffb3b1`  |
| `bg-secondary-container`      | Fundo de botão CTA `#ad0224`              |
| `text-on-secondary-container` | Texto do botão CTA `#ffb8b5`              |
| `text-tertiary`               | Estrelas de avaliação (dourado) `#e9c349` |
| `border-secondary`            | Bordas de destaque (rosa) `#ffb3b1`       |

---

## Ícones

Projeto usa **Material Symbols Outlined** via CSS (`globals.css`).

```tsx
// Uso correto
<span className="material-symbols-outlined">arrow_forward</span>

// Com fill (ícone preenchido)
<span className="material-symbols-outlined fill-icon">star</span>
```

Lucide React também está instalado para ícones pontuais:

```tsx
import { MoveRight } from 'lucide-react'
;<MoveRight size={24} />
```

---

## Imagens do Projeto

| Constante           | Arquivo                | Dimensões      | Uso             |
| ------------------- | ---------------------- | -------------- | --------------- |
| `HERO_IMG`          | `hero1900p.webp`       | 1900px largura | Background hero |
| `ABOUT_IMG`         | `about.webp`           | 1200x2662      | Foto do artista |
| `SERVICES[0].image` | `service-japones.webp` | 1000x667       | Card serviço 1  |
| `SERVICES[1].image` | `service-coverup.webp` | 1000x667       | Card serviço 2  |

> Imagens de galeria ficam em `public/images/gallery/`

---

## Problemas Conhecidos e Soluções

**`min-h-screen` gera faixa vazia no mobile**
→ Sempre usar `min-h-[100dvh]`

**Ícones Material Symbols não aparecem**
→ O `@import` está no topo de `globals.css` — não usar `<link>` no `layout.tsx`

**Imagem com baixa definição**
→ Verificar se o aspect ratio do container casa com as proporções da imagem original e adicionar `quality={90}`

---

## Scripts

```bash
npm run dev      # Desenvolvimento em localhost:3000
npm run build    # Build de produção
npm run start    # Serve o build de produção
npm run lint     # ESLint
```

---

## Deploy

Projeto configurado para Vercel. Domínio alvo: `brunelliirezumi.com`

Hosts externos de imagem liberados em `next.config.ts`:

- `lh3.googleusercontent.com` (imagens placeholder — remover em produção)
