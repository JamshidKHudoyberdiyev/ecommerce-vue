<template>
  <div class="category">
    <v-container fluid>
      <h2
        class="category_title text-center py-4 pb-10"
        style="font-size: 40px; font-weight: 900"
      >
        Top Categoreis
      </h2>

      <div class="cards mt-2">
        <v-row>
          <v-col cols="2" v-for="cat in categories">
            <v-card class="py-2 px-2" elevation="0">
              <div
                class="parent text-center pa-2"
                style="width: 100%; overflow: hidden"
              >
                <v-hover v-slot="{ isHovering, props }">
                  <img
                    v-bind="props"
                    :src="cat.img"
                    :style="`width: 100% ;transition:0.4s all ease-in-out; scale:${
                      isHovering ? 1.05 : 1
                    }`"
                    alt=""
                  />
                </v-hover>
              </div>
              <v-card-text class="text-center"> {{ cat.title }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface ICar {
  title: string;
  img: string;
}

const categories = ref<ICar[]>([
  {
    title: "Mobile Phones",
    img: "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
  },
  {
    title: "Labtops",
    img: "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
  },

  {
    title: "TVS",
    img: "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
  },
  {
    title: "PCs",
    img: "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
  },
  {
    title: "Audio & Video",
    img: "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
  },
  {
    title: "Gaming",
    img: "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
  },
  {
    title: "Home Appliances",
    img: "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
  },
  {
    title: "Kitchen",
    img: "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
  },
  {
    title: "Cameras",
    img: "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
  },
  {
    title: "Consumables",
    img: "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
  },
  {
    title: "Smart Homes",
    img: "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
  },
  {
    title: "Accessories",
    img: "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
  },
]);
</script>

<style lang="scss" scoped></style>
