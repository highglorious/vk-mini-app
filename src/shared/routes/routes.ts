import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from "@vkontakte/vk-mini-apps-router";

export const routes = RoutesConfig.create([
  createRoot("default_root", [
    createView("default_view", [
      createPanel("home_panel", "/"),
      createPanel("estimate_age_panel", `/estimate-age`),
      createPanel("cat_fact_panel", `/cat-fact`),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
