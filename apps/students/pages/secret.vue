<template>
  <div>
    <form @submit.prevent="onSubmit">
      <button type="submit">sign out</button>
    </form>

    
  </div>
</template>

<script setup lang="ts">
// import { signOut } from "../composables/useFirebase";


definePageMeta({
  middleware: ["auth"],
});


const onSubmit = async () => {
  // const result = await signOut();
  const router = useRouter();
  router.push("/login");
};
</script>
