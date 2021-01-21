import Vue from "vue";
import Vuex from "vuex";
import servers from "@/modules/Servers/store";
import tasks from "@/modules/Tasks/store";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    servers,
    tasks
  }
})
export default store;
