<template>
  <div>
    <div @click.stop="toggleDropDown">
      <slot
        name="input"
        :is-drop-down-open="isOpen"
        :toggle-drop-down-visibility="toggleDropDown"
      />
    </div>
    <slot
      v-if="isOpen"
      name="dropDown"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const toggleDropDown = () => (isOpen.value = !isOpen.value);
</script>
