// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E1B2E',
        secondary: '#28243C',
        background: '#F8F4FF',

        textPrimary: '#FDFBFF',
        textSecondary: '#B0AEB8',

        accentPrimary: '#F88F70',
        accentSecondary: '#FFD265',
        accentTertiary: '#9AE3D2',

        success: '#56C288',
        error: '#EB6B6B',
        warning: '#F9B26E',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}