<script setup lang="ts">
// 导入所需的组件和函数
</script>

<template>
  <div class="about-container">
    <!-- 页面标题区域 -->
    <div class="about-header">
      <h1>关于我</h1>
      <p>了解更多关于我的经历、技能和兴趣</p>
    </div>

    <!-- 个人简介区域 -->
    <section class="about-section">
      <h2 class="section-title">个人简介</h2>
      <div class="profile-card">
        <div class="profile-image">
          <img src="/src/assets/images/avatar.png" alt="个人照片">
        </div>
        <div class="profile-content">
          <h3>张昊阳</h3>
          <p class="profile-subtitle">全栈开发工程师</p>
          <p class="profile-description">
            我是一名热爱技术的全栈开发工程师，拥有多年的Web和移动应用开发经验。我喜欢探索新技术，解决复杂问题，并创造用户友好的应用程序。
            在工作之余，我喜欢参与开源项目，撰写技术博客，分享我的知识和经验。
          </p>
          <div class="contact-info">
            <div class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
              </svg>
              <span>2233832509@qq.com</span>
            </div>
            <div class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
              <span>github.com/Fussyzhy</span>
            </div>
            <div class="contact-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
              <span>https://gitee.com/zhang-haoyang0407</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <!-- 兴趣爱好区域 -->
    <section class="about-section">
      <h2 class="section-title">兴趣爱好</h2>
      <div class="interests-container">
        <div class="interest-item">
          <div class="interest-icon">📚</div>
          <h3>阅读</h3>
          <p>喜欢阅读技术书籍和科幻小说，拓展知识面和想象力。</p>
        </div>
        <div class="interest-item">
          <div class="interest-icon">🏃</div>
          <h3>跑步</h3>
          <p>每周坚持跑步，保持身体健康和思维活跃。</p>
        </div>
        <div class="interest-item">
          <div class="interest-icon">✈️</div>
          <h3>旅行</h3>
          <p>热爱探索不同的文化和风景，从中获取灵感。</p>
        </div>
        <div class="interest-item">
          <div class="interest-icon">🎸</div>
          <h3>音乐</h3>
          <p>业余吉他爱好者，喜欢在闲暇时间弹奏音乐放松心情。</p>
        </div>
      </div>
    </section>

    <!-- 技能展示区域 -->
    <section class="about-section">
      <h2 class="section-title">专业技能</h2>
      <div class="skills-container">
        <div class="skill-category">
          <h3>前端开发</h3>
          <div class="skill-tags">
            <div class="skill-tag">HTML5</div>
            <div class="skill-tag">CSS3</div>
            <div class="skill-tag">JavaScript</div>
            <div class="skill-tag">TypeScript</div>
            <div class="skill-tag">Vue.js</div>
            <div class="skill-tag">React</div>
            <div class="skill-tag">Sass/SCSS</div>
          </div>
        </div>
        <div class="skill-category">
          <h3>后端开发</h3>
          <div class="skill-tags">
            <div class="skill-tag">Node.js</div>
            <div class="skill-tag">Express</div>
            <div class="skill-tag">Python</div>
            <div class="skill-tag">Django</div>
            <div class="skill-tag">Java</div>
            <div class="skill-tag">Spring Boot</div>
          </div>
        </div>
        <div class="skill-category">
          <h3>其他技能</h3>
          <div class="skill-tags">
            <div class="skill-tag">Git</div>
            <div class="skill-tag">Docker</div>
            <div class="skill-tag">CI/CD</div>
            <div class="skill-tag">MongoDB</div>
            <div class="skill-tag">MySQL</div>
            <div class="skill-tag">AWS</div>
          </div>
        </div>
      </div>
    </section>

    <!-- 教育背景区域 -->
    <section class="about-section">
      <h2 class="section-title">教育背景</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>软件工程 本科学位</h3>
            <p class="timeline-place">淮阴工学院</p>
            <p class="timeline-date">2021 - 2025</p>
            <p class="timeline-description">主修软件开发和系统设计，获得优秀毕业生称号，参与多个实践项目。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 工作经历区域 -->
    <section class="about-section">
      <h2 class="section-title">工作经历</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>高级全栈开发工程师</h3>
            <p class="timeline-place">某科技公司</p>
            <p class="timeline-date">2021 - 至今</p>
            <p class="timeline-description">负责公司核心产品的前后端开发，优化系统性能，提升用户体验，带领团队完成多个重要项目。</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>前端开发工程师</h3>
            <p class="timeline-place">某互联网公司</p>
            <p class="timeline-date">2018 - 2021</p>
            <p class="timeline-description">参与公司多个Web应用的开发，负责UI组件库的设计和实现，优化前端性能和用户体验。</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>软件开发实习生</h3>
            <p class="timeline-place">某创业公司</p>
            <p class="timeline-date">2017 - 2018</p>
            <p class="timeline-description">参与公司移动应用的开发，负责功能实现和Bug修复，学习了敏捷开发流程。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目经历区域 -->
    <section class="about-section">
      <h2 class="section-title">项目经历</h2>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>高级全栈开发工程师</h3>
            <p class="timeline-place">某科技公司</p>
            <p class="timeline-date">2021 - 至今</p>
            <p class="timeline-description">负责公司核心产品的前后端开发，优化系统性能，提升用户体验，带领团队完成多个重要项目。</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>前端开发工程师</h3>
            <p class="timeline-place">某互联网公司</p>
            <p class="timeline-date">2018 - 2021</p>
            <p class="timeline-description">参与公司多个Web应用的开发，负责UI组件库的设计和实现，优化前端性能和用户体验。</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <h3>软件开发实习生</h3>
            <p class="timeline-place">某创业公司</p>
            <p class="timeline-date">2017 - 2018</p>
            <p class="timeline-description">参与公司移动应用的开发，负责功能实现和Bug修复，学习了敏捷开发流程。</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.about-header {
  text-align: center;
  margin-bottom: 40px;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: #666;
  }
}

