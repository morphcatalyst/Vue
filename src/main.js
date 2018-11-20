// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App1 from "./App-file";
import App2 from "./components/HelloWorld";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#index-app1",
  components: { App1 },
  template: "<App1/>"
});

new Vue({
  el: "#index-app2",
  components: { App2 },
  template: "<App2/>"
});
