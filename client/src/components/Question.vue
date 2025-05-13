<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    question: string,
    index: number,
}>()

const emit = defineEmits<{
  (e: "changeValue", value:string): void;
}>()

const choices = [
  ["Very Inaccurate", "1"], 
  ["Moderately Inaccurate", "2"], 
  ["Neither Accurate Nor Inaccurate", "3"], 
  ["Moderately Accurate", "4"], 
  ["Very Accurate", "5"]
]
const selected = ref<string | null>()
</script>

<template>
  <div class="border border-t-[4px] border-t-blue-900 rounded p-3 my-5 shadow-lg">
    <div class="font-semibold">{{ props.index + 1 }}. {{ props.question }}</div>
    <div class="flex justify-around my-2">
      <div v-for="([choice, value]) in choices" type="button" :class="`border-2 border-[gray] rounded-xl p-2 cursor-pointer text-blue-900 hover:opacity-[.5] ${choice === selected ? 'bg-[royalblue] text-white': 'bg-[whitesmoke]'}`" @click="selected = choice; emit('changeValue', value);">
        {{ choice }}
      </div>
    </div>
  </div>
</template>