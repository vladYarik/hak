<script setup lang="ts">
import { ref } from 'vue'
import Question from './question.vue'
import BaseButton from '../UI/BaseButton.vue';



const props = defineProps<{changeQuestionRate:(id:number,rate:number) => void,goNext:() => void,data:{title:string,questions:{title:string,rate:number}[]}}>()


</script>
<template>
    <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-1">
            <div class=" border-[1px] font-bold">
                Расскажите нам о себе   
            </div>
            <div class="text-darkGray text-sm">
                Оцените свои способности по шкале от 1 (новичек) до 10 (эксперт)
            </div>
        </div>

   
            <Question :changeRate="props.changeQuestionRate" v-for="(question,id) in props.data.questions" :key="id" :question="question" :id="id"/>
       
        
        <div class="py-4">
            <BaseButton @click="props.goNext()" class="w-full">
                Добавить анкету
            </BaseButton>
        </div>
    </div>
</template>
