import { createRouter, createWebHistory } from "vue-router";
import FrontPage from "../views/Layout/FrontPage";
import Dashboard from "../views/Layout/Dashboard";
import AuthPage from "../views/Layout/AuthPage";
import Home from "../views/Home.vue";
import Login from "../views/Auth/Login.vue";

import Register from "../views/Auth/Register.vue";

const routes = [
  {
    path: "/",
    name: "FrontPage",
    component: FrontPage,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
 
  {
    
    path: "/auth",
    component: AuthPage,

      children: [
        {
          path:'login',
          component: Login
        },

        {
          path:'register',
          component: Register
        }
      ]
  },

  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
