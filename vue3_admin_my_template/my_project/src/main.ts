import { createApp } from 'vue';
import App from './App.vue';


import "@/styles/index.scss"
// 注册仓库
import store from "@/store/index.ts"
// 注册路由
import router from '@/router';


import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
// 全局导入 element-icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'




const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 使用 element-plus 插件
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(store);
app.use(router);
app.mount('#app');
