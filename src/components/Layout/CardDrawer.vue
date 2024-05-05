<template>
  <div class="drawer card_navigation pr-0">
    <v-navigation-drawer
      width="430"
      temporary
      v-model="drawer"
      location="right"
      class="drawer card_navigation"
    >
      <v-container class="pa-2 pr-0">
        <v-card elevation="0" class="pr-1">
          <v-card-title class="d-flex justify-space-between"
            ><span> Shoping Cart </span>
            <v-icon @click="closeDialog">mdi-close</v-icon>
          </v-card-title>
          <v-card-text>{{ cartItems.length }} items</v-card-text>
          <div
            v-if="cartItems.length"
            class="progress"
            style="position: relative"
          >
            <span>
              <svg
                :style="`
                width: 40px;
                position: absolute;
                transition: 0.02s all ease-in-out;
                z-index: 5;
                bottom: 50%;
                left: calc(calc(${parseInt(
                  (total / 10000) * 100 <= 100 ? (total / 10000) * 100 : 100
                )}%) - 30px)`"
                class="icon-shipping-truck"
                viewBox="0 0 40.55 24"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      fill="red"
                      class="truck-body"
                      d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                    />
                    <path
                      fill="red"
                      class="truck-body"
                      d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                    />
                    <path
                      fill="red"
                      class="wheel"
                      d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                    />
                    <path
                      fill="red"
                      class="wheel"
                      d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                    />
                  </g>
                </g>
              </svg>
            </span>

            <v-progress-linear
              height="8"
              style="transition: 0.02s all ease-in-out"
              :model-value="
                parseInt(
                  (total / 10000) * 100 <= 100 ? (total / 10000) * 100 : 100
                )
              "
              color="deep-orange"
              striped
            ></v-progress-linear>
          </div>

          <v-card-text v-if="!cartItems.length">
            Free Shipping for all orders over $10000.00</v-card-text
          >
          <v-card-text v-if="cartItems.length && 10000 - total > 0">
            Only ${{ 10000 - total }} away from Free Shipping</v-card-text
          >
          <v-card-text v-if="cartItems.length && 10000 - total <= 0">
            You order now is included free shipping</v-card-text
          >

          <v-card-text v-if="!cartItems.length" class="text-center">
            You Card is empty
          </v-card-text>

          <v-card-actions class="d-flex justify-center">
            <v-btn
              @click="closeDialog"
              v-if="!cartItems.length"
              style="border-color: #6f6f6f"
              class="w-75 rounded-xl"
              variant="outlined"
            >
              Continue Shopping
            </v-btn>
          </v-card-actions>

          <v-card
            v-if="cartItems.length"
            elevation="0"
            class="pa-0mt-5 items_card"
            max-height="270"
            style="overflow-y: auto"
          >
            <v-container>
              <v-row v-for="item in cartItems" :key="item.id">
                <v-col cols="5">
                  <img class="w-100" :src="item.thumbnail" alt="" />
                </v-col>
                <v-col cols="7">
                  <v-card class="pa-0" elevation="0" color="transparent">
                    <v-card-title
                      style="
                        font-weight: 700;
                        white-space: pre-wrap;
                        font-size: 14px;
                        line-height: 1.2;
                      "
                      class="px-0 pt-0"
                    >
                      {{ item.title }} Sample -
                      {{ item.category }}
                    </v-card-title>
                    <v-card-text
                      class="px-0 pb-2"
                      style="color: #6f6f6f; font-size: 14px"
                    >
                      Category : {{ item.category }}
                    </v-card-text>
                    <v-card-text class="px-0 pb-2 pt-0">
                      <span
                        class="text-black"
                        style="font-weight: 900; font-size: 12px"
                      >
                        ${{
                          Math.ceil(
                            item.price -
                              (item.price * item.discountPercentage) / 100
                          ) * item.quantity
                        }}
                      </span>
                    </v-card-text>

                    <v-card-text class="px-0 pt-0">
                      <p class="pb-3" style="font-size: 14px">Quantity</p>
                      <div class="d-flex align-center justify-space-between">
                        <div
                          style="
                            border: 1px solid black;
                            border-radius: 30px;
                            width: fit-content;
                            padding: 5px;
                          "
                        >
                          <span
                            class="cursor-pointer"
                            :disabled="true"
                            @click="item.quantity > 1 ? item.quantity-- : false"
                            ><v-icon>mdi-minus</v-icon></span
                          >
                          <input
                            v-model="item.quantity"
                            style="
                              outline: none;
                              width: 40px;
                              text-align: center;
                              font-size: 16px;
                            "
                            type="number"
                            number
                          />
                          <span class="cursor-pointer" @click="item.quantity++"
                            ><v-icon>mdi-plus</v-icon></span
                          >
                        </div>
                        <v-icon
                          @click="deleteItemCart(item.id)"
                          class="cursor-pointer"
                        >
                          mdi-close</v-icon
                        >
                      </div>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-card>

          <v-card-actions
            v-if="cartItems.length"
            class="d-flex flex-column"
            style="gap: 20px"
          >
            <v-btn
              style="border-color: #6f6f6f; text-transform: none"
              class="w-75 rounded-xl"
              variant="elevated"
              elevation="0"
              color="blue"
            >
              Checkout</v-btn
            >
            <v-btn
              @click="router.push('/cart-page')"
              style="border-color: #6f6f6f"
              class="w-75 rounded-xl"
              variant="outlined"
            >
              View Cart</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-container>
    </v-navigation-drawer>
  </div>
</template>

<script setup lang="ts">
import type { Tdrawer } from "@/types/type";
import { computed, inject, ref } from "vue";
import { cartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
const drawer = inject("drawer") as Tdrawer;
const closeDialog = inject("changeDrawer");
const { cartItems } = storeToRefs(cartStore());
const { deleteItemCart } = cartStore();

const router = useRouter();

const total = computed(() => {
  let summa = 0;
  cartItems.value.forEach((itm) => {
    summa +=
      Math.ceil(itm.price - (itm.price * itm.discountPercentage) / 100) *
      itm.quantity;
  });
  return summa;
});
</script>

<style scoped lang="scss">
.drawer {
  .v-navigation-drawer {
    position: relative;
    z-index: 20000;
  }
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.items_card {
  scrollbar-width: thin;
}
</style>
