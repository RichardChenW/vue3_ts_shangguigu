<template>
  <!-- 路由组件出口位置 -->
  <!-- router-view 会把显示的组件名称注入进来 -->
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag"/>
    </transition>
  </router-view>
</template>

<script setup lang="ts">

  import { ref, watch, nextTick } from 'vue';
  //@ts-ignore
  import { storeToRefs } from 'pinia';
  import useSettingStore from '@/store/modules/setting';


  // 设置部分
  const settingStore = useSettingStore();
  // 设置更新部分
  // 监听仓库内部的数据是否发生变化
  let { ifRefresh } = storeToRefs(settingStore);
  let flag = ref(true);
  watch(ifRefresh, () => {
    flag.value = false;
    nextTick(() => {
      flag.value = true;
    });
  });
</script>
<script lang="ts">
  export default {
    name: 'Main',
  };
</script>

<style scoped>
  .fade-enter-from {
    opacity: 0;
    transform: scale(0);
  }

  .fade-enter-active {
    transition: all 0.3s;
  }

  .fade-enter-to {
    opacity: 1;
    transform: scale(1);
  }
</style>
