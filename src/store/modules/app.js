export const SET_SHOW_HEADER = "SET_SHOW_HEADER";
export default {
  namespaced: true,
  state: {
    show_header: true
  },
  actions: {},
  mutations: {
    [SET_SHOW_HEADER](state, payload) {
      state.show_header = payload;
    }
  },
  getters: {
    showHeader(state) {
      return state.show_header;
    }
  }
};
