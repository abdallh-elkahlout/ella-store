<template>
  <div class="sheckOut">
    <v-container fluid class="ma-0 pa-0">
      <v-row>
        <v-col cols="7"></v-col>
        <v-col cols="5">
          <v-card
            color="grey-lighten-3"
            class="pt-10 pl-7 pr-16"
            elevation="0"
            width="100%"
          >
            <v-card
              color="transparent"
              class="my-2 mx-4 pt-2"
              style="
                display: flex;
                justify-content: space-between;
                align-items: center;
              "
              elevation="0"
              v-for="item in cartItems"
              :key="item.id"
            >
              <v-badge :content="item.quantity" color="grey-darken-1">
                <img
                  class="bg-white"
                  :src="item.thumbnail"
                  alt=""
                  width="75"
                  height="75"
                  style="border-radius: 10px; border: 1px solid #d5d3d3"
                />
              </v-badge>
              <div class="title-parent flex-grow-1">
                <v-card-title
                  style="
                    font-size: 14px;
                    font-weight: 700;
                    color: #484848;
                    white-space: pre-wrap;
                    line-height: 1.3;
                  "
                  >({{ item.title }}) Sample - {{ item.category }} For
                  Sale</v-card-title
                >
                <v-card-text
                  style="font-size: 13px; color: #777777; white-space: pre-wrap"
                  >{{ item.category }}</v-card-text
                >
              </div>
              <v-card-text
                style="font-size: 14px; color: #484848"
                class="flex-grow-0 pr-5"
              >
                ${{
                  Math.ceil(
                    item.price - item.price * (item.discountPercentage / 100)
                  ) * item.quantity
                }}
              </v-card-text>
            </v-card>
            <v-divider length="100%" color="black"></v-divider>
            <v-divider length="100%" color="black"></v-divider>
            <v-card-text
              class="pr-10 font-weight-bold d-flex align-center justify-space-between"
            >
              <span>Total</span><span>${{ calcTotalPrice }}</span>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { cartStore } from "@/store/cart";
import { mapState } from "pinia";

export default {
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
};
</script>
