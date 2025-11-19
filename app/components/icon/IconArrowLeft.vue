<script setup lang="ts">
import type { IconProps } from "./types";

withDefaults(defineProps<IconProps>(), {
  size: 20,
  className: "",
  fill: "none",
  stroke: "currentColor",
});
</script>

<template>
  <svg
    :width="size"
    :height="size"
    :class="className"
    viewBox="0 0 24 24"
    :fill="fill"
    :stroke="stroke"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 12H5M5 12L12 19M5 12L12 5" />
  </svg>
</template>

