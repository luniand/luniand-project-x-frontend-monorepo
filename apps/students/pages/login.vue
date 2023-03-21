<template>
    <div>
      <form @submit.prevent="onSubmit">
        <input type="email" v-model="formData.email" placeholder="email" />
        <input type="password" v-model="formData.password" placeholder="password" />
        <button type="submit">login</button>
        <nuxt-link to="/register">register</nuxt-link>
      </form>
    </div>
  </template>
  
  
  <script setup lang="ts">
  import { signInUser} from "../composables/useFirebase";
  
  type LoginTypeFormData = {
    email: string;
    password: string;
  };
  
  const formData = reactive<LoginTypeFormData>({
    email: "",
    password: "",
  });
  
  const onSubmit = async () => {
    const result = await signInUser(formData);
    console.log(result);
  };
  
  </script>