import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: { 
    newPost: {},
    isActionNewPost: false,
  },
  getters: {
    newPost: state => state.newPost,
    isActionNewPost: state => state.isActionNewPost,
  },
  mutations: {
    CHANGE_NEW_POST(state, post) {
      state.newPost = post;
    },
    CHANGE_ACTION_NEW_POST(state, action) {
      state.isActionNewPost = action;
    },
  },
  actions: {
    changeNewPost({commit}, post) {
      commit('CHANGE_NEW_POST', post);
    },
    changeActionNewPost({commit}, action) {
      commit('CHANGE_ACTION_NEW_POST', action);
    },
  }
});
export default store;