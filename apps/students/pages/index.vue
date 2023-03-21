<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input type="email" v-model="formData.email" placeholder="email" />
      <input type="password" v-model="formData.password" placeholder="password" />
      <button type="submit">register</button>
    </form>
  </div>
</template>


<script setup lang="ts">
import { createUser } from "../composables/useFirebase";

type LoginTypeFormData = {
  email: string;
  password: string;
};

const formData = reactive<LoginTypeFormData>({
  email: "",
  password: "",
});

const onSubmit = async () => {
  const create = await createUser(formData);
  console.log(create);
};


</script>