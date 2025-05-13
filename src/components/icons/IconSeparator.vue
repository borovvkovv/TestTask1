<template>
  <svg
    width="2"
    :height="size"
    viewBox="0 0 2 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 1,1 L 1,15"
      stroke="#DBDFE9"
      stroke-width="2"
      stroke-linecap="round"
    />
  </svg>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number;
  }>(),
  {
    size: 16,
  },
);
</script>
