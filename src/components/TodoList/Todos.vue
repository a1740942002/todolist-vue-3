<template>
  <ul class="space-y-2">
    <TodoItem @delete-todo="$emit('delete-todo', $event)" @toggle-onClick="toggleOnclick" :key="todo.id" v-for="todo in todos" :todo="todo"/>
  </ul>
</template>

<script>
import TodoItem from './TodoItem';

export default {
  components:{
    TodoItem
  },
  props:{
    todos: Array
  }
  ,
  methods:{
    toggleOnclick(id){
      const todo = this.todos.find( todo => id === todo.id);
      todo.isCompleted = !todo.isCompleted;
    }
  },
}
</script>