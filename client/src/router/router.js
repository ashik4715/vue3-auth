import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HelloWorld",
    component: () => import("@src/components/HelloWorld.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@views/NotFound.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@views/Contact.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@views/Projects.vue"),
  },
  {
    path: "/new-projects",
    name: "new-projects",
    component: () => import("@views/new-projects.vue"),
  },
  {
    path: "/single-project/:id",
    name: "single-project",
    component: () => import("@views/single-project.vue"),
  },
  {
    path: "/privacy-policy",
    name: "Privacy-policy",
    component: () => import("@views/Privacy-policy.vue"),
  },
  {
    path: "/terms-conditions",
    name: "Terms-conditions",
    component: () => import("@views/Terms-conditions.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@views/Register.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("@views/Dashboard.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
