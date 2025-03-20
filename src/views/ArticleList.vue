<script setup lang="ts">
// 这里可以添加文章列表的数据和逻辑
</script>

<template>
  <div class="article-list-container">
    <!-- 页面标题区域 -->
    <section class="page-header">
      <h1 class="page-title">文章列表</h1>
      <p class="page-description">探索我的技术文章、心得体会和学习笔记</p>
    </section>

    <!-- 文章分类和筛选区域 -->
    <section class="filter-section">
      <div class="category-tabs">
        <button class="category-tab active">全部</button>
        <button class="category-tab">前端开发</button>
        <button class="category-tab">后端技术</button>
        <button class="category-tab">学习笔记</button>
        <button class="category-tab">生活随笔</button>
      </div>
      <div class="sort-options">
        <select class="sort-select">
          <option value="newest">最新发布</option>
          <option value="popular">最多阅读</option>
          <option value="comments">最多评论</option>
        </select>
      </div>
    </section>

    <!-- 文章列表区域 -->
    <section class="articles-section">
      <div class="article-grid">
        <!-- 文章卡片 -->
        <article class="article-card" v-for="i in 9" :key="i">
          <div class="article-image">
            <img src="/src/assets/images/article-cover.svg" alt="文章封面">
          </div>
          <div class="article-content">
            <div class="article-tags">
              <span class="article-tag">前端开发</span>
            </div>
            <h3 class="article-title">Vue3 组合式 API 实战指南</h3>
            <p class="article-excerpt">探索Vue3组合式API的强大功能，学习如何构建更加灵活和可维护的前端应用...</p>
            <div class="article-meta">
              <div class="meta-left">
                <span class="publish-date">2024-01-15</span>
                <span class="read-time">8 min read</span>
              </div>
              <div class="meta-right">
                <span class="view-count"><i class="view-icon"></i> 1024</span>
                <span class="comment-count"><i class="comment-icon"></i> 18</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- 分页控件 -->
    <section class="pagination-section">
      <div class="pagination-controls">
        <button class="pagination-btn prev-btn" disabled>&lt; 上一页</button>
        <div class="pagination-numbers">
          <button class="pagination-number active">1</button>
          <button class="pagination-number">2</button>
          <button class="pagination-number">3</button>
          <span class="pagination-ellipsis">...</span>
          <button class="pagination-number">10</button>
        </div>
        <button class="pagination-btn next-btn">下一页 &gt;</button>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.article-list-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 页面标题区域样式 */
.page-header {
  padding: 3rem 0;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
}

.page-description {
  color: #666;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

/* 分类和筛选区域样式 */
.filter-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.category-tabs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.category-tab {
  padding: 0.5rem 1rem;
  border: 1px solid #eee;
  border-radius: 20px;
  background: none;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.9rem;
}

.category-tab:hover, .category-tab.active {
  background-color: #42b883;
  color: white;
  border-color: #42b883;
}

.sort-select {
  padding: 0.5rem 1rem;
  border: 1px solid #eee;
  border-radius: 20px;
  background: none;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.9rem;
  outline: none;
}

.sort-select:hover, .sort-select:focus {
  border-color: #42b883;
}

/* 文章列表区域样式 */
.articles-section {
  padding: 1rem 0 3rem;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.article-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  cursor: pointer;
  background-color: white;
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

.article-tags {
  margin-bottom: 0.8rem;
}

.article-tag {
  display: inline-block;
  padding: 0.2rem 0.6rem;
  background-color: rgba(66, 184, 131, 0.1);
  color: #42b883;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
}

.article-title {
  font-size: 1.25rem;
  color: #333;
  margin-bottom: 0.8rem;
  line-height: 1.4;
}

.article-excerpt {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 0.8rem;
}

.meta-left, .meta-right {
  display: flex;
  gap: 1rem;
}

.view-count, .comment-count {
  display: flex;
  align-items: center;
}

/* 分页控件样式 */
.pagination-section {
  padding: 2rem 0;
  display: flex;
  justify-content: center;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.pagination-btn {
  padding: 0.5rem 1rem;
  border: 1px solid #eee;
  border-radius: 4px;
  background: none;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}

.pagination-btn:hover:not([disabled]) {
  background-color: #42b883;
  color: white;
  border-color: #42b883;
}

.pagination-btn[disabled] {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination-numbers {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.pagination-number {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #eee;
  border-radius: 4px;
  background: none;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}

.pagination-number:hover, .pagination-number.active {
  background-color: #42b883;
  color: white;
  border-color: #42b883;
}

.pagination-ellipsis {
  color: #666;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .article-grid {
    grid-template-columns: 1fr;
  }

  .filter-section {
    flex-direction: column;
    align-items: flex-start;
  }

  .category-tabs {
    margin-bottom: 1rem;
    width: 100%;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }

  .pagination-controls {
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>