<template>
    <div :class="$module.example">
        <p :class="$module.text">这是一个带有css Module的样式</p>
    </div>
</template>

<script setup>

</script>

<style module>
.example{
    background-color:lightblue;
}
.text{
    color:red;
}
</style>