<script setup lang="ts">
import { Motion } from "@motionone/vue";

const cardVariants = (index: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, delay: index * 0.2 }
  },
});
</script>

<template>
  <section class="container bg-white py-20">
    <div class="text-center mb-12 lg:mb-16">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {{ $t('advantages.title') }}
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        {{ $t('advantages.subtitle') }}
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <Motion
        v-for="index in 6"
        :key="index"
        :initial="cardVariants(index).initial"
        :animate="cardVariants(index).animate"
        class="group relative bg-gradient-to-br from-[#e6f7f1] to-[#ccefe4] rounded-2xl p-6 lg:p-8 transition-all duration-500 border border-transparent hover:border-[#009663] hover:shadow-2xl transform hover:-translate-y-2"
      >
        <!-- Card Number -->
        <div class="absolute top-6 right-6 text-5xl font-extrabold text-[#009663] group-hover:text-[#007a50] transition-colors">
          0{{ index }}
        </div>

        <div class="relative z-10 flex flex-col items-start">
          <!-- Icon -->
          <Motion
            :initial="{ scale: 1 }"
            :animate="{ scale: 1.1 }"
            class="w-12 h-12 bg-[#009663] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
          >
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </Motion>

          <!-- Title -->
          <h3 class="text-xl font-bold text-gray-900 mb-3">
            {{ $t(`advantages.item${index}.title`) }}
          </h3>

          <!-- Description -->
          <p class="text-gray-700">
            {{ $t(`advantages.item${index}.description`) }}
          </p>
        </div>
      </Motion>
    </div>
  </section>
</template>
