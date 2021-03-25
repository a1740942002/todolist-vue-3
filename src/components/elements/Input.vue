<template>
  <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="text" class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" :placeholder="placeholder">
</template>

<script>
export default {
  props:{
    placeholder: String,
    modelValue: String
  }
}
</script>