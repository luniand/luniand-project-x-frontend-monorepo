<script setup lang="ts">
import { computed } from "vue";
import { v4 } from "uuid";
import {
  CorrectCondition,
  CorrectConditionOption,
  FillInTheBlankQuestion,
} from "../types/fillInTheBlank";
import { MIN_TOTAL_ANSWER } from "../types/reorder";

interface Props {
  question: FillInTheBlankQuestion;
}

const CORRECT_CONDITION_OPTIONS: CorrectConditionOption[] = [
  { conditionId: CorrectCondition.IS_EXACTLY, conditionValue: "is exactly" },
  { conditionId: CorrectCondition.CONTAINS, conditionValue: "contains" },
  {
    conditionId: CorrectCondition.EXACT_NUMBER,
    conditionValue: "exact number",
  },
];

const props = defineProps<Props>();

const emits = defineEmits<{
  (event: "update:question", question: FillInTheBlankQuestion): void;
}>();

const question = computed({
  get() {
    return props.question;
  },
  set(newValue) {
    emits("update:question", newValue);
  },
});

const isMinTotalAnswers = computed(() => {
  return question.value.correctAnswers.length === MIN_TOTAL_ANSWER;
});

const titleButtonDeleteAnswer = computed(() => {
  return isMinTotalAnswers.value
    ? `You cannot have less than ${MIN_TOTAL_ANSWER} ${
        MIN_TOTAL_ANSWER > 1 ? "answers" : "answer"
      }`
    : "";
});

const addAnswer = () => {
  const newCorrectAnswer = {
    correctAnswerId: v4(),
    correctCondition: CorrectCondition.IS_EXACTLY,
    correctAnswerValue: "",
  };
  question.value.correctAnswers.push(newCorrectAnswer);
};

const deleteAnswer = (correctAnswerId: string) => {
  const foundIndex = question.value.correctAnswers.findIndex(
    (answer) => answer.correctAnswerId === correctAnswerId
  );
  if (foundIndex > -1) {
    question.value.correctAnswers.splice(foundIndex, 1);
  }
};
</script>

<template>
  <h1>Fill in the blank</h1>
  <input
    v-model="question.questionValue"
    type="text"
    placeholder="Type your question here..."
    class="input-question"
  >

  <div
    v-for="correctAnswer in question.correctAnswers"
    :key="correctAnswer.correctAnswerId"
  >
    <select v-model="correctAnswer.correctCondition">
      <option
        v-for="option in CORRECT_CONDITION_OPTIONS"
        :key="option.conditionId"
        :value="option.conditionId"
      >
        {{ option.conditionValue }}
      </option>
    </select>
    <input
      v-model="correctAnswer.correctAnswerValue"
      type="text"
      placeholder="Type your answer here"
    >
    <button
      :title="titleButtonDeleteAnswer"
      :disabled="isMinTotalAnswers"
      :class="{ 'btn-disabled': isMinTotalAnswers }"
      @click="deleteAnswer(correctAnswer.correctAnswerId)"
    >
      x
    </button>
  </div>
  <button @click="addAnswer">
    + add an alternative answer
  </button>

  <div>
    <button>Cancel</button>
    <button>Save</button>
  </div>
</template>

<style scoped>
button {
  cursor: pointer;
}
.btn-disabled {
  cursor: not-allowed;
}
.input-question {
  font-size: 20px;
  margin-bottom: 20px;
}
</style>
