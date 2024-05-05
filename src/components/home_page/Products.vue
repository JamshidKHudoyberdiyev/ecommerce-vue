<template>
  <div class="products pt-10">
    <v-container fluid v-if="products.length == 0">
      <v-row>
        <v-col cols="3" v-for="i in 8">
          <v-skeleton-loader
            style="height: 530px"
            type="image,article,button"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid v-else>
      <v-row>
        <v-col v-for="item in products" cols="3">
          <Card :items="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  products: any;
}>();

import { inject } from "vue";
import Card from "../others/Card.vue";
const dialog = inject<boolean>("dialog");
</script>

<style scoped></style>
