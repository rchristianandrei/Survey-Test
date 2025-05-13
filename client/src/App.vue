<script setup lang="ts">
import { ref } from "vue"
import Question from "./components/Question.vue"

const questions = ["I worry about things.", "I make friends easily.", "I have a vivid imagination." ]
const answers = ref<string[]>(new Array(questions.length));

function onSubmit(){
  const payload = {
    Q1: answers.value[0],
    Q2: answers.value[1],
    Q3: answers.value[2],
  }

  fetch(import.meta.env.VITE_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(() => {
    alert("Successfully submitted the survey results")
  }).catch(err => {
    alert("Failed to submit survey results:")
    console.log("Failed to submit survey results:", err)
  });
}
</script>

<template>
  <h1 class="text-3xl text-center my-4">Programming Test 1</h1>
  <form @submit.prevent="onSubmit" class="max-w-[1000px] mx-[auto]">
    <Question v-for="(item, index) in questions" :key="index" :question=item :index=index @change-value="(e) => {answers[index] = e}"></Question>
    <button type="submit" class="rounded cursor-pointer bg-[gray] text-white font-medium p-2 hover:opacity-[.5]">Submit</button>
  </form>
</template>