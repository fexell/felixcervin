// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: false,

  app: {
    head: {
      title: 'Felix Cervin',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' }
      ]
    },
  },

  plugins: [

  ],

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
        'heart',
        'envelope',
        'at',
        'phone',
        'hand-pointer',
        'computer-mouse',
      ],
      brands: [
        'linkedin',
        'github',
        'instagram',
        'twitter',
        'x-twitter',
        'soundcloud',
      ]
    },
  },
})