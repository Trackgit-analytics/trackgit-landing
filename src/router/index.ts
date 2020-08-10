import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Landing from "@/views/Landing.vue";
import PageMeta from "@/models/data/PageMeta.ts";
import { Hyperlinks } from "@/models/data/LinkDirectory";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "landing",
    meta: PageMeta.App,
    component: Landing
  },
  {
    path: "/donate/:receipt?",
    props: true,
    name: "donate",
    meta: PageMeta.Donate,
    component: () => import("@/views/Donate.vue")
  },
  {
    path: Hyperlinks.tos,
    name: "Terms and conditions",
    meta: PageMeta.Terms,
    component: () => import("@/views/Terms.vue")
  },
  {
    path: "/*",
    name: "404",
    meta: PageMeta.Error404,
    component: () => import("@/views/404.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

/**
 * This inserts meta tags into the page when a route loads
 * Source: https://www.digitalocean.com/community/tutorials/vuejs-vue-router-modify-head
 */
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map(el => el.parentNode?.removeChild(el));

  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags
    .map((tagDef: any) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    .forEach((tag: any) => document.head.appendChild(tag));

  next();
});

export default router;
