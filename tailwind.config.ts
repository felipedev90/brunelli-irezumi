import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // --- TONS DE CINZA, PRETO E BRANCO (ESTRUTURA) ---
        background: '#131313', // Preto suave (Fundo principal)
        surface: '#131313', // Preto suave (Superfícies base)
        'surface-dim': '#131313', // Preto suave (Superfície em repouso)
        'surface-bright': '#393939', // Cinza chumbo (Superfície iluminada)
        'surface-container-lowest': '#0e0e0e', // Preto quase puro (Nível mais profundo)
        'surface-container-low': '#1c1b1b', // Grafite escuro
        'surface-container': '#20201f', // Grafite médio
        'surface-container-high': '#2a2a2a', // Cinza asfalto
        'surface-container-highest': '#353535', // Cinza rato (Nível mais alto/próximo)
        'surface-variant': '#353535', // Cinza médio (Variação de suporte)
        'on-surface': '#e5e2e1', // Branco gelo (Cor do texto principal)
        'on-background': '#e5e2e1', // Branco gelo (Cor do texto no fundo)
        'on-surface-variant': '#c4c7c7', // Cinza claro (Texto secundário/suave)
        outline: '#8e9192', // Cinza metálico (Bordas e linhas)
        'outline-variant': '#444748', // Cinza escuro (Bordas sutis)

        // --- TONS METÁLICOS / CINZA CLARO (PRIMARY) ---
        primary: '#c6c6c6', // Prata/Cinza claro (Destaque principal)
        'on-primary': '#303030', // Grafite escuro (Texto sobre Prata)
        'primary-container': '#121212', // Preto (Fundo de elementos primários)
        'on-primary-container': '#7d7d7d', // Cinza médio (Texto em containers primários)
        'primary-fixed': '#e2e2e2', // Platina (Quase branco)
        'primary-fixed-dim': '#c6c6c6', // Prata fosco
        'on-primary-fixed': '#1b1b1b', // Preto (Texto sobre Platina)
        'on-primary-fixed-variant': '#474747', // Cinza carvão (Variante de texto)

        // --- TONS ROSA SALMÃO / VINHO (SECONDARY) ---
        secondary: '#ffb3b1', // Rosa Salmão claro
        'on-secondary': '#680011', // Vinho tinto (Texto sobre Rosa)
        'secondary-container': '#ad0224', // Vermelho Carmim escuro
        'on-secondary-container': '#ffb8b5', // Rosa pálido (Texto sobre Carmim)
        'secondary-fixed': '#ffdad8', // Rosa Bebê
        'secondary-fixed-dim': '#ffb3b1', // Rosa Salmão fosco
        'on-secondary-fixed': '#410007', // Marrom avermelhado escuro
        'on-secondary-fixed-variant': '#92001c', // Vermelho sangue (Variante de texto)

        // --- TONS DOURADOS / CÁQUI (TERTIARY) ---
        tertiary: '#e9c349', // Dourado / Amarelo ocre
        'on-tertiary': '#3c2f00', // Castanho escuro (Texto sobre Dourado)
        'tertiary-container': '#181100', // Preto com fundo marrom
        'on-tertiary-container': '#987a00', // Mostarda (Texto sobre container escuro)
        'tertiary-fixed': '#ffe088', // Amarelo baunilha/Creme
        'tertiary-fixed-dim': '#e9c349', // Dourado fosco
        'on-tertiary-fixed': '#241a00', // Marrom café (Texto sobre Creme)
        'on-tertiary-fixed-variant': '#574500', // Oliva escuro (Variante de texto)

        // --- TONS DE ERRO / ALERTA ---
        error: '#ffb4ab', // Vermelho coral (Erro suave)
        'on-error': '#690005', // Bordô (Texto sobre erro)
        'error-container': '#93000a', // Vermelho sangue escuro
        'on-error-container': '#ffdad6', // Rosa esbranquiçado (Texto sobre erro container)

        // --- ESTADOS INVERSOS ---
        'inverse-surface': '#e5e2e1', // Branco gelo (Superfície em modo invertido)
        'inverse-on-surface': '#313030', // Grafite (Texto em modo invertido)
        'inverse-primary': '#5e5e5e', // Cinza médio (Destaque em modo invertido)
        'surface-tint': '#c6c6c6', // Prata (Tom de elevação)
      },
      fontFamily: {
        headline: ['var(--font-epilogue)', 'sans-serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
        label: ['var(--font-manrope)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0rem',
        lg: '0rem',
        xl: '0rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}

export default config
