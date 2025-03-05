<template>
    <div>
      ExposeChild
    </div>
</template>

<script setup>
defineExpose({
    childName: 'child',
    someMethod: () => {
        console.log('someMethod');
    }
})
</script>

<style lang="scss" scoped>

</style>