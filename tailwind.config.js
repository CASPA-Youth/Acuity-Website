/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0F032D',
        heart: '#4E2BCC',
        indigo: {
          DEFAULT: '#905BF4',
          soft: '#EFEFEF',
        },
        seashell: '#EFEFEF',
        muted: 'rgba(239,239,239,0.72)',
        faint: 'rgba(239,239,239,0.48)',
        line: 'rgba(239,239,239,0.14)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Hanken Grotesk"', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      letterSpacing: {
        kicker: '0.16em',
      },
      maxWidth: {
        shell: '1240px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
}
