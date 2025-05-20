<script setup lang="ts">
import { computed } from 'vue';
import JobsListElem from '../components/jobs/JobsListElem.vue';
import useAuthStore from '../store/authStore';
import BaseButton from '../components/UI/BaseButton.vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore()

const router = useRouter()

const jobs = [
{id:1,description:'Работа в колледже учителем чето чето ',title:"Программист-учитель",company:"ТОО Инновационный технический колледж г. Алматы "},
{id:2,description:'Работа в колледже учителем чето чето ',title:"Программист-учитель",company:"ТОО Инновационный технический колледж г. Алматы "},
{id:3,description:'Работа в колледже учителем чето чето ',title:"Программист-учитель",company:"ТОО Инновационный технический колледж г. Алматы "},
{id:4,description:'Работа в колледже учителем чето чето ',title:"Программист-учитель",company:"ТОО Инновационный технический колледж г. Алматы "},
{id:5,description:'Работа в колледже учителем чето чето ',title:"Программист-учитель",company:"ТОО Инновационный технический колледж г. Алматы "}
]

const isEmployee = computed(() => {
    return authStore.currentUser?.role === 'employee'
})
const isEmployer = computed(() => {
    return authStore?.currentUser?.role === 'employer'
})
</script>
<template>
    <div class="w-full flex flex-col gap-4">
        <div v-if="isEmployee" class="font-bold text-2xl">
            Доступные стажировки
        </div>
        <div v-else-if="isEmployer" class="font-bold text-2xl">
            Мои вакансии на стажировку
        </div>
        <div v-if="isEmployee" class="flex flex-col w-full gap-4">
            <JobsListElem v-for="elem in jobs" :job="elem" :key="elem.id"/>
        </div>
        <div v-else-if="isEmployer">
            <BaseButton @click="router.push('jobs/create')">
                Создать вакансию
            </BaseButton>
        </div>
    </div>
</template>