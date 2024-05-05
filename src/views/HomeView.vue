<template>
  <div class="home">
    <UpperBanner />
    <TheFeatures />
    <TheTopOffer />
    <Products :products="store.ProductList" />
    <ProdcutSwipper :products="store.ProductList" title="Flesh Details" />
    <TheTopCategories />
    <NewProduct :newproducts="store.NewProductList" />
    <Services />
    <ProdcutSwipper :products="store.Mobilephones" title="Top Mobile Phones" />
    <QuickView />

    <v-container fluid>
      <v-row>
        <v-col cols="6">
          <img
            src="/src/assets/images/band-left-cover.webp"
            class="w-100 px-5"
            alt=""
          />
        </v-col>
        <v-col cols="6"
          ><img
            src="/src/assets/images/band-right-cover.webp"
            class="w-100 px-5"
            alt=""
          />
        </v-col>
      </v-row>
    </v-container>
    <ProdcutSwipper :products="store.fragrances" title="Parfumi" />
    <WhyShopUs />
  </div>
</template>
<script setup lang="ts">
import NewProduct from "@/components/home_page/NewProduct.vue";
import ProdcutSwipper from "@/components/home_page/ProdcutSwipper.vue";
import Products from "@/components/home_page/Products.vue";
import Services from "@/components/home_page/Services.vue";
import TheFeatures from "@/components/home_page/TheFeatures.vue";
import TheTopCategories from "@/components/home_page/TheTopCategories.vue";
import TheTopOffer from "@/components/home_page/TheTopOffer.vue";
import UpperBanner from "@/components/home_page/UpperBanner.vue";
import WhyShopUs from "@/components/home_page/WhyShopUs.vue";
import QuickView from "@/components/home_page/QuickView.vue";
import { ProductStore } from "@/stores/product";
const store = ProductStore();
store.handleProduct();
</script>
