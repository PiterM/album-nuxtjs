// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    nasaApodApiKey: process.env.NASA_APOD_API_KEY,
  },
});
