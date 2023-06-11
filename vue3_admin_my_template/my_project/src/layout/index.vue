<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div class="layout-slider">
      <Logo></Logo>
    </div>
    <!-- 顶部导航 -->
    <div class="layout-tabbar"></div>
    <!-- 内容展示区 -->
    <div class="layout-main">
      <div style="height: 10000px; background-color: red">内容部分</div>
    </div>
  </div>
</template>

<script setup lang="ts">

// @ts-ignore
// 引入 logo 组件
import Logo from "./Logo/index.vue"

</script>

<style lang="scss" scoped>
  .layout-container {
    width: 100%;
    height: 100vh;
    .layout-slider {
      width: $base-menu-width;
      height: 100vh;
      background-color: $base-menu-background;
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
