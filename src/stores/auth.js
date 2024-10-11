import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(JSON.parse(localStorage.getItem('user')) || null);

  const setUserData = (userData) => {
    user.value = userData;
    localStorage.setItem('user', JSON.stringify(userData));
    axios.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;
  };

  const clearUserData = () => {
    user.value = null;
    localStorage.removeItem('user');
    location.reload();
  };

  const register = async (credentials) => {
    const { data } = await axios.post('//localhost:3000/register', credentials);
    setUserData(data);
  };

  const login = async (credentials) => {
    const { data } = await axios.post('https://dummyjson.com/auth/login', credentials);
    setUserData(data);
  };

  const logout = () => {
    clearUserData();
  };

  const loggedIn = computed(() => !!user.value);

  return {
    user,
    setUserData,
    clearUserData,
    register,
    login,
    logout,
    loggedIn,
  };
});
