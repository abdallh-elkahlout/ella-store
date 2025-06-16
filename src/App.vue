<template>
  <app-layout>
    <router-view />
    <v-snackbar v-model="bar" location="left bottom" color="green"
      >{{ itemTitle }} added to your card
      <template v-slot:actions>
        <v-icon @click="bar = false" size="14">mdi-close</v-icon>
      </template>
    </v-snackbar>
  </app-layout>
  <quickView />
  <appFooter v-if="$route.name != 'checkOut'" />
</template>

<script>
import appLayout from "@/components/global/appLayout.vue";
import quickView from "@/components/global/quickView.vue";
import appFooter from "@/components/home-page/appFooter.vue";

export default {
  inject: ["Emitter"],
  name: "App",
  data: () => ({
    bar: false,
    itemTitle: "",
  }),
  components: {
    appLayout,
    quickView,
    appFooter,
  },
  mounted() {
    this.Emitter.on("showMsg", (data) => {
      this.itemTitle = data;
      this.bar = true;
    });
  },
};
</script>
<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
