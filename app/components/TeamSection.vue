<template>
  <section id="team" class="container bg-white">
    <div class="mb-12 text-center lg:mb-16">
      <h2 class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
        {{ $t("team.title") }}
      </h2>
      <p class="mx-auto max-w-2xl text-lg text-gray-600">
        {{ $t("team.subtitle") }}
      </p>
    </div>

    <div
      class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5"
    >
      <div v-for="(member, index) in teamMembers" :key="index" class="group">
        <div
          class="relative mb-4 overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-xl"
        >
          <NuxtImg
            :src="member.image"
            :alt="member.name"
            class="h-72 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
          ></div>
        </div>
        <div class="text-center">
          <h3 class="mb-1 text-lg font-bold text-gray-900">
            {{ member.name }}
          </h3>
          <p class="text-primary-600 text-sm font-medium">
            {{ $t(`team.position${index + 1}`) }}
          </p>
        </div>
      </div>
    </div>

    <div class="mt-12 text-center">
      <button class="btn-outline">
        {{ $t("team.viewAll") }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamMembers = [
  {
    name: "Azamat Tursunov",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop",
  },
  {
    name: "Laylo Karimova",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop",
  },
  {
    name: "Javohir Alimov",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
  },
  {
    name: "Nilufar Rahimova",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop",
  },
  {
    name: "Sardor Umarov",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop",
  },
];
</script>
