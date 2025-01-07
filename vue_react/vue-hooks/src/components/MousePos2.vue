<template>
    <div>
      <p>Mouse X: {{ mousePos.x }}</p>
      <p>Mouse Y: {{ mousePos.y }}</p>
    </div>
  </template>
  
  <script setup>
  import { 
    // composition api vue3 核心亮点
    reactive,
    onUnmounted,
    onMounted // 生命周期 life cycle 
  } from 'vue'
  // const x = ref(0)
  // const y = ref(0)
  
  const mousePos = reactive({
    x: 0,
    y: 0
  })
  
  const mousePosHandler = (e) => {
    mousePos.x = e.pageX
    mousePos.y = e.pageY
    console.log('还在')
  }
  // 考虑内存泄漏问题
  onMounted(() => {
    window.addEventListener('mousemove', mousePosHandler) 
  })// 挂载
  onUnmounted(() => {
    window.removeEventListener('mousemove', mousePosHandler)
  })// 卸载
  </script>
  
  <style scoped>
  
  </style>