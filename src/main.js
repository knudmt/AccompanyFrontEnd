import Vue from "vue";
import VueCurrencyInput from 'vue-currency-input'
import App from "./App.vue";
import router from "./router";
import "./assets/css/index.css";
import "./assets/css/payment-card.css";

console.log(Vue.version);

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

