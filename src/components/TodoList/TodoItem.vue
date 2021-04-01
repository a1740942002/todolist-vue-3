<template>
  <li class="grid grid-cols-12 bg-gray-600 p-2 rounded items-center">
    <div class="col-span-2">
      <Toggle @click="toggleTodo(todo)" :isEnable="todo.isCompleted"/>
    </div>
    <p v-show="!isEditable" @click="autoFocus" :class="todo.isCompleted? 'line-through text-gray-500' : ''" class="col-span-9">{{todo.content}}</p>
    <Input v-show="isEditable" ref="autoFocus"  @focusout="editTodo(todo, $event)" @keydown.esc="editTodo(todo, $event)" :value="todo.content" class="text-gray-600 px-2 py-1 col-span-9" />
    <div class="col-span-1">
      <Circular @click="destoryTodo(todo.id)"/>
    </div>
  </li>
</template>

<script>
import Input from '../elements/Input.vue'
import Toggle from '../elements/Toggle.vue';
import Circular from '../elements/Circular.vue';

import {mapActions} from 'vuex';

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
    ...mapActions(['destoryTodo', 'updateTodo']),
    toggleTodo(todo){
      todo = {...todo, isCompleted: !todo.isCompleted}
      this.updateTodo(todo);
    },
    editTodo(todo, e){
      todo = {...todo, content: e.target.value}
      this.updateTodo(todo)
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