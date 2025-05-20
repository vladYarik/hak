<script setup lang="ts">
import { ref, watch } from 'vue';
import BaseButton from '../UI/BaseButton.vue';
import type { IScope } from '../../views/Queistionnair.vue';

const props = defineProps<{goNext:(scopeId:number,subscopeId:number) => void,data:IScope[]}>()
const canGoNext = ref(false)
const choosedScope = ref()

const opennedScope = ref()
const changeOppenedScope = (id:any) => {
    if(opennedScope.value === id){
        opennedScope.value = null
    }else{
        opennedScope.value = id
        choosedScope.value = null
    }
}
watch(() => choosedScope.value ,(_) => {
    console.log(choosedScope.value)
    if(choosedScope.value !== null){
        canGoNext.value = true
    }else{
        canGoNext.value = false
    }
})
</script>
<template>
    <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-1">
            <div class=" border-[1px] font-bold">
                Выберите сферу   
            </div>
            <div class="text-darkGray text-sm ">
                Выберите сферу деятельности, а затем специализацию
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <div v-for="elem in props.data" :key="elem.id" class="flex flex-col cursor-pointer gap-2">
                <div @click="changeOppenedScope(elem.id)" class="bg-gray p-4 rounded-md">
                    <div class="flex gap-2">
                        <span>{{ opennedScope === elem.id ? '+' : '-' }}</span>
                        <span>{{ elem.title }}</span>
                    </div>
                </div>
                <div v-if="opennedScope === elem.id && elem.subscope?.length > 0" class="flex flex-col gap-1">
                    <div @click="choosedScope = elem2.id" v-for="elem2 in elem.subscope" :key="elem2.id"
                        class="p-4 py-2 rounded-md ml-8 transition-all cursor-pointer"
                        :class="choosedScope === elem2.id ? 'bg-black text-white' : 'bg-gray'"
                    >
                        <div class="flex gap-2">
                            <span>-</span>
                            <span>{{ elem2.title }}</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
        <div class="py-4">
            <BaseButton @click="props.goNext(opennedScope,choosedScope)" :is-disabled="!canGoNext" class="w-full">
                Далее
            </BaseButton>
        </div>
    </div>
</template>
