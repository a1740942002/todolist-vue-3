import axios from 'axios';

const backendurl = 'https://weblai-strapi.herokuapp.com/todos'

const state = {
  todos: []
};

const getters = {
  getTodos(state){
    return state.todos
  }
};


export default {
  state,
  getters,
  actions,
  mutations
};