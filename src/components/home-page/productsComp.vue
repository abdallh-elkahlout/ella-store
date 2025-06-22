<template id="products">
  <div class="flash-deals pt-10">
    <div class="title d-flex align-center justify-space-between pr-5">
      <h1
        :class="[`text-${titleColor}`]"
        style="font-weight: 800; padding-left: 35px"
      >
        {{ title }}
      </h1>
    </div>
    <v-container fluid v-if="!products.length">
      <v-row>
        <v-col cols="12" class="pt-12">
          <v-row>
            <v-col cols="3" v-for="num in 4" :key="num">
              <v-skeleton-loader
                type="image, article, button"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <Swiper
      :autoplay="{
        delay: 3000,
      }"
      :pagination="{ el: '.swiperPagination', clickable: true }"
      :modules="modules"
      slides-per-view="4"
      :space-between="10"
      :navigation="true"
      :breakpoints="breakPoints"
    >
      <swiper-slide v-for="i in products" :key="i.id">
        <v-card class="pl-4 pb-5" elevation="0">
          <v-hover v-slot="{ isHovering, props }">
            <div class="image-parent position-relative">
              <img
                class="w-100"
                :src="shownItem[i.title] ? shownItem[i.title] : i.thumbnail"
                alt=""
                v-bind="props"
                :style="`cursor:pointer; transition:0.3s all ease-in-out; scale: ${
                  isHovering ? 1.09 : 1
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
                : `(${i.title})  ${i.description}`.substring(0, 76) + "..."
            }}
          </v-card-text>
          <v-rating
            readonly
            class="pb-1"
            v-model="i.rating"
            half-increments
            color="yellow-darken-3"
            size="small"
            density="compact"
          >
          </v-rating>
          <v-card-text class="pl-0 pt-0">
            <del> ${{ i.price }}</del>
            from
            <span class="text-red" style="font-weight: 900; font-size: 15px">
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
                style="border: solid 1px rgb(0, 90, 158); border-radius: 50%"
              />
            </v-btn>
          </v-btn-toggle>
          <div class="btns mt-5">
            <v-btn
              @click="
                $router.push({
                  name: 'productDetails',
                  params: { productId: i.id },
                })
              "
              density="compact"
              class="py-3 px-12"
              style="text-transform: none; border-radius: 30px"
              variant="outlined"
              >Choose Options</v-btn
            >
          </div>
        </v-card>
      </swiper-slide>
      <div
        class="swiperPagination d-flex justify-center align-center mt-5"
      ></div>
    </Swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import { Pagination, Navigation, Autoplay } from "swiper";

export default {
  name: "productsComp",
  inject: ["Emitter"],
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
    },
    titleColor: {
      type: String,
    },
  },
  data: () => ({
    shownItem: {},
    breakPoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      990: {
        slidesPerView: 4,
      },
    },
  }),
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Autoplay],
    };
  },
  methods: {
    openQuickView(product) {
      this.Emitter.emit("openQuickView", product);
    },
  },
};
</script>
<style lang="scss">
.flash-deals {
  .swiper-button-next {
    &::after {
      font-size: 15px;
      color: black;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      padding: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      font-weight: 900;
    }
  }
  .swiper-button-prev {
    &::after {
      font-size: 15px;
      color: black;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      padding: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      font-weight: 900;
    }
  }
}

.swiper-navigation-bullet {
  width: 10px;
  height: 20px;
}

.image-parent:hover {
  .quickViewBtn {
    opacity: 1 !important;
  }
}
</style>
