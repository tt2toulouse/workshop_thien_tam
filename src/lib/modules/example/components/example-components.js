import TemplateComponent from "./template-component.vue";
import HelperRegisterModule from "../../helper-register-module.js";

const exampleComponents = [
  {
    vueComponent: TemplateComponent,
    isCustomElement: true
  }
];

export default {
  install: (Vue, options) => {
    Vue.use(exampleComponents, {
      store: options.store
    });
    HelperRegisterModule.registerStore(options.store, exampleComponents);
    HelperRegisterModule.registerVueComponents(Vue, exampleComponents);
    HelperRegisterModule.registerCustomElements(Vue, exampleComponents);
  }
};
