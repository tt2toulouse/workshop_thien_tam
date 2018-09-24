require("exports-loader?!./l.min.js");
import Vue from "vue";

import TemplateComponents from "../lib/template-components.js";

const VueCustomElementRecorder = {
  run() {
    ljs.addAliases({
      dep: []
    });

    ljs.load("dep", function() {
      if (!window.registredAerisElements) {
        window.registredAerisElements = [];
      }

      var timer;

      function stopTimer() {
        clearInterval(timer);
      }

      function registerComponents() {
        console.info("trying to register template components");
        console.info(
          "Registred elements at this time: " + window.registredAerisElements
        );

        for (let component in TemplateComponents) {
          if (TemplateComponents[component] && component !== "install") {
            if (
              window.registredAerisElements.indexOf(
                TemplateComponents[component].name
              ) < 0
            ) {
              Vue.customElement(
                TemplateComponents[component].name,
                TemplateComponents[component]
              );
              window.registredAerisElements.push(
                TemplateComponents[component].name
              );
            }
          }
        }

        window.registredAerisElements.push("template-components-vjs");
        stopTimer();
        console.info("template  components registration complete");
      }

      timer = setInterval(function() {
        registerComponents();
      }, 1000);
    });
  }
};

export default VueCustomElementRecorder;
