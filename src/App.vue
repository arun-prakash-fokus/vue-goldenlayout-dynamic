<template>
  <div id="app">
    <button @click="resetLayout">Reset</button>
    <!--  this is the golden-layout container where all the vue components will be contained -->
    <div id="layoutContainer" />
  </div>
</template>

<script>
// required for dynamic component instantiation from the config
import Vue from "vue";
import * as GoldenLayout from "golden-layout";

export default {
  name: "app",
  components: {},
  data: () => ({
    config: {
      content: [
        {
          type: "row",
          content: [
            {
              type: "component",
              componentName: "VueComponent",
              title: "Component 1",
              componentState: { templateId: "Component1" }
            },
            {
              type: "column",
              content: [
                {
                  type: "component",
                  componentName: "VueComponent",
                  title: "Component 2",
                  componentState: { templateId: "Component2" }
                },
                {
                  type: "component",
                  componentName: "VueComponent",
                  title: "Component 3",
                  componentState: { templateId: "Component3" }
                }
              ]
            }
          ]
        }
      ]
    }
  }),
  mounted() {
    // ensure that the following are only done in the mounted lifecycle.

    // create a new GL instance.
    var layout = new GoldenLayout(
      this.config,
      document.getElementById("layoutContainer")
    );

    // now register the components dynamically.
    layout.registerComponent("VueComponent", function(
      container,
      componentState
    ) {
      // here we assume that the components to be loaded are only kept in the components folder.
      import(`./components/${componentState.templateId}`).then(
        componentModule => {
          // create Vue component instances dynamically.
          // https://css-tricks.com/creating-vue-js-component-instances-programmatically/
          var ComponentClass = Vue.extend(componentModule.default);
          var instance = new ComponentClass();
          instance.$mount(); // pass nothing

          // append it to the GL container.
          container.getElement().append(instance.$el);
        }
      );
    });

    //  Update GL on window resize
    window.addEventListener("resize", () => {
      layout.updateSize();
    });

    // attach the state change listener
    layout.on("stateChanged", () => {
      this.onLayoutStateChanged(layout.toConfig());
    });

    // initiatialize the layout
    layout.init();
  },

  methods: {
    resetLayout() {
      window.location.reload(true);
    },
    onLayoutStateChanged(state) {
      var layoutState = JSON.stringify(state, null, 2);
      // eslint-disable-next-line no-console
      console.log("changed state", layoutState);
    }
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

#layoutContainer {
  width: 100vw;
  height: 90vh;
}
</style>
