<script setup lang="ts">
import { onMounted } from 'vue';
import MainLayout from './layouts/mainLayout.vue';
import useAuthStore from './store/authStore';

const authStore = useAuthStore()

onMounted(() => {
    authStore.initialFetchUser()
})

</script>

<template>
  <MainLayout>
      <router-view v-if="!authStore.isInitialLoading" />
      <div v-else class="w-full h-full flex items-center justify-center">
        Loading
      </div>
  </MainLayout>
</template>
