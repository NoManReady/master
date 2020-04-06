import Vue from "vue";
import Router from "vue-router";
const Home = () => import("@/views/Home");
const Board = () => import("@/views/Board");
const AppContainer = () => import("@/views/AppContainer");

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/board",
    name: "Board",
    component: Board
  },
  {
    path: "/app/:appName",
    name: "AppRegion",
    component: AppContainer,
    props: route => ({ appName: route.params.appName })
  }
];
export const ROUTER_MODE = "hash";
const router = new Router({
  mode: ROUTER_MODE,
  base: process.env.BASE_URL,
  routes
});

export default router;
