<script setup lang="ts">
import { Motion } from "@motionone/vue";

const problems = [1, 2, 3, 4];
</script>

<template>
  <section class="bg-[#e6f5ef] py-24">
    <div class="container mb-12 text-center lg:mb-16 px-4 sm:px-6 lg:px-8">
      <h2 class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
        {{ $t("daily.title") }}
      </h2>
      <p class="mx-auto max-w-2xl text-lg text-gray-600">
        {{ $t("daily.subtitle") }}
      </p>
    </div>

    <div class="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 sm:px-0">
      <Motion
        v-for="(problem, index) in problems"
        :key="index"
        tag="div"
        class="relative rounded-3xl p-6 lg:p-8 shadow-xl bg-linear-to-br from-[#009663] via-[#33b284] to-[#66c9a1] text-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: index * 0.15 }"
      >
        <!-- Floating number circle -->
        <div
          class="absolute -top-5 -left-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#009663] font-bold text-lg shadow-lg"
        >
          {{ index + 1 }}
        </div>

        <!-- Title -->
        <h3 class="mb-3 mt-6 text-xl font-bold lg:text-2xl">
          {{ $t(`daily.problem${index + 1}.title`) }}
        </h3>

        <!-- Description -->
        <p class="mb-6 leading-relaxed text-white/90">
          {{ $t(`daily.problem${index + 1}.description`) }}
        </p>

        <!-- Author -->
        <div class="flex items-center space-x-2 text-sm text-white/80">
          <svg class="h-4 w-4 text-white/80" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clip-rule="evenodd"
            />
          </svg>
          <span>{{ $t(`daily.problem${index + 1}.author`) }}</span>
        </div>

        <!-- Glow overlay -->
        <div class="absolute -bottom-5 -right-5 h-24 w-24 rounded-full bg-white/20 blur-3xl"></div>
      </Motion>
    </div>
  </section>
</template>
