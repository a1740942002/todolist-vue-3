<template>
  <li class="grid grid-cols-12 bg-gray-600 p-2 rounded items-center">
    <div class="col-span-2">
      <Toggle @click="$emit('toggle-onClick', todo.id)" :isCompleted="todo.isCompleted"/>
    </div>
    <p v-if="!isEditable" @dblclick="isEditable = !isEditable" :class="todo.isCompleted? 'line-through text-gray-500' : ''" class="col-span-9">{{todo.content}}</p>
    <Input :value="todo.content" class="text-gray-600 px-2 py-1 col-span-9" v-else/>
    <div class="col-span-1">
      <Circular @click="$emit('delete-todo', todo.id)"/>
    </div>
  </li>
</template>

<script>
import Toggle from '../elements/Toggle.vue';
import Circular from '../elements/Circular.vue';

export default {
  components:{
    Toggle,
    Circular
  },
  props: {
    todo: Object
  },
  methods:{

  },
  data(){
    return {
      isEditable: false
    }
  }
}
</script>