<template>
  <div class="register-container">
    <div class="register-card">
      <h2 class="register-title">欢迎加入！</h2>
      <el-form :model="form" label-width="auto" class="register-form">
        <el-form-item label="">
          <el-input v-model="form.username" placeholder="请输入电子邮件地址">
            <template #prepend>
              <el-icon color="#42b883"><Message /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.password" placeholder="请设置您的密码" type="password" show-password>
            <template #prepend>
              <el-icon color="#42b883"><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="">
          <el-input v-model="form.repassword" placeholder="请再次输入您的密码" type="password" show-password>
            <template #prepend>
              <el-icon color="#42b883"><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="" :inline="true" class="register-code">
          <el-input v-model="form.code" style="width: 50%; border-radius: 20px;" placeholder="请输入验证码">
            <template #prepend>
              <el-icon color="#42b883"><ChatDotSquare /></el-icon>
            </template>
          </el-input>
          <div style="width: 17%"></div>
          <el-button @click="handleSendCode" class="code-button" :class="{canUse:isDisabled}" :disabled="isDisabled">{{ codeButtonName }}</el-button>
        </el-form-item>
        <el-form-item>
          <el-button @click="handleRegister" class="register-button" style="height: 40px;">注册</el-button>
        </el-form-item>

        <div class="register-link">
          已有账号！ <a href="/login">立即登录</a>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onBeforeUnmount, onMounted } from 'vue';
import { ElMessage } from 'element-plus'
import { Lock, Message, ChatDotSquare } from '@element-plus/icons-vue'
// @ts-ignore
import { userRegisterService, sendEmailService } from '../api/user';
import router from '../router';

const form = reactive({
  username: '',
  password: '',
  repassword: '',
  code: ''
})

const codeButtonName = ref('发送验证码')

const handleRegister = async () => {
  const res = await userRegisterService({
    username: form.username,
    password: form.password,
    code: form.code
  })
  if (res.data.code === 200) {
    ElMessage({
      message: `注册成功啦！`,
      type: 'success',
    })
    setTimeout(() => {
      router.push('/login');
    }, 500)
  }
}

let timer:any = null
const isDisabled = ref(false)
const handleSendCode = async () => {
  // 获取当前时间戳
  const currentTimestamp = Date.now();
  // 计算60秒后的时间戳
  const futureTimestamp = currentTimestamp + 60 * 1000;
  localStorage.setItem('codeTime', futureTimestamp.toString()) // 将时间戳存储到本地存储中
  
  // 发送验证码请求
  await sendEmailService({ email: form.username })

  ElMessage({
    message: `验证码已发送请查收!`,
    type: 'success',
  })
  // 开始60秒倒计时
  startCountdown(60)
}

// 封装倒计时逻辑
const startCountdown = (seconds: number) => {
  isDisabled.value = true
  let remainingTime = seconds
  
  // 清除可能存在的旧定时器
  if (timer) {
    clearInterval(timer)
  }
  
  codeButtonName.value = `${remainingTime}s后重新发送`
  
  timer = setInterval(() => {
    remainingTime--
    codeButtonName.value = `${remainingTime}s后重新发送`
    
    if (remainingTime <= 0) {
      clearInterval(timer)
      codeButtonName.value = '重新发送'
      isDisabled.value = false
      localStorage.removeItem('codeTime')
    }
  }, 1000)
}

// 离开页面时清除定时器, 避免内存泄漏
onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
})

onMounted(() => {
  const savedEndTime = localStorage.getItem('codeTime')
  if (savedEndTime) {
    const endTime = parseInt(savedEndTime)
    const now = Date.now()
    if (now < endTime) {
      // 如果当前时间小于结束时间，继续倒计时
      const remainingSeconds = Math.ceil((endTime - now) / 1000)
      startCountdown(remainingSeconds)
    } else {
      // 倒计时已结束，清除存储
      localStorage.removeItem('codeTime')
    }
  }
})
</script>

<style scoped lang="scss">
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 282px); // 减去导航栏和页脚的高度
  padding: 2rem 0;
}

.register-card {
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

.register-title {
  text-align: center;
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.register-form {

  .el-form-item {
    margin-bottom: 2.2rem;
  }

  .el-input {
    width: 95%;
    height: 40px;
    --el-input-focus-border-color: #42b883;
    --el-input-hover-border-color: #42b883;
  }

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

  .register-code {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .code-button {
      width: 28%; 
      margin-right:5px; 
      height: 40px; 
      border-radius: 20px;
      transition: all 0.3s ease;
      &:hover {
        background-color: #ecfff5;
        color: #42b883;
        border-color: #c8fee5;
      }
      

      &.canUse {
        
        &:hover {
          background-color: #ffffff;
          color: #a8abb2;
          border-color: #e4e7ed;
        }
      }
    }

  }
  
  .register-button {
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