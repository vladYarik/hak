<script setup lang="ts">
import { onMounted, ref } from 'vue';
import useAiQStore from '../store/AiQuestionnaire';
import Loader from '../components/UI/Loader.vue';
import QuestionnaireElem from '../components/AiQuestionnaire/QuestionnaireElem.vue';
import BaseButton from '../components/UI/BaseButton.vue';



const aiqStore = useAiQStore()



const chooseAnswer = (qId:number,aId:number) => {
    aiqStore.chooseAnswer(qId,aId)
}

const getAnswer = (qId:number) => {
    const answer = aiqStore.answers.find(elem => elem.question_id === qId)
    if(answer){
        console.log(answer)
        return answer
    }else{
        return null
    }
}

const sendAnswers = () => {
    aiqStore.sendAnswers()
}

onMounted(() => {
    aiqStore.getQuestionnaire()
})

</script>
<template>
    <div v-if="!aiqStore.myJob" class="w-full flex flex-col border-solid border-gray border-[1px] rounded-md shadow-lg p-6 gap-6 items-center ">
        
        <div class="flex flex-col w-full items-center justify-center">
            <div class="text-xl font-bold">
                AI найдет профессию
            </div>
            <div class="text-darkGray">
                Отвечай на вопросы, чтобы узнать какая профессия тебе больше подходит
            </div>
        </div>

        <div v-if="!aiqStore.isLoading" class="flex flex-col w-full gap-2 h-full">
            <QuestionnaireElem v-for="question in aiqStore.questions" :key="question.id" :question="question" :choose-answer="chooseAnswer" :answer="getAnswer(question.id)" />
            <div class="pt-4 w-full mt-auto">
                <BaseButton @click="sendAnswers" class="w-full">
                    Отправить
                </BaseButton>
            </div>
        </div>

        <div class="h-full flex items-center justify-center" v-else>
            <Loader/>
        </div>
    </div>    

    <div v-else class="w-full flex flex-col border-solid border-gray border-[1px] rounded-md shadow-lg p-6 gap-6 items-center justify-center">
        <div class="flex flex-col items-center gap-2">
            <div class="font-bold text-lg px-8 py-2 bg-black text-white flex items-center justify-center rounded-full">
                ...
            </div>
            <div class="font-bold text-lg px-4 py-2 bg-black text-white flex items-center justify-center rounded-full">
                тебе подходит
            </div>
           
            <div class="font-bold text-5xl px-10 h-[120px]  text-black flex items-center justify-center rounded-full">
                {{ aiqStore.myJob }}
            </div>
            <div class="font-bold text-lg px-4 py-2 bg-black text-white flex items-center justify-center rounded-full">
                86% совпадений
            </div>
            <div class="font-bold text-lg px-8 py-2 bg-black text-white flex items-center justify-center rounded-full">
                ...
            </div>
        </div>

    </div>
</template>