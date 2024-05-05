<template>
  <div class="layout">
    <v-layout class="position-relative">
      <card-drawer />
      <app-nav />
      <FixedNav />
      <v-main style="padding-top: 170px"> <slot></slot></v-main>
      <app-footer />
    </v-layout>
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import AppFooter from "./AppFooter.vue";
import AppNav from "./AppNav.vue";
import FixedNav from "./FixedNav.vue";
import CardDrawer from "./CardDrawer.vue";
import type { Tdrawer } from "@/types/type";

const drawer = ref<Tdrawer>(true);
const ChangeDrawer = () => {
  drawer.value = !drawer.value;
};

provide("changeDrawer", ChangeDrawer);
provide("drawer", drawer);
</script>

<style scoped></style>
