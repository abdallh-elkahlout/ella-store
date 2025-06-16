import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// vuetfiy
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
const vuetify = createVuetify({
  components,
  directives,
});

//swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// pinia
import { createPinia } from "pinia";

// mitt
import mitt from "mitt";
const Emitter = mitt();
createApp(App)
  .use(vuetify)
  .provide("Emitter", Emitter)
  .use(createPinia())
  .use(router)
  .mount("#app");
