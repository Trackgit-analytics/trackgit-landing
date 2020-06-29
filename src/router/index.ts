import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Landing from "@/views/Landing.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "landing",
    component: Landing
  },
  {
    path: "/donate",
    name: "donate",
    component: () => import("@/views/Donate.vue")
  },
  {
    path: "/*",
    name: "404",
    component: () => import("@/views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
