<script setup lang="ts">
import JobsListElem from '../components/jobs/JobsListElem.vue';
const jobs = [
{id:1,description:'Работа в колледже учителем чето чето ',title:"Программист-учитель",company:"ТОО Инновационный технический колледж г. Алматы "},
{id:2,description:'Работа в колледже учителем чето чето ',title:"Программист-учитель",company:"ТОО Инновационный технический колледж г. Алматы "},
{id:3,description:'Работа в колледже учителем чето чето ',title:"Программист-учитель",company:"ТОО Инновационный технический колледж г. Алматы "},
{id:4,description:'Работа в колледже учителем чето чето ',title:"Программист-учитель",company:"ТОО Инновационный технический колледж г. Алматы "},
{id:5,description:'Работа в колледже учителем чето чето ',title:"Программист-учитель",company:"ТОО Инновационный технический колледж г. Алматы "}
]
</script>
<template>
    <div class="w-full flex flex-col gap-4">
        <div class="font-bold text-2xl">
            Доступные стажировки
        </div>
        <div class="flex flex-col w-full gap-4">
            <JobsListElem v-for="elem in jobs" :job="elem" :key="elem.id"/>
        </div>
    </div>
</template>