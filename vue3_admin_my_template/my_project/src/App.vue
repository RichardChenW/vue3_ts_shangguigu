<template>
  <el-button type="danger" :icon="Star" round>Round</el-button>
  <el-pagination
    v-model:current-page="currentPage1"
    :page-size="100"
    :small="small"
    :disabled="disabled"
    :background="background"
    layout="total, prev, pager, next"
    :total="1000"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
  <MyComponent></MyComponent>
</template>

<script setup lang="ts">
  import { Star } from '@element-plus/icons-vue';
  import { ref } from 'vue';
  import MyComponent from '@/components/MyComponent.vue';

  const currentPage1 = ref(5);
  const small = ref(false);
  const background = ref(false);
  const disabled = ref(false);

  const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`);
  };
  const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`);
  };
</script>

<style scoped></style>
