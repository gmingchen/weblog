// https://nuxt.com/docs/api/configuration/nuxt-config
/**
 * 获取数据库配置
 * @returns 
 */
const database = () => {
  const {
    NUXT_DATABASE_IP, NUXT_DATABASE_PORT, NUXT_DATABASE_NAME,
    NUXT_DATABASE_USERNAME, NUXT_DATABASE_PASSWORD
  } = process.env
  return {
    ip: NUXT_DATABASE_IP,
    port: NUXT_DATABASE_PORT,
    name: NUXT_DATABASE_NAME,
    username: NUXT_DATABASE_USERNAME,
    password: NUXT_DATABASE_PASSWORD,
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    database: database()
  }
})
