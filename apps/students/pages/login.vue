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
    </form>
    <button type="submit" @click="loginGithub">login with github</button>
    <button type="submit" @click.prevent="loginGoogle">login with google</button>
  
    <br>
    <nuxt-link to="/register">register</nuxt-link>
  </div>
</template>

<script setup lang="ts">


const { signInUserByEmail,loginByGithub ,loginByGoogle,currentUser, logOut} = useAuth()

const formData = reactive<FormDataUserSignIn>({
  email: "",
  password: "",
});

const onSubmit = async () => {
  await signInUserByEmail(formData);
  if(currentUser.value){
    const router = useRouter();
    router.push("/secret");
  }
};

const loginGithub  =async () => {
  await loginByGithub()
  if(currentUser.value){
    const router = useRouter();
    router.push("/secret");
  }
};

const loginGoogle  = async ()=>{
  await loginByGoogle()
  if(currentUser.value){
    const router = useRouter();
    router.push("/secret");
  }
}


</script>
