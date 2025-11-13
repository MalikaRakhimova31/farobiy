<template>
  <section id="why" class="container bg-white">
    <div class="mb-12 text-center lg:mb-16">
      <h2 class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
        {{ $t("why.title") }}
      </h2>
      <p class="mx-auto max-w-2xl text-lg text-gray-600">
        {{ $t("why.subtitle") }}
      </p>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="card group transition-transform duration-300 hover:scale-105"
      >
        <div
          class="bg-primary-100 group-hover:bg-primary-600 mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-colors"
        >
          <component
            :is="feature.icon"
            class="text-primary-600 h-7 w-7 transition-colors group-hover:text-white"
          />
        </div>
        <h3 class="mb-3 text-xl font-bold text-gray-900">
          {{ $t(`why.feature${index + 1}.title`) }}
        </h3>
        <p class="text-gray-600">
          {{ $t(`why.feature${index + 1}.description`) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from "vue";

const features = [
  {
    icon: () =>
      h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
        h("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        }),
      ]),
  },
  {
    icon: () =>
      h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
        h("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
        }),
      ]),
  },
  {
    icon: () =>
      h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
        h("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M13 10V3L4 14h7v7l9-11h-7z",
        }),
      ]),
  },
  {
    icon: () =>
      h("svg", { fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, [
        h("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
        }),
      ]),
  },
];
</script>
