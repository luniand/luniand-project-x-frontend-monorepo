<template>
  <h1>drag and drop</h1>
  <div
    class="drop-zone"
    @drop="onDrop($event, 2)"
    @dragenter.prevent
    @dragover.prevent
  >
    <div
      v-for="item in getList(2)"
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="startDrag($event, item)"
    >
      {{ item.title }}
    </div>
  </div>
  <div
    class="drop-zone"
    @drop="onDrop($event, 3)"
    @dragenter.prevent
    @dragover.prevent
  >
    <div
      v-for="item in getList(3)"
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="startDrag($event, item)"
    >
      {{ item.title }}
    </div>
  </div>
  <div
    class="drop-zone"
    @drop="onDrop($event, 4)"
    @dragenter.prevent
    @dragover.prevent
  >
    <div
      v-for="item in getList(4)"
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="startDrag($event, item)"
    >
      {{ item.title }}
    </div>
  </div>
  <div
    class="drop-zone"
    @drop="onDrop($event, 1)"
    @dragenter.prevent
    @dragover.prevent
  >
    <div
      v-for="item in getList(1)"
      :key="item.id"
      class="drag-el"
      draggable="true"
      @dragstart="startDrag($event, item)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const items = ref([
  {
    id: 0,
    title: "Item A",
    zone: 1,
  },
  {
    id: 1,
    title: "Item B",
    zone: 1,
  },
  {
    id: 2,
    title: "Item C",
    zone: 1,
  },
  {
    id: 3,
    title: "Item D",
    zone: 1,
  },
  {
    id: 4,
    title: "Item E",
    zone: 1,
  },
]);

const getList = (list) => {
  return items.value.filter((e) => e.zone === list);
};

const onDrop = (event, list) => {
  const itemID = event.dataTransfer.getData("itemID");
  const item = items.value.find((item) => item.id == itemID);
  item!.zone = list;
  console.log(items.value);
};

const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("itemID", item.id);
};
</script>

<style>
.drop-zone {
  width: 50%;
  margin: 50px auto;
  background-color: #ecf0f1;
  padding: 10px;
  min-height: 10px;
}
.drag-el {
  background-color: #3498db;
  color: white;
  padding: 5px;
  margin-bottom: 10px;
}
.drag-el:nth-last-of-type(1) {
  margin-bottom: 0;
}
</style>
