import { defineStore } from "pinia";
export const cartStore = defineStore("cartStore", {
  state: () => {
    return {
      cartItems: [],
    };
  },
  actions: {
    addToCart(item) {
      let exists = false;
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == item.id) {
          this.cartItems[i].quantity += item.quantity;
          exists = true;
          break;
        }
      }
      if (!exists) {
        this.cartItems.push(JSON.parse(JSON.stringify(item)));
      }
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
      console.log(this.cartItems);
    },
    getCartItems() {
      if (localStorage.getItem("cartItems")) {
        this.cartItems = JSON.parse(localStorage.getItem("cartItems"));
      }
      console.log(this.cartItems);
    },
    deleteItem(id) {
      for (let i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].id == id) {
          this.cartItems.splice(i, 1);
          break;
        }
      }
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    setToLocalStorage() {
      localStorage.setItem("cartItems", JSON.stringify(this.cartItems));
    },
    resetItems() {
      this.cartItems = [];
      localStorage.removeItem("cartItems");
    },
  },
});
