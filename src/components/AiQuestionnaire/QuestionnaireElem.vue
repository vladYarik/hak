<template>
    <div class="flex flex-col">
                <div class=" p-2 w-full rounded-md flex gap-4 items-center">
                    <div class="bg-accent w-[40px] h-[40px] text-white text-xl font-bold rounded-full flex items-center justify-center">
                        {{ question.id }}
                    </div>
                    <div class="font-bold text-lg text-accent">
                        {{ question.text }}
                    </div>
                </div>
                <div class=" flex flex-col gap-2">
                    <div 
                    v-for="answer in question.choices" 
                    @click="props.chooseAnswer(question.id,answer.id)" 
                    :key="answer.id" 
                    class="px-4 ml-2 py-1 border-solid border-black border-2 text-black  rounded-full transition-all"
                    :class="props.answer.answer_choice_id === answer.id ? 'bg-black text-white' : ''"
                    >
                        {{ answer.text }}
                    </div>
                </div>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps<{question:{text:string,id:number,choices:{text:string,id:number}[]},chooseAnswer:(qId:number,aId:number) => void ,answer:{question_id:number,answer_choice_id:number}}>()
    console.log(props.answer)
</script>
