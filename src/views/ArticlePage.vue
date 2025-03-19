<script setup lang="ts">
import { ref } from 'vue';
// @ts-ignore
import Navbar from '../components/NavbarComponent.vue';
</script>

<template>
  <div class="article-container">
    <!-- 导航栏 -->
    <Navbar></Navbar>

    <!-- 文章内容区域 -->
    <main class="article-main">
      <!-- 文章头部信息 -->
      <header class="article-header">
        <h1 class="article-title">如何成为一名优秀的前端开发者</h1>
        <div class="article-meta">
          <div class="author-info">
            <img src="/src/assets/images/avatar.png" alt="作者头像" class="author-avatar">
            <span class="author-name">Hao Yang</span>
          </div>
          <div class="article-info">
            <span class="publish-date">发布于：2024-01-15</span>
            <span class="read-time">阅读时间：8 分钟</span>
            <span class="view-count">阅读量：1024</span>
          </div>
        </div>
        <div class="article-tags">
          <span class="tag">前端开发</span>
          <span class="tag">JavaScript</span>
          <span class="tag">职业发展</span>
        </div>
      </header>

      <!-- 文章内容 -->
      <section class="article-content">
        <p>在当今快速发展的技术世界中，前端开发已经成为软件开发领域中最具活力和创新的方向之一。随着用户体验变得越来越重要，优秀的前端开发者需求量也在不断增加。</p>

        <h2>1. 掌握核心技术</h2>
        <p>作为前端开发者，首先需要扎实掌握HTML、CSS和JavaScript这三大核心技术。HTML提供了网页的结构，CSS负责样式和布局，而JavaScript则赋予网页交互性和动态特性。</p>
        <p>除了基础知识，还需要了解现代化的工具和框架，如React、Vue或Angular等前端框架，以及Webpack、Vite等构建工具。这些工具能够帮助你更高效地开发复杂的前端应用。</p>

        <h2>2. 培养设计感和用户体验意识</h2>
        <p>优秀的前端开发者不仅仅是代码的实现者，还应该具备一定的设计感和用户体验意识。了解基本的设计原则，如色彩搭配、排版布局、视觉层次等，能够帮助你创建更加美观和用户友好的界面。</p>
        <p>同时，要时刻站在用户的角度思考，关注页面的加载速度、响应性和可访问性，确保所有用户都能够顺畅地使用你开发的产品。</p>

        <h2>3. 持续学习和实践</h2>
        <p>前端技术更新迭代速度非常快，要成为优秀的前端开发者，持续学习是必不可少的。关注行业动态，参与开源项目，阅读技术博客，参加技术交流活动，都是不断提升自己的有效途径。</p>
        <p>最重要的是，要通过实际项目来巩固所学知识。理论知识只有在实践中才能真正转化为能力，多动手写代码，解决实际问题，才能不断提高自己的技术水平。</p>

        <h2>4. 培养良好的团队协作能力</h2>
        <p>在实际工作中，前端开发者通常需要与设计师、后端开发者、产品经理等多个角色协作。良好的沟通能力和团队协作精神能够帮助你更好地理解需求，解决问题，推动项目顺利进行。</p>
        <p>此外，熟悉版本控制工具（如Git）、项目管理工具和敏捷开发流程，也是高效协作的重要基础。</p>

        <div class="article-quote">
          <p>"前端开发不仅仅是写代码，更是创造用户体验的艺术。"</p>
        </div>

        <h2>5. 构建个人品牌</h2>
        <p>最后，建立自己的个人品牌也是成为优秀前端开发者的重要一环。可以通过以下方式来提升自己的影响力：</p>
        <ul>
          <li>创建个人技术博客，分享学习心得和实践经验</li>
          <li>参与开源项目，为社区做出贡献</li>
          <li>在技术社区（如GitHub、Stack Overflow等）活跃交流</li>
          <li>打造个人作品集，展示自己的技术能力</li>
        </ul>
        <p>通过这些方式，不仅能够巩固自己的知识，还能够扩大人脉，获得更多的职业机会。</p>
      </section>

      <!-- 文章底部 -->
      <footer class="article-footer">
        <div class="article-actions">
          <button class="action-btn like-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span>点赞</span>
          </button>
          <button class="action-btn share-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            <span>分享</span>
          </button>
        </div>
      </footer>

      <!-- 评论区 -->
      <section class="comments-section">
        <h3 class="comments-title">评论（5）</h3>

        <!-- 评论输入框 -->
        <div class="comment-form">
          <img src="/src/assets/images/avatar.png" alt="用户头像" class="user-avatar">
          <div class="comment-input-wrapper">
            <textarea class="comment-input" placeholder="写下你的评论..."></textarea>
            <button class="comment-submit">发布评论</button>
          </div>
        </div>

        <!-- 评论列表 -->
        <div class="comments-list">
          <!-- 评论项 -->
          <div class="comment-item">
            <img src="/src/assets/images/avatar.png" alt="评论者头像" class="commenter-avatar">
            <div class="comment-content">
              <div class="commenter-info">
                <span class="commenter-name">张三</span>
                <span class="comment-time">2024-01-16 10:30</span>
              </div>
              <p class="comment-text">非常实用的文章，特别是关于持续学习的部分，给了我很多启发！</p>
              <div class="comment-actions">
                <button class="comment-reply-btn">回复</button>
                <button class="comment-like-btn">点赞</button>
              </div>
            </div>
          </div>

          <div class="comment-item">
            <img src="/src/assets/images/avatar.png" alt="评论者头像" class="commenter-avatar">
            <div class="comment-content">
              <div class="commenter-info">
                <span class="commenter-name">李四</span>
                <span class="comment-time">2024-01-16 14:15</span>
              </div>
              <p class="comment-text">作为一名前端新手，这篇文章对我帮助很大，谢谢分享！</p>
              <div class="comment-actions">
                <button class="comment-reply-btn">回复</button>
                <button class="comment-like-btn">点赞</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- 相关文章推荐 -->
    <aside class="related-articles">
      <h3 class="related-title">相关文章</h3>
      <div class="related-list">
        <a href="#" class="related-item">
          <img src="/src/assets/images/article-cover.svg" alt="文章封面" class="related-image">
          <div class="related-info">
            <h4 class="related-article-title">前端性能优化的10个技巧</h4>
            <span class="related-date">2024-01-10</span>
          </div>
        </a>
        <a href="#" class="related-item">
          <img src="/src/assets/images/article-cover.svg" alt="文章封面" class="related-image">
          <div class="related-info">
            <h4 class="related-article-title">现代JavaScript框架对比</h4>
            <span class="related-date">2023-12-25</span>
          </div>
        </a>
        <a href="#" class="related-item">
          <img src="/src/assets/images/article-cover.svg" alt="文章封面" class="related-image">
          <div class="related-info">
            <h4 class="related-article-title">CSS Grid布局完全指南</h4>
            <span class="related-date">2023-12-18</span>
          </div>
        </a>
      </div>
    </aside>

    <!-- 页脚 -->
    <footer class="footer">
      <p>© 2025 My Blog. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.article-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.article-main {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;
}

