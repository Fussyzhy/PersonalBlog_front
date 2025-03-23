import request from "@/utils/request";

export const userLoginService = ({ username, password }: { username: string; password: string }) => {
  return request.post('/auth/login', { username, password })
}