import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Todo from "./views/Todo.vue";
import Examples from "./views/Examples.vue";
import About from "./views/About.vue";
import MissingPage from "./views/MissingPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/todo",
      name: "todo",
      component: Todo
    },
    {
      path: "/examples",
      name: "examples",
      component: Examples
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    // using path "*" matches every route
    // put this last to catch all missing routes
    {
      path: "*",
      name: "missing-page",
      component: MissingPage
    }
  ]
});
