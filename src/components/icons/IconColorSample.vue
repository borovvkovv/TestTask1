<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 10 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="5"
      cy="5"
      r="5"
      :fill="color"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number;
    color: string;
  }>(),
  {
    size: 10,
  },
);
</script>
