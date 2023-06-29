<template>
  <div>
    <h1>我是home路由组件</h1>
  </div>
</template>

<script setup lang="ts">
  // 引入组合式 API 生命周期函数
  import { onMounted } from 'vue';
  import useUserStore from '@/store/modules/user';

  let userStore = useUserStore()
  onMounted(()=>{
    userStore.getUserInfo()
  })

</script>

<style lang="scss" scoped></style>
