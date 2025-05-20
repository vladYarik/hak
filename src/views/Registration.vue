<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from '../components/UI/BaseInput.vue';
import BaseButton from '../components/UI/BaseButton.vue';
import { useRouter } from 'vue-router';

const login = ref()
const password = ref()
const router = useRouter()
const name = ref()
const whoAmI = ref<'employee' | 'employer'>('employee')
</script>
<template>
    <div class="min-h-[100vh] w-full flex flex-col items-center justify-center gap-9">
        <div class="text-4xl font-bold">
            Welcome to the site
        </div>
        <div class="w-[400px] flex flex-col gap-2">
            <BaseInput v-model="login" type="text" class="w-full" title="EMAIL" />
            <BaseInput v-model="password" type="text" class="w-full" title="PASSWORD" />
            <BaseInput v-model="name" type="text" class="w-full" title="NAME" />
            <div class="flex gap-2">
                <div 
                    @click="whoAmI = 'employer'"
                    class="p-2 cursor-pointer bg-red border-solid border-accent border-2 rounded-md font-bold text-sm w-1/2 text-center"
                    :class="whoAmI === 'employer' ? 'bg-accent text-white' : 'text-accent'"
                >
                    Я работодатель
                </div>
                <div 
                    @click="whoAmI = 'employee'" 
                    class="p-2 cursor-pointer bg-red border-solid border-accent border-2 rounded-md font-bold text-sm w-1/2 text-center"
                    :class="whoAmI === 'employee' ? 'bg-accent text-white' : 'text-accent'"
                >
                    Я студент
                </div>
            </div>
            <div class="pt-2 flex-1 flex w-full">
                <BaseButton class="w-full bg-black">
                    Зарегестрироваться
                </BaseButton>
            </div>
            <div @click="router.push('login')" class="text-sm w-full flex items-center justify-center pt-4 text-accent underline cursor-pointer">
                Войти
            </div>
        </div>
    </div>
</template>