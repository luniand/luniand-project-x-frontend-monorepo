<template>
    <h1>profile</h1>
    <pre>
{{ user }}
    </pre>
</template>

<script setup lang="ts">
// const { currentUser} = useAuth()
const user = await getCurrentUser();
definePageMeta({
  middleware: ["auth","profile"],
});
</script>