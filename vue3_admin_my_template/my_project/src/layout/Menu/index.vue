<template>
  <el-menu background-color="#001529" text-color="white">
    <template v-for="each in showList" :key="each.path">
      <!--* 没有子路由的情况 -->
      <el-menu-item v-if="!each.children" @click="goRoute" :index="each.path">
        <template #title>
          <el-icon><component :is="each.meta.icon"></component></el-icon>
          <span>{{ each.meta.title }}</span>
        </template>
      </el-menu-item>

      <!--* 当路由只有一个孩子的时候，没必要使用多级菜单 -->
      <el-menu-item
        v-if="each.children && each.children.length == 1"
        :index="each.children[0].path"
        @click="goRoute"
      >
        <template #title>
          <el-icon><component :is="each.children[0].meta.icon"></component></el-icon>
          <span>{{ each.children[0].meta.title }}</span>
        </template>
      </el-menu-item>

      <!--* 有子路由，且大于一个 -->
      <el-sub-menu
        v-if="each.children && each.children.length > 1"
        :index="each.path"
      >
        <template #title>
          <el-icon><component :is="each.meta.icon"></component></el-icon>
          <span>{{ each.meta.title }}</span>
        </template>
        <Menu :menuList="each.children"></Menu>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';

  let $router = useRouter();
  
  let props = defineProps(['menuList']);
  let showList = props.menuList.filter((each:any) => {
    return !each.meta.hidden;
  });

  let goRoute = (e:any)=>{
    $router.push(e.index)
  }

</script>
<script lang="ts">
  export default {
    name: 'Menu',
  };
</script>

<style scoped lang="scss">
  .el-menu {
    border-right: none;
  }
</style>
