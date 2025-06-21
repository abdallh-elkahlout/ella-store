<template>
  <div class="top-offers pt-5" style="background-color: aliceblue">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="4" md="4" lg="4" class="pr-4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="border-radius: 7px; overflow: hidden"
            >
              <img
                style="width: 100%"
                src="@/assets/playstations.webp"
                alt=""
                :style="`width:100%; transition:.5s all ease-in-out; cursor:pointer; scale:${
                  isHovering ? 1.03 : 1
                } `"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4" md="4" lg="4" class="pr-4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="border-radius: 7px; overflow: hidden"
            >
              <img
                style="width: 100%"
                src="@/assets/headset.webp"
                alt=""
                :style="`width:100%; transition:.5s all ease-in-out; cursor:pointer; scale:${
                  isHovering ? 1.03 : 1
                } `"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="4" md="4" lg="4" class="pr-4">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent"
              v-bind="props"
              style="overflow: hidden; border-radius: 7px"
            >
              <img
                style="width: 100%"
                src="@/assets/chairs.webp"
                alt=""
                :style="`width:100%; transition:.5s all ease-in-out; cursor:pointer; scale:${
                  isHovering ? 1.03 : 1
                } `"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6" class="mt-2">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pr-2"
              v-bind="props"
              style="border-radius: 7px; overflow: hidden"
            >
              <img
                style="width: 100%"
                src="@/assets/iphones.webp"
                alt=""
                :style="`width:100%; transition:.5s all ease-in-out; cursor:pointer; scale:${
                  isHovering ? 1.03 : 1
                } `"
              />
            </div>
          </v-hover>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6" class="mt-2">
          <v-hover v-slot="{ isHovering, props }">
            <div
              class="parent pl-2"
              v-bind="props"
              style="border-radius: 7px; overflow: hidden"
            >
              <img
                style="width: 100%"
                src="@/assets/laptops.webp"
                alt=""
                :style="`width:100%; transition:.5s all ease-in-out; cursor:pointer; scale:${
                  isHovering ? 1.03 : 1
                } `"
              />
            </div>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
