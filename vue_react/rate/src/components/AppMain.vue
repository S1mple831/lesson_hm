<template>
    <main>
      Main
      <Item />
      <Item />
    </main>
  </template>
  
  <script setup>
  import Item from './Item.vue';
  </script>
  
  <style scoped>
  main{
    flex:1;
    height: 500px;
    background-color: yellow;
  }
  </style>