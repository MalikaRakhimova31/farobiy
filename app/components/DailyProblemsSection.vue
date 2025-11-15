<template>
  <section class="bg-gray-50">
    <div class="container mb-12 text-center lg:mb-16">
      <h2 class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
        {{ $t("daily.title") }}
      </h2>
      <p class="mx-auto max-w-2xl text-lg text-gray-600">
        {{ $t("daily.subtitle") }}
      </p>
    </div>

    <div class="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:gap-8">
      <div
        v-for="(problem, index) in problems"
        :key="index"
        class="bg-primary-600 rounded-2xl p-6 text-white shadow-xl transition-shadow hover:shadow-2xl lg:p-8"
      >
        <div class="mb-4 flex items-start space-x-3">
          <div
            class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20"
          >
            <span class="text-xl font-bold">{{ index + 1 }}</span>
          </div>
          <div>
            <h3 class="mb-2 text-xl font-bold lg:text-2xl">
              {{ $t(`daily.problem${index + 1}.title`) }}
            </h3>
          </div>
        </div>

        <p class="mb-4 leading-relaxed text-white/90">
          {{ $t(`daily.problem${index + 1}.description`) }}
        </p>

        <div class="flex items-center space-x-2 text-sm text-white/80">
          <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            />
          </svg>
          <span>{{ $t(`daily.problem${index + 1}.author`) }}</span>
        </div>

        <!-- Decorative element -->
        <div
          class="absolute top-4 right-4 z-0 h-20 w-20 rounded-full bg-white/5"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const problems = [1, 2, 3, 4];
</script>
