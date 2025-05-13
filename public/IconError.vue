<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 0,0 L 20,20"
      stroke-width="1"
      stroke="red"
    />
    <path
      d="M 20,0 L 0,20"
      stroke-width="1"
      stroke="red"
    />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconError',
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
