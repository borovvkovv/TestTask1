<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 4,4 L 16,16"
      stroke-width="1"
      stroke="red"
    />
    <path
      d="M 16,4 L 4,16"
      stroke-width="1"
      stroke="red"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number;
  }>(),
  {
    size: 12,
  },
);
</script>
