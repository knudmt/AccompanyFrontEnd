import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/WhyUs",
    name: "WhyUs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/WhyUs.vue"),
  },
  {
    path: "/ContactUs",
    name: "ContactUs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/ContactUs.vue"),
  },
  {
    path: "/Careers",
    name: "Careers",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/Careers.vue"),
  },
  {
    path: "/DataServices",
    name: "DataServices",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/DataServicesView.vue"),
  },
  {
    path: "/LocationPicker",
    name: "LocationPicker",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/LocationPickerView.vue"),
  },
  {
    path: "/OrderResturantPicker",
    name: "OrderResturantPicker",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/OrderResturantSelectionView.vue"),
  },
  {
    path: "/PrivacyPolicy",
    name: "PrivacyPolicy",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/PrivacyPolicy.vue"),
  },
  {
    path: "/DonateTrees",
    name: "DonateTrees",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/DonateTrees.vue"),
  },
  {
    path: "/DonateCheckout",
    name: "DonateCheckout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/DonateCheckout.vue"),
  },
  {
    path: "/DonateCalculate",
    name: "DonateCalculate",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/DonateCalculate.vue"),
  },
  {
    path: "/DonationCheckoutModal",
    name: "DonationCheckoutModal",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/DonationCheckoutModal.vue"),
  },
  {
    path: "/ThankyouApplyModal",
    name: "ThankyouApplyModal",
    component: () =>
      import("../views/ThankyouApplyModal.vue"),
  },
  {
    path: "/ThankyouDataModal",
    name: "ThankyouDataModal",
    // route level code-splitting MTK
    // this generates a speparte chunk for this route,
    // lazy loaded
    component: () =>
      import("../views/ThankyouDataModal.vue"),
  },
  {
    path: "/ThankyouOrderModal",
    name: "ThankyouOrderModal",
    component: () =>
      import("../views/ThankyouOrderModal.vue"),
  },
  {
    path: "/GatherFlightData",
    name: "GatherFlightData",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/GatherFlightData.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
