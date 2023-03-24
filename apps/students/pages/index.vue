<template>
  <div>
    <h1>Homepage</h1>
    <NuxtLink to="/login">login</NuxtLink><br>
    <NuxtLink to="/register">register</NuxtLink><br>
    <NuxtLink to="/secret">secret</NuxtLink>
    <button @click="onSubmit">Hello from click</button>
  </div>
</template>

<script setup lang="ts">
function onSubmit() {
  alert("hello")
}
</script>