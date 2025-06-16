<template>
  <div class="layout">
    <v-layout>
      <appDrawer />
      <v-main
        :style="`padding-top: ${$route.name == 'checkOut' ? '0px' : '140px'}`"
      >
        <slot></slot>
      </v-main>
      <appNav v-if="$route.name != 'checkOut'" />
      <fixedNav v-if="$route.name != 'checkOut'" />
    </v-layout>
  </div>
</template>

<script>
import appDrawer from "@/components/global/appDrawer";
import appNav from "@/components/global/appNav";
import fixedNav from "@/components/global/fixedNav.vue";

export default {
  components: {
    appDrawer,
    appNav,
    fixedNav,
  },
};
</script>
