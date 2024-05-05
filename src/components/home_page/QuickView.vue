<template>
  <v-dialog v-model="dialog" max-width="1000" color="primary">
    <v-card style="position: relative" class="py-16 product_card_view">
      <v-container>
        <v-row class="py-5">
          <v-col cols="7">
            <div v-if="productLoading">
              <v-skeleton-loader
                type="image,article,button"
              ></v-skeleton-loader>
            </div>
            <div v-else>
              <img
                class="w-100"
                style="height: 470px"
                :src="tab ? tab : product.thumbnail"
                alt=""
              />
              <v-tabs v-model="tab" class="mt-5">
                <v-tab :value="img" v-for="img in product.images" :key="img">
                  <img style="width: 100%" height="60px" :src="img" alt="" />
                </v-tab>
              </v-tabs>
            </div>
          </v-col>
          <v-col cols="5" class="pl-0">
            <div v-if="productLoading">
              <v-skeleton-loader type="article,paragraph"></v-skeleton-loader>
            </div>
            <v-card v-else class="pa-0" color="transparent" elevation="0">
              <v-card-title
                style="font-weight: 900; font-size: 22px; white-space: wrap"
                >{{ product.title }} - Sample -
                {{ product.category }}
              </v-card-title>
              <v-card-text class="pl-0 d-flex align-center" style="gap: 20px">
                <v-rating
                  readonly
                  size="large"
                  v-model="product.rating"
                  half-increments
                  color="yellow-darken-2 "
                  density="comfortable"
                  class="rating ma-2"
                ></v-rating>
                <span style="font-size: 16px">Stock : {{ product.stock }}</span>
              </v-card-text>
              <v-card-text class="pt-0" style="font-size: 16px">
                {{ product.description }}
              </v-card-text>
              <v-card-text class="pt-0" style="font-size: 16px">
                Brand : {{ product.brand }}
              </v-card-text>
              <v-card-text class="pt-0" style="font-size: 16px">
                <span style="font-weight: 700">
                  <del> ${{ product.price }}</del>
                </span>
                From

                <span
                  class="text-red"
                  style="font-weight: 900; font-size: 16px"
                >
                  ${{
                    Math.ceil(
                      product.price -
                        (product.price * product.discountPercentage) / 100
                    )
                  }}
                </span>
              </v-card-text>
              <v-card-text>
                <p class="pb-4" style="font-size: 16px">Quantity</p>
                <div
                  style="
                    border: 1px solid black;
                    border-radius: 30px;
                    width: fit-content;
                    padding: 5px;
                  "
                >
                  <span class="cursor-pointer" @click="quantity--"
                    ><v-icon>mdi-minus</v-icon></span
                  >
                  <input
                    v-model="quantity"
                    style="
                      outline: none;
                      width: 80px;
                      text-align: center;
                      font-size: 16px;
                    "
                    type="number"
                    number
                  />
                  <span class="cursor-pointer" @click="quantity++"
                    ><v-icon>mdi-plus</v-icon></span
                  >
                </div>
              </v-card-text>
              <v-card-text>
                Subtotal :${{
                  Math.ceil(
                    product.price -
                      (product.price * product.discountPercentage) / 100
                  ) * quantity
                }}</v-card-text
              >
              <v-card-actions class="d-flex">
                <v-btn
                  :loading="btnloading"
                  @click="AddCartItem(product)"
                  class="bg-black"
                  style="width: 400px; border-radius: 30px"
                  variant="elevated"
                >
                  Add To Card
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-btn
      @click="closeModal"
      size="small"
      class="bg-red"
      style="position: absolute; right: -20px; top: -20px"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-dialog>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { VSkeletonLoader } from "vuetify/components";
import { viewProdcutStore } from "@/stores/viewCategory";
import { cartStore } from "@/stores/cart";
const { product, dialog, productLoading } = storeToRefs(viewProdcutStore());
const { closeDialog } = viewProdcutStore();
const { addToCart } = cartStore();

const tab = ref("");
const quantity = ref<number>(1);

// functions

const closeModal = () => {
  closeDialog();
};

const btnloading = ref(false);

const AddCartItem = (item: any) => {
  item.quantity = quantity.value;

  btnloading.value = true;
  setTimeout(() => {
    btnloading.value = false;
  }, 1000);

  addToCart(item);
};
</script>

<style scoped>
.v-rating__wrapper {
  background-color: rgb(19, 90, 37) !important;
}

.v-rating__item {
  background-color: red !important;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.product_card_view {
  scrollbar-width: thin;
}
</style>
