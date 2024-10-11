<template>
  <div>
    <form @submit.prevent="register">
      <label for="name">
        Name:
      </label>
      <input v-model="name" type="text" name="name">

      <label for="email">
        Email:
      </label>
      <input v-model="email" type="email" name="email">

      <label for="password">
        Password:
      </label>
      <input v-model="password" type="password" name="password">

      <button type="submit" name="button">
        Register
      </button>

      <ul>
        <li v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>

      <router-link to="/login">
        Already have an account? Login.
      </router-link>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth' // Import your Pinia store

// Reactive form fields and errors
const name = ref('')
const email = ref('')
const password = ref('')
const errors = ref([])

const authStore = useAuthStore() // Access the auth store
const router = useRouter() // Access the router

// Register method
const register = async () => {
  try {
    await authStore.register({
      name: name.value,
      email: email.value,
      password: password.value
    })
    router.push({ name: 'dashboard' }) // Navigate to dashboard after success
  } catch (err) {
    errors.value = err.response.data.errors || ['An error occurred']
  }
}
</script>

<style scoped>

</style>
