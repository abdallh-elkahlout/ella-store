import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import productsCategory from "../views/productsCategory.vue";
import productDetails from "../views/productDetails.vue";
import cartPage from "../views/cartPage.vue";
import checkOut from "../views/checkOut.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products/",
    name: "productsCategory",
    component: productsCategory,
  },
  {
    path: "/products/product-details/:productId",
    name: "productDetails",
    component: productDetails,
  },
  {
    path: "/cart-page",
    name: "cartPage",
    component: cartPage,
  },
  {
    path: "/check-out",
    name: "checkOut",
    component: checkOut,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
