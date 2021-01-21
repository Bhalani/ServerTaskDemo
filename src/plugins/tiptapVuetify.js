import Vue from "vue";
import { TiptapVuetifyPlugin } from "tiptap-vuetify";
import "tiptap-vuetify/dist/main.css";

export default vuetify => {
  return Vue.use(TiptapVuetifyPlugin, {
    vuetify,
    iconsGroup: "fa"
  });
};
