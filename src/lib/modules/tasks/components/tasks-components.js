import TaskEditComponent from "./task-edit-component.vue";
import HelperRegisterModule from "../../helper-register-module.js";

const TasksComponents = [
  {
    vueComponent: TaskEditComponent,
    isCustomElement: true
  }
];

export default {
  install: (Vue, options) => {
    Vue.use(TasksComponents, {
      store: options.store
    });
    HelperRegisterModule.registerStore(options.store, TasksComponents);
    HelperRegisterModule.registerVueComponents(Vue, TasksComponents);
    HelperRegisterModule.registerCustomElements(Vue, TasksComponents);
  }
};
