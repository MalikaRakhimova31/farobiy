<script setup lang="ts">
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
    <div 
      class="mb-16 text-center"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2
        class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl dark:text-white"
      >
        {{ t("whyFarobiy.title") }}
      </h2>
      <p class="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
        {{ t("whyFarobiy.subtitle") }}
      </p>
    </div>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div
        v-for="(featureGroup, groupIndex) in features"
        :key="groupIndex"
        class="group dark:bg-dark-400 dark:border-dark-50 rounded-2xl border border-transparent bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:border-[#009663]/20 hover:shadow-xl"
        
        data-aos="fade-up"
        data-aos-offset="80"
        :data-aos-delay="groupIndex * 200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <div
          v-for="(item, itemIndex) in featureGroup.items"
          :key="itemIndex"
          class="mb-6 flex flex-col items-center last:mb-0"
        >
          <div
            class="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-[#009663]/10 to-[#009663]/5 text-[#009663] shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-md dark:from-[#00c878]/20 dark:to-[#00c878]/10 dark:text-[#00c878]"
          >
            <component :is="getIconComponent(item.icon)" />
          </div>

          <h3
            class="mb-2 text-center text-lg font-semibold text-gray-900 transition-colors dark:text-white"
          >
            {{ t(item.titleKey) }}
          </h3>

          <p
            class="text-center text-sm leading-relaxed text-gray-600 dark:text-gray-300"
          >
            {{ t(item.descKey) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

