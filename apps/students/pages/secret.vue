<template>
  <div>
    <form @submit.prevent="onSubmit">
      <button type="submit">sign out</button>
    </form>

    <button>get current user</button>
    <nuxt-link :to="`/p/${usernameComputed}`">profile</nuxt-link>
  </div>
</template>

<script setup lang="ts">
// import { signOut } from "../composables/useFirebase";


definePageMeta({
  middleware: ["auth"],
});

const { currentUser,logOut ,syncCurrentUser} =  useAuth();

const user = ref(await syncCurrentUser())

const usernameComputed = computed(()=> {
  return user.value?.email?.split("@")[0]
})


const onSubmit = async () => {
  const result = await logOut();
  const router = useRouter();
  router.push("/login");
};
</script>
