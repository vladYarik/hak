<template>
    <div class="relative">
        <div class="absolute top-1 left-5 text-[12px] select-none">
            {{ props.title }}
        </div>
        <input
        v-bind="attrs"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="$emit('focus', $event)"
        @blur="$emit('blur', $event)"
        @change="$emit('change', $event)"
        class="pt-5 pb-1 px-4 border-2 border-solid border-[rgba(0,0,0,0)] rounded-md bg-gray hover:border-black transition-all"
        />
    </div>

  </template>
  
<script setup lang="ts">
  import { defineProps, defineEmits, useAttrs } from 'vue'
  
  const props = defineProps<{
    modelValue: string
    type?: string
    placeholder?: string
    title?:string
  }>()
  
  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
    (e: 'focus', event: FocusEvent): void
    (e: 'blur', event: FocusEvent): void
    (e: 'change', event: Event): void
  }>()
  
  const attrs = useAttrs()
</script>