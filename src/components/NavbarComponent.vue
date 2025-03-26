<template>
  <nav class="navbar">
    <a class="nav-logo" href="/">
      <h1>HaoYangのBlog</h1>
    </a>
    <div class="nav-menu">
      <router-link
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        :class="{ 'active': $route.path === link.path }"
      >
        {{ link.name }}
      </router-link>
    </div>
    <div class="nav-login">
      <el-button type="primary" class="login-button" @click="router.push('/login')" v-if="!isLogin">登录</el-button>
      <div class="user-container" v-else>
        <img 
          src="../assets/images/avatar.png" 
          alt="" class="user-button"
          @click="toggleExitBox"
        >
        <div class="exit-box" v-show="showExitBox">
          <div class="exit" @click="handleClickUser()">
            <el-icon style="margin-top: 3px; margin-right: 6px;"><User /></el-icon>个人主页</div>
          <div class="exit" @click="handleLogout()">
            <el-icon style="margin-top: 4px; margin-right: 6px;"><Remove /></el-icon>退出登录</div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute, useRouter} from 'vue-router'
// 引入pinia
import { useUserStore } from '../stores/user';
import { onBeforeMount, ref, watch, onMounted, onUnmounted } from 'vue'
import { ElMessage } from 'element-plus'

const route = useRoute()
const router = useRouter()
const isLogin = ref(false)
const showExitBox = ref(false)

// 切换退出框显示状态
const toggleExitBox = () => {
  showExitBox.value = !showExitBox.value;
}

const handleClickUser = () => {
  router.push('/user')
  showExitBox.value = false
}

// 点击外部区域关闭退出框
const handleClickOutside = (event) => {
  const userContainer = document.querySelector('.user-container');
  if (userContainer && !userContainer.contains(event.target) && showExitBox.value) {
    showExitBox.value = false;
  }
}

// 添加和移除点击事件监听器
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
})

// 监听用户登录状态变化
watch(() => useUserStore().token, (newValue, oldValue) => {
  if (useUserStore().token) {
    isLogin.value = true
  } else {
    isLogin.value = false
  }
})

onBeforeMount(() => {
  if (useUserStore().token) {
    isLogin.value = true
  } else {
    isLogin.value = false
  }
})



const links = [
  { name: '首页', path: '/' },
  { name: '文章', path: '/article' },
  { name: '作品', path: '/work' },
  { name: '关于', path: '/about' }
]

const handleLogout = () => {
  useUserStore().removeToken()
  ElMessage({
    message: '退出成功！',
    type: 'success',
  })
  router.push('/')
  showExitBox.value = false
}
</script>

<style scoped lang="scss">
/* 导航栏样式 */
.navbar {
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #dcdfe6;
  transition: all 0.3s;
  margin: auto;

  .nav-logo {
    width: 25%;
    transition: all 0.3s;
    border-radius: 10px;
    padding: 0px 20px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
    }
    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    }
  }

  .nav-menu {
    width: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 5%;
    a {
      margin-left: 4rem;
      text-decoration: none;
      color: #666;
      transition: color 0.3s;

      &:hover {
        color: #42b883;
      }
      &.active {
        color: #42b883;
      }
    }
  }

  .nav-login {
    width: 10%;
    position: relative;

    .login-button {
      width:80px;
      background-color: #42b883;
      border: #42b883 solid 1px;
      border-radius: 10px;
      transition: all 0.3s; // 添加过渡效果，使背景颜色变化更平滑;

      &:hover {
        background-color: #57da9f;
        border: #57da9f solid 1px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
      }
    }

    .user-button {
      width: 50px;
      height: 50px;
      border-radius: 100px;
      object-fit: cover;
      cursor: pointer;
      transition: all 0.3s; // 添加过渡效果，使背景颜色变化更平滑;
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
      }
    }

   .exit-box {
      position: absolute;
      top: 60px;
      right: -60px;
      width: 150px;
      // height: 80px;
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      padding: 5px;
      z-index: 100;
      transition: opacity 0.3s;

      .exit {
        margin: 6px 0px;
        width:150px;
        height: 30px;
        border-radius: 8px;
        transition: all 0.3s;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #333333;

        &:hover {
          background-color: #f5f5f5;
        }
      }
   }
  }
}




</style>