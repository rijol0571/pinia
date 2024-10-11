<template>
  <div id="app">
    <app-nav />
    <router-view class="page" />
  </div>
</template>

<script setup>
import AppNav from '@/components/AppNav.vue'

</script>

<style lang="scss">

.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 56px);
}
</style>
