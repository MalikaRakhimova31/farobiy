<template>
  <section id="programs" class="from-primary-50 bg-linear-to-br to-green-50">
    <div class="container mb-12 text-center lg:mb-16">
      <h2 class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
        {{ $t("programs.title") }}
      </h2>
      <p class="mx-auto max-w-2xl text-lg text-gray-600">
        {{ $t("programs.subtitle") }}
      </p>
    </div>

    <div class="container grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      <div
        v-for="(program, index) in programs"
        :key="index"
        class="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-2xl"
      >
        <div class="relative h-48 overflow-hidden">
          <NuxtImg
            :src="program.image"
            :alt="$t(`programs.${program.key}.title`)"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          ></div>
          <div class="absolute right-4 bottom-4 left-4">
            <span
              class="bg-primary-600 inline-block rounded-full px-3 py-1 text-sm font-semibold text-white"
            >
              {{ $t(`programs.${program.key}.age`) }}
            </span>
          </div>
        </div>

        <div class="p-6">
          <h3 class="mb-3 text-xl font-bold text-gray-900">
            {{ $t(`programs.${program.key}.title`) }}
          </h3>
          <p class="mb-4 text-gray-600">
            {{ $t(`programs.${program.key}.description`) }}
          </p>
          <a
            href="#contact"
            class="text-primary-600 hover:text-primary-700 group inline-flex items-center font-semibold"
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
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const programs = [
  {
    key: "preschool",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
  },
  {
    key: "primary",
    image:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=600&h=400&fit=crop",
  },
  {
    key: "secondary",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop",
  },
  {
    key: "high",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
  },
];
</script>
