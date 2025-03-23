import axios from 'axios';
import { useUserStore } from '../stores/user';
import { ElMessage } from 'element-plus'
import router from '@/router';

const baseurl = "http://127.0.0.1:5161"

// 创建axios实例
const instance = axios.create({
  //基础地址，超时时间
  baseURL: baseurl,
  timeout: 10000
});


// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在这里可以添加请求头信息，例如添加token
    if (useUserStore().token) {
      config.headers.Authorization = "XIAONAO " + useUserStore().token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 在这里可以对响应数据进行处理
    if(response.data.code == 200) {
      return response;
    } else {
      ElMessage.error(response.data.msg || "服务器异常")
      return Promise.reject( response.data );
    }
    
  },
  (error) => {
    // 在这里可以对响应错误进行处理
    if(error.response.status == 401) {
      useUserStore().removeToken()
      router.push("/login")
    }

    ElMessage.error(error.response.data.msg || "服务器异常")
    return Promise.reject(error);
  }
);

// 导出axios实例
export default instance;
export { baseurl };
