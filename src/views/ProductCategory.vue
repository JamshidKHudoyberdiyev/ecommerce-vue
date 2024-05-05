<template>
  <div class="productCategorys">
    <v-container fluid v-if="store.loading">
      <v-row>
        <v-col cols="3" v-for="i in 8">
          <v-skeleton-loader
            style="height: 500px"
            type="image,article,button"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-container>

    <v-container fluid v-else>
      <h2 class="text-center py-8">
        {{ route.query.title }}
      </h2>
      <v-row>
        <v-col cols="3" v-for="item in store.categoriesList" :key="item.id">
          <Card :items="item" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import Card from "@/components/others/Card.vue";
import { ProductStore } from "@/stores/product";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const store = ProductStore();

onMounted(() => {
  store.getProductByCategory(route.params.category);
});
watch(route, () => {
  store.getProductByCategory(route.params.category);
});
</script>

<style scoped></style>
