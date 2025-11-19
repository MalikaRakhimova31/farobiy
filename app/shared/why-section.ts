import type { FeatureGroup } from "~/types/why-section";

export const getWhySectionFeatures = (): FeatureGroup[] => {
  return [
    {
      items: [
        {
          titleKey: "whyFarobiy.feature1.title",
          descKey: "whyFarobiy.feature1.desc",
          icon: "clock",
        },
        {
          titleKey: "whyFarobiy.feature2.title",
          descKey: "whyFarobiy.feature2.desc",
          icon: "graduation",
        },
      ],
    },
    {
      items: [
        {
          titleKey: "whyFarobiy.feature3.title",
          descKey: "whyFarobiy.feature3.desc",
          icon: "lightning",
        },
        {
          titleKey: "whyFarobiy.feature4.title",
          descKey: "whyFarobiy.feature4.desc",
          icon: "certificate",
        },
      ],
    },
    {
      items: [
        {
          titleKey: "whyFarobiy.feature5.title",
          descKey: "whyFarobiy.feature5.desc",
          icon: "partnership",
        },
        {
          titleKey: "whyFarobiy.feature6.title",
          descKey: "whyFarobiy.feature6.desc",
          icon: "career",
        },
      ],
    },
    {
      items: [
        {
          titleKey: "whyFarobiy.feature7.title",
          descKey: "whyFarobiy.feature7.desc",
          icon: "chemistry",
        },
        {
          titleKey: "whyFarobiy.feature8.title",
          descKey: "whyFarobiy.feature8.desc",
          icon: "physics",
        },
      ],
    },
  ];
};
