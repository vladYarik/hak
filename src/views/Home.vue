<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
</script>
<template>
    <div class="w-full flex flex-col items-center justify-center select-none">
        <div @click="router.push('/aiquestionnaire')" class="p-4 px-9 rounded-full bg-black text-white text-2xl flex items-center justify-center cursor-pointer">
            Какую мне выбрать профессию?
        </div>

    </div>
</template>