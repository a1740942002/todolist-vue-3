<template>
  <div class="bg-gray-700 px-8 py-4">
    <h1 class="text-indigo-300 font-bold text-4xl text-center mb-2">TodoList</h1>
    <TodoInput class="mb-4"/>
    <Todos />
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
  }
}
</script>