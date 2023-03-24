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
    <button type="submit" @click="loginGithub">login with github</button>
    <button type="submit" @click="loginGoogle">login with google</button>
    <button type="submit" @click="loginOut">sign out</button>
  </div>
</template>

<script setup lang="ts">
import { FormData } from "~~/types/typeAuth";
import { signInUser, loginWithGithub, loginWithGoogle ,logOut} from "../composables/useFirebase";




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

const loginGithub  =async () => {
  const result = await loginWithGithub();

};

const loginGoogle  = async ()=>{
  const result = await loginWithGoogle();
  
}

const loginOut = async () =>{
  await logOut()
}
</script>
