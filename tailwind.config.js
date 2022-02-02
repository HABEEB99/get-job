module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        body: '#F5F5F5',
        logo: '#F05454',
        cta: '#121212',
        btn: '#30475E',
      },
    },
  },
  plugins: [],
};