.about-section {
  margin-bottom: 60px;
}

.section-title {
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 10px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background-color: #50b886;
  }
}

/* 个人简介卡片样式 */
.profile-card {
  display: flex;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
}

.profile-image {
  flex: 0 0 250px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
}

.profile-content {
  flex: 1;
  padding: 25px;
  // background-color: #dadada8a;

  h3 {
    font-size: 1.8rem;
    color: #333;
    margin-bottom: 5px;
  }

  .profile-subtitle {
    color: #50b886;
    font-size: 1.1rem;
    margin-bottom: 15px;
  }

  .profile-description {
    color: #666;
    line-height: 1.6;
    margin-bottom: 20px;
  }
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-item {
  display: flex;
  align-items: center;
  color: #666;
  
  svg {
    margin-right: 10px;
    fill: #50b886;
  }
}

/* 技能展示区域样式 */
.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
}

.skill-category {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.4rem;
    color: #333;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid #f0f0f0;
  }
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  background-color: #f0f8f4;
  color: #50b886;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #50b886;
    color: white;
    transform: scale(1.05);
  }
}

/* 时间线样式 */
.timeline {
  position: relative;
  padding-left: 30px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 6px;
    width: 2px;
    background-color: #f0f0f0;
  }
}

.timeline-item {
  position: relative;
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }
}

.timeline-dot {
  position: absolute;
  left: -30px;
  top: 5px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #50b886;
  border: 2px solid white;
  box-shadow: 0 0 0 2px #50b886;
}

.timeline-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }

  h3 {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 5px;
  }

  .timeline-place {
    color: #50b886;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .timeline-date {
    color: #999;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }

  .timeline-description {
    color: #666;
    line-height: 1.5;
  }
}

/* 兴趣爱好区域样式 */
.interests-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
}

.interest-item {
  background-color: #fff;
  border-radius: 8px;
  padding: 25px 20px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .interest-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
  }

  h3 {
    font-size: 1.3rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    color: #666;
    line-height: 1.5;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .profile-card {
    flex-direction: column;
  }

  .profile-image {
    flex: 0 0 auto;
    height: 250px;
  }

  .skills-container,
  .interests-container {
    grid-template-columns: 1fr;
  }

  .about-header h1 {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
  }
}
</style>