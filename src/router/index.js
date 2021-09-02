import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Home from "../views/Home";
import Test from "../views/Test";
import PendingOrder from "../views/PendingOrder";

import SummaryModal from "../views/SummaryModal";
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
    path: "/pedido-pendiente",
    name: "PendingOrder",
    component: PendingOrder,
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
  {
    path: "/summary-modal",
    name: "Resumen de pedido",
    component: SummaryModal,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
