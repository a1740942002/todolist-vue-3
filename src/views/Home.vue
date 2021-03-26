<template>
  <div class="bg-gray-700 px-8 py-4">
    <h1 class="text-indigo-300 font-bold text-4xl text-center mb-2">TodoList</h1>
    <TodoInput @add-todo="addTodo" class="mb-4"/>
    <Todos @toggle-todo="toggleTodo" @edit-todo="editTodo" @delete-todo="deleteTodo" :todos="todos"/>
  </div>
</template>

<script>
import TodoInput from '../components/TodoList/TodoInput.vue';
import Todos from '../components/TodoList/Todos.vue';
import axios from 'axios';

const backendurl = 'https://weblai-strapi.herokuapp.com/todos';

export default {
  name: 'TodoList',
  components:{
    TodoInput,
    Todos
  },
  methods:{
    addTodo(content){
      const todo = { content, isCompleted: false}
      axios.post(`${backendurl}`, todo)
      .then(res => this.todos.push(res.data));
    },
    deleteTodo(id){
      axios.delete(`${backendurl}/${id}`)
      .then(() => this.todos = this.todos.filter(todo => todo.id !== id));
    },
    editTodo(id, value){
      if(!value){
        axios.delete(`${backendurl}/${id}`)
        .then(() => this.todos = this.todos.filter(todo => todo.id !== id));
        return;
      }

      const todo = this.todos.find( todo => todo.id == id);
      todo.content = value
      axios.put(`${backendurl}/${id}`, todo);

      // 用 map 的寫法
      // this.todos = this.todos.map( todo => {
      //   return todo.id == id ? {...todo, content: value} : todo
      // });
    },
    toggleTodo(id){
      const todo = this.todos.find( todo => id === todo.id);
      todo.isCompleted = !todo.isCompleted;
      axios.put(`${backendurl}/${id}`, todo)
    }
  },
  data(){
    return {
      todos: []
    }
  },
  mounted(){
    axios.get(`${backendurl}`)
    .then(res => this.todos = res.data);
  }

}
</script>