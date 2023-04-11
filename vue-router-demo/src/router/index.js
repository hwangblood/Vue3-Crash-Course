// DEFINE OUR ROUTING FULES
import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CardView from "../views/CardView.vue";
import ContactView from "../views/ContactView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  {
    path: "/home",
    // redirect '/home' to '/'
    redirect: "/",
  },
  { path: "/about", name: "About", component: AboutView },
  {
    path: "/cars/:id",
    name: "Car",
    component: CardView,
    children: [
      // * this will be nested in CardView, when navigaet to http://localhost:5174/cars/:id
      //   { path: "", name: "", component: ContactView },
      {
        // * this will be nested in CardView, when navigaet to http://localhost:5174/cars/:id/contact
        path: "contact",
        name: "Contact",
        component: ContactView,
      },
    ],
  },
  {
    // https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#捕获所有路由或-404-not-found-路由
    path: "/:catchall(.*)*", // regex expression
    name: "NotFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
