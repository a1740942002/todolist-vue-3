<template>
  <div class="bg-gray-700 px-8 py-4">
    <h1 class="text-indigo-300 font-bold text-4xl text-center mb-2">TodoList</h1>
    <TodoInput @add-todo="addTodo" class="mb-4"/>
    <Todos :todos="todos" :content="content"/>
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
      const todo = { content, isCompleted: false}
      this.todos.push(todo);
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