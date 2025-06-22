<template>
  <div class="new-products pt-12">
    <v-container fluid>
      <div class="title d-flex align-center justify-space-between pr-5">
        <h1 class="pl-7" style="font-weight: 800; color: black">
          New Products
        </h1>
      </div>
      <v-row>
        <v-col cols="7" class="pt-12" v-if="!products.length">
          <v-row>
            <v-col cols="4" v-for="num in 3" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="8" class="pt-12" v-else>
          <Swiper
            :breakpoints="breakPoints"
            :autoplay="{ delay: 3000 }"
            :pagination="{ el: '.swiperPagination', clickable: true }"
            :modules="modules"
            slides-per-view="3"
            :space-between="10"
          >
            <swiper-slide v-for="i in products" :key="i.id">
              <v-card class="pl-4 pb-5 pt-5 mr-2 ml-2" elevation="0">
                <v-hover v-slot="{ isHovering, props }">
                  <div class="image-parent position-relative">
                    <img
                      class="w-100"
                      :src="
                        shownItem[i.title] ? shownItem[i.title] : i.thumbnail
                      "
                      alt=""
                      v-bind="props"
                      :style="`cursor:pointer; transition:0.3s all ease-in-out; scale: ${
                        isHovering ? 1.05 : 1
                      }`"
                    />
                    <v-btn
                      class="quickViewBtn"
                      density="compact"
                      width="60"
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
                      : `(${i.title})  ${i.description}`.substring(0, 76) +
                        "..."
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
                      Math.ceil(
                        i.price - i.price * (i.discountPercentage / 100)
                      )
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
                    class="py-3 px-12"
                    style="text-transform: none; border-radius: 30px"
                    variant="outlined"
                    @click="
                      $router.push({
                        name: 'productDetails',
                        query: { productId: i.id },
                      })
                    "
                    >Choose Options</v-btn
                  >
                </div>
              </v-card>
            </swiper-slide>
            <div
              class="swiperPagination d-flex justify-center align-center mt-5"
            ></div>
          </Swiper>
        </v-col>
        <v-col cols="12" md="5">
          <img src="@/assets/vr-banner.webp" class="width-100" alt="" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Autoplay } from "swiper";
import { VSkeletonLoader } from "vuetify/lib/components";
export default {
  inject: ["Emitter"],

  props: {
    products: {
      type: Array,
    },
  },
  data: () => ({
    shownItem: {},
    breakPoints: {
      0: {
        slidesPerView: 1,
      },
      580: {
        slidesPerView: 2,
      },
      800: {
        slidesPerView: 3,
      },
      990: {
        slidesPerView: 3,
      },
    },
  }),
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
  components: {
    Swiper,
    SwiperSlide,
    VSkeletonLoader,
  },
  setup() {
    return {
      modules: [Pagination, Autoplay],
    };
  },
};
</script>
