<template>
  <BaseDropDown :class="styles.colorSelect">
    <template #input="{ isDropDownOpen, toggleDropDownVisibility }">
      <EditPieChartSectorInputColor
        :color="color"
        :is-drop-down-open="isDropDownOpen"
        :class="styles.colorSelect__input"
        @arrow:click.stop="toggleDropDownVisibility"
      />
    </template>
    <template #dropDown>
      <div :class="styles.colorSelect__picker">
        <ColorPicker
          v-model:pureColor="color"
          isWidget
          format="hex"
        />
      </div>
    </template>
  </BaseDropDown>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import BaseDropDown from '@/components/dropdown/BaseDropDown.vue';
import EditPieChartSectorInputColor from '@/components/inputs/EditPieChartSectorInputColor.vue';

const color = defineModel<string>('color', { required: true });
const styles = useCssModule();
</script>

<style module>
.colorSelect {
  margin-bottom: 20px;
  cursor: pointer;
}

.colorSelect__input {
  margin-bottom: 5px;
}

.colorSelect__picker {
  display: flex;
  justify-content: center;
}
</style>
