<template>
  <el-button
    size="small"
    circle
    :icon="Refresh"
    @click="upadateRefresh"
  ></el-button>
  <el-button
    size="small"
    circle
    :icon="FullScreen"
    @click="handleFullScreen"
  ></el-button>
  <el-button size="small" circle :icon="Setting"></el-button>
  <img
    :src="userStore.userAvatar"
    style="width: 24px; height: 24px; margin: 0 10px; border-radius: 50%"
  />
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span>
      {{ userStore.userName }}
      <el-icon>
        <arrow-down />
      </el-icon>
    </span>
    <template v-slot:dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logoutEvent">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
  import { useRouter, useRoute } from 'vue-router';

  import { FullScreen, Refresh, Setting } from '@element-plus/icons-vue';
  import useLayoutSettingStore from '@/store/modules/setting';
  import useUserStore from '@/store/modules/user';

  let $router = useRouter();
  let $route = useRoute();

  // refresh 逻辑
  let layoutSettingStore = useLayoutSettingStore();

  let { changeRefresh } = layoutSettingStore;
  let upadateRefresh = () => {
    changeRefresh();
  };

  // fullScreen 全屏逻辑
  let handleFullScreen = () => {
    // DOM 对象的一个属性，可以用来判断当前是不是全屏
    let ifFullScreen = document.fullscreenElement;
    // 切换全屏模式
    if (!ifFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  // 获取用户相关的逻辑
  let userStore = useUserStore();

  // 退出登录回调

  let logoutEvent = () => {
    userStore.userLogout();
    // 实现退出后，依旧回到上一次的页面,将上一次的路由参数，传给login组件
    $router.push({ path: '/login', query: { lastPageRoute: $route.path } });
    
  };
</script>

<script lang="ts">
  export default {
    name: 'MySetting',
  };
</script>

<style scoped></style>
