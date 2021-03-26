<template>
  <div class="md:w-4/12 mx-auto">
    <div id="nav" class="text-center bg-gray-800 py-4">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/todos">TodoList</router-link>
    </div>
    <router-view class=" mx-auto"/>
  </div>
</template>

<style>

body{
  background-color: #111827;
  color: #fff;
}

</style>