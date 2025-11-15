<<<<<<< HEAD
<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <span class="text-xl font-bold text-gray-900">JAHON<span class="text-primary-600">SCHOOL</span></span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-8">
          <a v-for="item in navItems" :key="item.key" :href="item.href" 
             class="text-gray-700 hover:text-primary-600 font-medium transition-colors">
            {{ $t(`nav.${item.key}`) }}
          </a>
        </div>

        <!-- Language Switcher & Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <!-- Language Switcher -->
          <div class="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
            <button 
              v-for="locale in availableLocales" 
              :key="locale.code"
              @click="setLocale(locale.code)"
              :class="[
                'px-3 py-1 rounded-md text-sm font-medium transition-all',
                currentLocale === locale.code 
                  ? 'bg-white text-primary-600 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              ]">
              {{ locale.code.toUpperCase() }}
            </button>
          </div>

          <!-- Mobile menu button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div v-show="mobileMenuOpen" class="lg:hidden py-4 border-t border-gray-200">
        <a v-for="item in navItems" :key="item.key" :href="item.href"
           @click="mobileMenuOpen = false"
           class="block py-3 text-gray-700 hover:text-primary-600 font-medium transition-colors">
          {{ $t(`nav.${item.key}`) }}
        </a>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const mobileMenuOpen = ref(false)

const currentLocale = computed(() => locale.value)
const availableLocales = computed(() => locales.value)

const navItems = [
  { key: 'home', href: '#hero' },
  { key: 'about', href: '#why' },
  { key: 'programs', href: '#programs' },
  { key: 'team', href: '#team' },
  { key: 'faq', href: '#faq' },
  { key: 'contact', href: '#contact' }
]
</script>

=======
<script setup lang="ts">
import { Motion } from "@motionone/vue";

import iconLogo from "../assets/images/logo.png"
import iconMoon from "../assets/images/moon.png"

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
          
          <img :src="iconLogo" alt="" class="w-44">
        </Motion>

        <!-- Desktop Navigation -->
        <div class="hidden items-center space-x-8 lg:flex">
          <Motion
            v-for="item in navItems"
            :key="item.key"
            tag="a"
            :href="item.href"
            class="group hover:text-[#009663] relative cursor-pointer font-medium text-gray-700 transition-colors duration-200"
            :whileHover="{ scale: 1.05 }"
          >
            {{ $t(`${item.key}`) }}

            <span
              class="bg-[#009663] absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
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
                  ? 'text-[#009663] bg-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900',
              ]"
              :whileHover="{ scale: 1.05 }"
            >
              {{ locale.code.toUpperCase() }}
            </Motion>
          </div>

          <!-- Contact Btn -->
           <button class="bg-[#009663] text-white border rounded-3xl py-2 px-6 hover:bg-[#60b212] cursor-pointer" >Bog’lanish </button>

          <!-- Theme Mode -->
          <button class="border p-2 rounded-full cursor-pointer">
            <img :src="iconMoon" alt="" class="w-4 h-4">
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
>>>>>>> dev
