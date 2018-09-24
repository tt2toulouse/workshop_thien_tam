// import example
import TemplateComponent from "./modules/example/template-component.vue";

const TemplateComponents = { TemplateComponent };

TemplateComponents.install = Vue => {
  for (let component in TemplateComponents) {
    if (TemplateComponents[component] && component !== "install") {
      Vue.component(
        TemplateComponents[component].name,
        TemplateComponents[component]
      );
    }
  }
};

export default TemplateComponents;
