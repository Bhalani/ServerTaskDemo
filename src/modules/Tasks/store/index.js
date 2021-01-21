import actions from "./actions";
import mutations from "./mutations";

const state = { tasks: [] };

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
