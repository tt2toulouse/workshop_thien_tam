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
    if (!window.registredAerisElements) {
      window.registredAerisElements = [];
    }

    let timer = setInterval(function() {
      if (
        window.registredAerisElements.indexOf("aeris-commons-components-vjs") >
        -1
      ) {
        Vue.use(exampleComponents, {
          store: options.store
        });
        HelperRegisterModule.registerStore(options.store, exampleComponents);
        HelperRegisterModule.registerVueComponents(Vue, exampleComponents);
        HelperRegisterModule.registerCustomElements(Vue, exampleComponents);

        clearInterval(timer);
      }
    }, 1000);
  }
};
