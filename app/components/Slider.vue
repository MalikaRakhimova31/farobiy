<script setup lang="ts">
const sliderImages = [
  "/slider-1.webp",
  "/slider-2.webp",
  "/slider-3.webp",
  "/slider-4.webp",
  "/slider-5.webp",
];

const { t } = useI18n();
const currentIndex = ref(0);
const isTransitioning = ref(false);
const isImageLoading = ref(true);
const loadedImages = ref(new Set<number>());

const currentImage = computed(() => sliderImages[currentIndex.value]);

const handleImageLoad = () => {
  isImageLoading.value = false;
  loadedImages.value.add(currentIndex.value);
};

const handleImageError = () => {
  isImageLoading.value = false;
};

const goToPrev = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  const newIndex =
    currentIndex.value === 0 ? sliderImages.length - 1 : currentIndex.value - 1;
  if (!loadedImages.value.has(newIndex)) {
    isImageLoading.value = true;
  }
  currentIndex.value = newIndex;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 300);
};

const goToNext = () => {
  if (isTransitioning.value) return;
  isTransitioning.value = true;
  const newIndex =
    currentIndex.value === sliderImages.length - 1 ? 0 : currentIndex.value + 1;
  if (!loadedImages.value.has(newIndex)) {
    isImageLoading.value = true;
  }
  currentIndex.value = newIndex;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 300);
};

const goToSlide = (index: number) => {
  if (isTransitioning.value || index === currentIndex.value) return;
  isTransitioning.value = true;
  if (!loadedImages.value.has(index)) {
    isImageLoading.value = true;
  }
  currentIndex.value = index;
  setTimeout(() => {
    isTransitioning.value = false;
  }, 300);
};
</script>

<template>
  <div class="container" id="programs">
    <div class="relative mt-[124px] mb-30">
      <div class="relative overflow-hidden rounded-3xl">
        <div
          class="dark:border-dark-100 flex h-[550px] w-full flex-col rounded-tl-3xl rounded-tr-3xl border border-r-0 border-transparent md:h-[790px] lg:h-[524px] lg:flex-row"
        >
          <div
            class="dark:bg-dark-300 bg-secondary-900/90 flex h-[56%] w-full flex-col justify-between px-3 py-6 md:h-1/2 md:px-8 md:py-12 lg:h-full lg:w-1/2 lg:px-12 lg:py-20"
          >
            <div class="flex w-full flex-col gap-4 md:w-[80%]">
              <p
                class="text-primary-800 dark:text-primary-400 text-base leading-[120%] font-bold uppercase"
              >
                {{ t("slider.badge") }}
              </p>
              <h1
                class="font-bricolage text mb-1 text-[32px] leading-[110%] font-semibold tracking-[-2%] text-gray-800 md:text-[40px] lg:text-5xl dark:text-white"
              >
                {{ t("slider.title") }}
              </h1>
              <p
                class="mb-2 text-base leading-[140%] font-normal text-gray-800 lg:text-lg dark:text-white"
              >
                {{ t("slider.description") }}
              </p>
              <p
                class="dark:text-dark-10 text-sm leading-[100%] font-medium text-gray-600 lg:text-base"
              >
                {{ t("slider.date") }}
              </p>
            </div>
          </div>
          <div
            class="relative h-[44%] w-full overflow-hidden md:h-1/2 lg:h-auto lg:w-1/2"
          >
            <div
              v-if="isImageLoading"
              class="absolute inset-0 animate-pulse bg-linear-to-br from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"
            >
              <div class="flex h-full items-center justify-center">
                <div
                  class="h-16 w-16 animate-spin rounded-full border-4 border-gray-400 border-t-transparent dark:border-gray-500 dark:border-t-transparent"
                ></div>
              </div>
            </div>
            <Transition
              mode="out-in"
              enter-active-class="transition-all duration-500 ease-out"
              leave-active-class="transition-all duration-500 ease-in"
              enter-from-class="opacity-0 translate-x-8"
              leave-to-class="opacity-0 -translate-x-8"
            >
              <NuxtImg
                :key="currentIndex"
                :src="currentImage"
                alt="Slider image"
                class="h-full w-full object-cover"
                loading="lazy"
                @load="handleImageLoad"
                @error="handleImageError"
              />
            </Transition>
          </div>
        </div>
      </div>
      <div
        class="md:lg-8 absolute top-[48%] flex w-full items-center justify-between px-3 md:top-[40%] md:px-8 lg:top-[82%] lg:mb-20 lg:w-1/2 lg:px-12"
      >
        <div class="flex items-center gap-1.5 md:gap-2">
          <button
            v-for="(_, index) in sliderImages"
            :key="index"
            @click="goToSlide(index)"
            class="h-2.5 w-2.5 cursor-pointer rounded-full transition-all duration-200 md:h-3 md:w-3"
            :class="
              index === currentIndex
                ? 'dark:bg-secondary-900 bg-primary-800 w-8'
                : 'hover:bg-primary-100 dark:hover:bg-secondary-900 bg-white dark:bg-gray-200'
            "
          />
        </div>
        <div class="flex gap-3">
          <button
            @click="goToPrev"
            :disabled="isTransitioning"
            class="bg-primary-800 dark:bg-secondary-900 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full text-white transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 md:h-9 md:w-9"
          >
            <IconArrowLeft class="text-lg" />
          </button>
          <button
            @click="goToNext"
            :disabled="isTransitioning"
            class="bg-primary-800 dark:bg-secondary-900 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full text-white transition-all duration-200 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 md:h-9 md:w-9"
          >
            <IconArrowRight class="text-lg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
