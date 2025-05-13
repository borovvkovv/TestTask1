<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    fill="none"
    viewBox="0 0 105 105"
  >
    <circle
      cx="52.5"
      cy="52.5"
      r="50"
      stroke="#f6f7fa"
      stroke-width="5px"
      :stroke-dashoffset="strokeDashoffset"
      :stroke-dasharray="staticDashArray"
      stroke-linecap="round"
      fill="none"
    />
    <circle
      cx="52.5"
      cy="52.5"
      r="50"
      :stroke="strokeColor"
      :stroke-width="isStrokeVisible ? '5px' : '0px'"
      :stroke-dashoffset="strokeDashoffset"
      stroke-linecap="round"
      fill="none"
      :class="styles.progressBarStroke"
      @transitionend="() => (isStrokeVisible = percent !== 0)"
    />
    <text
      v-if="status === Status.InProgress"
      font-size="13px"
      x="52.5"
      y="56.35"
      text-anchor="middle"
      fill="#616266"
    >
      {{ `${percent}%` }}
    </text>
    <Transition
      :enter-active-class="styles.enterActive"
      :leave-active-class="styles.leaveActive"
      :enter-from-class="styles.enterFrom"
      :leave-to-class="styles.leaveTo"
    >
      <component
        v-if="statusIcon"
        :is="statusIcon"
        x="46.5"
        y="46.5"
      />
    </Transition>
  </svg>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, ref, useCssModule, watch } from 'vue';
import { ProgressBarType, Status } from '@/components/progress-bar/utils/model';

const props = defineProps<{
  percent: number;
  status: Status;
  type: ProgressBarType;
  size: number;
}>();

const styles = useCssModule();
const strokeColor = computed<string>(() => {
  switch (props.status) {
    case Status.Error:
      return '#ff4949';
    case Status.InProgress:
      return '#20a0ff';
    case Status.Success:
      return '#12ce66';
    case Status.Warning:
      return '#e7a23d';
  }
});

const strokeDasharray = computed<number>(() =>
  props.type === ProgressBarType.Dashboard
    ? Math.PI * props.percent * 0.75
    : Math.PI * props.percent,
);
const staticStrokeDasharray = computed<number>(() =>
  props.type === ProgressBarType.Dashboard ? Math.PI * 75 : Math.PI * 100,
);
const strokeDasharrayRest = computed<number>(() => Math.PI * 100 - strokeDasharray.value);
const staticStrokeDasharrayRest = computed<number>(
  () => Math.PI * 100 - staticStrokeDasharray.value,
);
const dashArray = computed(() => `${strokeDasharray.value} ${strokeDasharrayRest.value}`);
const staticDashArray = computed(
  () => `${staticStrokeDasharray.value} ${staticStrokeDasharrayRest.value}`,
);

const strokeDashoffset = computed(() =>
  props.type === ProgressBarType.Dashboard ? -Math.PI * 37.5 : Math.PI * 25,
);

const isStrokeVisible = ref<boolean>(props.percent !== 0);
const statusIcon = computed<Object | undefined>(() => {
  switch (props.status) {
    case Status.Error:
      return defineAsyncComponent(() => import('@/components/icons/IconError.vue'));
    case Status.Success:
      return defineAsyncComponent(() => import('@/components/icons/IconSuccess.vue'));
    case Status.Warning:
      return defineAsyncComponent(() => import('@/components/icons/IconWarning.vue'));
    default:
      return undefined;
  }
});

watch(
  () => props.percent,
  (newValue, oldValue) => {
    if (newValue !== oldValue && oldValue === 0) isStrokeVisible.value = true;
  },
);
</script>

<style module>
.progressBarStroke {
  transition: all 800ms ease-out;
  transition-property: stroke-dasharray, stroke;
  stroke-dasharray: v-bind(dashArray);
}

.enterActive,
.leaveActive {
  transition: opacity 0.5s ease;
}
.enterFrom,
.leaveTo {
  transition: opacity 0s;
  opacity: 0;
}
</style>
