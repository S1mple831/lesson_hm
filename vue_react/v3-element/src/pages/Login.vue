<template>
  <el-form
  style="position:absolute;left:45%"
  ref="formRef" 
  :model="from"
  label-width="auto" 
  >
    <el-form-item label="用户名">
       <el-input v-model="form.name" size="small"/>
    </el-form-item> 
    <el-form-item label="密码">
       <el-input v-model="form.password" type="password" size="small"/>
    </el-form-item> 
    <el-form-item>
      <el-button type="primary" @click="submitForm">
        登录
    </el-button>
   </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from 'vue';
const formRef = ref(null);
// 定义表单数据
const form = reactive({
  name:'',
  password:''
});
const loading = ref(false);
const onSubmit = async () => {
    console.log(formRef.value);
    loading.value = true;
}

</script>

<style  scoped>

</style>