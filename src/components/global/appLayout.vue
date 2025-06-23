<template>
  <div class="layout">
    <v-layout>
      <appDrawer :windowWidth="windowWidth" />
      <menuDrawer :windowWidth="windowWidth" />
      <v-main
        :style="`padding-top: ${
          $route.name == 'checkOut'
            ? '0px'
            : windowWidth <= 1280
            ? '10px'
            : '140px'
        }`"
      >
        <slot></slot>
      </v-main>
      <appNav v-show="$route.name != 'checkOut' && windowWidth > 1280" />
      <resNav v-show="windowWidth <= 1280 && $route.name != 'checkOut'" />
      <fixedNav v-show="$route.name != 'checkOut' && windowWidth > 1280" />
    </v-layout>
  </div>
</template>

<script>
import appDrawer from "@/components/global/appDrawer";
import appNav from "@/components/global/appNav";
import fixedNav from "@/components/global/fixedNav.vue";
import resNav from "@/components/global/respnsiveNav.vue";
import menuDrawer from "@/components/global/menuDrawer.vue";

export default {
  data: () => ({
    windowWidth: 0,
    showFixed: false, // This can be used to control the visibility of fixedNav
  }),
  components: {
    appDrawer,
    appNav,
    fixedNav,
    resNav,
    menuDrawer,
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      console.log("Window resized to: " + this.windowWidth);
    };
  },
};
</script>
