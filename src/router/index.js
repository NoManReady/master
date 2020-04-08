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
    component: Home,
    meta:{
      title:'笨鸟还不会飞🐦'
    }
  },
  {
    path: "/board",
    name: "Board",
    component: Board,
    meta:{
      title:'App列表'
    }
  },
  {
    path: "/app/:appName",
    name: "AppRegion",
    component: AppContainer,
    props: route => ({ appName: route.params.appName }),
    meta:{
      title:'App'
    },
    children:[{
      path:'*',
      name:'redirect'
    }]
  }
];
export const ROUTER_MODE = "hash";
const router = new Router({
  mode: ROUTER_MODE,
  base: process.env.BASE_URL,
  routes
});

export default router;
