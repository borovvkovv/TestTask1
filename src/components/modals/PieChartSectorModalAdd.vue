<template>
  <PieChartSectorModalBase
    ref="modal"
    modal-title="Добавление сектора"
    submit-button-text="Добавить сектор"
    @submit="onSubmitButtonClick"
  />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Sector } from '@/components/charts/utils/models';
import PieChartSectorModalBase from '@/components/modals/PieChartSectorModalBase.vue';

const emit = defineEmits<{
  (eventName: 'submit', sector: Sector): void;
}>();

const modal = ref<InstanceType<typeof PieChartSectorModalBase>>();
const open = computed(() => () => {
  modal.value?.open({ name: '', percent: 0, color: '' });
});

const onSubmitButtonClick = (sector: Sector) => {
  emit('submit', sector);
};

defineExpose({
  open,
});
</script>
