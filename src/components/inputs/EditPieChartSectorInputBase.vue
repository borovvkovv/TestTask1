<template>
  <div :class="styles.inputWrapper">
    <span :class="styles.inputLabel">{{ label }}</span>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';

defineProps<{
  label: string;
}>();

const styles = useCssModule();
</script>

<style module>
.inputWrapper {
  padding: 10px 20px;
  border: 1px solid #dbdfe9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}

.inputLabel {
  font-size: 12px;
  line-height: 16px;
  color: #99a1b7;
}
</style>
