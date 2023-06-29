<template>
  <div class="logo" v-if="!setting.logoHidden">
    <div class="image-conatiner">
      <img :src="setting.logo" />
    </div>
    <!-- 设置文字消失的动画 -->
    <transition name="titleShow" appear>
      <p v-show="!settingStore.isFold">{{ setting.title }}</p>
    </transition>
  </div>
</template>

<script setup lang="ts">
  // @ts-ignore
  import setting from '@/setting.ts';
  import useSettingStore from '@/store/modules/setting';

  let settingStore = useSettingStore();
</script>

<script lang="ts">
  export default {
    name: 'Logo',
  };
</script>

<style lang="scss" scoped>
  .logo {
    display: flex;
    align-items: center; // ⭐单行水平居中
    width: 100%;
    height: $base-menu-logo-height;
    padding: 15px;
    .image-conatiner {
      border-radius: 100%;
      overflow: hidden;
      img {
        width: 40px;
        height: 40px;
      }
    }

    p {
      font-size: $base-logo-title-fontsize;
      color: white;
      margin-left: 20px;
    }
  }

  .titleShow-enter-active {
    animation: opacityShow 1s;
  }
  @keyframes opacityShow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
