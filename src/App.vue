<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { RouteName } from '@/router/enum/RouteName';
</script>

<template>
  <header>
    <nav>
      <RouterLink
        :to="{ name: RouteName.Task1 }"
        class="link"
      >
        - Task 1
      </RouterLink>
      <RouterLink
        :to="{ name: RouteName.Task2 }"
        class="link"
      >
        - Task 2
      </RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/styles/fonts';

.link {
  display: block;
}

body,
input,
button,
label {
  font-family: inter, serif;
  font-style: normal;
  font-weight: 400;
}
</style>
