<template>
  <div>
    <form @submit.prevent="login">
      <label for="username">
        username:
      </label>
      <input v-model="username" type="text" name="username">

      <label for="password">
        Password:
      </label>
      <input v-model="password" type="password" name="password">

      <button type="submit" name="button">
        Login
      </button>

      <p>{{ error }}</p>

      <router-link to="/register">
        Don't have an account? Register.
      </router-link>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth' // Adjust import path

// Reactive form fields and error message
const username = ref('')
const password = ref('')
const error = ref(null)

const authStore = useAuthStore() // Access the Pinia store
const router = useRouter() // Access the router

// Login method
const login = async () => {
  try {
    await authStore.login({
      username: username.value,
      password: password.value
    })
    router.push({ name: 'dashboard' }) // Navigate to the dashboard
  } catch (err) {
    error.value = err.response?.data?.error || 'An error occurred'
  }
}
</script>

<style scoped>

</style>
