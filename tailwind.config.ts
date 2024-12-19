/** @type {import('tailwindcss').Config} */
export const content = ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}']
export const theme = {
  extend: {
    gridColumn: {
      'span-16': 'span 16 / span 16',
    },
    boxShadow: {
      'inner-top': 'inset 0 1px 1px rgba(0, 0, 0, 0.20)',
      'inner-bottom': 'inset 0 -1px 1px rgba(0, 0, 0, 0.20)',
      'dropshadow-message': '0 1px 2px 0 rgba(0, 0, 0, 0.20)',
    },
    keyframes: {
      fill: {
        '0%': { backgroundPosition: '0% 100%' },
        '100%': { backgroundPosition: '100% 100%' },
      },
      slideUp: {
        '0%': { transform: 'translateY(20px)', opacity: 0 },
        '100%': { transform: 'translateY(0)', opacity: 1 },
      },
      slideDown: {
        '0%': { transform: 'translateY(0)', opacity: 1 },
        '100%': { transform: 'translateY(20px)', opacity: 0 },
      },
      grow: {
        '0%': { width: '0', opacity: '0' },
        '100%': { width: '100%', opacity: '1' },
      },
      scaleIn: {
        '0%': {
          transform: 'scale(0) translateX(0) translateY(0)',
          opacity: '0',
        },
        '100%': {
          transform: 'translateX(2rm) translateY(-1rm) scale(1)',
          opacity: '1',
        },
      },
      flash: {
        '0%, 100%': { backgroundColor: '#e0e0e0' },
        '50%': { backgroundColor: '#c0c0c0' },
      },
    },
    animation: {
      slideUp: 'slideUp 0.5s ease-out',
      slideDown: 'slideDown 0.5s ease-out',
      scaleIn: 'scaleIn 0.3s ease-in-out',
      flash: 'flash 1.5s ease-in-out infinite',
      grow: 'grow 1s ease-in-out forwards',
      fillBg: 'fill 0.5s ease-in-out forwards',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    fontSize: {},
    colors: {
      background: '#F9F9F9',
      chatBackground: '#EFEAE2',
      senderMessage: '#FAFAFA',
      primary: {
        '50': '#007197',
        '100': '#514DFF',
        '150': '#3430FF',
      },
      sendTemplate: '#FF984D',
      sendTemplateSuccess: '#04C900',
      secondary: '#008D68',
      subtitle: {
        '50': '#4F5F75',
        '100': '#5F728C',
      },
      select: '#C8CFFF',
      text: {
        '50': '#626262',
        '100': '#282828',
      },
      notification: '#FF914D',
      inputBackground: '#EEF1F3',
      title: '#1F1F1F',
      border: '#42FF00',
      separator: '#E2E2E2',
      icons: '#848484',
      pending: '#F4A261',
      approved: '#2A9D8F',
      refused: '#E76F51',
      archived: '#6D6875',
      dashboard: '#825a9e',
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
}
export const plugins = []
