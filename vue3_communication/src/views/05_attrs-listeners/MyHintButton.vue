<template>
  <h1>MyHintButton</h1>
  <div :title="$attrs.title">
    <el-button :="$attrs"></el-button>
  </div>
</template>

<script setup>
import { useAttrs } from 'vue';

let $attrs = useAttrs();
console.log($attrs)

</script>

<style lang="scss" scoped></style>
