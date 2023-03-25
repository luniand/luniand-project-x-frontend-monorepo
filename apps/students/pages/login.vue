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
    <!-- <button type="submit" @click="loginGithub">login with github</button>
    <button type="submit" @click.prevent="loginGoogle">login with google</button>
    <button type="submit" @click="loginOut">sign out</button>
    <br> -->
    <nuxt-link to="/register">register</nuxt-link>
  </div>
</template>

<script setup lang="ts">
// import { loginWithGithub, loginWithGoogle ,logOut} from "../composables/useFirebase";

const { signInUserByEmail } = useAuth()

const formData = reactive<FormDataUserSignIn>({
  email: "",
  password: "",
});

const onSubmit = async () => {
  const result = await signInUserByEmail(formData);
  if (result) {
    const router = useRouter();
    router.push("/secret");
  }
};

// const loginGithub  =async () => {
//   const result = await loginWithGithub();

// };

// const loginGoogle  = async ()=>{
//   const result = await loginWithGoogle();
  
// }

// const loginOut = async () =>{
//   await logOut()
// }
</script>
