<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <BreadCrumb></BreadCrumb>
    </div>
    <div class="tabbar-right">
      <MySetting></MySetting>
    </div>
  </div>
</template>

<script setup lang="ts">
  import BreadCrumb from './BreadCrumb/index.vue';
  import MySetting from './MySetting/index.vue';
</script>

<script lang="ts">
  export default {
    name:"Tabbar"
  }
</script>

<style scoped lang="scss">
  .tabbar {
    height: 100%;
    display: flex;
    justify-content: space-between;
    background-image: linear-gradient(
      to right,
      white,
      rgb(121, 121, 121),
      white
    );

    .tabbar-left {
      display: flex;
      align-items: center;
      margin-left: 20px;
    }
    .tabbar-right {
      display: flex;
      align-items: center;
    }
  }
</style>
