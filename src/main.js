import Vue from 'vue'
import App from './App.vue'
import store from "@/store";
import vuetify from './plugins/vuetify';
import tiptapVuetify from "./plugins/tiptapVuetify";

Vue.config.productionTip = false;

tiptapVuetify(vuetify);

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
