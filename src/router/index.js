import { createRouter, createWebHistory } from "vue-router";
import LandingPageView from "../views/LandingPageView.vue";
import CVClassicView from "../views/wip/CVClassicView.vue";
import CVCreativeView from "../views/wip/CVCreativeView.vue";
import CVGeneratorView from "../views/CVGeneratorView";
import CVModernView from "../views/wip/CVModernView";
import MenuExperience from "@/components/menu/MenuExperience";
import MenuProfile from "@/components/menu/MenuProfile";
import MenuEducation from "@/components/menu/MenuEducation";
import MenuLanguages from "@/components/menu/MenuLanguages";

const routes = [
  {
    path: "/",
    name: "landingpage",
    component: LandingPageView,
  },
  {
    path: "/cv-classic",
    name: "cv classic",
    component: CVClassicView,
  },
  {
    path: "/cv-creative",
    name: "cv creative",
    component: CVCreativeView,
  },
  {
    path: "/cv-generator",
    name: "cv generator",
    component: CVGeneratorView,
  },
  {
    path: "/cv-modern",
    name: "cv modern",
    component: CVModernView,
  },
  {
    path: "/menu-experience",
    name: "menu-experience",
    component: MenuExperience,
  },
  {
    path: "/menu-profile",
    name: "menu-profile",
    component: MenuProfile,
  },
  {
    path: "/menu-education",
    name: "menu-education",
    component: MenuEducation,
  },
  {
    path: "/menu-languages",
    name: "menu-languages",
    component: MenuLanguages,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
