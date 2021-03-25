<template>
  <li class="grid grid-cols-12 bg-gray-600 p-2 rounded items-center">
    <div class="col-span-2">
      <Toggle @toggle-onClick="$emit('toggle-onClick', todo.id)" :isCompleted="todo.isCompleted"/>
    </div>
    <p :contenteditable="!todo.isCompleted" :class="todo.isCompleted? 'line-through text-gray-500' : ''" class="col-span-9">{{todo.content}}</p>
    <div class="col-span-1">
      <Circular/>
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

  }
}
</script>