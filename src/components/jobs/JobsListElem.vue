<script setup lang="ts">
interface IProps{
    job:{title:string,company:string,description:string,id:number}
}
const props = defineProps<IProps>()
</script>
<template>
    <div class="w-full flex flex-col gap-3 p-4 rounded-md shadow-lg border-solid border-[1px] border-gray">
        <div class="flex flex-col">
            <div class="font-bold">
                {{ props.job.title }}
            </div>
            <div class="text-sm">
                {{ props.job.company }}
            </div>
        </div>

        <div>
            {{ props.job.description }}
        </div>
    </div>
</template>