import Vue from "vue";
import Vuex from "vuex";
import vueCustomElement from "vue-custom-element";
import VueI18n from "vue-i18n";
import VueResource from "vue-resource";
import VueRouter from "vue-router";

import { VueColorPlugin, VueAerisLanguagePlugin } from "aeris-mixins";

import Examplecomponents from "../lib/modules/example/components/example-components.js";

import exampleModule from "../lib/modules/example/store/example-store.js";

import app from "./app.vue";
import testComponentName from "./test-component.vue";

Vue.use(vueCustomElement);
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueResource);
Vue.use(VueRouter);

Vue.use(VueColorPlugin);
Vue.use(VueAerisLanguagePlugin);

const store = new Vuex.Store({
  modules: {
    example: exampleModule
  }
});

Vue.use(Examplecomponents, {
  store: store
});

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/test-path",
      component: testComponentName
    }
  ]
});

new Vue({
  el: "#app",
  router,
  template: "<app/>",
  components: {
    app,
    testComponentName
  }
}).$mount("#app");
