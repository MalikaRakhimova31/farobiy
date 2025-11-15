<template>
  <section id="hero" class="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-br from-primary-50 via-white to-green-50">
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 1px 1px, rgb(34 197 94) 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>

    <div class="container relative">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-6 lg:space-y-8">
          <div class="inline-block">
            <span class="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm">
              ✨ {{ $t('hero.badge') }}
            </span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            {{ $t('hero.title') }}
          </h1>

          <p class="text-lg sm:text-xl text-gray-600 leading-relaxed">
            {{ $t('hero.description') }}
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#contact" class="btn-primary text-center">
              {{ $t('hero.cta') }}
              <svg class="inline-block w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a href="#programs" class="btn-outline text-center">
              {{ $t('nav.programs') }}
            </a>
          </div>

          <div class="flex flex-wrap gap-8 pt-4">
            <div v-for="stat in stats" :key="stat.value" class="text-center sm:text-left">
              <div class="text-3xl lg:text-4xl font-bold text-primary-600">{{ stat.value }}</div>
              <div class="text-sm text-gray-600 mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <NuxtImg
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=1000&fit=crop"
              alt="Student"
              class="w-full h-[500px] lg:h-[600px] object-cover"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
          </div>

          <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs hidden sm:block">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <div class="text-2xl font-bold text-gray-900">500+</div>
                <div class="text-sm text-gray-600">{{ $t('hero.students') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const stats = computed(() => [
  { value: '15+', label: t('nav.programs') },
  { value: '50+', label: t('team.title') },
  { value: '98%', label: 'Success Rate' }
])
</script>

