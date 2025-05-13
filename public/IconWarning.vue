<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="10"
      cy="10"
      r="10"
      fill="orange"
    />
    <path
      d="M9.89951 11L9.89951 6"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
    />
    <rect
      x="10.8995"
      y="15"
      width="2"
      height="2"
      rx="1"
      transform="rotate(-180 10.8995 15)"
      fill="white"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconWarning',
});
</script>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number;
  }>(),
  {
    size: 14,
  },
);
</script>
