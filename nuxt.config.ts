// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    'nuxt-particles',
    '@formkit/auto-animate',
    '@nuxtjs/tailwindcss',
    '@ant-design-vue/nuxt'
  ]
})