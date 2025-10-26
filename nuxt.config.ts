export default defineNuxtConfig({
  ssr: true,

  app: {
    baseURL: "/", // ✅ karena ini user site, bukan project site
  },

  nitro: {
    preset: "github-pages",
    prerender: {
      routes: ["/"],
      crawlLinks: true,
    },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
    "@vueuse/nuxt",
    "nuxt-og-image",
    "motion-v/nuxt",
  ],

  css: ["~/assets/css/main.css"],

  compatibilityDate: "2024-11-01",

  devtools: {
    enabled: true,
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});
