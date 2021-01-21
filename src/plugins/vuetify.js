import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import "@fortawesome/fontawesome-free/css/all.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa"
  },
  theme: {
    options: { customProperties: true },
    light: true,
    themes: {
      light:   {
        primary: "#3f51b5",
        secondary: "#009688",
        accent: "#607d8b",
        error: "#ff5722",
        warning: "#ff9800",
        info: "#cddc39",
        success: "#4caf50"
      }
    }
  }
});
