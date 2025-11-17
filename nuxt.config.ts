// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  modules: [
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "motion-v/nuxt",
    "@nuxtjs/i18n",
  ],

  css: ["assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    locales: [
      {
        code: "uz",
        language: "uz-UZ",
        name: "O'zbekcha",
        file: "uz.json",
      },
      {
        code: "ru",
        language: "ru-RU",
        name: "Русский",
        file: "ru.json",
      },
    ],
    langDir: "locales",
    defaultLocale: "uz",
    strategy: "no_prefix",
  },

  image: {
    quality: 80,
    format: ["webp"],
  },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Farobiy School - International Education",
      meta: [
        {
          name: "description",
          content:
            "Farobiy School - providing world-class international education with modern teaching methods",
        },
      ],
    },
  },
});
