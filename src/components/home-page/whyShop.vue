<template>
  <div class="whyShop py-14 mt-10">
    <div class="title">
      <h2 class="text-center mb-5">Why Shop <span> With Us?</span></h2>
    </div>

    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4" sm="6" lg="3" class="mb-5 mb-lg-0">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img mb-4">
              <img src="@/assets/free-shipping.png" alt="" />
            </div>
            <v-card-tite
              style="
                white-space: pre-wrap;
                line-height: 1.2;
                font-weight: 700;
                font-size: 25px;
              "
              >Free Shipping On First Order</v-card-tite
            >
            <v-card-text class="pb-0" style="font-size: 15px"
              >Lorem ipsum dolor sit amet</v-card-text
            >
            <a href="#" style="color: White; font-weight: 700; font-size: 14px"
              >Leran More</a
            >
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="6" lg="3" class="mb-4 mb-lg-0">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img mb-4">
              <img src="@/assets/weekly-flash-sales.png" alt="" />
            </div>
            <v-card-tite
              style="
                white-space: pre-wrap;
                line-height: 1.2;
                font-weight: 700;
                font-size: 25px;
              "
              >Weekly Flash Sale</v-card-tite
            >
            <v-card-text class="pb-0" style="font-size: 15px"
              >Lorem ipsum dolor sit amet</v-card-text
            >
            <a href="#" style="color: White; font-weight: 700; font-size: 14px"
              >Leran More</a
            >
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="6" lg="3" class="mb-4 mb-lg-0">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img mb-4">
              <img src="@/assets/discount.png" alt="" />
            </div>
            <v-card-tite
              style="
                white-space: pre-wrap;
                line-height: 1.2;
                font-weight: 700;
                font-size: 25px;
              "
              >Anual Payment Discount</v-card-tite
            >
            <v-card-text class="pb-0" style="font-size: 15px"
              >Lorem ipsum dolor sit amet</v-card-text
            >
            <a href="#" style="color: White; font-weight: 700; font-size: 14px"
              >Leran More</a
            >
          </v-card>
        </v-col>
        <v-col cols="12" md="4" sm="6" lg="3" class="mb-4 mb-lg-0">
          <v-card
            elevation="0"
            class="text-center text-white"
            color="transparent"
          >
            <div class="img mb-4">
              <img src="@/assets/cash-back.png" alt="" />
            </div>
            <v-card-tite
              style="
                white-space: pre-wrap;
                line-height: 1.2;
                font-weight: 700;
                font-size: 25px;
              "
              >Cashback Reward Program</v-card-tite
            >
            <v-card-text class="pb-0" style="font-size: 15px"
              >Lorem ipsum dolor sit amet</v-card-text
            >
            <a href="#" style="color: White; font-weight: 700; font-size: 14px"
              >Leran More</a
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style lang="scss">
.whyShop {
  background-image: url("@/assets/why-shop-with-us-banner.webp");
  background-repeat: repeat-x;
  background-size: cover;
  h2 {
    color: white;
    font-size: 30px;
    font-weight: 900;
    span {
      color: rgb(45, 251, 223);
    }
  }
  .hint {
    margin: 20px 0 40px;
  }
}
</style>
