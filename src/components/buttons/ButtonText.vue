<template>
  <button
    :title
    :disabled
    :class="styles.button"
    @click="() => emit('click')"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';

defineProps<{
  title: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (eventName: 'click'): void;
}>();

const styles = useCssModule();
</script>

<style module>
.button {
  background-color: #1b84ff;
  border-radius: 10px;
  color: #fff;
  padding: 18px 0;
  border: none;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
}

.button:focus-visible {
  outline: none;
}

.button:disabled {
  background-color: #1b84ff7e;
  cursor: default;
}
</style>
