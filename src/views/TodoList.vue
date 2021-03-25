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


export default {
  name: 'TodoList',
  components:{
    TodoInput,
    Todos
  },
  methods:{
    addTodo(content){
      const id = Math.floor(Math.random() * 1000 + 1)
      const todo = { id, content, isCompleted: false}
      this.todos.push(todo);
    },
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    editTodo(id, value){
      // const todo = this.todos.find( todo => todo.id == id);
      // todo.content = value;

      // 不知道為什麼會報錯？ => 記得要加 return
      this.todos = this.todos.map( todo => {
        return todo.id == id ? {...todo, content: value} : todo
      });
    },
    toggleTodo(id){
      const todo = this.todos.find( todo => id === todo.id);
      todo.isCompleted = !todo.isCompleted;
    }
  },
  data(){
    return {
      todos: [
        {
          id: 1,
          content: 'Hello World',
          isCompleted: false
        },
        {
          id: 2,
          content: '看牙齒',
          isCompleted: false
        },
        {
          id: 3,
          content: '禮拜六參加生日派對',
          isCompleted: true
        },
      ]
    }
  },

}
</script>