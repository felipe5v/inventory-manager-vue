import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login";
import Signup from "../views/Signup";
import Home from "../views/Home";
import Test from "../views/Test";
<<<<<<< HEAD
import PendingOrder from "../views/PendingOrder";

import SummaryModal from "../views/SummaryModal";
=======
import SummaryModal from "../views/SummaryModal";
import Pruebas from "../views/Pruebas";
>>>>>>> ModalProduct
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
<<<<<<< HEAD
=======
  {
    path: "/pruebas",
    name: "Productos",
    component: Pruebas,
  }
>>>>>>> ModalProduct
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
