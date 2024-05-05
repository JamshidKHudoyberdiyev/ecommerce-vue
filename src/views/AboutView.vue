<template>
  <div class="child">
    <div class="bg-green">parent {{ user }}</div>

    <v-btn @click="user.age++">addd++ age</v-btn>
    <div class="bg-red">
      <h1>Child</h1>
      <User :user="user" />
    </div>
  </div>
</template>
<script setup lang="ts">
import User from "./User.vue";

import { onMounted, onUpdated, ref } from "vue";

let user = ref<any>({
  name: "dddd",
  age: 89,
});

onMounted(() => {
  console.log("render");
});
onUpdated(() => {
  console.log("updated");
});
</script>

<style></style>
