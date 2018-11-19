import TaskEditComponent from "./task-edit-component.vue";
import TaskDisplayComponent from "./task-display-component.vue";
import TaskListComponent from "./task-list-component.vue";
import HelperRegisterModule from "../../helper-register-module.js";

const TasksComponents = [
  {
    vueComponent: TaskEditComponent,
    isCustomElement: true
  },
  {
    vueComponent: TaskDisplayComponent,
    isCustomElement: true
  },
  {
    vueComponent: TaskListComponent,
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
