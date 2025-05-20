<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import useAuthStore from '../store/authStore';

const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()



</script>
<template>
    <div class="max-w-[1020px] min-h-[100vh] mx-auto my-0 py-[20px] sm:pb-[80px] lg:px-[20px] flex flex-col items-center justify-center">
        <div class="absolute top-[35px] left-[20px] sm:top-[20px] sm:left-[0] sm:w-full flex sm:items-center sm:justify-center">
            Logo
        </div>
        <div v-if="authStore.isAuth" class="fixed bottom-0 w-full h-[60px] bg-gray flex gap-2 shadow-top hidden sm:flex">
            <div @click="router.push('/jobs')" class="flex w-full items-center justify-center text-sm " :class="route.name === 'Jobs' ? ' text-accent' : 'text-black '">Стажировки</div>
            <div class="flex w-full items-center justify-center text-sm" >Чат бот</div>
            <div @click="router.push('/questionnaire')" class="flex w-full items-center justify-center text-sm" :class="route.name === 'Questionnaire' ? ' text-accent' : 'text-black '">Мои анкеты</div>
        </div>

        <div v-if="authStore.isAuth" class="h-[50px] w-full flex items-center relative gap-8 sm:gap-1 select-none sm:hidden">
            <div
                @click="router.push('/jobs')"
                class="w-full h-full border-solid border-2 flex items-center justify-center rounded-lg cursor-pointer hover:scale-[98%] transition-all "
                :class="route.name === 'Jobs' ? 'bg-accent text-white' : 'text-accent border-accent'"
             >
                Стажировки
            </div>
            <div 
                class="w-full h-full text-accent border-solid border-2 border-accent  flex items-center justify-center rounded-lg cursor-pointer hover:scale-[98%] transition-all"
                :class="route.name === 'Chat' ? 'bg-accent text-white' : 'text-accent border-accent'"    
            >
                Чат бот
            </div>
            <div 
                @click="router.push('/questionnaire')"
                class="w-full h-full text-accent border-solid border-2 border-accent  flex items-center justify-center rounded-lg cursor-pointer hover:scale-[98%] transition-all"
                :class="route.name === 'Questionnaire' ? 'bg-accent text-white' : 'text-accent border-accent'"
            >
                Мои анкеты
            </div>
        </div>
        <div class="pt-[40px] w-full h-full flex-1 flex">
            <slot>

            </slot>
        </div>
   
    </div>
</template>