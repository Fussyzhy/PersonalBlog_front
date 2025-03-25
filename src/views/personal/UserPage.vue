<template>
  <div class="user-page">
    <!-- 个人信息卡片 -->
    <div class="profile-card">
      <div class="profile-header">
        <div class="avatar">
          <img src="/src/assets/images/avatar.png" alt="用户头像">
        </div>
        <div class="profile-info">
          <div class="profile-header-row">
            <h1>{{ formData.username }}</h1>
            <el-button type="primary" :icon="Edit" circle @click="dialogVisible = true" />
          </div>
          <p class="bio">{{ formData.bio }}</p>
          <div class="social-links">
            <a href="https://github.com/Fussyzhy" target="_blank" class="github">
              <svg height="24" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="24">
                <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="stats-grid">
        <div class="stat-item">
          <span class="stat-value">{{ userStats.articles }}</span>
          <span class="stat-label">文章</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ userStats.views }}</span>
          <span class="stat-label">阅读</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ userStats.likes }}</span>
          <span class="stat-label">获赞</span>
        </div>
        <div class="stat-item">
          <span class="stat-value">{{ userStats.works }}</span>
          <span class="stat-label">作品</span>
        </div>
      </div>
    </div>

    <!-- 最近文章列表 -->
    <div class="recent-articles">
      <h2>最近发布</h2>
      <div class="article-list">
        <div v-for="article in recentArticles" :key="article.title" class="article-item">
          <div class="article-info">
            <h3>{{ article.title }}</h3>
            <div class="article-meta">
              <span class="date">{{ article.date }}</span>
              <span class="views">{{ article.views }} 阅读</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 编辑个人信息 -->
    <div class="edit-profile">
      <h2>编辑个人信息</h2>
      <el-form :model="formData" label-width="80px" class="edit-form">
        <el-form-item label="用户名">
          <el-input v-model="formData.username" />
        </el-form-item>
        <el-form-item label="个人简介">
          <el-input
            v-model="formData.bio"
            type="textarea"
            :rows="3"
            placeholder="请输入个人简介"
          />
        </el-form-item>
        <el-form-item label="头像">
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :auto-upload="false"
          >
            <img v-if="formData.avatar" :src="formData.avatar" class="avatar-preview">
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSave">保存更改</el-button>
        </el-form-item>
      </el-form>
    </div>
    
    <!-- 密码修改 -->
    <div class="edit-profile password-section">
      <h2>修改密码</h2>
      <el-form
        ref="passwordFormRef"
        :model="passwordForm"
        :rules="passwordRules"
        label-width="100px"
        class="edit-form"
      >
        <el-form-item label="当前密码" prop="oldPassword">
          <el-input
            v-model="passwordForm.oldPassword"
            type="password"
            placeholder="请输入当前密码"
            show-password
          />
        </el-form-item>
        <el-form-item label="新密码" prop="newPassword">
          <el-input
            v-model="passwordForm.newPassword"
            type="password"
            placeholder="请输入新密码"
            show-password
          />
        </el-form-item>
        <el-form-item label="确认新密码" prop="confirmPassword">
          <el-input
            v-model="passwordForm.confirmPassword"
            type="password"
            placeholder="请再次输入新密码"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handlePasswordChange" :icon="Lock">
            修改密码
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';
import { Edit, Lock } from '@element-plus/icons-vue';
import { changePasswordService } from '@/api/user';

const dialogVisible = ref(false);
const formData = ref({
  username: 'Hao Yang',
  bio: '热爱技术，专注于Web开发的全栈工程师',
  avatar: '/src/assets/images/avatar.png'
});

// 密码修改表单数据
const passwordForm = reactive({
  oldPassword: '',
  newPassword: '',
  confirmPassword: ''
});

