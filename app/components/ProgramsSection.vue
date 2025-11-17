<script setup lang="ts">
import { Motion } from "@motionone/vue";

const programs = [
  {
    key: "preschool",
    image:
      "/img_1.jpg"
  },
  {
    key: "primary",
    image:
      "/img_2.jpg",
  },
  {
    key: "secondary",
    image:
     "/img_3.jpg",
  },
  {
    key: "high",
    image:
    "/img_4.jpg"
  },
];

const cardVariants = (index: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
});
</script>

<template>
  <section id="programs" class="from-[#e6f7f1] bg-gradient-to-br to-[#ccefe4] py-20">
    <div class="container mb-12 text-center lg:mb-16">
      <h2 class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
        {{ $t("programs.title") }}
      </h2>
      <p class="mx-auto max-w-2xl text-lg text-gray-600">
        {{ $t("programs.subtitle") }}
      </p>
    </div>

    <div class="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      <Motion
        v-for="(program, index) in programs"
        :key="index"
        :initial="cardVariants(index).initial"
        :animate="cardVariants(index).animate"
        class="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2"
      >
        <div class="relative h-48 overflow-hidden rounded-t-2xl">
          <NuxtImg
            :src="program.image"
            :alt="$t(`programs.${program.key}.title`)"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
          
        </div>

        <div class="p-6">
          <!-- <h3 class="mb-3 text-xl font-bold text-gray-900">
            {{ $t(`programs.${program.key}.title`) }}
          </h3>
          <p class="mb-4 text-gray-700">
            {{ $t(`programs.${program.key}.description`) }}
          </p> -->
          <a
            href="#contact"
            class="text-[#009663] hover:text-[#007a50] group inline-flex items-center font-semibold"
          >
            {{ $t("hero.cta") }}
            <svg
              class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </Motion>
    </div>
  </section>
</template>
