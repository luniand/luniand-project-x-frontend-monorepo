<template>
  <h1>drag and drop</h1>
  {{ question }}
  <div
    class="container-editor"
  >
    <div
      :class="isEditorContent ? 'editor-active' : 'editor-inactive'"
    >
      <span
        v-for="(item, index) in question"
        :key="index"
      >
        <span v-if="item.text" class="blank">{{ `${item.text} ` }} </span>
        <span v-else>{{ `${item} ` }}</span>
      </span>
      <input
        v-if="isEditorContent"
        placeholder="content"
        @change="changeText"
      >
    </div>
  </div>
  <button @click="hanldeClickEditor($event)">
    add content
  </button>
  <button @click="addBlank">
    add blank
  </button>
  <button @click="outSide">
    apply
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isEditorContent = ref(false);
const question = ref<any>([]);
const type = ref('');
const zone = ref(0)

const hanldeClickEditor = (event) => {
  type.value = 'content'
  if (!isEditorContent.value) isEditorContent.value = !isEditorContent.value;
  event.stopPropagation();
};

const changeText = (e) => {
  console.log(type.value);
  if(type.value ==='content')
  question.value.push(e.target.value);
  if( type.value ==='blank' ){
 
   
   question.value.push({
    text:e.target.value,
    zone:JSON.parse(JSON.stringify(zone.value +=1 ))
   })
  } 
  console.log(question);
};

const addBlank = () => {
  type.value = 'blank'
  isEditorContent.value = true
};

const outSide = () => {
  if (isEditorContent.value) isEditorContent.value = !isEditorContent.value;
 
};
</script>

<style>
.blank{
  background: white;
  margin: 2px;
}
.container-editor {
  background-color: #ecf0f1;
  padding: 10px;
  min-height: 150px;
}
.editor-inactive {
  background-color: #c02ed3;
  padding: 10px;
  min-height: 100px;
}
.editor-active {
  background-color: #c02ed3;
  padding: 10px;
  border: 2px solid red;
  min-height: 100px;
}
</style>
