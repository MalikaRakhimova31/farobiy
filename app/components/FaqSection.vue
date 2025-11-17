<script setup lang="ts"></script>
<template>
  <section id="faq" class="dark:bg-dark-500 bg-gray-50 py-20">
    <div class="container">
      <!-- Admission Process -->
      <div class="mb-20 text-center">
        <h2
          class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white"
        >
          {{ $t("faq.title") }}
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          {{ $t("faq.subtitle") }}
        </p>
      </div>
      <div class="mb-20 grid gap-6 md:grid-cols-2">
        <div
          v-for="index in 5"
          :key="index"
          class="animate-fade-in dark:bg-dark-500 rounded-3xl border border-transparent bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-xl dark:border-gray-600"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="flex items-start space-x-4">
            <div
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-linear-to-tr from-[#009663] to-[#00b377] text-lg font-bold text-white dark:from-[#00c878] dark:to-[#00e891]"
            >
              {{ String(index).padStart(2, "0") }}
            </div>
            <div>
              <h3
                class="mb-2 text-lg font-semibold text-gray-900 dark:text-white"
              >
                {{ $t(`faq.step${index}.title`) }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400">
                {{ $t(`faq.step${index}.description`) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
