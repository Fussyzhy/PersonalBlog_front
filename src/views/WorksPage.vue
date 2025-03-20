<template>
  <div class="works-container">
    <!-- 标题区域 -->
    <div class="works-header">
      <h1>我的作品集</h1>
      <p>这里展示了我近期完成的一些项目和作品</p>
    </div>

    <!-- 分类筛选 -->
    <div class="filter-container">
      <el-radio-group v-model="activeCategory" size="large" fill="#5bb888">
        <el-radio-button label="all">全部</el-radio-button>
        <el-radio-button label="web">Web开发</el-radio-button>
        <el-radio-button label="mobile">移动应用</el-radio-button>
        <el-radio-button label="design">UI/UX设计</el-radio-button>
      </el-radio-group>
    </div>

    <!-- 作品展示区 -->
    <div class="works-grid">
      <div v-for="(work, index) in filteredWorks" :key="index" class="work-card">
        <div class="work-image">
          <img :src="work.image" :alt="work.title">
        </div>
        <div class="work-info">
          <h3>{{ work.title }}</h3>
          <p class="work-description">{{ work.description }}</p>
          <div class="work-tags">
            <el-tag v-for="(tag, tagIndex) in work.tags" :key="tagIndex" size="small" effect="plain">
              {{ tag }}
            </el-tag>
          </div>
          <el-button type="primary" size="small" class="view-details-btn">查看详情</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

// 当前选中的分类
const activeCategory = ref('all');

// 作品数据
const works = ref([
  {
    title: '个人博客系统',
    description: '一个使用Vue3和Element Plus构建的个人博客系统，支持文章发布、分类和评论功能。',
    image: 'https://picsum.photos/id/180/400/300',
    category: 'web',
    tags: ['Vue3', 'TypeScript', 'Element Plus']
  },
  {
    title: '电商移动应用',
    description: '基于Flutter开发的跨平台电商应用，实现了商品浏览、购物车、支付等核心功能。',
    image: 'https://picsum.photos/id/26/400/300',
    category: 'mobile',
    tags: ['Flutter', 'Dart', 'Firebase']
  },
  {
    title: '企业官网设计',
    description: '为科技公司设计的现代化企业官网，注重用户体验和品牌展示。',
    image: 'https://picsum.photos/id/3/400/300',
    category: 'design',
    tags: ['Figma', 'Adobe XD', 'UI/UX']
  },
  {
    title: '任务管理系统',
    description: '团队协作的任务管理系统，支持任务分配、进度跟踪和数据统计。',
    image: 'https://picsum.photos/id/48/400/300',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: '健康饮食APP',
    description: '帮助用户记录饮食习惯和营养摄入的移动应用，提供个性化的饮食建议。',
    image: 'https://picsum.photos/id/292/400/300',
    category: 'mobile',
    tags: ['React Native', 'Redux', 'Firebase']
  },
  {
    title: '音乐播放器界面',
    description: '现代风格的音乐播放器UI设计，注重视觉效果和交互体验。',
    image: 'https://picsum.photos/id/96/400/300',
    category: 'design',
    tags: ['Adobe Photoshop', 'Sketch', 'Prototyping']
  }
]);

// 根据分类筛选作品
const filteredWorks = computed(() => {
  if (activeCategory.value === 'all') {
    return works.value;
  } else {
    return works.value.filter(work => work.category === activeCategory.value);
  }
});
</script>

<style scoped lang="scss">
.works-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.works-header {
  text-align: center;
  margin-bottom: 40px;
}

.works-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 10px;
}

.works-header p {
  font-size: 1.2rem;
  color: #666;
}

.filter-container {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  /* 添加el-radio-button悬停时文字变色效果 */
  :deep(.el-radio-button__inner) {
    &:hover {
      color: #50b886!important;
    }
  }
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.work-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.work-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.work-image {
  height: 200px;
  overflow: hidden;
}

.work-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.work-card:hover .work-image img {
  transform: scale(1.05);
}

.work-info {
  padding: 20px;
}

.work-info h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #333;
}

.work-description {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.5;
}

.work-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.view-details-btn {
  width: 100%;
  background-color: #50b886;
  border: #50b886;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .works-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }

  .works-header h1 {
    font-size: 2rem;
  }

  .works-header p {
    font-size: 1rem;
  }
}

.el-radio-button {
  background-color: #fff;
}
</style>