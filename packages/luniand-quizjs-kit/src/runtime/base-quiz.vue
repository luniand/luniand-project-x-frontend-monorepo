<template>
  <div>
    <button
      v-if="!selectType"
      @click="handelSeclectTypeQuiz('MutilpleChoice')"
    >
      MutilpleChoice
    </button>
    <MutilpleChoice v-else />
    <DragAndDrop />
    <FillInTheBlank />
    <Recorder />
  </div>
</template>

<script setup>
import MutilpleChoice from './editor/mutilple-choice.vue';
import DragAndDrop from './editor/drag-and-drop.vue';
import FillInTheBlank from './editor/fill-in-the-blank.vue';
import Recorder from './editor/recorder.vue';

const selectType = ref('')
const  handelSeclectTypeQuiz = (dto) =>{
  selectType.value = dto
}
</script>
