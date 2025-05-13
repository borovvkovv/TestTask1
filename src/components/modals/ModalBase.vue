<template>
  <template v-if="isOpen">
    <div
      ref="layout"
      :class="styles.layout"
    >
      <div
        id="content"
        ref="content"
        :class="styles.modal"
      >
        <slot />
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { ref, useCssModule, watch } from 'vue';

const styles = useCssModule();
const isOpen = ref(false);
const layout = ref<HTMLElement | undefined>();

const open = () => {
  isOpen.value = true;
};
const close = () => {
  isOpen.value = false;
};
const content = ref<HTMLElement | undefined>();

watch(
  () => content.value,
  () => {
    if (isOpen.value) {
      layout.value?.addEventListener('click', onDocumentClickHandler);
      window.addEventListener('keydown', onKeyDownHandler);
    } else {
      layout.value?.removeEventListener('click', onDocumentClickHandler);
      window.removeEventListener('keydown', onKeyDownHandler);
    }
  },
);

const onDocumentClickHandler = (e: Event) => {
  const target = e.target as HTMLElement;
  if (!target.closest('#content')) {
    close();
  }
};

const onKeyDownHandler = (e: KeyboardEvent) => {
  if (e.key === 'Escape') close();
};

defineExpose({
  open,
  close,
});
</script>

<style module>
.layout {
  position: fixed;
  inset: 0;
  background-color: #00000080;
}

.modal {
  width: fit-content;
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
