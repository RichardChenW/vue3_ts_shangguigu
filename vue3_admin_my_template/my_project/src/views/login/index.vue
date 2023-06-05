<template>
  <div class="login-container">
    <el-row>
      <!-- 左边栅栏 -->
      <el-col :span="12" :xs="0"></el-col>
      <!-- 右边栅栏 -->
      <el-col :span="12" :xs="24">
        <el-form :model="loginFormData" class="login-form">
          <h1>Hello!</h1>
          <h2>欢迎来到旺仔后台</h2>
          <!-- 账号 -->
          <el-form-item>
            <el-input
              v-model="loginFormData.username"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item>
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
  import { reactive,ref} from 'vue';
  import { User, Lock } from '@element-plus/icons-vue';
  import useUserStore from '@/store/modules/user';
  import { useRouter } from 'vue-router';
  import { ElNotification } from 'element-plus';

  let userStore = useUserStore();
  let $router = useRouter();
  
  // 收集账号与密码数据
  let loginFormData = reactive({
    username: 'admin',
    password: '111111',
  });
  // 定义变量控制按钮加载效果
  let btnLoading = ref(false)


  // 登录按钮点击事件
  const login = async () => {
    btnLoading.value = true
    // 登录是否成功，可以
    try {
      await userStore.userLogin(loginFormData);
      $router.push('/');
      // 登录成功的信息
      ElNotification({
        type: 'success',
        message: '登录成功',
      });
      // 加载成功 loading 效果也消失
      btnLoading.value = false
    } catch (error) {
      ElNotification({
        type: 'error',
        message: error.message,
      });
      btnLoading.value = false
    }
  };
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
