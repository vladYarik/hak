<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from '../components/UI/BaseInput.vue';
import BaseTextarea from '../components/UI/BaseTextarea.vue';
import BaseButton from '../components/UI/BaseButton.vue';
import useVacanciesStore from '../store/vacanciesStore';
import { useRouter } from 'vue-router';
const isWrong = ref(false)
const title = ref()
const location = ref()
const descr = ref()
const salary = ref()
const requirements = ref()
const vacanciesStore = useVacanciesStore()
const router = useRouter()
const createVacancy = async () => {
    
    if(title.value && location.value && descr.value && salary.value && requirements.value){
        const data = await vacanciesStore.createVacancy({title:title.value,location:location.value,description:descr.value,requirements:requirements.value,salary:salary.value,profession_id:1})
        if(data){
            router.back()
        }
    }else{
        isWrong.value = true
    }
}
</script>
<template>
    <div class="w-full flex flex-col border-solid border-gray border-[1px] rounded-md shadow-lg p-6 gap-6 items-center">
        <div class="font-bold w-full flex items-center justify-center text-xl">
            Создание стажировки
        </div>
        <div class="flex flex-col gap-4 w-[600px]">
            <BaseInput v-model="title" type="text" class="w-full" title="название" />
            <BaseInput v-model="location" type="text" class="w-full" title="местоположение" />
            <BaseInput v-model="salary" type="number" class="w-full" title="зарплата" />
            <BaseTextarea v-model="descr" type="text" class="w-full" title="описание"/>
            <BaseTextarea v-model="requirements" type="text" class="w-full" title="требования"/>
            <div class="text-red-500 w-full flex items-center justify-center text-sm">
                <span v-if="isWrong">Все поля должны быть заполнены !</span>
            </div>
            <div class="w-full">
                <BaseButton @click="createVacancy" class="w-full">
                    <span v-if="!vacanciesStore.isCreationLoading">Создать</span>
                    <span v-else>...</span>
                </BaseButton>
            </div>
        </div>

    </div>
</template>
