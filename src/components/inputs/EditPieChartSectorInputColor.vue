<template>
  <EditPieChartSectorInputBase label="Цвет">
    <div :class="styles.colorSelectContainer">
      <span>{{ color }}</span>
      <div :class="styles.colorSelect">
        <IconColorSample
          :size="24"
          :color
          :class="styles.colorSelect__sample"
        />
        <div :class="styles.colorSelect__arrow">
          <component
            :is="iconArrow"
            @click="() => emit('arrow:click')"
          />
        </div>
      </div>
    </div>
  </EditPieChartSectorInputBase>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, useCssModule } from 'vue';
import IconColorSample from '@/components/icons/IconColorSample.vue';
import EditPieChartSectorInputBase from '@/components/inputs/EditPieChartSectorInputBase.vue';

const props = defineProps<{
  color: string;
  isDropDownOpen: boolean;
}>();

const emit = defineEmits<{ (eventName: 'arrow:click'): void }>();
const styles = useCssModule();
const iconArrow = computed(() =>
  props.isDropDownOpen
    ? defineAsyncComponent(() => import('@/components/icons/IconArrowUp.vue'))
    : defineAsyncComponent(() => import('@/components/icons/IconArrowDown.vue')),
);
</script>

<style module>
.colorSelectContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.colorSelect {
  display: flex;
  align-items: center;
}
.colorSelect__sample {
  margin-right: 5px;
}

.colorSelect__arrow {
  width: 16px;
}
</style>
