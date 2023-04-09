
<script setup lang="ts">
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { PropType, onMounted, reactive } from "vue";

// props & state
const props = defineProps({
  holder: {
    type: String,
    default: () => 'vue-editor-js',
    require: true
  },
  config: {
    type: Object,
    default: () => ({}),
    require: true
  },
  initialized: {
    type: Function,
    default: () => {}
  },
  modelValue: {
    type: Object as PropType<EditorJS>,
    default: () => ({}),
  },
});

const state = reactive<{ editor: EditorJS | null }>({ editor: null })

// Interact with outside component
const emit = defineEmits(["update:modelValue"]);

// functions define
function initEditor(props) {
  destroyEditor()
  state.editor = new EditorJS({
    holder: props.holder || 'luniand-editor',
    minHeight: 0,
    onChange: (api) => {
      api.saver.save().then(async (data) => {
        emit("update:modelValue", data);
      });
    },
    tools: {
      header: Header,
      list: List,
    },
    logLevel: "ERROR",
    data: props.modelValue,
    ...props.config
  })
  props.initialized(state.editor)
}

function destroyEditor() {
  if (state.editor) {
    state.editor?.destroy()
    state.editor = null
  }
}

// Hooks Lifecycle
onMounted(() => initEditor(props))
</script>

<template>
  <div :id="holder" />
</template>

