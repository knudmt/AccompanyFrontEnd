import Vue from "vue";
import VueCurrencyInput from 'vue-currency-input'
import App from "./App.vue";
import router from "./router";
import "./assets/css/index.css";

Vue.config.productionTip = false;
Vue.use(VueCurrencyInput, pluginOptions)

const pluginOptions = {
  /* see config reference */
  globalOptions: { currency: 'USD'}
}

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

