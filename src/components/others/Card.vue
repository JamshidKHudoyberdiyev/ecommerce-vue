<template>
  <v-card elevation="0">
    <div class="parent" style="overflow: hidden">
      <v-hover v-slot="{ isHovering, props }">
        <div class="img_parent" style="position: relative">
          <img
            v-bind="props"
            style="transition: 0.5s"
            :src="` ${toggleBtn ? toggleBtn : items.thumbnail}  `"
            :style="`width: 100%; height: ${height}px;  scale:${
              isHovering ? 1.05 : 1
            }`"
          />
          <v-btn
            @click="openDiolog"
            class="viewBtn"
            variant="elevated"
            style="
              text-transform: none;
              border-radius: 30px;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              position: absolute;
              opacity: 0;
            "
          >
            Quick View
          </v-btn>
        </div>
      </v-hover>
    </div>
    <v-card-text class="pl-0">
      {{
        `${items.title} ${items.description}`.length >= 57
          ? `${items.title} ${items.description}`.substring(0, 57) + "..."
          : `${items.title} ${items.description}`
      }}
    </v-card-text>
    <v-rating
      readonly
      size="x-small"
      v-model="items.rating"
      half-increments
      color="yellow-darken-2"
      density="compact"
    ></v-rating>

    <p class="pb-1">
      <span style="font-weight: 700">
        <del> ${{ items.price }}</del>
      </span>
      From
      <span class="text-red" style="font-weight: 900; font-size: 17px">
        ${{
          Math.ceil(
            items.price - (items.price * items.discountPercentage) / 100
          )
        }}
      </span>
    </p>
    <v-btn-toggle v-model="toggleBtn" mandatory class="my-2 py-1">
      <v-btn
        density="compact"
        v-for="(pic, i) in items.images"
        :value="pic"
        size="x-small"
        :key="i"
        rounded="circle"
        class="px-1"
      >
        <img
          :src="pic"
          style="
            height: 30px;
            width: 30px;
            border-radius: 50%;
            border: 1px solid black;
          "
        />
      </v-btn>
    </v-btn-toggle>

    <div class="btn text-center mt-5">
      <v-btn
        @click="
          router.push({ name: 'productDetails', params: { id: items.id } })
        "
        class="text-center rounded-xl px-12"
        elevation="0"
        variant="outlined"
        style="text-transform: none"
        >Choose Options</v-btn
      >
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

import { viewProdcutStore } from "@/stores/viewCategory";
import { storeToRefs } from "pinia";
const router = useRouter();
const { product, dialog } = storeToRefs(viewProdcutStore());
const { openDialog, closeDialog, setProduct } = viewProdcutStore();

const props = withDefaults(
  defineProps<{
    items: any;
    isView: boolean;
    height: number;
    desclength: number;
  }>(),
  {
    items: [],
    isView: false,
    height: 250,
    desclength: 9,
  }
);

const openDiolog = () => {
  openDialog();
  setProduct(props.items);
};

const toggleBtn = ref("");
</script>

<style scoped lang="scss">
.swiper-pagination-bullet {
  background-color: red;
  height: 18px !important;
  width: 18px !important;
}
.swiper-pagination {
  background-color: red !important;
}

.img_parent:hover {
  .viewBtn {
    opacity: 1 !important;
  }
}
</style>
