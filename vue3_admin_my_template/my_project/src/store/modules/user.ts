import { defineStore } from 'pinia';
import { reqLogin } from '@/api/user';

let useUserStore = defineStore('login', {
  // 小仓库存数据
  state: () => {
    // 储存用户的token
    return {
      token: localStorage.getItem("TOKEN") || "", // 用户唯一标识 token
    };
  },

  // 异步，处理逻辑的地方
  actions: {
    async userLogin(loginData: any) {
      let res:any = await reqLogin(loginData);
      console.log(res);
      if (res.code === 200) {
        // pinia 仓储储存一下 token
        this.token = res.data.userData.token;
        // 本地持久化存储一份 token
        localStorage.setItem("TOKEN",this.token)
        // 成功接收，就返回成功的 promise,这样在组件中，可以看见状态
        return Promise.resolve('ok')
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    },
  },

  getters: {},
});

export default useUserStore;
