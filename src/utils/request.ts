import axios from 'axios';

const baseurl = ""

// 创建axios实例
const instance = axios.create({
  //基础地址，超时时间
});


// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在这里可以添加请求头信息，例如添加token
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
    return response;
  },
  (error) => {
    // 在这里可以对响应错误进行处理
    return Promise.reject(error);
  }
);

// 导出axios实例
export default instance;

