<template>
    <h1>profile</h1>
    <pre>
{{ currentUser }}
    </pre>
</template>

<script setup lang="ts">
const { currentUser} = useAuth()
definePageMeta({
  middleware: ["profile"],
});
</script>