import Vue from "vue";
import Vuex from "vuex";
import vueCustomElement from "vue-custom-element";
import VueI18n from "vue-i18n";
import VueResource from "vue-resource";
import VueRouter from "vue-router";

import { VueColorPlugin, VueAerisLanguagePlugin } from "aeris-mixins";

import TasksComponents from "../lib/modules/tasks/components/tasks-components.js";

import TaskModule from "../lib/modules/tasks/store/tasks-store.js";

import app from "./app.vue";
import TaskEditComponentTest from "./task-edit-component-test.vue";

Vue.use(vueCustomElement);
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(VueResource);
Vue.use(VueRouter);

Vue.use(VueColorPlugin);
Vue.use(VueAerisLanguagePlugin);

const store = new Vuex.Store({
  modules: {
    example: TaskModule
  }
});

Vue.use(TasksComponents, {
  store: store
});

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/task-edit-path",
      component: TaskEditComponentTest
    }
  ]
});

new Vue({
  el: "#app",
  router,
  template: "<app/>",
  components: {
    app
  }
}).$mount("#app");
