<script setup lang="ts">
// import { ref } from 'vue';

</script>

<template>
  <div class="home-container">
    <!-- 个人简介区域 -->
    <section class="profile-section">
      <div class="profile-content">
        <div class="avatar">
          <!-- 头像 -->
          <img src="/src/assets/images/avatar.png">
        </div>
        <div class="profile-info">
          <h2>Hi, I'm Hao Yang</h2>
          <p>一个热爱技术、热爱生活的开发者</p>
          <div class="social-links">
            <a href="https://github.com/Fussyzhy" target="_blank">
              <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true">
                  <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 文章列表区域 -->
    <section class="articles-section">
      <el-divider content-position="center">
        <h2 class="section-title">最新文章</h2>
      </el-divider>
      <div class="article-grid">
        <article class="article-card" v-for="i in 6" :key="i">
          <div class="article-image">
            <img src="/src/assets/images/article-cover.svg" alt="文章封面">
          </div>
          <div class="article-content">
            <h3>示例文章标题</h3>
            <p class="article-excerpt">这是一段示例文章摘要，展示文章的主要内容...</p>
            <div class="article-meta">
              <span>2024-01-01</span>
              <span>5 min read</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 个人简介区域样式 */
.profile-section {
  padding: 4rem 0;
  text-align: center;
}

.profile-content {
  max-width: 600px;
  margin: 0 auto;
}

.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem;
  transition: all 0.3s;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3);
}

.avatar img {
  width: auto;
  height: 150px;
  /* margin-bottom: 1.5rem; */
  margin: auto -90px ;
}

.avatar:hover {
  transform: translateY(-5px);
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
  /* transform: rotateY(20deg); */
}

.profile-info h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
}

.profile-info p {
  color: #666;
  margin-bottom: 1.5rem;
}

.social-links a {
  margin: auto;
  color: #42b883;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  width: 90px;
  svg {
    width: 25px;
    height: 25px;
    margin: 0px 8px 0px 0px;
    fill: #42b883;
    transition: all 0.3s;
  }

  &:hover {
    color: #57da9f;

    svg {
      fill: #57da9f;
    }
  }
}

/* 文章列表区域样式 */
.articles-section {
  padding: 4rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
  font-size: 20px !important;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 20px 0px 0px;
}

.article-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-5px);
}

.article-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.article-content {
  padding: 1.5rem;
}

.article-content h3 {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.article-excerpt {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 0.8rem;
}

/* 页脚样式 */
.footer {
  text-align: center;
  padding: 2rem 0;
  color: #666;
  border-top: 1px solid #eee;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .article-grid {
    grid-template-columns: 1fr;
  }

  .nav-menu {
    display: none;
  }
}
</style>
