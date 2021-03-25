<template>
  <ul class="space-y-2">
    <TodoItem @edit-todo="handleEdit" @delete-todo="$emit('delete-todo', $event)" @toggle-todo="$emit('toggle-todo', $event)" :key="todo.id" v-for="todo in todos" :todo="todo"/>
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
    handleEdit(id, value){
      this.$emit('edit-todo', id,value)
    }
  },
}
</script>