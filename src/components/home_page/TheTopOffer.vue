<template>
  <div class="top_offer pt-7 bg-grey-lighten-4 pb-10">
    <v-container fluid>
      <v-row>
        <v-col cols="4" class="py-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="/src/assets/images/playstations.webp"
                style="width: 100%; height: 100%; transition: 0.8s"
                :style="{ scale: isHovering ? '1.07' : 1 }"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4" class="py-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="/src/assets/images/headset.webp"
                style="width: 100%; height: 100%; transition: 0.8s"
                :style="{ scale: isHovering ? '1.07' : 1 }"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="4" class="py-0">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="/src/assets/images/chairs.webp"
                style="width: 100%; height: 100%; transition: 0.8s"
                :style="{ scale: isHovering ? '1.07' : 1 }"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="/src/assets/images/iphones.webp"
                style="width: 100%; height: 100%; transition: 0.8s"
                :style="{ scale: isHovering ? '1.07' : 1 }"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="6">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; height: 100%; border-radius: 7px"
            >
              <img
                src="/src/assets/images/laptops.webp"
                style="width: 100%; height: 100%; transition: 0.8s"
                :style="{ scale: isHovering ? '1.07' : 1 }"
                alt=""
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.parent {
  padding: 8px;
}
</style>
