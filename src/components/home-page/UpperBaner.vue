<template>
  <div class="banner">
    <div class="parent">
      <img src="../../assets/banner-bg.jpg" alt="" />

      <div class="cont">
        <h3><span>Huge Saving</span> on UHD Televisions</h3>
        <p class="hint">Sale up to 70% off on selected items</p>
        <v-btn
          variant="outlined"
          density="compact"
          height="50"
          width="160"
          style="border-radius: 30px; text-transform: none"
          >Shop Now</v-btn
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.banner {
  .parent {
    position: relative;
    height: 520px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .cont {
      position: absolute;
      width: 600px;
      top: 100px;
      left: 40px;
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

// media

@media (max-width: 1210px) {
  .banner {
    .parent {
      .cont {
        h3 {
          font-size: 40px;
        }
        width: 500px;
        left: 0px;
      }
    }
  }
}
@media (max-width: 818px) {
  .banner {
    .parent {
      height: 350px;
      .cont {
        h3 {
          font-size: 25px;
        }
        width: 500px;
        left: 0px;
        .hint {
          font-size: 14px;
        }
        padding-left: 20px;
      }
    }
  }
}
@media (max-width: 730px) {
  .banner {
    .parent {
      height: 320px;
      .cont {
        padding-top: 20px;
        h3 {
          font-size: 24px;
          width: 400px;
        }
        width: 500px;
        left: 0px;
        .hint {
          font-size: 12px;
        }
        button {
          width: 130px;
          height: 40px !important;
          font-size: 11px !important;
        }
      }
    }
  }
}
</style>
