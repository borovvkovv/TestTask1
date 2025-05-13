<template>
  <div :class="styles.sector">
    <div :class="styles.params">
      <span :class="styles.params__name">{{ sector.name }}</span>
      <IconSeparator />
      <span :class="styles.params__percent">{{ `${sector.percent}%` }}</span>
      <IconSeparator />
      <IconColorSample
        :class="styles.params__color"
        :color="sector.color"
      />
    </div>
    <div :class="styles.actions">
      <IconEdit
        :class="styles.actions__item"
        @click="() => emit('edit:click')"
      />
      <IconWasteBin
        :class="styles.actions__item"
        @click="() => emit('delete:click')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCssModule } from 'vue';
import type { Sector } from '@/components/charts/utils/models';
import IconEdit from '@/components/icons/IconEdit.vue';
import IconWasteBin from '@/components/icons/IconWasteBin.vue';
import IconSeparator from '@/components/icons/IconSeparator.vue';
import IconColorSample from '@/components/icons/IconColorSample.vue';

defineProps<{
  sector: Sector;
}>();

const emit = defineEmits<{
  (eventName: 'delete:click'): void;
  (eventName: 'edit:click'): void;
}>();

const styles = useCssModule();
</script>

<style module>
.sector {
  display: flex;
  justify-content: space-between;
  gap: 25px;
  padding: 18px 20px;
  background-color: #dbdfe933;
  border-radius: 10px;
}

.params {
  display: flex;
  justify-items: center;
  color: #252f4a;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
}

.params__name {
  min-width: 100px;
  margin-right: 25px;
}

.params__percent {
  margin: 0 25px;
}

.params__color {
  margin-left: 25px;
}

.actions {
  display: flex;
  gap: 20px;
  color: #99a1b7;
}

.actions__item {
  cursor: pointer;
}
</style>
