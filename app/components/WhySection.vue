<script setup lang="ts">
import { h } from "vue";
import { Motion } from "@motionone/vue";

const features = [
  {
    items: [
      {
        title: "Rus va o‘zbek guruhlari alohida",
        desc: "O‘quvchilarni qulaylik uchun til bo‘yicha alohida guruhlarga ajratamiz.",
        icon: () => h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", { "stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M12 6v6l4 2" })
        ])
      },
      {
        title: "Ta’lim grantlari",
        desc: "Iqtidorli o‘quvchilar uchun maxsus grant imkoniyatlari mavjud.",
        icon: () => h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", { "stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M12 4.354a4 4 0 110 5.292" })
        ])
      }
    ]
  },
  {
    items: [
      {
        title: "Kursga hojat yo‘q",
        desc: "Farobiyda o‘qishning o‘zi yetarli — qo‘shimcha kurssiz ham natija.",
        icon: () => h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", { "stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M13 10V3L4 14h7v7l9-11h-7z" })
        ])
      },
      {
        title: "Tajribali professor ustozlar",
        desc: "O‘z sohasining yetuk mutaxassislari bilan sifatli ta’lim.",
        icon: () => h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", { "stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18" })
        ])
      }
    ]
  },
  {
    items: [
      {
        title: "Hamkorliklar",
        desc: "Boshqa ta’lim markazlari va imtihon tashkilotlari bilan faol hamkorlik.",
        icon: () => h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", { "stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M3 13h18M5 17h14" })
        ])
      },
      {
        title: "Kasbga yo‘naltirish",
        desc: "O‘quvchilarni kelajakdagi kasb tanloviga yo‘naltirish tizimi.",
        icon: () => h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", { "stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M12 6v6l4 2" })
        ])
      }
    ]
  },
  {
    items: [
      {
        title: "Kimyo kabineti",
        desc: "Amaliy kimyo tajribalari uchun to‘liq jihozlangan laboratoriya.",
        icon: () => h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", { "stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M9 12l3 9 3-9" })
        ])
      },
      {
        title: "Fizika kabineti",
        desc: "Zamonaviy jihozlar bilan ta’minlangan fizika xonasi.",
        icon: () => h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", { "stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","d":"M12 2v20" })
        ])
      }
    ]
  }
];
</script>

<template>
  <section id="why" class="bg-[#f7f9f6] py-24 px-4 sm:px-6 lg:px-40">
    <div class="text-center mb-16">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
        Nega Farobiy School’ni <br /> tanlashingiz kerak?
      </h2>
      <p class="text-gray-600 max-w-2xl mx-auto text-lg">
        Farzandingizning kelajagi uchun kompleks va sifatli ta’lim izlayotgan bo‘lsangiz — Farobiy School aynan to‘g‘ri manzil!
      </p>
    </div>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <Motion
        v-for="(feature, index) in features"
        :key="index"
        tag="div"
        class="rounded-2xl bg-white p-6 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: index * 0.1, duration: 0.5 }"
      >
        <div v-for="(item, i) in feature.items" :key="i" class="mb-6 last:mb-0 flex flex-col items-center">
          <div class="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#009663]/10 text-[#009663] shadow-sm">
            <component :is="item.icon" class="h-7 w-7" />
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-1 text-center">
            {{ item.title }}
          </h3>
          <p class="text-gray-600 text-center text-sm">
            {{ item.desc }}
          </p>
        </div>
      </Motion>
    </div>
  </section>
</template>
