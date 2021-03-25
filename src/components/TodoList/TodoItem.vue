<template>
  <li class="grid grid-cols-12">
    <div class="col-span-2">
      <Toggle class=""/>
    </div>
    <p class="col-span-9">Some Text</p>
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
  }
}
</script>