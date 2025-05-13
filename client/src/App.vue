<script setup lang="ts">
import Question from "./components/Question.vue"

const questions = ["I worry about things.", "I make friends easily.", "I have a vivid imagination." ]

function onSubmit(){
  console.log("submit")
}
</script>

<template>
  <h1 class="text-3xl text-center my-4">Programming Test 1</h1>
  <form @submit.prevent="onSubmit" class="max-w-[1000px] mx-[auto]">
    <Question v-for="(item, index) in questions" :key="index" :question=item :index=index></Question>
    <button type="submit" class="rounded cursor-pointer bg-[gray] text-white font-medium p-2 hover:opacity-[.5]">Submit</button>
  </form>
</template>