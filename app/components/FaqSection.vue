<template>
  <section id="faq" class="bg-gray-50">
    <div class="container">
      <!-- Admission Process -->
      <div class="mb-12 text-center lg:mb-16">
        <h2
          class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl"
        >
          {{ $t("faq.title") }}
        </h2>
        <p class="text-lg text-gray-600">
          {{ $t("faq.subtitle") }}
        </p>
      </div>

      <div class="mb-20 grid gap-6 md:grid-cols-2">
        <div
          v-for="index in 5"
          :key="index"
          class="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
        >
          <div class="flex items-start space-x-4">
            <div
              class="bg-primary-100 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full"
            >
              <span class="text-primary-600 font-bold">{{
                String(index).padStart(2, "0")
              }}</span>
            </div>
            <div>
              <h3 class="mb-2 text-lg font-bold text-gray-900">
                {{ $t(`faq.step${index}.title`) }}
              </h3>
              <p class="text-sm text-gray-600">
                {{ $t(`faq.step${index}.description`) }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Questions -->
      <div class="mb-12 text-center">
        <h3
          class="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl"
        >
          {{ $t("questions.title") }}
        </h3>
        <p class="text-lg text-gray-600">
          {{ $t("questions.subtitle") }}
        </p>
      </div>

      <div class="space-y-4">
        <div
          v-for="index in 7"
          :key="index"
          class="overflow-hidden rounded-xl bg-white shadow-md"
        >
          <button
            @click="toggleQuestion(index)"
            class="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
          >
            <div class="flex flex-1 items-start space-x-4">
              <div
                class="bg-primary-100 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
              >
                <svg
                  class="text-primary-600 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span class="font-semibold text-gray-900">{{
                $t(`questions.q${index}`)
              }}</span>
            </div>
            <svg
              :class="[
                'ml-4 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform',
                openQuestion === index ? 'rotate-180' : '',
              ]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div v-show="openQuestion === index" class="px-6 pt-0 pb-6">
            <div class="pl-12 text-gray-600">
              {{ $t(`questions.a${index}`) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openQuestion = ref<number | null>(null);

const toggleQuestion = (index: number) => {
  openQuestion.value = openQuestion.value === index ? null : index;
};
</script>
