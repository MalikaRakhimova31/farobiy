<<<<<<< HEAD
<template>
  <section id="hero" class="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-green-50">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgb(34 197 94) 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>

    <div class="container relative">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6 lg:space-y-8">
          <div class="inline-block">
            <span class="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm">
              ✨ {{ $t('hero.badge') }}
            </span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {{ $t('hero.title') }}
          </h1>

          <p class="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {{ $t('hero.description') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#contact" class="btn-primary text-center">
              {{ $t('hero.cta') }}
              <svg class="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#programs" class="btn-outline text-center">
              {{ $t('nav.programs') }}
            </a>
          </div>

          <div class="flex flex-wrap gap-8 pt-4">
            <div v-for="stat in stats" :key="stat.value" class="text-center sm:text-left">
              <div class="text-3xl lg:text-4xl font-bold text-primary-600">{{ stat.value }}</div>
              <div class="text-sm text-gray-600 mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <NuxtImg
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=1000&fit=crop"
              alt="Student"
              class="w-full h-[500px] lg:h-[600px] object-cover"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
          </div>

          <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden sm:block">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
=======
<script setup lang="ts">
const { t } = useI18n();
import { Motion } from "@motionone/vue";

const stats = computed(() => [
  { value: "15+", label: t("nav.programs") },
  { value: "50+", label: t("team.title") },
  { value: "98%", label: "Success Rate" },
]);
</script>

<template>
  <section
    id="hero"
    class="from-primary-50 relative overflow-hidden bg-linear-to-br via-white to-green-50 pt-24 pb-16 lg:pt-32 lg:pb-24"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 1px 1px,
            rgb(34 197 94) 1px,
            transparent 0
          );
          background-size: 40px 40px;
        "
      ></div>
    </div>

    <div class="relative container">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <!-- Left Content -->
        <div class="space-y-6 lg:space-y-8">
          <!-- Badge -->
          <Motion
            as="div"
            :initial="{ opacity: 0, scale: 0.8 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.5 }"
            class="inline-block"
          >
            <span
              class="bg-primary-100 text-primary-700 inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold"
            >
              ✨ {{ $t("hero.badge") }}
            </span>
          </Motion>

          <!-- Title -->
          <Motion
            as="h1"
            :initial="{ opacity: 0, y: 40 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.1 }"
            class="text-4xl leading-tight font-bold text-gray-900 sm:text-5xl lg:text-6xl"
          >
            {{ $t("hero.title") }}
          </Motion>

          <!-- Description -->
          <Motion
            as="p"
            :initial="{ opacity: 0, y: 30 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.2 }"
            class="text-lg leading-relaxed text-gray-600 sm:text-xl"
          >
            {{ $t("hero.description") }}
          </Motion>

          <!-- Buttons -->
          <Motion
            as="div"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.3 }"
            class="flex flex-col gap-4 sm:flex-row"
          >
            <a href="#contact" class="btn-primary text-center">
              {{ $t("hero.cta") }}
              <svg
                class="ml-2 inline-block h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a href="#programs" class="btn-outline text-center">
              {{ $t("nav.programs") }}
            </a>
          </Motion>

          <!-- Stats -->
          <div class="flex flex-wrap gap-8 pt-4">
            <Motion
              v-for="(stat, i) in stats"
              :key="stat.value"
              as="div"
              class="text-center sm:text-left"
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.4 + i * 0.15 }"
            >
              <div class="text-primary-600 text-3xl font-bold lg:text-4xl">
                {{ stat.value }}
              </div>
              <div class="mt-1 text-sm text-gray-600">{{ stat.label }}</div>
            </Motion>
          </div>
        </div>

        <!-- Right Image -->
        <div class="relative">
          <!-- Image container with motion -->
          <Motion
            as="div"
            :initial="{ opacity: 0, scale: 0.95 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.8 }"
            class="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <NuxtImg
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=1000&fit=crop"
              alt="Student"
              class="h-[500px] w-full object-cover lg:h-[600px]"
              loading="lazy"
            />
            <!-- Overlay decoration -->
            <div
              class="from-primary-900/30 absolute inset-0 bg-linear-to-t to-transparent"
            ></div>
          </Motion>

          <!-- Floating Card -->
          <Motion
            as="div"
            :initial="{ opacity: 0, y: 40 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.3 }"
            class="absolute -bottom-6 -left-6 hidden max-w-xs rounded-xl bg-white p-6 shadow-xl sm:block"
          >
            <div class="flex items-center space-x-4">
              <div
                class="bg-primary-100 flex h-12 w-12 items-center justify-center rounded-full"
              >
                <svg
                  class="text-primary-600 h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
>>>>>>> dev
                </svg>
              </div>
              <div>
                <div class="text-2xl font-bold text-gray-900">500+</div>
<<<<<<< HEAD
                <div class="text-sm text-gray-600">{{ $t('hero.students') }}</div>
              </div>
            </div>
          </div>
=======
                <div class="text-sm text-gray-600">
                  {{ $t("hero.students") }}
                </div>
              </div>
            </div>
          </Motion>
>>>>>>> dev
        </div>
      </div>
    </div>
  </section>
</template>
<<<<<<< HEAD

<script setup lang="ts">
const { t } = useI18n()

const stats = computed(() => [
  { value: '15+', label: t('nav.programs') },
  { value: '50+', label: t('team.title') },
  { value: '98%', label: 'Success Rate' }
])
</script>

=======
>>>>>>> dev
