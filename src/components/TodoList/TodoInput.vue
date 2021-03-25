<template>
  <div class="grid grid-cols-12 items-center">
    <div class="col-span-11">
      <Input class="text-gray-700" placeholder="請輸入代辦事項"/>
    </div>
    <div class="col-span-1 text-right">
      <Button text="+"/>
    </div>
  </div>
</template>

<script>
import Input from '../elements/Input.vue';
import Button from '../elements/Button.vue';

export default {
    components:{
      Input,
      Button
    }
}
</script>