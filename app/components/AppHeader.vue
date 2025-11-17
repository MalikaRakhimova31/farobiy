<script setup lang="ts">
import { Motion } from "@motionone/vue";

import iconLogo from "../assets/images/logo.png";
import iconMoon from "../assets/images/moon.png";

const { locale, locales, setLocale } = useI18n();
const mobileMenuOpen = ref(false);

const currentLocale = computed(() => locale.value);
const availableLocales = computed(() => locales.value);

const navItems = [
  { key: "Home", href: "#hero" },
  { key: "About", href: "#why" },
  { key: "Programs", href: "#programs" },
  { key: "Faq", href: "#faq" },
  { key: "Contact", href: "#contact" },
];
</script>

<template>
  <!-- HEADER -->
  <Motion
    tag="header"
    class="fixed top-0 right-0 left-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm"
    :initial="{ opacity: 0, y: -50 }"
    :animate="{ opacity: 1, y: 0 }"
    :transition="{ duration: 0.6, easing: 'ease-out' }"
  >
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between lg:h-20">
        <!-- Logo -->
        <Motion
          tag="div"
          :initial="{ opacity: 0, x: -60 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.8 }"
          class="flex items-center space-x-2"
        >
          <img :src="iconLogo" alt="" class="w-44" />
        </Motion>

        <!-- Desktop Navigation -->
        <div class="hidden items-center space-x-8 lg:flex">
          <Motion
            v-for="item in navItems"
            :key="item.key"
            tag="a"
            :href="item.href"
            class="group relative cursor-pointer font-medium text-gray-700 transition-colors duration-200 hover:text-[#009663]"
            :whileHover="{ scale: 1.05 }"
          >
            {{ $t(`${item.key}`) }}

            <span
              class="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#009663] transition-all duration-300 group-hover:w-full"
            ></span>
          </Motion>
        </div>

        <!-- Right Controls -->
        <div class="flex items-center space-x-4">
          <!-- Language Switcher -->
          <div class="flex items-center space-x-2 rounded-3xl bg-gray-100 p-2">
            <Motion
              v-for="locale in availableLocales"
              :key="locale.code"
              tag="button"
              @click="setLocale(locale.code)"
              :class="[
                'rounded-xl px-3 py-1 text-sm font-medium transition-all',
                currentLocale === locale.code
                  ? 'bg-white text-[#009663] shadow-sm'
                  : 'text-gray-600 hover:text-gray-900',
              ]"
              :whileHover="{ scale: 1.05 }"
            >
              {{ locale.code.toUpperCase() }}
            </Motion>
          </div>

          <!-- Contact Btn -->
          <button
            class="cursor-pointer rounded-3xl border bg-[#009663] px-6 py-2 text-white hover:bg-[#60b212]"
          >
            Bog’lanish
          </button>

          <!-- Theme Mode -->
          <button class="cursor-pointer rounded-full border p-2">
            <img :src="iconMoon" alt="" class="h-4 w-4" />
          </button>

          <!-- Mobile Toggle -->
          <Motion
            tag="button"
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2 lg:hidden"
            :whileTap="{ scale: 0.9 }"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                v-if="!mobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Motion>
        </div>
      </div>
    </nav>
  </Motion>
</template>
