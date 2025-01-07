<template>
    <div>
      <p>Mouse X: {{ mouse.x }}</p>
      <p>Mouse Y: {{ mouse.y }}</p>
    </div>
  </template>
  
  <script setup>
  import { useMouse,useMemo } from '../hooks/useMouse';
  import Hook from '../hooks/useMouse'
  const mouse = useMouse();
  useMemo()

  console.log(Hook);
  
  </script>
  
  <style scoped>
  
  </style>
  