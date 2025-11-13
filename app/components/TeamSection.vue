<template>
  <section id="team" class="container bg-white">
    <div class="text-center mb-12 lg:mb-16">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {{ $t('team.title') }}
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        {{ $t('team.subtitle') }}
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
      <div v-for="(member, index) in teamMembers" :key="index"
           class="group">
        <div class="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow mb-4">
          <NuxtImg
            :src="member.image"
            :alt="member.name"
            class="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        <div class="text-center">
          <h3 class="text-lg font-bold text-gray-900 mb-1">{{ member.name }}</h3>
          <p class="text-sm text-primary-600 font-medium">{{ $t(`team.position${index + 1}`) }}</p>
        </div>
      </div>
    </div>

    <div class="text-center mt-12">
      <button class="btn-outline">
        {{ $t('team.viewAll') }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const teamMembers = [
  {
    name: 'Azamat Tursunov',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=600&fit=crop'
  },
  {
    name: 'Laylo Karimova',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=600&fit=crop'
  },
  {
    name: 'Javohir Alimov',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop'
  },
  {
    name: 'Nilufar Rahimova',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=600&fit=crop'
  },
  {
    name: 'Sardor Umarov',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop'
  }
]
</script>

