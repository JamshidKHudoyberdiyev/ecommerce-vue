import { defineStore } from "pinia";
import { ref } from "vue";

export const viewProdcutStore = defineStore("viewProdcutStore", () => {
  const product = ref<any>({});
  const dialog = ref(false);

  const productLoading = ref(false);

  const openDialog = () => {
    dialog.value = true;
  };
  const closeDialog = () => {
    dialog.value = false;
  };

  const setProduct = (data: any) => {
    productLoading.value = true;
    product.value = data;
    productLoading.value = false;
  };

  return {
    product,
    openDialog,
    dialog,
    closeDialog,
    setProduct,
    productLoading,
  };
});
