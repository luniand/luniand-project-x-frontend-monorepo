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
const { signUpUserByEmail, currentUser } = useAuth()

const formData = reactive({
  email: "",
  password: "",
});

const onSubmit = async () => {
  await signUpUserByEmail(formData);
  if (currentUser.value) {
    const router = useRouter()
    router.push('/secret')
  }
};

</script>