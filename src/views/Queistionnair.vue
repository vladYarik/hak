<script setup lang="ts">
import { ref } from 'vue';
import Question from '../components/questionnaire/question.vue';

const questions = ref([{id:1,question:'КАк ты умеешь работать с ',rate:1}])

const changeRate = (id:number,rate:number) => {
    console.log(id)
    const elem = questions.value?.find(elem => elem.id === id)
    if(elem){
        elem.rate = rate
    }
    
}

</script>
<template>
    <div class="w-full">
        <div class="flex flex-col border-solid border-gray border-[1px] rounded-md shadow-lg p-6 gap-6">
            <div class="flex flex-col gap-1">
                <div class=" border-[1px] font-bold">
                    Расскажите нам о себе   

                </div>
                <div class="text-darkGray text-sm w-[500px]">
                    Оцените свои способности по шкале от 1 (новичек) до 10 (эксперт)
                </div>
            </div>
            <Question :changeRate="changeRate" v-for="(question,id) in questions" :key="question.id" :question="question" :id="id"/>
        </div>
    </div>
</template>