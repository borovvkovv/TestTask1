<template>
  <ModalBase ref="modalBase">
    <div :class="styles.modal">
      <h2>{{ modalTitle }}</h2>
      <EditPieChartSectorInputText
        v-model:value="name"
        label="Наименование"
        :class="styles.modal__input"
      />
      <EditPieChartSectorInputText
        v-model:value="percent"
        label="Значение"
        type="number"
        :class="styles.modal__input"
      />
      <ColorSelect v-model:color="color" />
      <ButtonText
        :title="submitButtonText"
        :disabled="isSubmitButtonDisabled"
        @click="() => onModalButtonClickHandler({ name: name, percent: percentRef, color: color })"
      />
    </div>
  </ModalBase>
</template>

<script setup lang="ts">
import { computed, ref, useCssModule } from 'vue';
import type { Sector } from '@/components/charts/utils/models';
import ModalBase from '@/components/modals/ModalBase.vue';
import ButtonText from '@/components/buttons/ButtonText.vue';
import ColorSelect from '@/components/selects/ColorSelect.vue';
import EditPieChartSectorInputText from '@/components/inputs/EditPieChartSectorInputText.vue';

defineProps<{ submitButtonText: string; modalTitle: string }>();

const emit = defineEmits<{
  (eventName: 'submit', sector: Sector): void;
}>();

const styles = useCssModule();
const modalBase = ref<InstanceType<typeof ModalBase>>();
const name = ref<string>('');
const color = ref<string>('');
const percentRef = ref<number>(0);
const percent = computed<string>({
  get() {
    return percentRef.value?.toString() ?? '';
  },
  set(newValue) {
    percentRef.value = Number(newValue);
  },
});
const isSubmitButtonDisabled = computed(
  () => name.value === '' || color.value === '' || percentRef.value === 0,
);

const open = computed(() => ({ name: nameLocal, percent, color: colorLocal }: Sector) => {
  name.value = nameLocal;
  percentRef.value = percent;
  color.value = colorLocal;

  modalBase.value?.open();
});

const onModalButtonClickHandler = (sector: Sector) => {
  emit('submit', sector);

  modalBase.value?.close();
};

defineExpose({
  open,
});
</script>

<style module>
.modal {
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  width: 390px;
}

.modal__input {
  margin-bottom: 20px;
}
</style>
