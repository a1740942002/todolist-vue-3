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
    },
    deleteTodo(state, id){
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    editTodo(state, todo){
      state.todos = state.todos.map(oldTodo => oldTodo.id === todo.id? todo : oldTodo)
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
    },
    async destoryTodo({commit}, id){
      await axios.delete(`${backendurl}/${id}`);
      commit('deleteTodo', id)
    },
    async updateTodo({commit}, todo){
      const res = await axios.put(`${backendurl}/${todo.id}`, todo);
      commit('editTodo', res.data)
    }
  }
};