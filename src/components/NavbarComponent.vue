<template>
  <nav class="navbar">
    <div class="nav-logo">
      <h1>HaoYangのBlog</h1>
    </div>
    <div class="nav-menu">
      <!-- <a href="/" class="active">首页</a>
      <a href="/article">文章</a>
      <a href="/">分类</a>
      <a href="/">关于</a> -->
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
  { name: '分类', path: '#' },
  { name: '关于', path: '#'}
]
</script>

<style scoped lang="scss">
/* 导航栏样式 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;

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