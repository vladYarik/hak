<script setup lang="ts">
import { useRoute } from 'vue-router';
import Question from '../components/questionnaire/question.vue';
import { ref } from 'vue';

const route = useRoute()
const questions = ref([{id:0,title:'Умеешь работать с react',rate:1}])
</script>
<template>
    <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
            <div class="font-bold text-2xl">
                Программист-учитель
            </div>
            <div class="text-darkGray">
                Компания: ТОО компания
            </div>
            <div class="w-full">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, blanditiis corporis eius beatae ducimus eos, qui temporibus adipisci sint eligendi vitae perspiciatis, soluta magni commodi laboriosam iste itaque ipsam delectus maiores repellendus deserunt labore. Necessitatibus aut porro quos? Repellendus, modi.
            </div>
            <div class="font-bold pt-4">
                Кто требуется
            </div>
            <div class="flex gap-4 select-none">
                <div class="p-2 px-4 bg-accent text-white rounded-md">
                    Frontend преподаватель
                </div>
                <div class="p-2 px-4 bg-accent text-white rounded-md">
                    Backend преподаватель
                </div>
            </div>
        </div> 
        <div class="flex flex-col border-solid border-gray border-[1px] rounded-md shadow-lg p-6 gap-6">
            <div class="w-full flex items-center justify-center font-bold">
                Анкета от работодателя
            </div>
            <Question :changeRate="console.log('43')" v-for="(question,id) in questions" :key="id" :question="question" :id="id"/>
        </div>
        
    </div>
</template>
