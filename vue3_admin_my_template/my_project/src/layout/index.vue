<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div
      class="layout-slider"
      :class="{ 'layout-slider-fold': settingStore.isFold }"
    >
      <Logo></Logo>
      <!-- 滚动组件 -->
      <el-scrollbar class="scrollbar">
        <el-menu
          background-color="#001529"
          text-color="white"
          active-text-color="skyblue"
          :default-active="defaultActivePage"
          :collapse="settingStore.isFold"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div
      class="layout-tabbar"
      :class="{ 'layout-tabbar-fold': settingStore.isFold }"
    >
      <Tabbar></Tabbar>
    </div>
    <!-- 内容展示区 -->
    <div class="layout-main" :class="{'layout-main-fold':settingStore.isFold}" >
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
  // 引入 logo 组件
  // @ts-ignore
  import Logo from './Logo/index.vue';
  import Menu from './Menu/index.vue';
  import Main from './Main/index.vue';
  import Tabbar from './Tabbar/index.vue';

  // 获取用户相关的小仓库
  import useUserStore from '@/store/modules/user';
  import { useRouter } from 'vue-router';
  import useSettingStore from '@/store/modules/setting';

  // 设置部分
  const settingStore = useSettingStore();
  const userStore = useUserStore();
  //@ts-ignore
  const $router = useRouter();
  // 设置默认的激活的路由
  const defaultActivePage = $router.currentRoute.value.path;


</script>

<script lang="ts">
  export default {
    name: 'Layout',
  };
</script>

<style lang="scss" scoped>
  .layout-container {
    width: 100%;
    height: 100vh;
    .layout-slider {
      width: $base-menu-width;
      height: 100vh;
      background-color: $base-menu-background;
      // 设置收缩后的动画
      transition: all 0.3s;

      .el-menu {
        border-right: none;
      }
      .scrollbar {
        height: calc(100% - $base-menu-logo-height);
        color: white;
      }

      // 折叠后的宽度
      &.layout-slider-fold {
        width: $base-menu-foldWidth;
      }
    }

    .layout-tabbar {
      width: calc(100% - $base-menu-width);
      height: $base-tabbar-height;
      position: fixed;
      top: 0px;
      left: $base-menu-width;
      transition: all 0.3s;
      &.layout-tabbar-fold {
        left: $base-menu-foldWidth;
        width: calc(100%  - $base-menu-foldWidth);
      }
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
      transition: all 0.3s;
      &.layout-main-fold {
        left: $base-menu-foldWidth;
        width: calc(100% - $base-menu-foldWidth);
      }
    }
  }
</style>
