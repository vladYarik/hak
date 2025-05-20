<script setup lang="ts">
import { defineProps, defineEmits, useAttrs } from 'vue'

const props = defineProps<{
  type?: 'button' | 'submit' | 'reset',
  isDisabled?:boolean
}>()

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const attrs = useAttrs()
</script>

<template>
    <button
      v-bind="attrs"
      :type="type"
      @click="$emit('click', $event)"
      class="p-4 rounded-md transition-all font-bold"
      :disabled="isDisabled"
      :class="isDisabled ? 'bg-gray text-darkGray' : 'bg-accent text-white hover:opacity-[0.8]'"
    >
      <slot></slot>
    </button>
  </template>
  
