<template>
  <div>
    <h2>Sign Up</h2>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="signup">Sign Up</button>
  </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase.js";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async signup() {
      try {
        const auth = getAuth(); // auth 객체 가져오기
        await createUserWithEmailAndPassword(auth, this.email, this.password); // createUserWithEmailAndPassword 함수 사용
        console.log("Signed up successfully");
      } catch (error) {
        console.error("Sign up error:", error);
      }
    },
  },
};
</script>
