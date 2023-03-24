<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input type="email" v-model="formData.email" placeholder="email" />
      <input
        type="password"
        v-model="formData.password"
        placeholder="password"
      />
      <button type="submit">login</button>
      <nuxt-link to="/register">register</nuxt-link>
      <NuxtLink to="/secret">sss</NuxtLink>
    </form>
  </div>
</template>

<script setup lang="ts">
import { FormData } from "~~/types/typeAuth";
import { signInUser } from "../composables/useFirebase";

const formData = reactive<FormData>({
  email: "",
  password: "",
});

const onSubmit = async () => {
  const result = await signInUser(formData);
  if (result) {
    const router = useRouter();
    router.push("/");
  }
};
</script>
