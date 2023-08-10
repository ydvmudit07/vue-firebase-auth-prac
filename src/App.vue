<template>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <div v-if="!isLoggedIn">
        <RouterLink to="/register">Register</RouterLink>
      </div>
      <div v-if="!isLoggedIn">
        <RouterLink to="/sign-in"><div>SignIn</div></RouterLink>
      </div>
      <RouterLink to="/feed">Feed</RouterLink>
      <button @click="handleSignOut" v-if="isLoggedIn">Sign Out</button>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted, ref} from 'vue'
import { getAuth, onAuthStateChanged,signOut } from 'firebase/auth';
import router from './router';

const isLoggedIn = ref(false);

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  }); 
})

const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/')
  })
}

</script>

<style lang="css" scoped>
*{
  font-family: monospace;
}
nav{
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  font-size: 20px;
  margin: 20px;
}
a{
  text-decoration: none;
  color: black;
}
</style>