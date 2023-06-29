// 统一管理项目用户相关的接口
import request from '@/utils/request';
import type { loginForm, loginResponseData } from './type';

// 枚举管理接口
enum API {
  LOGIN_URL = '/user/login',
  USERINFO = '/user/info',
}

// 暴露请求函数

// 登录接口方法
export const reqLogin = (data: loginForm): Promise<loginResponseData> =>
  request({
    method: 'POST',
    url: API.LOGIN_URL,
    data: data,
  });

// 返回的是一个 promise 对象
export const reqUserInfo = (): Promise<any> =>
  request({
    method: 'GET',
    url: API.USERINFO,
  });
