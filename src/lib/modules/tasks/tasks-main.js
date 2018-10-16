import Vue from "vue";
import VueCustomElement from "vue-custom-element";
import Vuex from "vuex";
import VueI18n from "vue-i18n";
import VueResource from "vue-resource";
import TasksComponents from "./components/tasks-components.js";

import TasksModule from "./store/tasks-store.js";

Vue.use(Vuex);
Vue.use(VueCustomElement);
Vue.use(VueI18n);
Vue.use(VueResource);

const store = new Vuex.Store({
  modules: {
    example: TasksModule
  }
});

Vue.use(TasksComponents, {
  store: store
});
