<template>
  <form @submit.prevent class="grid grid-cols-12 items-center">
    <div class="col-span-11">
      <Input @keypress.enter="addTodo" v-model="content" class="text-gray-700 rounded-r-none" placeholder="請輸入代辦事項"/>
    </div>
    <div class="col-span-1 text-right">
      <Button @click="addTodo" class="text-lg" text="+"/>
    </div>
  </form>
</template>

<script>
import Input from '../elements/Input.vue';
import Button from '../elements/Button.vue';

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
    addTodo(){
      if(!this.content) return
      this.$emit('add-todo', this.content);
      this.content = '';
    }
  }
}
</script>