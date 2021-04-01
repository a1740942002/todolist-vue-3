<template>
  <form @submit.prevent class="grid grid-cols-12 items-center">
    <div class="col-span-11">
      <Input @focusout="createTodo" @keypress.enter="createTodo" v-model="content" class="text-gray-700 rounded-r-none" placeholder="請輸入代辦事項"/>
    </div>
    <div class="col-span-1 text-right">
      <Button @click="createTodo" class="text-lg" text="+"/>
    </div>
  </form>
</template>

<script>
import Input from '../elements/Input.vue';
import Button from '../elements/Button.vue';

import {mapActions} from 'vuex'

export default {
  components:{
    Input,
    Button
  },
  data(){
    return {
      content: ''
    }
  },
  methods: {
    ...mapActions(['storeTodo']),
    createTodo(){
      if(!this.content) return
      const todo = {
        content: this.content,
        isCompleted: false
      }
      this.storeTodo(todo)
      this.content = '';
    }
  }
}
</script>