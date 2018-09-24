import Vue from "vue";

import vueCustomElement from "vue-custom-element";
Vue.use(vueCustomElement);

import VueI18n from "vue-i18n";
Vue.use(VueI18n);

import VueResource from "vue-resource";
Vue.use(VueResource);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import { VueColorPlugin, VueAerisLanguagePlugin } from "aeris-mixins";
Vue.use(VueColorPlugin);
Vue.use(VueAerisLanguagePlugin);

import TemplateComponents from "../lib/template-components.js";
Vue.use(TemplateComponents);

import VueCustomElementRecorder from "../lib/vue-custom-element-recorder.js";
VueCustomElementRecorder.run();

import app from "./app.vue";
import testComponentName from "./test-component.vue";

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
