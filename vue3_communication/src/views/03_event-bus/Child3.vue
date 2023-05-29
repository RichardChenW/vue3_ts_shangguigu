<template>
    <div>我是测试组件</div>
</template>

<script setup lang="ts">
import $bus from '../../bus';
import { onMounted } from 'vue';

onMounted(()=>{
    console.log("hello wrold")
    $bus.emit('car',{name:"richard"})
})

</script>

<style>

</style>