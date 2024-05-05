<template>
  <div class="page_cart">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-breadcrumbs
            style="font-size: 14px"
            class="pb-0 pl-0"
            :items="['Home', 'Your-cart']"
          >
            <template v-slot:divider>
              <v-icon icon="mdi-chevron-right"></v-icon>
            </template>
          </v-breadcrumbs>
        </v-col>
        <v-col cols="12">
          <v-card elevation="0" color="transparent">
            <v-card-title
              class="pl-0 pt-0"
              style="font-weight: 700; font-size: 32px"
              >Your Cart
            </v-card-title>

            <v-card-text
              v-if="!cartItems.length"
              style="font-size: 18px"
              class="text-center"
            >
              You Card is empty
            </v-card-text>
            <v-card-actions class="d-flex justify-center">
              <v-btn
                @click="router.push('/')"
                v-if="!cartItems.length"
                style="border-color: #6f6f6f"
                class="w-25 rounded-xl"
                variant="outlined"
              >
                Continue Shopping
              </v-btn>
            </v-card-actions>

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
            <v-card-text
              class="pl-0"
              v-if="cartItems.length && 10000 - total > 0"
            >
              Only ${{ 10000 - total }} away from Free Shipping</v-card-text
            >
          </v-card>
        </v-col>

        <v-col cols="8">
          <v-table v-if="cartItems.length" class="w-100">
            <thead class="pb-10">
              <tr>
                <th
                  style="font-weight: bold; font-size: 13px; text-align: center"
                >
                  Product
                </th>
                <th
                  style="font-weight: bold; font-size: 13px; text-align: center"
                >
                  Price
                </th>
                <th
                  style="font-weight: bold; font-size: 13px; text-align: center"
                >
                  Quantity
                </th>
                <th
                  style="font-weight: bold; font-size: 13px; text-align: center"
                >
                  Total
                </th>
                <th
                  style="font-weight: bold; font-size: 13px; text-align: center"
                ></th>
              </tr>
            </thead>
            <tbody class="mt-10">
              <tr v-for="item in cartItems" :key="item.id">
                <td style="width: 55%">
                  <v-row class="align-center">
                    <v-col cols="5">
                      <img class="w-100 pa-4" :src="item?.thumbnail" alt="" />
                    </v-col>
                    <v-col cols="7">
                      <v-card elevation="0" color="transparent">
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
                      </v-card>
                    </v-col>
                  </v-row>
                </td>
                <td class="text-center">
                  <v-card-text class="px-0 pb-2 pt-0">
                    <span>
                      ${{
                        Math.ceil(
                          item.price -
                            (item.price * item.discountPercentage) / 100
                        )
                      }}
                    </span>
                  </v-card-text>
                </td>
                <td class="text-center">
                  <v-card-text class="px-0 pt-0 d-flex justify-center">
                    <div
                      style="
                        border: 1px solid black;
                        border-radius: 30px;
                        width: fit-content;
                        padding: 4px;
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
                          font-size: 14px;
                        "
                        type="number"
                        number
                      />
                      <span class="cursor-pointer" @click="item.quantity++"
                        ><v-icon>mdi-plus</v-icon></span
                      >
                    </div>
                  </v-card-text>
                </td>
                <td class="text-center">
                  ${{
                    Math.ceil(
                      item.price - (item.price * item.discountPercentage) / 100
                    ) * item.quantity
                  }}
                </td>
                <td class="text-center">
                  <v-icon
                    @click="deleteItemCart(item.id)"
                    class="cursor-pointer"
                  >
                    mdi-close</v-icon
                  >
                </td>
              </tr>
            </tbody>
          </v-table>
          <img
            v-if="cartItems.length"
            class="mt-10"
            width="300"
            src="/src/assets/images/cart-page-cards.webp"
            alt=""
          />
        </v-col>
        <v-col v-if="cartItems.length" cols="4">
          <v-card elevation="0">
            <v-card-title class="pl-0 font-weight-bold" style="font-size: 20px"
              >Order Summaray</v-card-title
            >
            <v-divider :thickness="4" class="border-opacity-100"></v-divider>
            <v-card-text
              style="font-size: 15px; font-weight: 700"
              class="pl-0 d-flex justify-space-between"
              ><span> Subtotal </span> ${{ total }}</v-card-text
            >
            <v-divider class="pt-2"></v-divider>
            <v-card-text class="pl-0" style="font-weight: 600">
              Get shipping estimate :
              <v-select
                density="comfortable"
                class="pt-4"
                v-model="country"
                :items="['Uzbekistan', 'Japan', 'Korea', 'USA']"
              >
              </v-select>
              <div
                style="gap: 10px"
                class="d-flex align-center justify-space-between"
              >
                <v-select
                  density="comfortable"
                  class="pt-4"
                  v-model="region"
                  :items="[
                    'Tashkent',
                    'California',
                    'Colorado',
                    'Florida',
                    'Georgia',
                    'Texas',
                    'Wyoming',
                  ]"
                >
                </v-select>
                <v-text-field
                  class="mt-4"
                  label="Postal Code"
                  density="comfortable"
                ></v-text-field>
              </div>
            </v-card-text>
            <v-divider class="mt-4"></v-divider>

            <v-card-text class="pl-0">
              <p style="font-weight: 700">Cupon Code</p>
              <v-text-field
                class="mt-4"
                placeholder="Enter Cupon code"
                density="comfortable"
              ></v-text-field>
              <p style="color: #6f6f6f; padding-top: 0; font-size: 12px">
                Cupon code will be applied on the cheout page
              </p>
            </v-card-text>
            <v-divider class="mt-4"></v-divider>
            <v-card-text
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: 800;
                text-transform: uppercase;
              "
            >
              <span>Total : </span>
              <span>${{ total }} </span>
            </v-card-text>
            <v-divider class="mt-4"></v-divider>
            <p style="color: #6f6f6f; padding-top: 0; font-size: 12px">
              Tax included and shipping calculeted at checkout
            </p>
            <v-card-text class="d-flex flex-column pl-0">
              <v-btn
                style="text-transform: capitalize"
                background-color="primary"
                class="w-100 pl-0 pr-0"
                color="primary mt-4"
              >
                Proceed to Checkout</v-btn
              >
              <v-btn
                style="text-transform: capitalize"
                variant="outlined"
                class="w-100 pl-0 pr-0 mt-5"
              >
                Continue Shopping</v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { cartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const { cartItems } = storeToRefs(cartStore());
const { deleteItemCart } = cartStore();

const router = useRouter();

const country = ref("Uzbekistan");
const region = ref("Tashkent");
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

<style scoped></style>
