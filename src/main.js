import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNVbquxdAauLS4KRhPqVHmw4PU3TnNrJo",
  authDomain: "vue-firebase-auth-0007.firebaseapp.com",
  projectId: "vue-firebase-auth-0007",
  storageBucket: "vue-firebase-auth-0007.appspot.com",
  messagingSenderId: "156719677723",
  appId: "1:156719677723:web:0f424c1c95c9cdac8593be"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const app = createApp(App);

app.use(router)

app.mount('#app')
