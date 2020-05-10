import Vue from "vue";
import Vuex from "vuex";
import user from './modules/user'
import menu from './modules/menu'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import tagsView from './modules/tagsView'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    settings,
    user,
    tagsView,
    menu
  },
  getters
});


