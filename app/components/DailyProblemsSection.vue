<script setup lang="ts">
import { computed } from "vue";
const problems = [
  "Suzish havzasi",
  "Futbol maydonchasi va alohida sport zal",
  "Qulay ovqatlanish sharoiti",
  "Axborot resurs markazi",
  "Psixologik koʻmak",
  "Kasbga yoʻnalish",
  "A'lo baholar uchun moddiy mukofotlar",
  "Shaxmat toʻgaraklari",
];
const groupedProblems = computed(() => {
  const result = [];
  for (let i = 0; i < problems.length; i += 2) {
    result.push(problems.slice(i, i + 2));
  }
  return result;
});
</script>
<template>
  <section class="dark:bg-dark-500 bg-[#e6f5ef] py-24">
    <div class="container mb-12 px-4 text-center sm:px-6 lg:mb-16 lg:px-8">
      <h2
        class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white"
      >
        Qanday Maktabimizning <br />
        ijtimoiy afzalliklari bor?
      </h2>
      <p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
        Har bir o‘quvchi o‘zini erkin, qulay va hurmat qilinadigan jamoada his
        qiladi.
      </p>
    </div>
    <div
      class="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 sm:px-0 lg:grid-cols-4"
    >
      <div
        v-for="(group, index) in groupedProblems"
        :key="index"
        class="animate-fade-in from-secondary-900 relative rounded-3xl bg-linear-to-br via-[#33b284] to-[#66c9a1] p-6 text-white shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl lg:p-8"
      >
        <!-- Floating number circle -->
        <div
          class="text-secondary-900 absolute -top-5 -left-5 flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg font-bold shadow-lg"
        >
          {{ index + 1 }}
        </div>
        <!-- Problems list inside one card -->
        <div class="mt-6 space-y-4">
          <div
            v-for="(item, idx) in group"
            :key="idx"
            class="flex items-start gap-2"
          >
            <span class="text-lg font-bold">{{ index * 2 + idx + 1 }}.</span>
            <p class="text-white/90">{{ item }}</p>
          </div>
        </div>
        <!-- Glow overlay -->
        <div
          class="absolute -right-5 -bottom-5 h-24 w-24 rounded-full bg-white/20 blur-3xl"
        ></div>
      </div>
    </div>
  </section>
</template>
