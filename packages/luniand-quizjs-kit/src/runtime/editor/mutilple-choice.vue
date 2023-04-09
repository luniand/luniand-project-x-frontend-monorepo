<template>
  <div>
    <h1>Question</h1>
    <textarea v-model="listAnswer.question" placeholder="question" />
    <br>
    <h2>Answer</h2>

    <span
      v-for="item in listAnswer.answers"
      :key="item.id"
    >
      <div>
        <textarea
          v-model="item.answer"
          :placeholder="`Answer`"
        />
        <button @click="item.correctAnswer = !item.correctAnswer">
          {{ item.correctAnswer ? 'O' : 'V' }}
        </button>
        <button 
          v-if="listAnswer.answers.length>1" 
          @click="deleteAnswer(item.id)"
        >
          X
        </button>

      </div>
      <br>
    </span>

    <button @click="addAnswer">
      Add answer
    </button>
    <button @click="onSubmit">
      Submit
    </button>
  </div>
</template>

<script setup lang="ts">
import {  ref } from 'vue';

const listAnswer =ref(
  {
    question:'',
    answers:[
      {
        answer: '',
        correctAnswer: false,
        id:0
      },
      {
        answer: '',
        correctAnswer: false,
        id:1
      },
      {
        answer: '',
        correctAnswer: false,
        id:2
      },
      {
        answer: '',
        correctAnswer: false,
        id:3
      },
    ]
  }
);


const onSubmit = () => {
  console.log(listAnswer.value);
}

const addAnswer = ()=>{
  listAnswer.value.answers.push({
    answer: '',
      correctAnswer: false,
      id:listAnswer.value.answers.length
  })
}

const deleteAnswer = (id) =>{
  listAnswer.value.answers.splice(id, 1)
}


</script>