/* 文章头部样式 */
.article-header {
  margin-bottom: 2rem;
}

.article-title {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.author-info {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}

.author-name {
  font-weight: 600;
  color: #333;
}

.article-info {
  display: flex;
  gap: 1rem;
  color: #666;
  font-size: 0.9rem;
}

.article-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.tag {
  background-color: #f0f8ff;
  color: #42b883;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  transition: all 0.3s;
}

.tag:hover {
  background-color: #42b883;
  color: white;
}

/* 文章内容样式 */
.article-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
  margin-bottom: 3rem;
}

.article-content h2 {
  font-size: 1.8rem;
  color: #333;
  margin: 2rem 0 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

.article-content p {
  margin-bottom: 1.5rem;
}

.article-content ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
}

.article-content li {
  margin-bottom: 0.5rem;
}

.article-quote {
  border-left: 4px solid #42b883;
  padding: 1rem 1.5rem;
  background-color: #f9f9f9;
  margin: 2rem 0;
  font-style: italic;
}

/* 文章底部样式 */
.article-footer {
  margin-bottom: 3rem;
  border-top: 1px solid #eee;
  padding-top: 1.5rem;
}

.article-actions {
  display: flex;
  gap: 1rem;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: 1px solid #eee;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  color: #666;
  transition: all 0.3s;
}

.action-btn:hover {
  background-color: #f9f9f9;
  color: #42b883;
  border-color: #42b883;
}

.action-btn svg {
  transition: all 0.3s;
}

.action-btn:hover svg {
  stroke: #42b883;
}

/* 评论区样式 */
.comments-section {
  margin-bottom: 3rem;
}

.comments-title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.comment-form {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.user-avatar, .commenter-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.comment-input-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.comment-input {
  width: 100%;
  min-height: 100px;
  padding: 0.8rem;
  border: 1px solid #eee;
  border-radius: 8px;
  resize: vertical;
  font-family: inherit;
  font-size: 0.9rem;
}

.comment-submit {
  align-self: flex-end;
  background-color: #42b883;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.comment-submit:hover {
  background-color: #3aa876;
}

.comments-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.comment-item {
  display: flex;
  gap: 1rem;
}

.comment-content {
  flex: 1;
}

.commenter-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.commenter-name {
  font-weight: 600;
  color: #333;
}

.comment-time {
  color: #999;
  font-size: 0.8rem;
}

.comment-text {
  margin-bottom: 0.8rem;
  line-height: 1.5;
}

.comment-actions {
  display: flex;
  gap: 1rem;
}

.comment-reply-btn, .comment-like-btn {
  background: none;
  border: none;
  color: #666;
  font-size: 0.8rem;
  cursor: pointer;
  transition: color 0.3s;
}

.comment-reply-btn:hover, .comment-like-btn:hover {
  color: #42b883;
}

/* 相关文章样式 */
.related-articles {
  max-width: 800px;
  margin: 0 auto 4rem;
}

.related-title {
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 1.5rem;
  text-align: center;
}

.related-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.related-item {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.related-item:hover {
  transform: translateY(-5px);
}

.related-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.related-info {
  padding: 1rem;
}

.related-article-title {
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.related-date {
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
  .article-title {
    font-size: 2rem;
  }

  .article-meta {
    flex-direction: column;
    align-items: flex-start;
  }

  .related-list {
    grid-template-columns: 1fr;
  }

  .comment-form {
    flex-direction: column;
  }

  .user-avatar {
    align-self: center;
  }
}
</style>