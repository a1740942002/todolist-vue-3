<template>
  <ul class="space-y-2">
    <TodoItem :key="todo.id" v-for="todo in todos" :todo="todo"/>
  </ul>
</template>

<script>
import TodoItem from './TodoItem';
import {mapActions, mapGetters} from 'vuex'

export default {
  components:{
    TodoItem
  },
  methods:{
    ...mapActions(['indexTodos']),
    handleEdit(id, value){
      this.$emit('edit-todo', id,value)
    }
  },
  computed:{
    ...mapGetters(['todos'])
  },
  mounted(){
    this.indexTodos();
  }
}
</script>