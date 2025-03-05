<template>
    <div>
       ChildTwo
       {{ msg2  }}
    </div>
</template>

<script setup>
defineProps({
    // msg2：string
    msg2:{
        type:String,
        required:true
    }
})
</script>

<style  scoped>

</style>