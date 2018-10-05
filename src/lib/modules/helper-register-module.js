function registerVueComponents(Vue, components) {
  for (let component in components) {
    if (
      components[component].vueComponent &&
      (process.env.NODE_ENV === "development" ||
        process.env.NODE_ENV === "test" ||
        (process.env.NODE_ENV === "production" &&
          !components[component].isCustomElement))
    ) {
      Vue.component(
        components[component].vueComponent.name,
        components[component].vueComponent
      );
    }
  }
}

function registerCustomElements(Vue, components) {
  if (!window.registredAerisElements) {
    window.registredAerisElements = [];
  }

  for (let component in components) {
    if (
      components[component].vueComponent &&
      (!process.env.NODE_ENV === "development" ||
        !process.env.NODE_ENV === "test" ||
        (process.env.NODE_ENV === "production" &&
          components[component].isCustomElement))
    ) {
      Vue.customElement(
        components[component].vueComponent.name,
        components[component].vueComponent
      );
      window.registredAerisElements.push(
        components[component].vueComponent.name
      );
    }
  }
}

function registerStore(store, components) {
  components.forEach(component => (component.vueComponent.store = store));
}

export default {
  registerVueComponents,
  registerCustomElements,
  registerStore
};
