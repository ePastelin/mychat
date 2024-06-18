/** @type {import('tailwindcss').Config} */
export const content = ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}']
export const theme = {
  extend: {
    boxShadow: {
      'inner-top': 'inset 0 1px 1px rgba(0, 0, 0, 0.20)',
      'inner-bottom': 'inset 0 -1px 1px rgba(0, 0, 0, 0.20)',
      'dropshadow-message': '0 1px 2px 0 rgba(0, 0, 0, 0.20)',
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
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },
  },
}
export const plugins = []
