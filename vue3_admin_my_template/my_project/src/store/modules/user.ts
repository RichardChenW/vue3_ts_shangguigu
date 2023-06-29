import { useRouter } from 'vue-router';
//@ts-ignore
import { defineStore } from 'pinia';
import { reqLogin, reqUserInfo } from '@/api/user';
import type { UserState } from './types/types.ts';
//引入常量路由
import { constantRoute } from '@/router/routes.ts';
//引入 token 相关工具
import { GET_TOKEN,SET_TOKEN,REMOVE_TOKEN } from '@/utils/token.ts';

let useUserStore = defineStore('login', {
  // 小仓库存数据
  state: (): UserState => {
    // 储存用户的token
    return {
      token: GET_TOKEN() || '', // 用户唯一标识 token
      menuRoutes: constantRoute, // 存储菜单生成的数组（路由）
      userName: '',
      userAvatar: '',
    };
  },

  // 异步，处理逻辑的地方
  actions: {
    async userLogin(loginData: any) {
      let res: any = await reqLogin(loginData);
      if (res.code === 200) {
        // pinia 仓储储存一下 token
        //@ts-ignore
        this.token = res.data.userData.token as string;
        // 本地持久化存储一份 token
        //@ts-ignore
        SET_TOKEN(this.token)
        // 成功接收，就返回成功的 promise,这样在组件中，可以看见状态
        return Promise.resolve('ok');
      } else {
        return Promise.reject(new Error(res.data.message));
      }
    },

    // 当组件挂载，发请求，获取用户数据
    async getUserInfo() {
      // 获取用户信息，并储存在仓库当中【用户头像、名字】
      let res = await reqUserInfo();
      // 如果获取用户信息成功
      if (res.code === 200) {
        //@ts-ignore
        this.userName = res.data.username;
        //@ts-ignore
        this.userAvatar = res.data.avatar;
      } else {
      }
    },

    // 退出登录
    userLogout() {
      // 目前没有mock接口，退出登录接口（通知服务器本地用户唯一标识失效）
      //@ts-ignore
      this.token = '';
      //@ts-ignore
      this.userName = '';
      //@ts-ignore
      this.userAvatar = '';
      REMOVE_TOKEN();
    },
  },

  getters: {},
});

export default useUserStore;
