import { defineStore } from "pinia";
import { ref } from "vue";

export const cartStore = defineStore("cartStore", () => {
  const cartItems = ref<any[]>([]);

  function addToCart(item: any) {
    let isAdd = true;

    for (let i = 0; i < cartItems.value.length; i++) {
      if (cartItems.value[i].id == item.id) {
        cartItems.value[i].quantity += item.quantity;
        isAdd = false;
        break;
      }
    }

    if (isAdd) {
      cartItems.value.push(JSON.parse(JSON.stringify(item)));
    }
    localStorage.setItem("cart_items", JSON.stringify(cartItems.value));
  }

  function getCartItems() {
    if (localStorage.getItem("cart_items")) {
      cartItems.value = JSON.parse(localStorage.getItem("cart_items"));
    }
  }

  function deleteItemCart(id: any) {
    for (let i = 0; i < cartItems.value.length; i++) {
      if (cartItems.value[i].id == id) {
        cartItems.value.splice(i, 1);
        break;
      }
    }
  }

  return {
    cartItems,
    addToCart,
    getCartItems,
    deleteItemCart,
  };
});
