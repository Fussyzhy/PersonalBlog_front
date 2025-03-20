<template>
  <nav class="navbar">
    <div class="nav-logo">
      <h1>HaoYangのBlog</h1>
    </div>
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
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const links = [
  { name: '首页', path: '/' },
  { name: '文章', path: '/article' },
  { name: '作品', path: '/work' },
  { name: '关于', path: '#'}
]
</script>

<style scoped lang="scss">
/* 导航栏样式 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 80px;
  border-bottom: 1px solid #747474;
  transition: all 0.3s;
  // background-color: #ff0e0e;
  // border-radius: 20px;

  &:hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
    //Y轴和x轴旋转
    // transform: rotateY(10deg) rotateX(10deg);
  }

  .nav-logo {
    h1 {
      font-size: 1.5rem;
      font-weight: bold;
      color: #333;
    }
  }

  .nav-menu {
    a {
      margin-left: 1.5rem;
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
}




</style>