// 密码表单验证规则
const passwordRules = {
  oldPassword: [
    { required: true, message: '请输入当前密码', trigger: 'blur' },
  ],
  newPassword: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能少于6个字符', trigger: 'blur' }
  ],
  confirmPassword: [
    { required: true, message: '请确认新密码', trigger: 'blur' },
    {
      validator: (rule: any, value: string, callback: (error?: Error) => void) => {
        if (value !== passwordForm.newPassword) {
          callback(new Error('两次输入的密码不一致'));
          console.log(rule);
        } else {
          callback();
        }
      },
      trigger: 'blur'
    }
  ]
};

const handleSave = () => {
  // TODO: 实现保存逻辑
  ElMessage.success('保存成功');
  dialogVisible.value = false;
};

// 密码修改表单引用
const passwordFormRef = ref();

// 处理密码修改
const handlePasswordChange = async () => {
  if (!passwordFormRef.value) return;
  
  await passwordFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      try {
        // 调用密码修改API
        const res = await changePasswordService({
          oldPassword: passwordForm.oldPassword,
          newPassword: passwordForm.newPassword
        });
        
        if (res.data.code === 200) {
          ElMessage.success('密码修改成功');
          // 重置表单
          passwordForm.oldPassword = '';
          passwordForm.newPassword = '';
          passwordForm.confirmPassword = '';
        } else {
          ElMessage.error(res.data.msg || '密码修改失败');
        }
      } catch (error) {
        console.error('密码修改出错:', error);
        ElMessage.error('密码修改失败，请稍后重试');
      }
    } else {
      return false;
    }
  });
};

const userStats = ref({
  articles: 42,
  views: 12580,
  likes: 328,
  works: 10
});

const recentArticles = ref([
  {
    title: '如何优雅地使用Vue3',
    date: '2024-01-15',
    views: 256
  },
  {
    title: 'TypeScript最佳实践指南',
    date: '2024-01-10',
    views: 189
  },
  {
    title: '前端工程化实践总结',
    date: '2024-01-05',
    views: 342
  }
]);
</script>

<style scoped>
.user-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.profile-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
}

.profile-header {
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
}

.avatar {
  width: 120px;
  height: 120px;
  margin-right: 2rem;
}

.avatar img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.profile-info {
  flex: 1;
}

.profile-header-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.profile-header-row h1 {
  font-size: 2rem;
  margin: 0;
  color: #2c3e50;
}

.bio {
  color: #666;
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.social-links {
  margin-top: 1rem;
}

.social-links a {
  color: #666;
  margin-right: 1rem;
}

.recent-articles,
.edit-profile {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  margin-bottom: 2rem;
}

.recent-articles h2,
.edit-profile h2 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1.5rem;
}

.edit-form {
  max-width: 600px;
}

.password-section {
  margin-top: 2rem;
}

.avatar-uploader {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-uploader:hover {
  border-color: #409eff;
}

.avatar-preview {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 32px;
  height: 32px;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #42b983;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
}

.stat-item {
  text-align: center;
}

.stat-value {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: #42b983;
}

.stat-label {
  color: #666;
  font-size: 0.9rem;
}

.recent-articles {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.recent-articles h2 {
  margin: 0 0 1.5rem;
  color: #2c3e50;
  font-size: 1.5rem;
}

.article-list {
  display: grid;
  gap: 1rem;
}

.article-item {
  padding: 1rem;
  border-radius: 8px;
  background: #f8f9fa;
  transition: transform 0.2s;
}

.article-item:hover {
  transform: translateY(-2px);
  background: #f0f2f5;
}

.article-info h3 {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
  color: #2c3e50;
}

.article-meta {
  display: flex;
  gap: 1rem;
  color: #666;
  font-size: 0.9rem;
}

.avatar-uploader {
  text-align: center;
}

.avatar-preview {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  border: 1px dashed #d9d9d9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 768px) {
  .user-page {
    padding: 1rem;
  }

  .profile-header {
    flex-direction: column;
    text-align: center;
  }

  .avatar {
    margin: 0 auto 1rem;
  }

  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>