<template>
  <div class="logo" v-if="!setting.logoHidden">
    <div class="image-conatiner">
      <img :src="setting.logo" />
    </div>
    <p>{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
  // @ts-ignore
  import setting from '@/setting.ts';
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
</style>
