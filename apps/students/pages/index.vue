<template>
  <div>
    <h1>Homepage</h1>
    <NuxtLink to="/login">login</NuxtLink><br>
    <NuxtLink to="/register">register</NuxtLink><br>
    <NuxtLink to="/secret">secret</NuxtLink>
    <button @click="onSubmit">Hello from click</button>
    <button type="submit" @click="signOut">sign out</button>
  </div>
</template>

<script setup lang="ts">
const { currentUser, logOut} = useAuth()

function onSubmit() {
  alert("hello")
}
const signOut = async () =>{
  await logOut()
  if(!currentUser.value){
    const router = useRouter();
    router.push("/login");
  }
}
</script>