import { defineStore } from "pinia";
import axios from "axios";

export const productsModule = defineStore("productsModule", {
  state: () => ({
    FlashDeals: [],
    newProducts: [],
    furniture: [],
    beauty: [],
    groceries: [],
    categoryProducts: [],
    singleProduct: "",
    categories: [
      {
        route: "beauty",
        title: "Beauty",
        url: "https://dummyjson.com/products/category/beauty",
      },
      {
        route: "fragrances",
        title: "Fragrances",
        url: "https://dummyjson.com/products/category/fragrances",
      },
      {
        route: "furniture",
        title: "Furniture",
        url: "https://dummyjson.com/products/category/furniture",
      },
      {
        route: "groceries",
        title: "Groceries",
        url: "https://dummyjson.com/products/category/groceries",
      },
      {
        route: "home-decoration",
        title: "Home Decoration",
        url: "https://dummyjson.com/products/category/home-decoration",
      },
      {
        route: "kitchen-accessories",
        title: "Kitchen Accessories",
        url: "https://dummyjson.com/products/category/kitchen-accessories",
      },
      {
        route: "beauty",
        title: "beauty",
        url: "https://dummyjson.com/products/category/beauty",
      },
      {
        route: "mens-shirts",
        title: "Mens Shirts",
        url: "https://dummyjson.com/products/category/mens-shirts",
      },
    ],
  }),
  actions: {
    async getProducts() {
      await axios
        .get("https://dummyjson.com/products")
        .then((response) => {
          console.log(response.data.products);
          this.newProducts = response.data.products
            .filter((el) => el.category === "fragrances")
            .slice(0, 10);
          this.flashDeals = response.data.products.slice(0, 10);
          this.furniture = response.data.products
            .filter((el) => el.category === "furniture")
            .slice(0, 10);
          this.beauty = response.data.products
            .filter((el) => el.category === "beauty")
            .slice(0, 10);
          this.groceries = response.data.products
            .filter((el) => el.category === "groceries")
            .slice(0, 10);
        })
        .catch((error) => console.log(error));
    },
    async getProductsByCategory(category) {
      await axios
        .get(`https://dummyjson.com/products/category/${category}`)
        .then((response) => (this.categoryProducts = response.data));
    },
    async getProduct(productId) {
      await axios
        .get(`https://dummyjson.com/products/${productId}`)
        .then((response) => (this.singleProduct = response.data));
    },
  },
});
