import "core-js/stable";
import "regenerator-runtime/runtime";

import Vue from "vue";
import VueRouter from "vue-router";

// import Component from "./Component";

// Vue Router
const routes = [{ path: "/", component: { template: "<div>hi</div>" } }];
const router = new VueRouter({ routes });
Vue.use(VueRouter);

// App
const app = new Vue({ router }).$mount("#app");
