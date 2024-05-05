<template>
  <AppLayout>
    <RouterView />
    <QuickView />
  </AppLayout>
</template>
<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import QuickView from "./components/home_page/QuickView.vue";
import AppLayout from "./components/Layout/AppLayout.vue";
</script>

<style scoped></style>
