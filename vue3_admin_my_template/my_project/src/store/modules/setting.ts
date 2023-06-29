// 放一些组件公用的设置
//? 比如 layout 组件：1.点击按钮收缩

import { ref } from 'vue';
//@ts-ignore
import { defineStore } from 'pinia';

let defineLayoutSettingStore = defineStore('layoutSettingStore', () => {
  
  // 用于 tabbar 控制折叠
  let isFold = ref(false);
  let changeFold = () => {
    isFold.value = !isFold.value;
  };

  // 用于控制 tabbar 上的刷新按钮
  let ifRefresh = ref(false)
  let changeRefresh = ()=>{
    ifRefresh.value = !ifRefresh.value
  }

  return {
    isFold,
    changeFold,
    ifRefresh,
    changeRefresh
  };
});

export default defineLayoutSettingStore;
