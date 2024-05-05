<template>
  <div>
    <h1>
      User
      {{ user }}
    </h1>

    <v-btn @click="user.age++"> user clicked</v-btn>
  </div>
</template>

<script setup lang="ts">
import { onUpdated } from "vue";

const props = defineProps<{
  user: any;
}>();

onUpdated(() => {
  console.log("user updated");
});
</script>

<style scoped></style>
