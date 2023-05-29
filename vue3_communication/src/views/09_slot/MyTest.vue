<template>
  <h1>我是组件Mytest</h1>
  <div>从父组件传来的数据{{ myTodos }}</div>
  <ul>
    <li
      v-for="(item, index) in myTodos"
      :key="index"
      :style="{ color: item.done ? 'green' : 'red' }"
    >
      {{ item.title }}
    </li>
  </ul>
  <slot :$data="'hello'" $index="world"></slot>
</template>

<script setup lang="ts">
defineProps(['myTodos']);
</script>

<style scoped></style>
