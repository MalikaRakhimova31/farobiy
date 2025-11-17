<script setup lang="ts">
import { Motion } from "@motionone/vue";

import IconSun from "~/components/icon/IconSun.vue";
import IconMoon from "~/components/icon/IconMoon.vue";

const { locale, locales, setLocale, t } = useI18n();
const colorMode = useColorMode();
const currentLocale = computed(() => locale.value);
const availableLocales = computed(() => locales.value);

const navItems = [
  { key: "nav.home", href: "#hero" },
  { key: "nav.about", href: "#why" },
  { key: "nav.programs", href: "#programs" },
  { key: "nav.faq", href: "#faq" },
  { key: "nav.contact", href: "#contact" },
];

const switchLanguage = (code: "uz" | "ru") => {
  setLocale(code);
};
const toggleTheme = async () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
  await nextTick();
};
</script>

<template>
  <!-- HEADER -->
  <Motion
    tag="header"
    class="z-40 flex h-15 w-[98vw] items-center justify-between rounded-full bg-[rgba(255,255,255,0.1)] px-2.5 shadow-[0_4px_8px_0_rgba(215,215,215,0.6)] backdrop-blur-[30px] md:w-[80vw] dark:bg-[rgba(42,42,59,0.4)] dark:shadow-[0px_2px_7px_0px_rgba(15,10,39,0.35)]"
    :initial="{ opacity: 0, y: -50 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, easing: 'ease-out' }"
  >
    <nav class="w-full px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between lg:h-20">
        <ClientOnly>
          <Motion
            tag="div"
            :initial="{ opacity: 0, x: -60 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.8 }"
            class="flex items-center space-x-2"
          >
            <img
              :src="
                colorMode.preference === 'light'
                  ? '/logo.png'
                  : '/logo-white.png'
              "
              alt=""
              class="w-44"
            />
          </Motion>
        </ClientOnly>

        <!-- Desktop Navigation -->
        <div class="hidden items-center space-x-8 lg:flex">
          <Motion
            v-for="item in navItems"
            :key="item.key"
            tag="a"
            :href="item.href"
            class="group relative cursor-pointer font-medium text-gray-700 transition-colors duration-200 hover:text-[#009663] dark:text-white dark:hover:text-[#00c878]"
            :whileHover="{ scale: 1.05 }"
          >
            {{ t(item.key) }}

            <span
              class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#009663] transition-all duration-300 group-hover:w-full dark:bg-[#00c878]"
            ></span>
          </Motion>
        </div>

        <div class="flex items-center space-x-4">
          <!-- Language Switcher -->
          <ClientOnly>
            <div
              class="dark:bg-dark-100 flex items-center space-x-1 rounded-3xl bg-gray-100 p-1"
            >
              <Motion
                v-for="localeOption in availableLocales"
                :key="localeOption.code"
                tag="button"
                @click="switchLanguage(localeOption.code)"
                :class="[
                  'rounded-xl px-3 py-1 text-sm font-medium transition-all duration-200',
                  currentLocale === localeOption.code
                    ? 'bg-white text-[#009663] shadow-sm dark:text-[#00c878]'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white',
                ]"
                :whileHover="{ scale: 1.05 }"
                :aria-label="`Switch to ${localeOption.name}`"
              >
                {{ localeOption.code.toUpperCase() }}
              </Motion>
            </div>
          </ClientOnly>

          <a
            href="#contact"
            class="hover:bg-secondary-900/80 bg-secondary-900 hidden cursor-pointer rounded-3xl px-6 py-2 text-white transition-colors lg:block"
          >
            {{ t("nav.contact") }}
          </a>

          <ClientOnly>
            <button
              @click="toggleTheme"
              class="cursor-pointer rounded-full border p-2 transition-all duration-300 hover:scale-110"
              :class="
                colorMode.preference === 'light'
                  ? 'border-secondary-800 bg-secondary-200 hover:bg-secondary-300'
                  : 'border-primary-800 hover:bg-primary-300 bg-white'
              "
              :title="
                colorMode.preference === 'light'
                  ? 'Switch to dark mode'
                  : 'Switch to light mode'
              "
            >
              <IconSun v-if="colorMode.preference === 'light'" />
              <IconMoon
                v-else
                className="stroke-primary-800 fill-primary-800"
              />
            </button>
          </ClientOnly>
        </div>
      </div>
    </nav>
  </Motion>
</template>
