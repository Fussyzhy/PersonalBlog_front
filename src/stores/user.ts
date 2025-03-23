import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore('pinia-user', () => {
    const token = ref('')
    const setToken = (val: string) => {
      token.value = val
    }
    const removeToken = () => {
      token.value = ''
    }
    return {
      token,
      setToken,
      removeToken
    }
},{
  persist: true
})