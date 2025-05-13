<template>
  <h1>Круговой прогресс бар</h1>
  <ProgressBar
    :percent
    :status
    :type="isDashboardType ? ProgressBarType.Dashboard : ProgressBarType.Normal"
    :size="250"
  />
  <div :class="styles.statusContainer">
    <button
      :disabled="timerId !== undefined"
      @click="startUploadingButtonClickHandler"
    >
      Start uploading
    </button>
    <button @click="addWarningButtonClickHandler">Add warning</button>
    <button @click="addErrorButtonClickHandler">Add error</button>
    <button @click="resetButtonClickHandler">Reset</button>
  </div>
  <div :class="styles.percentContainer">
    Percent:
    <input
      :value="String(percent)"
      type="range"
      from="0"
      to="100"
      step="1"
      @input="(event) => (percent = Number((event.target as HTMLInputElement).value))"
    />
  </div>
  <div style="display: flex">
    <label for="isDashboardType">Is dashboard type:</label>
    <input
      id="isDashboardType"
      type="checkbox"
      v-model="isDashboardType"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, useCssModule } from 'vue';
import ProgressBar from '@/components/progress-bar/ProgressBar.vue';
import { ProgressBarType, Status } from '@/components/progress-bar/utils/model';

const styles = useCssModule();
const status = ref<Status>(Status.InProgress);
const percent = ref<number>(0);
const timerId = ref<number>();
const isDashboardType = ref<boolean>(false);

const startUploadingButtonClickHandler = () => {
  percent.value = 0;
  status.value = Status.InProgress;
  timerId.value = setInterval(() => {
    percent.value = Math.min(percent.value + 1, 100);

    if (percent.value === 100) {
      clearInterval(timerId.value);
      timerId.value = undefined;
      status.value = Status.Success;
    }
  }, 100);
};

const addWarningButtonClickHandler = () => {
  clearInterval(timerId.value);
  status.value = Status.Warning;
};

const addErrorButtonClickHandler = () => {
  clearInterval(timerId.value);
  status.value = Status.Error;
};

const resetButtonClickHandler = () => {
  clearInterval(timerId.value);
  timerId.value = undefined;
  percent.value = 0;
  status.value = Status.InProgress;
};
</script>

<style module>
.statusContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.percentContainer {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
}
</style>
