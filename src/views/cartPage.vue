<template>
  <div class="cart_page" style="margin-top: 50px">
    <v-container fluid>
      <v-row>
        <v-card class="w-100" elevation="0">
          <v-col cols="12" class="pb-0 px-0">
            <v-breadcrumbs
              :items="['Home', 'your cart']"
              style="font-size: 14px"
            >
              <template v-slot:divider>
                <v-icon color="#878484">mdi-chevron-right</v-icon>
              </template>
            </v-breadcrumbs>
          </v-col>
          <v-col cols="12" class="pt-0">
            <v-card-title
              class="d-flex pb-0 justify-space-between align-center"
              style="font-size: 30px; font-weight: 700"
            >
              Your Cart
            </v-card-title>
            <div
              class="bar-parent position-relative px-4 mt-2"
              v-if="cartItems.length"
            >
              <svg
                :style="`
              position: absolute;
              bottom: 50%;
              z-index: 1;
              left: calc(${
                parseInt((calcTotalPrice / 10000) * 100) <= 100
                  ? parseInt((calcTotalPrice / 10000) * 100)
                  : 100
              }% - 30px);
              transition: 0.15s all ease-in-out;`"
                class="icon-shipping-truck"
                :fill="
                  parseInt((calcTotalPrice / 10000) * 100) < 50
                    ? '#F44336'
                    : parseInt((calcTotalPrice / 10000) * 100) > 50 &&
                      parseInt((calcTotalPrice / 10000) * 100) < 100
                    ? '#ff9800'
                    : '#4CAF50'
                "
                viewBox="0 0 40.55 24"
                width="30"
              >
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="truck-body"
                      d="M40.43,11a3.86,3.86,0,0,0-3.68-2.65H28a1.25,1.25,0,0,1-1.43-1.43c0-2.18,0-4.35,0-6.53,0-.31-.08-.36-.37-.36H5.11a1.18,1.18,0,0,0-1.3,1.32c0,.74,0,1.48,0,2.22,0,.21-.06.27-.26.26-.36,0-.71,0-1.07,0a1.19,1.19,0,1,0,0,2.37H7.19c.43,0,.85,0,1.27,0a1,1,0,0,1,1.07,1A1.19,1.19,0,0,1,8.24,8.48H1.35a1.83,1.83,0,0,0-.47,0A1.19,1.19,0,0,0,0,9.85a1.18,1.18,0,0,0,1.19,1h9.66c.34,0,.68,0,1,0A1.19,1.19,0,0,1,13,12.47a1.26,1.26,0,0,1-1.26.76H1.24a1.19,1.19,0,1,0,0,2.38c.76,0,1.51,0,2.26,0,.26,0,.33.07.32.32,0,1,0,2.09,0,3.13A1.18,1.18,0,0,0,5.1,20.36c.63,0,1.26,0,1.9,0,.27,0,.39.06.47.36a4.55,4.55,0,0,0,8.78-.11.29.29,0,0,1,.32-.25H28.09a.3.3,0,0,1,.34.27,4.55,4.55,0,0,0,8.8,0,.31.31,0,0,1,.35-.26c.49,0,1,0,1.47,0a1.37,1.37,0,0,0,1.5-.87V11.41C40.41,11.29,40.47,11.12,40.43,11ZM32.84,21.62A2.18,2.18,0,1,1,35,19.45,2.21,2.21,0,0,1,32.84,21.62Zm-21,0A2.18,2.18,0,1,1,14,19.45,2.2,2.2,0,0,1,11.86,21.62Z"
                    ></path>
                    <path
                      class="truck-body"
                      d="M29.27,6h5.85c.1,0,.2,0,.29,0C33.64,2.72,32,.91,28.91.26V.57c0,1.68,0,3.35,0,5C28.9,5.9,29,6,29.27,6Z"
                    ></path>
                    <path
                      class="wheel"
                      fill="white"
                      d="M11.87,17.27A2.18,2.18,0,1,0,14,19.45,2.2,2.2,0,0,0,11.87,17.27Z"
                    ></path>
                    <path
                      class="wheel"
                      fill="white"
                      d="M32.85,17.27A2.18,2.18,0,1,0,35,19.45,2.22,2.22,0,0,0,32.85,17.27Z"
                    ></path>
                  </g>
                </g>
              </svg>
              <v-progress-linear
                rounded
                :color="
                  parseInt((calcTotalPrice / 10000) * 100) < 50
                    ? 'red'
                    : parseInt((calcTotalPrice / 10000) * 100) > 50 &&
                      parseInt((calcTotalPrice / 10000) * 100) < 100
                    ? 'orange'
                    : 'green'
                "
                height="10"
                :model-value="
                  parseInt((calcTotalPrice / 10000) * 100) <= 100
                    ? parseInt((calcTotalPrice / 10000) * 100)
                    : 100
                "
                striped
              ></v-progress-linear>
            </div>

            <v-card-text
              style="color: #6f6f6f"
              class="mt-5"
              v-if="!cartItems.length"
            >
              Free Shipping for All orders over $10000
            </v-card-text>
            <v-card-actions
              v-if="!cartItems.length"
              class="d-flex justify-center align-center flex-column mt-5"
            >
              <v-card-text style="color: rgb(111, 111, 111)">
                Your Cart Is Empty!
              </v-card-text>
              <v-btn
                style="
                  text-transform: none;
                  border-radius: 30px;
                  border-color: rgb(199, 199, 199);
                "
                variant="elevated"
                density="compact"
                height="45"
                class="w-50 mb-5"
                color="#3673e2"
                @click="$router.push({ name: 'home' })"
                >Continue Shopping</v-btn
              >
            </v-card-actions>
            <v-card-text
              style="color: #6f6f6f"
              v-if="cartItems.length && 10000 - calcTotalPrice > 0"
            >
              Only ${{ 10000 - calcTotalPrice }} Away From Free Shipping
            </v-card-text>
            <v-card-text
              style="color: #6f6f6f"
              v-if="cartItems.length && 10000 - calcTotalPrice <= 0"
            >
              Your Order Now Is Inclouded Free Shipping
            </v-card-text>
          </v-col>
          <v-row>
            <v-col cols="8" v-if="cartItems.length">
              <v-table style="overflow-y: hidden">
                <thead class="pl-5">
                  <tr>
                    <th>Product</th>
                    <th class="text-center">Price</th>
                    <th class="text-center">Quantity</th>
                    <th class="text-center">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cartItems" :key="item.id">
                    <td class="pl-0">
                      <v-row class="align-center">
                        <v-col cols="5">
                          <img :src="item.thumbnail" class="w-100" alt="" />
                        </v-col>
                        <v-col cols="7">
                          <v-card-title
                            class="px-0"
                            style="
                              white-space: pre-wrap;
                              font-size: 14px;
                              line-height: 1.2;
                            "
                            >{{ item.title }} Sample -
                            {{ item.category }}</v-card-title
                          >
                          <v-card-text class="px-0" style="color: #6f6f6f"
                            >Catergory: {{ item.category }}</v-card-text
                          >
                        </v-col>
                      </v-row>
                    </td>
                    <td>
                      <v-card-text class="pt-0">
                        <span style="font-size: 15px">
                          ${{
                            Math.ceil(
                              item.price -
                                item.price * (item.discountPercentage / 100)
                            )
                          }}</span
                        >
                      </v-card-text>
                    </td>
                    <td>
                      <v-card-text>
                        <div
                          class="counter px-2 mt-2"
                          style="
                            border-radius: 30px;
                            border: 1px solid #6f6f6f;
                            width: fit-content;
                          "
                        >
                          <v-icon
                            size="20"
                            @click="item.quantity > 1 ? item.quantity-- : false"
                            >mdi-minus</v-icon
                          >
                          <input
                            min="1"
                            v-model="item.quantity"
                            type="number"
                            style="
                              font-size: 15px;
                              outline: none;
                              border: none;
                              width: 30px;
                            "
                            class="text-center py-2"
                          />
                          <v-icon size="20" @click="item.quantity++"
                            >mdi-plus</v-icon
                          >
                        </div>
                      </v-card-text>
                    </td>
                    <td>
                      <v-card-text class="px-0 pt-1" style="font-size: 16px">
                        ${{
                          Math.ceil(
                            item.price -
                              item.price * (item.discountPercentage / 100)
                          ) * item.quantity
                        }}
                      </v-card-text>
                    </td>
                    <td>
                      <div
                        class="item-footer d-flex justify-center align-center"
                      >
                        <v-icon @click="deleteItem(item.id)">mdi-close</v-icon>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
            <v-col cols="4" v-if="cartItems.length">
              <v-card elevation="0">
                <v-card-title style="font-size: 15px; font-weight: 700"
                  >ORDER SUMMARY</v-card-title
                >
                <v-divider length="100%" color="black"></v-divider>
                <v-divider length="100%" color="black"></v-divider>
                <v-divider length="100%" color="black"></v-divider>
                <v-divider length="100%" color="black"></v-divider>
                <v-card-text
                  class="pr-8 d-flex align-center justify-space-between"
                >
                  <span>Subtotal: </span>
                  <span style="font-weight: 800; font-size: 15px"
                    >${{ calcTotalPrice }}</span
                  >
                </v-card-text>
                <v-divider length="100%" color="black"></v-divider>
                <v-card-text> Get Shipping Estamate: </v-card-text>
                <select
                  name=""
                  id=""
                  class="w-100 pa-3"
                  style="
                    border: 1px solid rgb(184, 184, 184);
                    border-radius: 30px;
                    font-size: 14px;
                  "
                >
                  <option value="" v-for="country in countries" :key="country">
                    {{ country }}
                  </option>
                </select>
                <div class="states pt-4">
                  <select
                    name=""
                    id=""
                    class="pa-3"
                    style="
                      border: 1px solid rgb(184, 184, 184);
                      border-radius: 30px;
                      font-size: 14px;
                      width: 55%;
                      margin-right: 1%;
                    "
                  >
                    <option
                      value=""
                      v-for="country in countries"
                      :key="country"
                    >
                      {{ country }}
                    </option>
                  </select>
                  <input
                    class="pa-3"
                    type="text"
                    style="
                      border: 1px solid rgb(184, 184, 184);
                      border-radius: 30px;
                      font-size: 14px;
                      width: 43%;
                      margin-left: 1%;
                    "
                  />
                </div>
                <v-card-actions class="px-0 mt-4">
                  <v-btn
                    style="
                      text-transform: none;
                      border-radius: 30px;
                      border-color: rgb(199, 199, 199);
                    "
                    variant="elevated"
                    density="compact"
                    height="45"
                    class="w-100"
                    color="#3673e2"
                    >Calculate Shipping</v-btn
                  >
                </v-card-actions>
                <v-divider length="100%" class="mt-4" color="black"></v-divider>
                <v-divider length="100%" color="black"></v-divider>
                <v-card-text
                  class="pr-8 d-flex align-center justify-space-between"
                >
                  <span style="font-weight: 800">TOTAL: </span>
                  <span style="font-weight: 800; font-size: 15px"
                    >${{ calcTotalPrice }}</span
                  >
                </v-card-text>
                <v-divider length="100%" class="mt-4" color="black"></v-divider>
                <v-divider length="100%" color="black"></v-divider>
                <v-card-actions class="px-0 my-4 flex-column">
                  <v-btn
                    @click="toCheckOut"
                    style="
                      text-transform: none;
                      border-radius: 0px;
                      border-color: rgb(199, 199, 199);
                    "
                    variant="elevated"
                    density="compact"
                    height="45"
                    class="w-100 d-block"
                    color="#3673e2"
                    >Proceed To Checkout</v-btn
                  >
                  <v-btn
                    style="
                      text-transform: none;
                      border-radius: 0px;
                      border-color: rgb(199, 199, 199);
                    "
                    variant="outlined"
                    density="compact"
                    height="45"
                    class="w-100"
                    @click="$router.push({ name: 'home' })"
                    >Continue Shopping</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
          <v-col cols="12" v-if="cartItems.length">
            <v-card-text
              style="color: #6f6f6f; gap: 10px"
              v-if="cartItems.length"
              class="d-flex align-center"
            >
              <span>
                <svg
                  id="Layer_1"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 179.94 179.96"
                  class="icon icon-shield-check"
                  width="17px"
                >
                  <path
                    d="M90,0,5,42.78C13.73,105.26,38.14,154.32,90,180c51.83-25.64,76.25-74.7,85-137.18Z"
                  ></path>
                  <polygon
                    fill="white"
                    class="cls-1"
                    points="149.83 67.57 134.81 52.55 79.31 108.05 49.74 78.48 34.72 93.5 79.15 137.94 79.31 137.78 79.47 137.94 149.83 67.57"
                  ></polygon>
                </svg>
              </span>
              <span>Secure Shopping Guarantee</span>
            </v-card-text>
            <img
              src="@/assets/cart-page-cards.webp"
              alt=""
              style="width: 400px"
            />
          </v-col>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { cartStore } from "@/store/cart";
import { mapActions, mapState } from "pinia";

export default {
  data: () => ({
    countries: ["Palestine", "Lebanon", "Unaited States", "Jordan"],
  }),
  computed: {
    ...mapState(cartStore, ["cartItems"]),
    calcTotalPrice() {
      let total = 0;
      this.cartItems.forEach((product) => {
        total +=
          Math.ceil(
            product.price - product.price * (product.discountPercentage / 100)
          ) * product.quantity;
      });
      return total;
    },
  },
  methods: {
    ...mapActions(cartStore, [
      "getCartItems",
      "deleteItem",
      "setToLocalStorage",
    ]),
    toCheckOut() {
      this.setToLocalStorage();
      this.$router.push({ name: "checkOut" });
    },
  },
};
</script>
