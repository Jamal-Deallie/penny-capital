import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      lg: { min: '800px' },
      md: { max: '799px' },
    },
    fontSize: {
      sm: ['calc(12 * (100vw / var(--viewport-w)))', 'var(--lh)'],
      base: ['calc(16 * (100vw / var(--viewport-w)))', 'var(--lh)'],
      lg: ['calc(18 * (100vw / var(--viewport-w)))', 'var(--lh)'],
      xl: ['calc(20 * (100vw / var(--viewport-w)))', 'var(--lh)'],
      '2xl': ['calc(22 * (100vw / var(--viewport-w)))', 'var(--lh)'],
      '3xl': 'calc(33 * (100vw / var(--viewport-w)))',
      '4xl': 'calc(38 * (100vw / var(--viewport-w)))',
      '5xl': 'calc(48 * (100vw / var(--viewport-w)))',
      '6xl': 'calc(52.04 * (100vw / var(--viewport-w)))',
      '7xl': 'calc(67.36  * (100vw / var(--viewport-w)))',
      '8xl': 'calc(76 * (100vw / var(--viewport-w)))',
      '9xl': 'calc(70 * (100vw / var(--viewport-w)))',
      '10xl': 'calc(120 * (100vw / var(--viewport-w)))',
    },
    spacing: {
      0: 'calc(0 * (100vw / var(--viewport-w)))',
      1: 'calc(4 * (100vw / var(--viewport-w)))',
      2: 'calc(8 * (100vw / var(--viewport-w)))',
      3: 'calc(12 * (100vw / var(--viewport-w)))',
      4: 'calc(16 * (100vw / var(--viewport-w)))',
      5: 'calc(20 * (100vw / var(--viewport-w)))',
      6: 'calc(24 * (100vw / var(--viewport-w)))',
      7: 'calc(28 * (100vw / var(--viewport-w)))',
      8: 'calc(32 * (100vw / var(--viewport-w)))',
      9: 'calc(36 * (100vw / var(--viewport-w)))',
      10: 'calc(40 * (100vw / var(--viewport-w)))',
      11: 'calc(44 * (100vw / var(--viewport-w)))',
      12: 'calc(48 * (100vw / var(--viewport-w)))',
      14: 'calc(56 * (100vw / var(--viewport-w)))',
      15: 'calc(60 * (100vw / var(--viewport-w)))',
      16: 'calc(64 * (100vw / var(--viewport-w)))',
      17: 'calc(68 * (100vw / var(--viewport-w)))',
      18: 'calc(72 * (100vw / var(--viewport-w)))',
      19: 'calc(76 * (100vw / var(--viewport-w)))',
      20: 'calc(80 * (100vw / var(--viewport-w)))',
      24: 'calc(96 * (100vw / var(--viewport-w)))',
      28: 'calc(112 * (100vw / var(--viewport-w)))',
      30: 'calc(120 * (100vw / var(--viewport-w)))',
      32: 'calc(128 * (100vw / var(--viewport-w)))',
      34: 'calc(136 * (100vw / var(--viewport-w)))',
      36: 'calc(144 * (100vw / var(--viewport-w)))',
      37: 'calc(148 * (100vw / var(--viewport-w)))',
      40: 'calc(160 * (100vw / var(--viewport-w)))',
      41: 'calc(164 * (100vw / var(--viewport-w)))',
      42: 'calc(168 * (100vw / var(--viewport-w)))',
      44: 'calc(176 * (100vw / var(--viewport-w)))',
      45: 'calc(180 * (100vw / var(--viewport-w)))',
      46: 'calc(184 * (100vw / var(--viewport-w)))',
      47: 'calc(188 * (100vw / var(--viewport-w)))',
      48: 'calc(192 * (100vw / var(--viewport-w)))',
      60: 'calc(240 * (100vw / var(--viewport-w)))',
      62: 'calc(248 * (100vw / var(--viewport-w)))',
      64: 'calc(256 * (100vw / var(--viewport-w)))',
    },
    extend: {
      fontFamily: {
        heading: ['var(--heading-font)'],
        body: ['var(--body-font)'],
        script: ['var(--script-font)'],
      },
      spacing: {
        'nav-height': 'calc(var(--nav-height) * (100vw / var(--viewport-w)))',
        13: 'calc(52 * (100vw / var(--viewport-w)))',
        'screen-height':
          'calc(100vh - (var(--nav-height) * (100vw / var(--viewport-w))))',
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
        },
        quaternary: {
          DEFAULT: 'hsl(var(--quaternary))',
        },
        quinary: {
          DEFAULT: 'hsl(var(--quinary))',
        },
        background: {
          DEFAULT: 'hsl(var(--background))',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        slidein: {
          from: {
            transform: 'translateY(120%)',
            opacity: '0',
          },
          to: {
            transform: 'translateY(0%)',
            opacity: '1',
          },
          animation: {
            slidein: 'slidein 2s ease var(--slidein-delay, 0) forwards',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
