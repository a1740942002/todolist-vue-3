<template>
  <li class="grid grid-cols-12 bg-gray-600 p-2 rounded items-center">
    <div class="col-span-2">
      <Toggle @click="$emit('toggle-todo', todo.id)" :isEnable="todo.isCompleted"/>
    </div>
    <p v-show="!isEditable" @click="autoFocus" :class="todo.isCompleted? 'line-through text-gray-500' : ''" class="col-span-9">{{todo.content}}</p>
    <Input v-show="isEditable" ref="autoFocus"  @focusout="handleEditTodo" @keydown.esc="handleEditTodo" @keydown.enter="handleEditTodo" :value="todo.content" class="text-gray-600 px-2 py-1 col-span-9" />
    <div class="col-span-1">
      <Circular @click="$emit('delete-todo', todo.id)"/>
    </div>
  </li>
</template>

<script>
import Input from '../elements/Input.vue'
import Toggle from '../elements/Toggle.vue';
import Circular from '../elements/Circular.vue';

export default {
  components:{
    Toggle,
    Circular,
    Input
  },
  props: {
    todo: Object
  },
  methods:{
    handleEditTodo(e){
      this.$emit('edit-todo', this.todo.id, e.target.value);
      this.isEditable = false;
    },
    autoFocus(){
      this.isEditable = true;
      this.$nextTick(()=>{
        this.$refs.autoFocus.$el.focus();
      })
    }
  },
  data(){
    return {
      isEditable: false
    }
  }
}
</script>