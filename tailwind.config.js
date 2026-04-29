export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#1E3A8A', light: '#2563EB' },
        accent: '#F97316',
        company: { blue: '#1E3A8A', orange: '#F97316', gray: '#64748B' }
      }
    }
  },
  plugins: []
}
