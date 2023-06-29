<template>
  <!-- 左侧顶部的图标 -->
  <el-icon style="margin-right: 10px" @click="changeFold">
    <component :is="isFold ? 'Expand' : 'Fold'"></component>
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator="|">
    <!-- 动态展示路由名字与标题 -->
    <el-breadcrumb-item
      v-for="(item, index) in $route.matched"
      :key="index"
      v-show="item.meta.title"
      :to="item.path"
    >
      <el-icon style="position: relative; top: 2px">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span style="margin: 0 5px">{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
  import useSettingStore from '@/store/modules/setting';
  //@ts-ignore
  import { storeToRefs } from 'pinia';
  import { useRoute } from 'vue-router';

  let settingStore = useSettingStore();
  let { isFold } = storeToRefs(settingStore);
  let { changeFold } = settingStore;

  let $route = useRoute();
</script>

<script lang="ts">
  export default {
    name: 'BreadCrumb',
  };
</script>

<style scoped lang="scss"></style>
