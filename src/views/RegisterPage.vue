<template>
  <div class="login-container">
    <div class="login-card">
      <h2 class="login-title">注册</h2>
      <form @submit.prevent="handleRegister" class="login-form">
        <div class="form-group">
          <label for="username">用户名/邮箱</label>
          <input 
            type="text" 
            id="username" 
            v-model="username" 
            placeholder="请输入用户名或邮箱" 
            required
          >
        </div>
        
        <div class="form-group">
          <label for="password">密码</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            placeholder="请输入密码" 
            required
          >
        </div>
        
        <div class="form-options">
          <a href="#" class="forgot-password">忘记密码?</a>
        </div>
        
        <button type="submit" class="login-button">注册</button>
        
        <div class="register-link">
          已有账号！ <a href="/login">立即登录</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// @ts-ignore
import { userLoginService } from '../api/user';
const username = ref('');
const password = ref('');
const rememberMe = ref(false);

const handleRegister = () => {

}

</script>

<style scoped lang="scss">
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 282px); // 减去导航栏和页脚的高度
  padding: 2rem 0;
}

.login-card {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
}

.login-title {
  text-align: center;
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.login-form {
  .form-group {
    margin-bottom: 1.2rem;
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #555;
      font-size: 0.9rem;
    }
    
    input {
      width: 92%;
      padding: 0.8rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
      transition: border-color 0.3s;
      
      &:focus {
        outline: none;
        border-color: #42b883;
        box-shadow: 0 0 0 2px rgba(66, 184, 131, 0.2);
      }
    }
  }
  
  .form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    
    .remember-me {
      display: flex;
      align-items: center;
      
      input {
        margin-right: 0.5rem;
      }
    }
    
    .forgot-password {
      color: #42b883;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
  
  .login-button {
    width: 100%;
    padding: 0.8rem;
    background-color: #42b883;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:hover {
      background-color: #3aa876;
    }
  }
  
  .register-link {
    text-align: center;
    margin-top: 1.5rem;
    font-size: 0.9rem;
    color: #666;
    
    a {
      color: #42b883;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>