<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    Footer,
    Header,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Noto Sans KR", sans-serif;
  font-family: "Russo One", sans-serif;
  color: #1aab8a;
}
a {
  color: #f4a460 !important;
  text-decoration: none !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
