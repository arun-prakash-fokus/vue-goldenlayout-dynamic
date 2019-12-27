import Vue from "vue";
import App from "./App.vue";

// https://www.npmjs.com/package/vue-golden-layout
import vgl from "vue-golden-layout";

// golden-layout themes
import "golden-layout/src/css/goldenlayout-light-theme.css";
// import "golden-layout/src/css/goldenlayout-dark-theme.css";
// import "golden-layout/src/css/goldenlayout-soda-theme.css";
// import "golden-layout/src/css/goldenlayout-translucent-theme.css";

Vue.config.productionTip = false;

Vue.use(vgl);

new Vue({
  render: h => h(App)
}).$mount("#app");
