<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.2178 5.94399L14.0953 4.09796C15.1323 3.07843 16.8135 3.07843 17.8504 4.09796L19.7279 5.94399C20.7648 6.96352 20.7648 8.61651 19.7279 9.63604L17.8504 11.4821M12.2178 5.94399L4.56463 13.4688C4.1365 13.8897 3.86755 14.4419 3.80237 15.0338L3.34134 19.2201C3.24381 20.1057 4.05713 20.8251 4.9425 20.6363L8.77269 19.82C9.27079 19.7138 9.72729 19.4689 10.0877 19.1146L17.8504 11.4821M12.2178 5.94399L17.8504 11.4821M15.0341 20.4932H20.6667"
      stroke="currentColor"
      stroke-width="1.5"
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
    size: 24,
  },
);
</script>
