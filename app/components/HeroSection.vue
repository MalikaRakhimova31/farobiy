<script setup lang="ts">
const { t } = useI18n();
const stats = computed(() => [
  { value: "15+", label: t("nav.programs") },
  { value: "50+", label: t("team.title") },
  { value: "98%", label: "Success Rate" },
]);
</script>
<template>
  <section id="hero"
    class="dark:from-dark-500 dark:via-dark-500 dark:to-dark-500 relative overflow-hidden bg-linear-to-br from-[#e6f5ef] via-white to-[#e6f5ef] pt-24 pb-16 lg:pt-32 lg:pb-24">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="
          background-image: radial-gradient(
            circle at 1px 1px,
            #009663 1px,
            transparent 0
          );
          background-size: 40px 40px;
        "></div>
    </div>
    <div class="relative container">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <!-- Left Content -->
        <div class="space-y-8 lg:space-y-10">
          <h1
            data-aos="fade-up-right"
            data-aos-duration="1200"
            data-aos-delay="0"
            data-aos-easing="ease-out-cubic"
            class="text-5xl leading-15 font-extrabold text-gray-900 sm:text-6xl lg:text-7xl"
          >
            <span
              class="font-bricolage block bg-linear-to-r from-[#009663] to-[#00b37e] bg-clip-text text-transparent"
            >
              Farobiy
            </span>
            <span class="font-bricolage block text-gray-800 dark:text-white">
              International School
            </span>
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="200"
            data-aos-easing="ease-out-cubic"
            class="max-w-lg leading-relaxed text-gray-700 sm:text-lg lg:text-xl dark:text-white"
          >
            {{ t("hero.description") }}
          </p>

          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="400"
            data-aos-easing="ease-out-cubic"
            class="mt-4 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              class="inline-flex items-center justify-center rounded-full bg-[#009663] px-6 py-3 font-medium text-white shadow-lg transition duration-300 hover:bg-[#007a4d]"
            >
              {{ t("hero.cta") }}
              <svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <a
              href="#programs"
              class="inline-flex items-center justify-center rounded-full border-2 border-[#009663] px-6 py-3 font-medium text-[#009663] transition duration-300 hover:bg-[#009663]/10"
            >
              {{ t("hero.programs") }}
            </a>
          </div>
          <div class="flex flex-wrap gap-6 pt-6">
            <div
              v-for="(stat, i) in stats"
              :key="stat.value"
              data-aos="fade-right"
              :data-aos-delay="600 + i * 120"
              data-aos-duration="1200"
              data-aos-easing="ease-out-cubic"
              class="text-center sm:text-left"
            >
              <div class="text-3xl font-bold text-[#009663] sm:text-4xl">
                {{ stat.value }}
              </div>
              <div class="mt-1 text-sm text-gray-600">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>
        <!-- Right Image -->
        <div class="relative">
          <!-- Image container with motion -->
          <div class="animate-fade-in relative overflow-hidden rounded-2xl shadow-2xl">
            <NuxtImg src="/hero.webp" alt="png" class="h-[500px] w-full object-cover lg:h-[600px]" loading="lazy" />
            <!-- Overlay -->
            <div class="absolute inset-0 bg-linear-to-t from-[#009663]/15 to-transparent"></div>
          </div>
          <!-- Floating Card -->
          <div
            class="animate-fade-in absolute -bottom-6 -left-6 hidden max-w-xs rounded-xl bg-white p-6 shadow-xl sm:block">
            <div class="flex items-center space-x-4">
              <div class="flex h-12 w-12 items-center justify-center rounded-full bg-[#009663]/10">
                <svg class="h-6 w-6 text-[#009663]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <div class="text-2xl font-bold text-gray-900">500+</div>
                <div class="text-sm text-gray-600">
                  {{ t("hero.students") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
