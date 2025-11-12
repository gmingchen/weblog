// https://nuxt.com/docs/api/configuration/nuxt-config
const { 
  API_BASE_URL, API_BASE_PATH, 
  WEBSIDE_TITLE, WEBSIDE_DESCRIPTION, WEBSIDE_KEYWORDS
} = process.env

export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      title: WEBSIDE_TITLE,
      meta: [
        { name: 'description', content: WEBSIDE_DESCRIPTION },
        { name: 'keywords', content: WEBSIDE_KEYWORDS },
      ],
      htmlAttrs: {
        lang: 'zh-CN',
      }
    },
  },
  runtimeConfig: {
    public: {
      API_BASE_URL: API_BASE_URL,
      API_BASE_PATH: API_BASE_PATH,
      WEBSIDE_TITLE: WEBSIDE_TITLE,
      WEBSIDE_DESCRIPTION: WEBSIDE_DESCRIPTION,
      WEBSIDE_KEYWORDS: WEBSIDE_KEYWORDS,
    }
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