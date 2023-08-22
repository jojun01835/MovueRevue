<template>
  <div class="wrap">
    <h2>Sign Up</h2>
    <div class="input_wrap">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
    </div>
    <button @click="signup">Sign Up</button>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
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
        const authInstance = auth; // 이미 가져온 auth 인스턴스 사용
        await createUserWithEmailAndPassword(authInstance, this.email, this.password);
        console.log("Signed up successfully");

        // 회원가입 완료 메시지 출력
        alert("회원가입이 완료되었습니다.");

        // 입력란 초기화
        this.email = "";
        this.password = "";

        // 로그인 페이지로 이동
        this.$router.push("/"); // "/login"은 로그인 페이지의 경로에 맞게 변경해주세요.
      } catch (error) {
        console.error("Sign up error:", error);
      }
    },
  },
};
</script>

<style scoped>
h2 {
  padding-top: 150px;
  box-sizing: border-box;
}
.input_wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
button {
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
