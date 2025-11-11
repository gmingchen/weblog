// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_BASE_URL: process.env.API_BASE_URL,
      API_BASE_PATH: process.env.API_BASE_PATH,
    }
  },
  app: {
    baseURL: '/',
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/ui'],
  css: ['~/assets/sass/index.scss', '~/assets/css/ui.css'],
  ssr: true,
  icon: {
    customCollections: [{
      prefix: 'costom',
      dir: './app/assets/svgs'
    }]
  },
  nitro: {
    logLevel: 'debug',
  }
})