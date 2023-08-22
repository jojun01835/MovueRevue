<template>
  <div class="wrap">
    <h2 class="title">MovueRevue</h2>
    <div class="loginwrap">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
    </div>
    <button @click="login" class="Login">Login</button>
    <p>MovueRevue의 회원이 아니신가요?</p>
    <router-link to="/signup">회원가입 하러가기</router-link>
    <br />
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      slide: 0,
      sliding: null,
      id: "",
    };
  },
  methods: {
    async login() {
      try {
        const auth = getAuth(); // auth 객체 가져오기
        await signInWithEmailAndPassword(auth, this.email, this.password); // signInWithEmailAndPassword 함수 사용
        console.log("Logged in successfully");
        this.id = this.email;
        console.log("this.email:", this.id);
        this.$router.push({ name: "Main", params: { email: this.id } });
      } catch (error) {
        console.error("Login error:", error);
        alert("아이디와 비밀번호가 일치하지 않습니다.");
      }
    },
  },
};
</script>
<style>
.wrap {
  width: 100%;
  height: 100vh;
  background: #0c0c0c;
}
.title {
  padding-top: 150px;
  color: #1aab8a;
  margin-bottom: 20px;
}
input {
  padding: 5px 20px;
}
.loginwrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
input {
  width: 100%;
  max-width: 280px;
  display: inline-block;
  margin: 10px;
  box-sizing: border-box;
}
.Login {
  background: #1aab8a;
  color: #fff;
  border: none;
  position: relative;
  height: 50px;
  font-size: 1.6em;
  padding: 0 2em;
  cursor: pointer;
  transition: 800ms ease all;
  outline: none;
  margin-top: 20px;
  margin-bottom: 20px;
}
button:hover {
  background: #fff;
  color: #1aab8a;
}
button:before,
button:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 2px;
  width: 0;
  background: #1aab8a;
  transition: 400ms ease all;
}
button:after {
  right: inherit;
  top: inherit;
  left: 0;
  bottom: 0;
}
button:hover:before,
button:hover:after {
  width: 100%;
  transition: 800ms ease all;
}
p {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
