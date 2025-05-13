<template>
  <PieChartSectorModalBase
    ref="modal"
    modal-title="Изменение сектора"
    submit-button-text="Изменить сектор"
    @submit="onSubmitButtonClick"
  />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Sector } from '@/components/charts/utils/models';
import PieChartSectorModalBase from '@/components/modals/PieChartSectorModalBase.vue';

const emit = defineEmits<{
  (eventName: 'submit', sector: Sector, sectorIndex: number): void;
}>();

const modal = ref<InstanceType<typeof PieChartSectorModalBase>>();
const sectorIndexRef = ref<number>(-1);
const open = computed(() => (sector: Sector, sectorIndex: number) => {
  sectorIndexRef.value = sectorIndex;

  modal.value?.open(sector);
});

const onSubmitButtonClick = (sector: Sector) => {
  emit('submit', sector, sectorIndexRef.value);
};

defineExpose({
  open,
});
</script>
