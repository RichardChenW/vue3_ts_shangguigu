import { createApp } from 'vue';
import App from './App.vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

import "@/styles/index.scss"

// 注册仓库
import store from "@/store/index.ts"
// 注册路由
import router from '@/router';



const app = createApp(App);
// 使用 element-plus 插件
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(store);
app.use(router);
app.mount('#app');
