<template>
    <div>
      <div>PostShow{{ postId }}</div>
      <hr>
      <router-view />
    </div>
</template>

<script setup>
import {useRoute} from 'vue-router'
const route = useRoute() // 当前路由
console.log(route);
const {postId} = route.params // 路由参数
</script>

<style  scoped>

</style>