import { createApp } from 'vue';
import App from './App.vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

const app = createApp(App);
// 使用 element-plus 插件
app.use(ElementPlus, {
  locale: zhCn,
});
app.mount('#app');