// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  modules: ["@nuxt/image", "@nuxtjs/color-mode", "@nuxtjs/i18n"],

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
      title: "Farobiy International School",
      meta: [
        {
          name: "description",
          content:
            "Farobiy International School zamonaviy ta'lim va yuqori sifatli bilimni ta'minlaydi. Bizning maqsadimiz – har bir o'quvchini kelajakda muvaffaqiyatli yetakchi qilish.",
        },

        { property: "og:title", content: "Farobiy International School" },
        {
          property: "og:description",
          content:
            "Farobiy International School zamonaviy ta'lim va yuqori sifatli bilimni ta'minlaydi. Bizning maqsadimiz – har bir o'quvchini kelajakda muvaffaqiyatli yetakchi qilish.",
        },
        {
          property: "og:image",
          content: "https://farobiy-red.vercel.app/hero.webp",
        },
        {
          property: "og:image:secure_url",
          content: "https://farobiy-red.vercel.app/hero.webp",
        },
        { property: "og:image:type", content: "image/webp" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: "Farobiy International School" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://farobiy-red.vercel.app/" },
        { property: "og:site_name", content: "Farobiy International School" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "Farobiy International School" },
        {
          name: "twitter:description",
          content:
            "Farobiy International School zamonaviy ta'lim va yuqori sifatli bilimni ta'minlaydi. Bizning maqsadimiz – har bir o'quvchini kelajakda muvaffaqiyatli yetakchi qilish.",
        },
        {
          name: "twitter:image",
          content: "https://farobiy-red.vercel.app/hero.webp",
        },
      ],
    },
  },
});
