<template>
    <div>
        <form>
            <h1>SignIn to an Account</h1>
            <p><input type="email" placeholder="E-mail" v-model="email" /></p>
            <p><input v-model="password" type="password" placeholder="Password" /></p>
            <p v-if="errMsg">{{ errMsg }}</p>
            <p><button @click="register">Submit</button></p>
            <p><button @click="signInWithGoogle">Sign With Google</button></p>
        </form>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router';

const email = ref('')
const password = ref('')
const errMsg = ref()
const router = useRouter()

const register = () => {
    signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Successfully Registered!");
        router.push('/feed');
    })
    .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case 'auth/invalid-email':
              errMsg.value = 'Invalid email'
              break
          case 'auth/user-not-found':
              errMsg.value = 'No account with that email was found'
              break
          case 'auth/wrong-password':
              errMsg.value = 'Incorrect password'
              break
          default:
              errMsg.value = 'Email or password was incorrect'
              break
        }
    })
};

</script>

<style lang="css" scoped>

</style>