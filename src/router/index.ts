import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products/:category",
      name: "product",
      component: () => import("../views/ProductCategory.vue"),
    },
    {
      path: "/products/prodcutdetails/:id",
      name: "productDetails",
      component: () => import("../views/ProductDetails.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/cart-page",
      name: "cart_page",
      component: () => import("../views/CartPage.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
});

export default router;
