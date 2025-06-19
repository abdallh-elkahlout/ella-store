<template>
  <div class="products-category" style="padding-top: 45px">
    <h1 class="text-center mt-5" style="color: rgb(71, 71, 71)">
      {{ $route.query.title }}
    </h1>
    <v-container fluid class="px-16">
      <v-card :loading="loading" elevation="2" class="pt-8">
        <v-row v-if="loading">
          <v-col cols="3" v-for="num in 4" :key="num">
            <v-skeleton-loader
              type="image, article, button"
            ></v-skeleton-loader>
            v-if="selectedLang[0]"
          </v-col>
        </v-row>
        <v-row v-if="!loading">
          <v-col
            cols="3"
            class="px-5"
            v-for="i in categoryProducts.products"
            :key="i.id"
          >
            <v-card class="pl-4 pb-5 pt-5 mt-14" elevation="0">
              <v-hover v-slot="{ isHovering, props }">
                <div class="image-parent position-relative">
                  <img
                    class="w-100"
                    :src="shownItem[i.title] ? shownItem[i.title] : i.thumbnail"
                    alt=""
                    v-bind="props"
                    :style="`cursor:pointer; transition:0.3s all ease-in-out; scale: ${
                      isHovering ? 1.05 : 1
                    }`"
                  />
                  <v-btn
                    class="quickViewBtn"
                    density="compact"
                    width="90"
                    height="30"
                    varient="outlined"
                    style="
                      font-size: 12px;
                      text-transform: none;
                      border-radius: 30px;
                      position: absolute;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%);
                      transition: 0.2 all ease-in-out;
                      opacity: 0;
                    "
                    @click="openQuickView(i)"
                    >Quick view</v-btn
                  >
                </div>
              </v-hover>
              <v-card-text class="pl-0">
                {{
                  `(${i.title}) ${i.description}`.length <= 76
                    ? `(${i.title}) ${i.description}`
                    : `(${i.title})  ${i.description}`.substring(0, 76) + "..."
                }}
              </v-card-text>
              <v-card-text class="pl-0 pt-0">
                <del> ${{ i.price }}</del>
                from
                <span
                  class="text-red"
                  style="font-weight: 900; font-size: 15px"
                >
                  ${{
                    Math.ceil(i.price - i.price * (i.discountPercentage / 100))
                  }}</span
                >
              </v-card-text>
              <v-btn-toggle v-model="shownItem[i.title]" mandatory>
                <v-btn
                  v-for="(pic, i) in i.images"
                  :value="pic"
                  :key="i"
                  size="x-small"
                  rounded="xl"
                  :ripple="false"
                >
                  <img
                    :src="pic"
                    alt=""
                    width="30"
                    height="30"
                    style="
                      border: solid 1px rgb(0, 90, 158);
                      border-radius: 50%;
                    "
                  />
                </v-btn>
              </v-btn-toggle>
              <div class="btns mt-5">
                <v-btn
                  density="compact"
                  width="170"
                  height="40"
                  style="text-transform: none; border-radius: 30px"
                  variant="outlined"
                  @click="
                    $router.push({
                      name: 'productDetails',
                      params: { productId: i.id },
                    })
                  "
                  >Choose Options</v-btn
                >
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { productsModule } from "@/store/products";
import { mapActions, mapState } from "pinia";

export default {
  inject: ["Emitter"],
  data: () => ({
    shownItem: {},
    loading: false,
  }),
  methods: {
    ...mapActions(productsModule, ["getProductsByCategory"]),
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  computed: {
    ...mapState(productsModule, ["categoryProducts"]),
  },
  watch: {
    async $route() {
      this.loading = true;
      await this.getProductsByCategory(this.$route.query.category);
      this.loading = false;
    },
  },
  async mounted() {
    if (!this.$route.query.category) {
      this.$router.go(-1);
      return;
    }
    this.loading = true;
    await this.getProductsByCategory(this.$route.query.category);
    this.loading = false;
  },
};
</script>
<style lang="scss">
.new-products {
  .image-parent:hover {
    .quick-view-btn {
      opacity: 1 !important;
    }
  }
}
</style>
