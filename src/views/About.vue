<template>
  <div class="about">
    <h1>這邊只是展示雙向綁定</h1>
    <input class="text-gray-700" @input="$event => searchText = $event.target.value" :value="searchText" type="text">
    <p class="text-white">{{searchText}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchText: ''
    }
  }
}
</script>
