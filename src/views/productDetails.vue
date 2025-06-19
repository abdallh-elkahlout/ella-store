<template>
  <div class="product-details" style="margin-top: 50px">
    <v-container>
      <v-row>
        <v-col cols="7">
          <img
            :src="tab ? tab : singleProduct.thumbnail"
            class="w-100"
            alt=""
            height="500"
            v-if="!loading"
          />
          <v-skeleton-loader v-if="loading" type="image,image , image">
          </v-skeleton-loader>
          <v-tabs center-active height="150" v-model="tab" class="mt-10">
            <v-tab
              v-for="(img, i) in singleProduct.images"
              :key="i"
              class="mx-10"
              :value="img"
            >
              <img :src="img" alt="" width="100" height="120" />
            </v-tab>
          </v-tabs>
        </v-col>
        <v-col cols="5" class="pt-16">
          <v-skeleton-loader
            v-if="loading"
            type="article, article, article"
          ></v-skeleton-loader>
          <v-card elevation="0" v-if="!loading">
            <v-card-title
              style="text-wrap: initial; font-size: 18px; font-weight: bold"
              >{{ singleProduct.title }} Sample -
              {{ singleProduct.category }} For Sale</v-card-title
            >
            <div class="rating-parent d-flex align-center" style="gap: 10px">
              <v-rating
                class="pl-3"
                v-model="singleProduct.rating"
                half-incerements
                readonly
                size="small"
                color="yellow-darken-2"
                density="compact"
              >
              </v-rating>
              <span style="color: rgb(96, 96, 96); font-size: 14px"
                >Stock: {{ singleProduct.stock }}</span
              >
            </div>
            <v-card-text style="color: rgb(96, 96, 96); font-size: 14px">
              {{ singleProduct.description }}
            </v-card-text>
            <v-card-text
              class="pt-1"
              style="color: rgb(96, 96, 96); font-size: 14px"
            >
              <span class="text-black">Brand:</span>
              {{ singleProduct.brand }}
            </v-card-text>
            <v-card-text
              class="pt-1"
              style="color: rgb(96, 96, 96); font-size: 14px"
            >
              <span class="text-black">Availability:</span>
              {{ singleProduct.stock > 0 ? "In Stock" : "Out Of Stock" }}
            </v-card-text>
            <v-card-text class="pt-0">
              <del> ${{ singleProduct.price }}</del>
              from
              <span style="font-weight: 900; font-size: 15px">
                ${{
                  Math.ceil(
                    singleProduct.price -
                      singleProduct.price *
                        (singleProduct.discountPercentage / 100)
                  )
                }}</span
              >
            </v-card-text>
            <v-card-text>
              <span class="text-black">Quantity:</span>
              <div
                class="counter px-2 mt-2"
                style="
                  border-radius: 30px;
                  border: 1px solid rgb(96, 96, 96);
                  width: fit-content;
                "
              >
                <v-icon size="25" @click="Quantity > 1 ? Quantity-- : false"
                  >mdi-minus</v-icon
                >
                <input
                  min="1"
                  :value="Quantity"
                  type="number"
                  style="
                    font-size: 15px;
                    outline: none;
                    border: none;
                    width: 60px;
                  "
                  class="text-center py-2"
                />
                <v-icon size="25" @click="Quantity++">mdi-plus</v-icon>
              </div>
            </v-card-text>
            <v-card-text class="pt-1">
              Subtotal: $
              {{
                Math.ceil(
                  singleProduct.price -
                    singleProduct.price *
                      (singleProduct.discountPercentage / 100)
                ) * Quantity
              }}
            </v-card-text>
            <v-card-actions class="mt-5 w-100">
              <v-btn
                variant="outlined"
                density="compact"
                height="45px"
                class="w-75"
                style="
                  background-color: rgb(20, 20, 20);
                  text-transform: none;
                  border-radius: 30px;
                  color: white;
                "
                @click="addCartItems(singleProduct)"
                :loading="btnLoading"
                >Add To Cart</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { productsModule } from "@/store/products";
import { mapActions, mapState } from "pinia";
import { cartStore } from "@/store/cart";
export default {
  inject: ["Emitter"],
  data: () => ({
    tab: "",
    Quantity: 1,
    loading: false,
    btnLoading: false,
  }),
  methods: {
    ...mapActions(productsModule, ["getProduct"]),
    ...mapActions(cartStore, ["addToCart"]),
    addCartItems(item) {
      item.quantity = this.Quantity;
      this.btnLoading = true;
      this.addToCart(item);
      setTimeout(() => {
        this.btnLoading = false;
        this.Emitter.emit("openCart");
        this.Emitter.emit("showMsg", item.title);
      }, 1000);
    },
  },
  computed: {
    ...mapState(productsModule, ["singleProduct"]),
    ...mapState(cartStore, ["cartItems"]),
  },
  async mounted() {
    this.loading = true;
    await this.getProduct(this.$route.params.productId);
    this.loading = false;
    this.Emitter.on("openQuickView", (data) => {
      this.singleProduct = data;
    });
  },
};
</script>
