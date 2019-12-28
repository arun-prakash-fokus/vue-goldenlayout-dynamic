import Vue from "vue";
import App from "./App.vue";

// golden-layout themes
import 'golden-layout/src/css/goldenlayout-base.css';
import "golden-layout/src/css/goldenlayout-light-theme.css";
// import "golden-layout/src/css/goldenlayout-dark-theme.css";
// import "golden-layout/src/css/goldenlayout-soda-theme.css";
// import "golden-layout/src/css/goldenlayout-translucent-theme.css";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
