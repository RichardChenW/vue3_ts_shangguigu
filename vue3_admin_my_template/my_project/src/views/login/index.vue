<template>
  <div class="login-container">
    <el-row>
      <!-- 左边栅栏 -->
      <el-col :span="12" :xs="0"></el-col>
      <!-- 右边栅栏 -->
      <el-col :span="12" :xs="24">
        <el-form
          ref="ruleFormRef"
          :model="loginFormData"
          :rules="rules"
          class="login-form"
        >
          <h1>Hello!</h1>
          <h2>欢迎来到旺仔后台</h2>
          <!-- 账号 -->
          <el-form-item prop="username">
            <el-input
              v-model.username="loginFormData.username"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              v-model="loginFormData.password"
              type="password"
              :prefix-icon="Lock"
              :show-password="true"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              size="default"
              class="login-btn"
              @click="login"
              :loading="btnLoading"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
  import { reactive, ref, onMounted } from 'vue';
  import { User, Lock } from '@element-plus/icons-vue';
  import useUserStore from '@/store/modules/user';
  import { useRouter,useRoute } from 'vue-router';
  import { ElNotification } from 'element-plus';

  import { getTime } from '@/utils/time';

  let userStore = useUserStore();
  let $router = useRouter();
  let $route = useRoute();

  // 收集账号与密码数据
  let loginFormData = reactive({
    username: 'admin',
    password: '111111',
  });
  // 定义变量控制按钮加载效果
  let btnLoading = ref(false);
  // 获取表单实例，为了使用它的 validate 方法
  const ruleFormRef = ref();

  // 登录按钮点击事件
  const login = async () => {
    // 保证全部表单校验通过再发请求
    try {
      await ruleFormRef.value.validate();

      btnLoading.value = true;
      // 登录是否成功，可以
      try {
        await userStore.userLogin(loginFormData);
        // 判断登录的时候，路由路径当中是否有qurey参数，如果有，就往query参数跳
        if ($route.query.lastPageRoute){
          $router.push($route.query.lastPageRoute);
        }
        else{
          $router.push('/');
        }
        // 登录成功的信息
        ElNotification({
          type: 'success',
          title: '欢迎回来',
          message: `Hi,${getTime()}好`,
        });
        // 加载成功 loading 效果也消失
        btnLoading.value = false;
      } catch (error) {
        ElNotification({
          type: 'error',
          message: '登录失败',
        });
        btnLoading.value = false;
      }
    } catch {
      ElNotification({
        type: 'error',
        message: '账号密码不符合规范',
      });
    }
  };

  // 定义表单配置对象
  // const passwordValidator = (rule: any, value: any, callback: any) => {
  // if (value.length > 20) {
  //   callback(new Error('太太长了啦！'));
  // } else {
  //   callback();
  // }
  //   console.log("hello world")
  // };

  const passwordValidator = (rule, value, callback) => {
    if (value.length > 10) {
      callback(new Error('太太长了啦！'));
    } else {
      callback();
    }
  };

  const rules = reactive({
    username: [
      {
        required: true,
        message: '账户不能为空',
        trigger: 'blur',
      },
      {
        min: 5,
        max: 10,
        message: '账号长度要在6-10之间',
        trigger: 'blur',
      },
    ],
    password: [
      // {
      //   required: true,
      //   min: 5,
      //   max: 10,
      //   message: '密码长度要在6-10之间',
      //   trigger: 'blur',
      // },
      {
        validator: passwordValidator,
        trigger: 'blur',
        message:"密码长度不能超过20"
      },
    ],
  });
</script>

<style lang="scss" scoped>
  .login-container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg') no-repeat;
    background-size: cover;
    .login-form {
      width: 500px;
      top: 40vh;
      position: relative;
      background-image: url('@/assets/images/login_form.png');
      background-size: cover;
      padding: 40px;
      h1 {
        color: white;
        font-size: 40px;
      }
      h2 {
        color: white;
        font-size: 20px;
        margin: 20px 0;
      }
      .login-btn {
        width: 100%;
      }
    }
  }
</style>
