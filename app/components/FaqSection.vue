<script setup lang="ts">
import { ref } from "vue";
import { Motion } from "@motionone/vue";

const openQuestion = ref<number | null>(null);

const toggleQuestion = (index: number) => {
  openQuestion.value = openQuestion.value === index ? null : index;
};
</script>

<template>
  <section id="faq" class="bg-gray-50 py-20">
    <div class="container">

      <!-- Admission Process -->
      <div class="mb-20 text-center">
        <h2 class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          {{ $t("faq.title") }}
        </h2>
        <p class="text-lg text-gray-600">{{ $t("faq.subtitle") }}</p>
      </div>

      <div class="mb-20 grid gap-6 md:grid-cols-2">
        <Motion
          v-for="index in 5"
          :key="index"
          :initial="{ opacity: 0, y: 40 }"
          :animate="{ opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.15 } }"
          class="rounded-3xl bg-white p-6 shadow-sm hover:shadow-xl transition-transform hover:-translate-y-1"
        >
          <div class="flex items-start space-x-4">
            <div class="bg-linear-to-tr from-primary-500 to-primary-300 flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white font-bold text-lg">
              {{ String(index).padStart(2, "0") }}
            </div>
            <div>
              <h3 class="mb-2 text-lg font-semibold text-gray-900">{{ $t(`faq.step${index}.title`) }}</h3>
              <p class="text-gray-600">{{ $t(`faq.step${index}.description`) }}</p>
            </div>
          </div>
        </Motion>
      </div>

      <!-- FAQ Questions -->
      <div class="mb-12 text-center">
        <h3 class="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl">
          {{ $t("questions.title") }}
        </h3>
        <p class="text-lg text-gray-600">{{ $t("questions.subtitle") }}</p>
      </div>

      <div class="space-y-4">
        <div
          v-for="index in 7"
          :key="index"
          class="overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-md transition-shadow"
        >
          <button
            @click="toggleQuestion(index)"
            class="flex w-full items-center justify-between p-6 text-left hover:bg-gray-50 rounded-3xl transition-colors"
          >
            <div class="flex flex-1 items-center space-x-4">
              <div class="bg-linear-to-tr from-primary-500 to-primary-300 mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg text-white font-semibold">
                {{ index }}
              </div>
              <span class="font-medium text-gray-900">{{ $t(`questions.q${index}`) }}</span>
            </div>
            <svg
              :class="['ml-4 h-5 w-5 shrink-0 text-gray-400 transition-transform', openQuestion === index ? 'rotate-180' : '']"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <Motion
            v-if="openQuestion === index"
            :initial="{ height: 0, opacity: 0 }"
            :animate="{ height: 'auto', opacity: 1, transition: { duration: 0.35 } }"
            :exit="{ height: 0, opacity: 0, transition: { duration: 0.35 } }"
            class="px-6 py-5 bg-linear-to-r from-gray-50 to-gray-100 rounded-b-3xl overflow-hidden"
          >
            <div class="pl-12 text-gray-700">{{ $t(`questions.a${index}`) }}</div>
          </Motion>
        </div>
      </div>
    </div>
  </section>
</template>
