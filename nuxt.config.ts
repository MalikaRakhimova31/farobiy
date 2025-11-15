// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  modules: ["@nuxtjs/i18n", "@nuxt/image", "@nuxtjs/color-mode" , "motion-v/nuxt"],

  css: ["assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: [
      { code: "uz", iso: "uz-UZ", name: "O'zbekcha" },
      { code: "en", iso: "en-US", name: "English" },
    ],
    defaultLocale: "uz",
    strategy: "no_prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    
  },

  image: {
    quality: 80,
    format: ["webp"],
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Jahon School - International Education",
      meta: [
        {
          name: "description",
          content:
            "Jahon School - providing world-class international education with modern teaching methods",
        },
      ],
    },
  },
});
