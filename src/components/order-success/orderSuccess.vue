<template>
  <div class="order-success">
    <v-dialog v-model="dialog" width="50%" persistent>
      <v-card
        class="text-center"
        style="background-color: azure; padding: 20px; border-radius: 30px"
      >
        <div class="mt-3">
          <v-icon
            style="
              width: 40px;
              height: 40px;
              background-color: green;
              border-radius: 50%;
            "
            color="white"
            >mdi-check</v-icon
          >
        </div>
        <v-card-title
          class="font-weight-bold"
          style="color: #484848; font-size: 25px"
          >Order Placed Successfuly!</v-card-title
        >
        <v-card-text style="color: #484848"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          ipsum rem non nihil, odit, corrupti error facilis odio suscipit
          laudantium, mollitia alias beatae autem consectetur ipsa quia illum
          quas reprehenderit!</v-card-text
        >
        <v-card-actions class="justify-center">
          <v-btn
            variant="elevated"
            color="rgb(22, 119, 176)"
            @click="resetData"
          >
            Got it!
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { cartStore } from "@/store/cart";
import { mapActions } from "pinia";
export default {
  name: "OrderSuccess",
  data: () => ({
    dialog: false,
  }),
  props: {
    popup: {
      type: Boolean,
    },
  },
  mounted() {
    this.dialog = this.popup;
  },
  watch: {
    dialog(newVal) {
      if (!newVal) {
        setTimeout(() => {
          this.$emit("closePopup");
        }, 200);
      }
    },
  },
  methods: {
    ...mapActions(cartStore, ["resetItems"]),
    resetData() {
      this.resetItems();
      this.dialog = false;
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>
