<template>
  <div class="new_product px-5">
    <v-container fluid>
      <div
        class="new_product_title d-flex justify-space-between align-center py-10 mb-5"
      >
        <h2
          style="font-size: 35px; font-weight: 900; color: rgba(0, 0, 0, 0.5)"
          class=""
        >
          New Products
        </h2>
        <span><a href="">Show all</a></span>
      </div>

    

      <v-row>
        <v-col cols="7" class="pt-15 mt-2">
          <v-row v-if="newproducts.length == 0" >
            <v-col cols="4" v-for="i in 3">
              <v-skeleton-loader
                style="height: 400px"
                type="image,article,button"
              ></v-skeleton-loader>
            </v-col c>
          </v-row>
          <Swiper
            v-else
            :pagination="{ clickable: true }"
            :slides-per-view="3"
            :modules="modules"
            :space-between="30"
            :autoplay="{
              delay: 2000,
            }"
            class="pb-15"
          >
            <swiper-slide v-for="(item, i) in newproducts" :key="i">
              <Card :items="item" :height="180" :desclength="4"
            /></swiper-slide>
          </Swiper>
        </v-col>
        <v-col cols="5">
          <div class="new_product_img">
            <img class="w-100" src="/src/assets/images/vr-banner.webp" alt="" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import Card from "../others/Card.vue";
import { Swiper, SwiperSlide } from "swiper/vue";

// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

// swipper

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const modules: any = [Pagination, Scrollbar, A11y, Autoplay];
const props = defineProps<{
  newproducts: any;
}>();
</script>

<style scoped></style>
