export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["../src/module"],
  postcss: {
    plugins: {
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
