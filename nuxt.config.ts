// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Felix Cervin',
      htmlAttrs: {
        lang: 'en'
      },
    },
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@vesp/nuxt-fontawesome',
  ],
  pinia: {
    storesDirs: [
      './stores/**'
    ],
  },
  googleFonts: {
    families: {
      PlayfairDisplay: true,
      'Epunda Slab': true,
      'Bebas Neue': true,
    }
  },
  fontawesome: {
    icons: {
      solid: [
        'caret-down',
      ],
    },
  },
})