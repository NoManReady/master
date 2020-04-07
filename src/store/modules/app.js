export const SET_SHOW_HEADER = "SET_SHOW_HEADER";
export const SET_APP_TITLE = "SET_APP_TITLE";
export default {
  namespaced: true,
  state: {
    show_header: true,
    title:'笨鸟还不会飞🐦'
  },
  actions: {},
  mutations: {
    [SET_SHOW_HEADER](state, payload) {
      state.show_header = payload;
    },
    [SET_APP_TITLE](state, payload) {
      state.title = payload;
    }
  }
};
