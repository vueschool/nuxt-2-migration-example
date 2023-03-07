// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: "https://dummyjson.com",
    },
  },
  modules: ["@nuxt/image-edge", "@nuxtjs/tailwindcss"],
  image: { domains: ["i.dummyjson.com"] },
  css: ["@/assets/css/main.css"],
});
