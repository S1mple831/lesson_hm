<template>
    <div>
      <div>
        <p id="count">Lifecule Component - Count:{{ count }}</p>
      </div>
    </div>
</template>

<script setup>
import { 
    defineProps,
    onBeforeMount,
    onMounted,
    onUnmounted,
    onBeforeUnmount,
    onBeforeUpdate,
    onUpdated 
} from 'vue';
defineProps({
    count: {
        type: Number,
        required: true
    }
});

//console.log('haha');// 在创建的时候执行
onBeforeMount(() =>{
    console.log(document.getElementById('count'),'-------')
    console.log('挂载之前')
})
// 组件有生老病死 
onMounted(() =>{
   // on 在某个阶段
   // mounted 挂载完成 
   // 已经完成了挂载
    console.log('已经挂载');
    console.log(document.getElementById('count'),'-------')
})

onBeforeUnmount(() =>{
    console.log('卸载之前');
})

onUnmounted(() =>{
    console.log('已经卸载');
})

onBeforeUpdate(() =>{
    console.log('更新之前');
})

onUpdated(() =>{
    console.log('已经更新');
})
</script>

<style  scoped>

</style>