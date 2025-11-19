<template>
  <section class="dark:bg-dark-500 py-20">
    <div class="container">
      <div class="mb-12 text-center lg:mb-16" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0"
        data-aos-easing="ease-out-cubic">
        <h2 class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          {{ $t("advantages.title") }}
        </h2>
        <p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          {{ $t("advantages.subtitle") }}
        </p>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        <div v-for="index in 6" :key="index" data-aos="fade-up" :data-aos-delay="index * 100" data-aos-duration="1000"
          data-aos-easing="ease-out-cubic"
          class="group relative transform rounded-2xl border border-transparent bg-gradient-to-br from-[#e6f7f1] to-[#ccefe4] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#009663] hover:shadow-2xl lg:p-8 dark:from-[#1a3a2e] dark:to-[#0d2419] dark:hover:border-[#00c878] dark:hover:shadow-[#009663]/20">
          <div
            class="absolute top-6 right-6 text-5xl font-extrabold text-[#009663] opacity-30 transition-all group-hover:text-[#007a50] group-hover:opacity-100 dark:text-[#00c878] dark:group-hover:text-[#00e891]">
            0{{ index }}
          </div>
          <div class="relative z-10 flex flex-col items-start">
            <div
              class="animate-fade-in mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#009663] transition-transform group-hover:scale-110 dark:bg-[#00c878]">
              <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-bold text-gray-900 dark:text-white">
              {{ $t(`advantages.item${index}.title`) }}
            </h3>
            <p class="text-gray-700 dark:text-gray-300">
              {{ $t(`advantages.item${index}.description`) }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
