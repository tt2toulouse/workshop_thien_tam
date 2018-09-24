require("exports-loader?!./l.min.js");

import Vue from "vue";

import vueCustomElement from "vue-custom-element";
Vue.use(vueCustomElement);

import VueI18n from "vue-i18n";
Vue.use(VueI18n);

import VueResource from "vue-resource";
Vue.use(VueResource);

import VueLayers from "vuelayers";
Vue.use(VueLayers);

import { VueColorPlugin, VueAerisLanguagePlugin } from "aeris-mixins";
Vue.use(VueColorPlugin);
Vue.use(VueAerisLanguagePlugin);

import TemplateComponents from "../lib/template-components.js";
Vue.use(TemplateComponents);

import VueCustomElementRecorder from "./vue-custom-element-recorder.js";
VueCustomElementRecorder.run();
