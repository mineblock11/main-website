// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],
  content: {
    markdown: {
      anchorLinks: false,
    }
  },
  components: []
})
