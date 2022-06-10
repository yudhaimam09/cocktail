module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-pattern' : "url('https://images.unsplash.com/photo-1591243315780-978fd00ff9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"
      },
      backgroundColor: {
        'pink' : '#FFB6C1'
      }
    },
  },
  plugins: [],
}
