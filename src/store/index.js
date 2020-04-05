import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";

Vue.use(Vuex);

const modulesFiles = require.context("./modules", true, /\.js$/);

const modules = modulesFiles.keys().reduce((m, p) => {
  const moduleName = p.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(p);
  m[moduleName] = value.default;
  return m;
}, {});

const store = new Vuex.Store({
  modules,
  getters
});

export default store;
