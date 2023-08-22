import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";
import main from "../components/HomePage.vue";
import MovieDetail from "../components/MovieDetail.vue";
const routes = [
  { path: "/", component: Login },
  { path: "/signup", component: Signup },
  {
    path: "/main",
    name: "Main",
    component: main,
    props: (route) => ({ email: route.query.email }), // email 매개변수를 명시적으로 지정
  },
  {
    path: "/main/:id", // :id는 동적 라우트 매개변수
    name: "MovieDetail",
    component: MovieDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
