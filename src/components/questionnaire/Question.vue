<script setup lang="ts">
const props = defineProps<{question:{question:string,id:number,rate:number},id:number,changeRate:(id:number,rate:number) => void}>()
</script>
<template>
    <div class="">
        <div class="flex flex-col items-start justify-center gap-2">
                <div class="flex items-center justify-center gap-4">
                    <div class="w-[40px] h-[40px] rounded-full flex font-bold items-center justify-center bg-gray">
                        {{ props.id + 1 }}
                    </div>
                    <div>
                        {{ props.question.question }}
                    </div>
                </div>
                <div class="w-full h-[40px] flex gap-1">
                    <div class="h-full w-full  rounded-l-full text-sm flex items-center justify-center cursor-pointer"
                        @click="props.changeRate(props.question.id,1)"
                        :class="props.question.rate > 0 ? 'bg-accent text-white' : 'text-accent'"
                    >Новичек</div>
                    <div 
                        v-for="n in 8"
                        class="w-full  flex items-center justify-center cursor-pointer "
                        :class="props.question.rate > n ? 'bg-accent text-white' : 'text-accent'"
                        @click="props.changeRate(props.question.id,n+1)"
                        :key="n"
                        >
                        {{ n+1 }}
                    </div>
                    <div class="h-full w-full  rounded-r-full flex items-center justify-center text-sm cursor-pointer"
                        @click="props.changeRate(props.question.id,10)"
                        :class="props.question.rate > 9 ? 'bg-accent text-white' : 'text-accent'"
                    >Эксперт</div>
                </div>
            </div>
    </div>
</template>