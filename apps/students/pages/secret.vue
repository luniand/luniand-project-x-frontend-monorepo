<template>
  <div>
    <form @submit.prevent="onSubmit">
      <button type="submit">sign out</button>
    </form>

    <client-only>
      <pre>
             {{ firebaseState }}
    </pre
      >
    </client-only>
  </div>
</template>

<script setup lang="ts">
import { signOut } from "../composables/useFirebase";
import { useStateFirebase } from "../composables/useStateFireBase";

definePageMeta({
  middleware: ["auth"],
});

const firebaseState = useStateFirebase();

const onSubmit = async () => {
  const result = await signOut();
  const router = useRouter();
  router.push("/login");
};
</script>
