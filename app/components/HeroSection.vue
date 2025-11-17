<script setup lang="ts">
import { Motion } from "@motionone/vue";
const { t } = useI18n();

const stats = computed(() => [
  { value: "15+", label: t("nav.programs") },
  { value: "50+", label: t("team.title") },
  { value: "98%", label: "Success Rate" },
]);
</script>

<template>
  <section
    id="hero"
    class="relative overflow-hidden bg-linear-to-br from-[#e6f5ef] via-white to-[#e6f5ef] pt-24 pb-16 lg:pt-32 lg:pb-24"
  >
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div
        class="absolute inset-0"
        style="
          background-image: radial-gradient(
            circle at 1px 1px,
            #009663 1px,
            transparent 0
          );
          background-size: 40px 40px;
        "
      ></div>
    </div>

    <div class="relative container">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <!-- Left Content -->
        <div class="space-y-8 lg:space-y-10">
          <!-- Badge
  <Motion
    as="div"
    :initial="{ opacity: 0, scale: 0.8 }"
    :animate="{ opacity: 1, scale: 1 }"
    :transition="{ duration: 0.5 }"
    class="inline-block"
  >
    <span
      class="bg-[#009663]/10 text-[#009663] inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold tracking-wide"
    >
      ✨ {{ $t("hero.badge") }}
    </span>
  </Motion> -->

          <!-- Title -->
          <Motion
            as="h1"
            :initial="{ opacity: 0, y: 50 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.7, delay: 0.1 }"
            class="text-5xl leading-15 font-extrabold text-gray-900 sm:text-6xl lg:text-7xl"
          >
            <span
              class="block bg-gradient-to-r from-[#009663] to-[#00b37e] bg-clip-text text-transparent"
            >
              Farobiy
            </span>
            <span class="block">International School</span>
          </Motion>

          <!-- Description -->
          <Motion
            as="p"
            :initial="{ opacity: 0, y: 30 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.2 }"
            class="max-w-lg leading-relaxed text-gray-700 sm:text-lg lg:text-xl"
          >
            Farobiy International School zamonaviy ta’lim va yuqori sifatli
            bilimni ta’minlaydi. Bizning maqsadimiz – har bir o‘quvchini
            kelajakda muvaffaqiyatli yetakchi qilish.
          </Motion>

          <!-- Buttons -->
          <Motion
            as="div"
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.3 }"
            class="mt-4 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              class="inline-flex items-center justify-center rounded-full bg-[#009663] px-6 py-3 font-medium text-white shadow-lg transition duration-300 hover:bg-[#007a4d]"
            >
              Bog‘lanish
              <svg
                class="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
            <a
              href="#programs"
              class="inline-flex items-center justify-center rounded-full border-2 border-[#009663] px-6 py-3 font-medium text-[#009663] transition duration-300 hover:bg-[#009663]/10"
            >
              Kurslar
            </a>
          </Motion>

          <!-- Stats -->
          <div class="flex flex-wrap gap-6 pt-6">
            <Motion
              v-for="(stat, i) in stats"
              :key="stat.value"
              as="div"
              class="text-center sm:text-left"
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.4 + i * 0.15 }"
            >
              <div class="text-3xl font-bold text-[#009663] sm:text-4xl">
                {{ stat.value }}
              </div>
              <div class="mt-1 text-sm text-gray-600">{{ stat.label }}</div>
            </Motion>
          </div>
        </div>

        <!-- Right Image -->
        <div class="relative">
          <!-- Image container with motion -->
          <Motion
            as="div"
            :initial="{ opacity: 0, scale: 0.95 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.8 }"
            class="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <NuxtImg
              src="/heroImg.png"
              alt="png"
              class="h-[500px] w-full object-cover lg:h-[600px]"
              loading="lazy"
            />
            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-linear-to-t from-[#009663]/15 to-transparent"
            ></div>
          </Motion>

          <!-- Floating Card -->
          <Motion
            as="div"
            :initial="{ opacity: 0, y: 40 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6, delay: 0.3 }"
            class="absolute -bottom-6 -left-6 hidden max-w-xs rounded-xl bg-white p-6 shadow-xl sm:block"
          >
            <div class="flex items-center space-x-4">
              <div
                class="flex h-12 w-12 items-center justify-center rounded-full bg-[#009663]/10"
              >
                <svg
                  class="h-6 w-6 text-[#009663]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div>
                <div class="text-2xl font-bold text-gray-900">500+</div>
                <div class="text-sm text-gray-600">
                  {{ $t("hero.students") }}
                </div>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </div>
  </section>
</template>
