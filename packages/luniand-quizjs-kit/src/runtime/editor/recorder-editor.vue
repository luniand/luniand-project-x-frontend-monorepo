<script setup lang="ts">
import { computed } from "vue";
import { v4 } from "uuid";
import {
  MAX_TOTAL_ANSWER,
  MIN_TOTAL_ANSWER,
  ReorderQuestion,
} from "../types/reorder";

interface Props {
  question: ReorderQuestion;
}

const props = defineProps<Props>();
const emits = defineEmits<{
  (event: "update:question", question: ReorderQuestion): void;
}>();

const question = computed({
  get() {
    return props.question;
  },
  set(newValue) {
    emits("update:question", newValue);
  },
});

const isFilledAll = computed(() => {
  return question.value.answers.every((answer) => {
    return answer.answerValue !== "";
  });
});

const isMaxTotalAnswers = computed(() => {
  return question.value.answers.length === MAX_TOTAL_ANSWER;
});

const isMinTotalAnswers = computed(() => {
  return question.value.answers.length === MIN_TOTAL_ANSWER;
});

const titleButtonDeleteOption = computed(() => {
  return isMinTotalAnswers.value
    ? `You cannot have less than ${MIN_TOTAL_ANSWER} ${
        MIN_TOTAL_ANSWER > 1 ? "answers" : "answer"
      }`
    : "";
});

const titleButtonAddAnswer = computed(() => {
  return isMaxTotalAnswers.value
    ? `You cannot add more than ${MAX_TOTAL_ANSWER} ${
        MAX_TOTAL_ANSWER > 1 ? "answers" : "answer"
      }`
    : "";
});

const totalEmptyAnswers = computed(() => {
  return question.value.answers.filter((answer) => answer.answerValue === "")
    .length;
});

const titleButtonSave = computed(() => {
  return isFilledAll.value
    ? ""
    : `Please fill ${totalEmptyAnswers.value} empty ${
        totalEmptyAnswers.value < 2 ? "answer" : "answers"
      }`;
});

const addAnswer = () => {
  const newAnswer = { answerId: v4(), answerValue: "" };
  question.value.answers.push(newAnswer);
};

const deleteAnswer = (answerId: string) => {
  const indexFound = question.value.answers.findIndex(
    (answer) => answer.answerId === answerId
  );

  if (indexFound > -1) {
    question.value.answers.splice(indexFound, 1);
  }
};

const saveQuestion = () => {
  question.value.answers.map((answer) => {
    question.value.correctAnswers.push(answer.answerId);
  });
};
</script>

<template>
  <input
    v-model="question.questionValue"
    type="text"
    class="input-title"
  >
  <div class="wrap">
    <div
      v-for="(answer, index) in question.answers"
      :key="answer.answerId">
      <input
        v-model="answer.answerValue"
        type="text"
        :placeholder="`Answer ${index + 1}`"
        class="input-answer"
      >
      <div class="item">
        <div></div>
        <div>{{ index + 1 }}</div>
        <div class="wrap-btn">
          <button
            tabindex="-1"
            :title="titleButtonDeleteOption"
            :class="{ 'btn-disabled': isMinTotalAnswers }"
            :disabled="isMinTotalAnswers"
            @click="() => deleteAnswer(answer.answerId)"
          >
            x
          </button>
        </div>
      </div>
    </div>
  </div>
  <button
    class="btn-add"
    :class="{ 'btn-disabled': isMaxTotalAnswers }"
    :title="titleButtonAddAnswer"
    :disabled="isMaxTotalAnswers"
    @click="addAnswer"
  >
    +
  </button>
  <div class="group-btn">
    <button>Cancel</button>
    <button
      class="btn-save"
      :class="{ 'btn-disabled': !isFilledAll }"
      :title="titleButtonSave"
      :disabled="!isFilledAll"
      @click="saveQuestion"
    >
      Save
    </button>
  </div>
</template>

<style scoped>
button {
  cursor: pointer;
}
.btn-disabled {
  cursor: not-allowed;
}
.btn-add {
  margin-top: 10px;
  font-size: 20px;
  border-radius: 50% 50%;
}
.btn-save {
  background-color: blueviolet;
  color: white;
}
.wrap {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
.input-title {
  font-size: 24px;
  padding: 5px 10px;
}
.input-answer {
  padding: 5px;
  font-size: 20px;
}
.item {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-items: center;
  align-items: center;
  background-color: grey;
  padding: 5px 0;
  margin-top: 10px;
}
.wrap-btn {
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 10px;
}
.group-btn {
  margin-top: 20px;
  display: flex;
  column-gap: 10px;
}
</style>
