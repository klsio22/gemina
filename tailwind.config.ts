import daisyui from 'daisyui';

export default {
  plugins: [daisyui],
  daisyui: { themes: [], logs: false },
  content: ['./**/*.tsx'],
  theme: {
    container: { center: true },
    colors: {
      'stone-500': '#121214',
      'orange-light': '#D56F25',
      'stone-100': '#dadada',
      'white-matte': '#fffcfc',
      'dark-brown': '#5D4737',
    },

    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        quattrocento: ['Quattrocento Sans', 'sans-serif'],
      },
    },
  },
};
