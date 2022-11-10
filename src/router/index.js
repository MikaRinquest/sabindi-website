// import {createApp} from 'vue'
import { createRouter, createWebHistory } from "vue-router";
// import App from './App.vue'

import Home from "../views/Home.vue";
import RealEstate from "../views/RealEstate.vue";
import Maintenance from "../views/Maintenance.vue";
import About from "../views/About.vue";
import ContactUs from "../views/ContactUs.vue";
import NotFound from "../components/Notfound.vue";

const routes = [
  {
    path: "/:catchAll",
    component: NotFound,
  },

  {
    path: "/",
    name: "Home",
    component: Home,
  },

  // {
  //   path: "/about",
  //   name: "Home-About",
  //   component: () => import("../components/Home/About.vue"),
  // },

  {
    path: "/real-estate",
    name: RealEstate,
    component: RealEstate,
  },

  {
    path: "/maintenance",
    name: Maintenance,
    component: Maintenance,
  },

  {
    path: "/about",
    name: About,
    component: About,
  },

  {
    path: "/contact-us",
    name: ContactUs,
    component: ContactUs,
  },

  {
    path: "/under-construction",
    name: "N/A",
    component: () => import("../components/UnderConstruction.vue"),
  },

  {
    path: "/evaluation",
    name: "FreeEval",
    component: () => import("../components/Real Estate/FreeEval.vue"),
  },
];

// createApp(rootComponent: App).user(plugin: router).mount(rootContainer:'#app')

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
