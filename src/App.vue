<template>
  <!-- 导航栏 -->
  <Navbar></Navbar>
  <!-- 路由视图 -->
  <RouterView />
  <!-- 页脚 -->
  <Footer></Footer>
</template>

<script setup lang="ts">
import Navbar from './components/NavbarComponent.vue';
import Footer from './components/FooterComponent.vue';
</script>

<style>
</style>
