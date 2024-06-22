// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-security", "nuxt-svgo", "@nuxtjs/seo"],
  site: { indexable: false }, // For production
  // site: {
  //   url: 'https://example.com',
  //   name: 'Awesome Site',
  //   description: 'Welcome to my awesome site!',
  //   defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  // },
  security: {
    headers: {
      crossOriginEmbedderPolicy: process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
    },
  },
  svgo: {
    autoImportPath: "./assets/icons/",
    global: false,
    componentPrefix: 'i',
  },
});