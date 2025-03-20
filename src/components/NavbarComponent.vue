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
      <el-button type="primary" class="login-button" @click="router.push('/login')">登录</el-button>
    </div>
  </nav>
</template>

<script setup>
import { useRoute, useRouter} from 'vue-router'
const route = useRoute()
const router = useRouter()

const links = [
  { name: '首页', path: '/' },
  { name: '文章', path: '/article' },
  { name: '作品', path: '/work' },
  { name: '关于', path: '/about' }
]
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
    width: 20%;
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
  }
}




</style>