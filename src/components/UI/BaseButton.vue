<script setup lang="ts">
import { defineProps, defineEmits, useAttrs } from 'vue'

const props = defineProps<{
  type?: 'button' | 'submit' | 'reset'
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
      class="p-4 rounded-md bg-accent text-white  hover:opacity-[0.8] transition-all font-bold"
    >
      <slot></slot>
    </button>
  </template>
  
