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
import { FormData } from "~~/types/typeAuth";
import { createUser } from "../composables/useFirebase";



const formData = reactive<FormData>({
  email: "",
  password: "",
});

const onSubmit = async () => {
  const result = await createUser(formData);
  if (result) {
    const router = useRouter()
    router.push('/login')
  }
};

</script>