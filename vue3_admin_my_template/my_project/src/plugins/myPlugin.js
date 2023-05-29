export default {
  install: (app, options) => {
    // 注入一个全局可用的 $translate() 方法
    app.config.globalProperties.$sayHi = ()=>{
      console.log("hi richard !")
    }
  },
};
