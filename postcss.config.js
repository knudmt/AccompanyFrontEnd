module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  overrides: [
    {
      files: ["*.vue"],
      processor: "vue/.vue"
    }
  ],
}
