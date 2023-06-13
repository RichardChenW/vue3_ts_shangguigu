<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div class="layout-slider">
      <Logo></Logo>
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <Menu :menuList="userStore.menuRoutes"></Menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout-tabbar"></div>
    <!-- 内容展示区 -->
    <div class="layout-main">
      <!-- <router-view></router-view> -->
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
  // 引入 logo 组件
  // @ts-ignore
  import Logo from './Logo/index.vue';
  import Menu from './Menu/index.vue';
  import Main from "./Main/index.vue";

  // 获取用户相关的小仓库
  import useUserStore from '@/store/modules/user';

  const userStore = useUserStore();


</script>

<style lang="scss" scoped>
  .layout-container {
    width: 100%;
    height: 100vh;
    .layout-slider {
      width: $base-menu-width;
      height: 100vh;
      background-color: $base-menu-background;
      .scrollbar {
        height: calc(100% - $base-menu-logo-height);
        color: white;
      }
    }
    .layout-tabbar {
      width: calc(100% - $base-menu-width);
      height: $base-tabbar-height;
      background-color: black;
      position: fixed;
      top: 0px;
      left: $base-menu-width;
    }
    .layout-main {
      width: calc(100% - $base-menu-width);
      height: calc(100vh - $base-tabbar-height);
      background-color: green;
      position: absolute;
      left: $base-menu-width;
      top: $base-tabbar-height;
      padding: 20px;
      overflow: auto;
    }
  }
</style>
