<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import useAuthStore from '../store/authStore';

const authStore = useAuthStore()
const route = useRoute()
const router = useRouter()



</script>
<template>
    <div class="max-w-[1020px] min-h-[100vh] mx-auto my-0 py-[20px] flex flex-col items-center justify-center">
        <div class="absolute top-[35px] left-[20px]">
            Logo
        </div>
        <div v-if="authStore.isAuth" class="h-[50px] w-full flex items-center relative gap-8 select-none">
            <div
                @click="router.push('/jobs')"
                class="w-full h-full border-solid border-2 flex items-center justify-center rounded-lg cursor-pointer hover:scale-[98%] transition-all"
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