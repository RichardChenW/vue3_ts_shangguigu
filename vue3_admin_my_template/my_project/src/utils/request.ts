import axios from 'axios';
import ElMessage from 'element-plus';

// 第一步：利用 axios 对象的 create 方法，去创建 axios 实例(其他配置：基础路径、超时时间等)
let request = axios.create({
  // 1. 基础路径
  baseURL: 'http://127.0.0.1:8080' + import.meta.env.VITE_APP_BASE_API, // 基础路径
  timeout: 5000, // 超时时间
}); //=> 返回一个 axios 实例对象

// 第二步：未 request 实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
  // config 配置对象,headers 属性请求头，经常给服务器端携带公共参数
  // 发出请求时，会自动运行回调函数，并传入 config 配置对象，必须返回
  return config;
});

// 第三步：配置响应拦截器
request.interceptors.response.use(
  //可以用于简化一些数据，不用再写 data.data,很麻烦,可以配置成功后返回的数据
  (res) => {
    return res.data;
  },
  // 响应失败的回调函数，一般处理 http 网络错误
  (err) => {
    // 定义一个变量：储存网络错误信息
    let message = '';
    // http 状态码
    let status = err.response.status;
    switch (status) {
      case 401:
        message = 'TOKEN 过期';
        break;
      case 403:
        message = '无权访问';
        break;
      case 404:
        message = '请求地址错误';
        break;
      case 500:
        message = '服务器出现问题';
        break;
      default:
        message = '网络出现问题';
    };
    ElMessage({
      type: 'error',
      message,
    });
    return Promise.reject(err);
  },
);

// 对外暴露
export default request;
