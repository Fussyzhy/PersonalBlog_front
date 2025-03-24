import request from "@/utils/request";

export const userLoginService = ({ username, password }: { username: string; password: string }) => {
  return request.post('/auth/login', { username, password })
}

export const userRegisterService = ({ username, password, code }: { username: string; password: string; code: string }) => {
  return request.post('/user/register', { username, password, code }) 
}

export const sendEmailService = ({email}: {email: string;}) => {
  return request.post('/user/getEmail',{email})
}