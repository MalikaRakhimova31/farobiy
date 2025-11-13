<template>
  <section class="container bg-white">
    <div class="text-center mb-12 lg:mb-16">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {{ $t('advantages.title') }}
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        {{ $t('advantages.subtitle') }}
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <div v-for="index in 6" :key="index"
           class="group relative bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
        <div class="absolute top-6 right-6 text-5xl font-bold text-primary-100 group-hover:text-primary-200 transition-colors">
          0{{ index }}
        </div>
        
        <div class="relative z-10">
          <div class="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h3 class="text-xl font-bold text-gray-900 mb-3">
            {{ $t(`advantages.item${index}.title`) }}
          </h3>
          
          <p class="text-gray-600">
            {{ $t(`advantages.item${index}.description`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

