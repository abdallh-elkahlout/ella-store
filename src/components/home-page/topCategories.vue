<template>
  <div class="top_cat mt-16">
    <div class="cyber_panner" style="cursor: pointer">
      <img src="@/assets/cyber-banner.webp" class="w-100" alt="" />
    </div>
    <div class="categories mt-7">
      <div class="pt-15 pr-5 title d-flex justify-center align-center">
        <h2
          class="flex-grow-1 text-center mb-5"
          style="font-weight: 900; font-size: 20px"
        >
          Top Categories
        </h2>
      </div>
      <v-container fluid>
        <v-row>
          <v-col cols="2" v-for="item in categories" :key="item">
            <v-card class="text-center" elevation="0">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  class="parent"
                  style="overflow: hidden; border-radius: 50%"
                >
                  <img
                    :src="item.image"
                    height="200px"
                    v-bind="props"
                    :style="`cursor: pointer; transition: all ease-in-out 0.3s; scale:${
                      isHovering ? 1.05 : 1
                    }`"
                  />
                </div>
              </v-hover>
              <v-card-title> {{ item.title }} </v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    categories: [
      {
        title: "Mobile Phone",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/mobile-phones.png?v=10616357514144629263",
      },
      {
        title: "Labtops",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/laptops-tablets.png?v=17546078654541140209",
      },
      {
        title: "TVS",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/televisions.png?v=792225267698738137",
      },
      {
        title: "Audio & Video",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/audio-video.png?v=17118273463527967791",
      },
      {
        title: "PCs",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/pcs-accessories.png?v=7913320403362682840",
      },
      {
        title: "Gaming",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/gaming-accessories.png?v=5365032838061682635",
      },
      {
        title: "Home Appliances",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/home-appliances.png?v=4122646624966862882",
      },
      {
        title: "Kitchen",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/kitchen-appliances.png?v=912885117927234410",
      },
      {
        title: "Cameras",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/cameras.png?v=10468174360605840515",
      },
      {
        title: "Consumables",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/consumables.png?v=1604898607781595964",
      },
      {
        title: "Smart Homes",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/smart-homes.png?v=11511407578445752828",
      },
      {
        title: "Accessories",
        image:
          "https://new-ella-demo.myshopify.com/cdn/shop/files/accessories.png?v=16090558546215869367",
      },
    ],
  }),
};
</script>
