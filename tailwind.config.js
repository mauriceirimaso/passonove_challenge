module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
    './public/index.html',
  ],
  theme: {
    extend: {
      screens: {
      
        'lg1': '495px',  
        'lg2': '619px', 
        'lg3': '755px', 
        'lg4': '1159px', 
        'lg5': '1426px', 
        'lg6': '1629px', 
      },
    },
  },
  plugins: [],
}

