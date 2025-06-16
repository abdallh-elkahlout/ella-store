<template>
  <div class="home">
    <bannerSection />
    <featureSection />
    <topOffers />
    <productsComp :products="flashDeals" title="Flash Deals" titleColor="red" />
    <topCat />
    <newProducts :products="newProducts" />
    <qualityFetures />
    <productsComp :products="furniture" title="furniture" />
    <v-container fluid class="pt-10">
      <v-row>
        <v-col cols="6">
          <img class="w-100" src="@/assets/band-left-cover.webp" alt="" />
        </v-col>
        <v-col cols="6">
          <img class="w-100" src="@/assets/band-right-cover.webp" alt="" />
        </v-col>
      </v-row>
    </v-container>
    <productsComp :products="beauty" title="Beauty" />
    <v-container fluid class="pt-10">
      <v-row>
        <v-col cols="12">
          <img class="w-100" src="@/assets/tv-banner.webp" alt="" />
        </v-col>
      </v-row>
    </v-container>
    <productsComp :products="groceries" title="Groceries" />
    <whyShop />
  </div>
</template>

<script>
import bannerSection from "@/components/home-page/UpperBaner.vue";
import featureSection from "@/components/home-page/theFeature.vue";
import topOffers from "@/components/home-page/topOffers.vue";
import productsComp from "@/components/home-page/productsComp.vue";
import topCat from "@/components/home-page/topCategories.vue";
import newProducts from "@/components/home-page/newProducts.vue";
import qualityFetures from "@/components/home-page/qualityFetures.vue";
import whyShop from "@/components/home-page/whyShop.vue";
import { productsModule } from "@/store/products";
import { mapActions, mapState } from "pinia";

export default {
  name: "homeView",
  components: {
    bannerSection,
    featureSection,
    topOffers,
    productsComp,
    topCat,
    newProducts,
    qualityFetures,
    whyShop,
  },
  methods: {
    ...mapActions(productsModule, ["getProducts", "newProducts"]),
  },
  async mounted() {
    await this.getProducts();
  },
  computed: {
    ...mapState(productsModule, [
      "flashDeals",
      "newProducts",
      "furniture",
      "beauty",
      "groceries",
    ]),
  },
};
</script>
