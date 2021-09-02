import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Home from "../views/Home";
import Test from "../views/Test";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search=:slug",
    name: "searchHome",
    component: Home,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
