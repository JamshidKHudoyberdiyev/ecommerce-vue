<template>
  <v-container fluid>
    <div class="products px-5 py-10">
      <div class="Swippper_title d-flex justify-space-between align-center">
        <h2 style="font-weight: 900; font-size: 40px" class="text-red mb-8">
          {{ title }}
        </h2>
        <span><a href=""> Show all </a></span>
      </div>

      <v-row v-if="products.length == 0" class="pb-15">
        <v-col cols="3" v-for="i in 4">
          <v-skeleton-loader type="image,article,button"></v-skeleton-loader>
        </v-col>
      </v-row>

      <Swiper
        v-else
        :pagination="{ clickable: true }"
        :slides-per-view="4"
        navigation
        :modules="modules"
        :space-between="50"
        :autoplay="{
          delay: 2000,
          pauseOnMouseEnter: true,
        }"
        :loop="true"
        class="pb-15"
      >
        <swiper-slide v-for="(item, i) in products" :key="i">
          <Card :items="item" :isView="true"
        /></swiper-slide>
      </Swiper>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { inject, ref } from "vue";
import Card from "../others/Card.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
const olma = inject("Emitter");

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// swipper

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

const modules: any = [Navigation, Pagination, Scrollbar, A11y, Autoplay];

const props = withDefaults(
  defineProps<{
    products: any;
    title: string;
  }>(),
  {
    title: "",
  }
);
</script>

<style scoped lang="scss">
.swiper-button-next {
  &::after {
    font-size: 40px;
    background-color: red;
  }
}
</style>
