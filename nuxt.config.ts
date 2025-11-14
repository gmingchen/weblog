// https://nuxt.com/docs/api/configuration/nuxt-config
const { 
  API_BASE_URL, API_BASE_PATH,
} = process.env

export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'zh-CN',
      }
    },
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: API_BASE_URL,
      API_BASE_PATH: API_BASE_PATH,
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/ui', '@nuxt/image'],
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
  },
  webpack: {
    extractCSS: true,

    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
})