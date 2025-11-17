<script setup lang="ts">
import { Motion } from "@motionone/vue";
import { getWhySectionFeatures } from "~/shared/why-section";
import type { IconName } from "~/types/why-section";
import IconClock from "~/components/icon/IconClock.vue";
import IconGraduation from "~/components/icon/IconGraduation.vue";
import IconLightning from "~/components/icon/IconLightning.vue";
import IconCertificate from "~/components/icon/IconCertificate.vue";
import IconPartnership from "~/components/icon/IconPartnership.vue";
import IconCareer from "~/components/icon/IconCareer.vue";
import IconChemistry from "~/components/icon/IconChemistry.vue";
import IconPhysics from "~/components/icon/IconPhysics.vue";

const { t } = useI18n();

const features = getWhySectionFeatures();

const iconComponents: Record<IconName, Component> = {
  clock: IconClock,
  graduation: IconGraduation,
  lightning: IconLightning,
  certificate: IconCertificate,
  partnership: IconPartnership,
  career: IconCareer,
  chemistry: IconChemistry,
  physics: IconPhysics,
};

// Helper function to get icon component
const getIconComponent = (iconName: IconName) => {
  return iconComponents[iconName] || IconClock;
};
</script>

<template>
  <section
    id="why"
    class="dark:bg-dark-500 bg-[#f7f9f6] px-4 py-24 sm:px-6 lg:px-40"
  >
    <Motion
      tag="div"
      :initial="{ opacity: 0, y: 30 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6 }"
      class="mb-16 text-center"
    >
      <h2
        class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white"
      >
        {{ t("whyFarobiy.title") }}
      </h2>
      <p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
        {{ t("whyFarobiy.subtitle") }}
      </p>
    </Motion>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <Motion
        v-for="(featureGroup, groupIndex) in features"
        :key="groupIndex"
        tag="div"
        class="group dark:bg-dark-400 dark:border-dark-50 rounded-2xl border border-transparent bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#009663]/20 hover:shadow-xl"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: groupIndex * 0.1, duration: 0.5 }"
      >
        <div
          v-for="(item, itemIndex) in featureGroup.items"
          :key="itemIndex"
          class="mb-6 flex flex-col items-center last:mb-0"
        >
          <!-- Icon -->
          <Motion
            tag="div"
            class="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-[#009663]/10 to-[#009663]/5 text-[#009663] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md dark:from-[#00c878]/20 dark:to-[#00c878]/10 dark:text-[#00c878]"
            :whileHover="{ scale: 1.15, rotate: 360 }"
            :transition="{ duration: 0.6 }"
          >
            <component :is="getIconComponent(item.icon)" />
          </Motion>

          <!-- Title -->
          <h3
            class="mb-2 text-center text-lg font-semibold text-gray-900 transition-colors dark:text-white"
          >
            {{ t(item.titleKey) }}
          </h3>

          <!-- Description -->
          <p
            class="text-center text-sm leading-relaxed text-gray-600 dark:text-gray-300"
          >
            {{ t(item.descKey) }}
          </p>
        </div>
      </Motion>
    </div>
  </section>
</template>
