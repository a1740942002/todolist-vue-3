import axios from "axios";
const backendurl = 'https://weblai-strapi.herokuapp.com/todos'

export default {
  state:{
    todos: []
  },
  // Getter
  getters:{
    todos(state){
      return state.todos
    }
  },
  // Setter
  mutations:{
    setTodos(state, todos){
      state.todos = todos
    },
    addTodo(state, todo){
      state.todos.push(todo);
    }
  },
  // API
  actions:{
    async indexTodos({commit}){
      const res = await axios.get(backendurl);
      commit('setTodos', res.data)
    },
    async storeTodo({commit}, todo){
      const res = await axios.post(backendurl, todo);
      commit('addTodo', res.data)
    }
  }
};