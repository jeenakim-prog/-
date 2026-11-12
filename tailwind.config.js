/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0d0f12',
        surface: '#15181e',
        'surface-hover': '#1a1e26',
        border: '#242933',
        muted: '#8e96a4',
        foreground: '#e6ebf2',
        accent: {
          DEFAULT: '#a3e635', // 밝은 연두색
          hover: '#bef264',
          dim: 'rgba(163, 230, 53, 0.12)',
          border: 'rgba(163, 230, 53, 0.35)',
        }
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
