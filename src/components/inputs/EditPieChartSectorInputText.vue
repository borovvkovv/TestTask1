<template>
  <EditPieChartSectorInputBase :label>
    <input
      :value
      :type
      :class="styles.input"
      @input="(evt) => (value = (evt.target as HTMLInputElement).value)"
    />
  </EditPieChartSectorInputBase>
</template>

<script setup lang="ts">
import { useCssModule, type InputTypeHTMLAttribute } from 'vue';
import EditPieChartSectorInputBase from '@/components/inputs/EditPieChartSectorInputBase.vue';

const value = defineModel<string>('value');

withDefaults(
  defineProps<{
    label: string;
    type?: InputTypeHTMLAttribute;
  }>(),
  { type: 'string' },
);

const styles = useCssModule();
</script>

<style module>
.input {
  font-size: 16px;
  line-height: 24px;
  color: #252f4a;
  border: none;
}

.input:focus-visible {
  outline: none;
}
</style>
