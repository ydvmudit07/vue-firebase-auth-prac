<template>
    <div>
        <h1>Create an Account</h1>
        <p><input type="email" placeholder="E-mail" v-model="email" /></p>
        <p><input v-model="password" type="password" placeholder="Password" /></p>
        <p><button @click="register">Submit</button></p>
        <p><button @click="signInWithGoogle">Sign With Google</button></p>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router';

const email = ref('')
const password = ref('')
const router = useRouter()

const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Successfully Registered!");
        router.push('/feed');
    })
    .catch((error) => {
        console.log(error.code);
        alert(error.message);
    })
};

</script>

<style lang="css" scoped>

</style>