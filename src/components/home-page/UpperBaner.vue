<template>
  <div class="banner">
    <div class="parent">
      <v-container class="pt-16 pl-2">
        <v-row>
          <v-col cols="6">
            <div class="cont">
              <h3><span>Huge Saving</span> on UHD Televisions</h3>
              <p class="hint">Sale up to 70% off on selected items</p>
              <v-btn
                variant="outlined"
                class="px-10 py-2 mt-9"
                style="border-radius: 30px"
                >Shop Now</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  .parent {
    height: 520px;
    background-image: url(../../assets/banner-bg.jpg);
    background-size: cover;
    background-position: left top;
    .cont {
      color: white;
      padding: 40px 0 0 70px;
      h3 {
        font-size: 45px;
        font-weight: 800;
        span {
          color: rgb(6, 219, 243, 1);
        }
      }
      .hint {
        margin: 20px 0;
      }
    }
  }
}
</style>
