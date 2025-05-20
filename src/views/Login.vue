<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from '../components/UI/BaseInput.vue';
import BaseButton from '../components/UI/BaseButton.vue';
import { useRouter } from 'vue-router';
import useAuthStore from '../store/authStore';
const authStore = useAuthStore()
const login = ref()
const password = ref()
const router = useRouter()
</script>
<template>
    <div class="w-full flex flex-col items-center justify-center gap-9 sm:mt-[40px]">
        <div class="text-4xl font-bold sm:text-2xl">
            Welcome to the site
        </div>
        <div class="w-[400px] flex flex-col gap-2 sm:w-full ">
            <BaseInput v-model="login" type="text" class="w-full" title="EMAIL" />
            <BaseInput v-model="password" type="text" class="w-full" title="PASSWORD" />
            <div class="pt-2 flex-1 flex w-full">
                <BaseButton @click="authStore.login({login,password})" class="w-full bg-black">
                    Войти
                </BaseButton>
            </div>
            <div @click="router.push('registration')" class="text-sm w-full flex items-center justify-center pt-4 text-accent underline cursor-pointer">
                Регистрация
            </div>
        </div>
    </div>
</template>