<template>
  <div class="why_shop_us pa-5">
    <v-container fluid>
      <h2
        style="
          font-weight: 900;
          text-align: center;
          padding-bottom: 60px;
          font-size: 40px;
          text-transform: capitalize;
        "
      >
        <span style="color: aqua">why shop</span> with up ?
      </h2>
      <v-row>
        <v-col cols="3">
          <v-card class="text-center pa-5" color="transparent" elevation="0">
            <img src="/src/assets/images/free-shipping.png" alt="" />
            <v-card-title style="font-weight: 700; color: white">
              Free shipping on first order</v-card-title
            >
            <v-card-text style="color: white"
              >Lorem ipsum dolor sit amet.</v-card-text
            >
            <a href="" style="color: white">Learn more</a>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="text-center pa-5" color="transparent" elevation="0">
            <img src="/src/assets/images/weekly-flash-sales.png" alt="" />
            <v-card-title style="font-weight: 700; color: white">
              Weekly flash sale</v-card-title
            >
            <v-card-text style="color: white"
              >Lorem ipsum dolor sit amet.</v-card-text
            >
            <a href="" style="color: white">Learn more</a>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="text-center pa-5" color="transparent" elevation="0">
            <img src="/src/assets/images/discount.png" alt="" />
            <v-card-title style="font-weight: 700; color: white">
              Anual payment discount</v-card-title
            >
            <v-card-text style="color: white"
              >Lorem ipsum dolor sit amet.</v-card-text
            >
            <a href="" style="color: white">Learn more</a>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="text-center pa-5" color="transparent" elevation="0">
            <img src="/src/assets/images/cash-back.png" alt="" />
            <v-card-title style="font-weight: 700; color: white">
              Cashback Reward Program</v-card-title
            >
            <v-card-text style="color: white"
              >Lorem ipsum dolor sit amet.</v-card-text
            >
            <a href="" style="color: white">Learn more</a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.why_shop_us {
  background-image: url(/src/assets/images/why-shop-with-us-banner.webp);
  background-size: cover;
}
</style>
