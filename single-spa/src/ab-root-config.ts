import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import<LifeCycles>(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@ab/react-single",
  app: () =>
    System.import<LifeCycles>(
      "@ab/react-single"
    ),
  activeWhen:  (location) => location.pathname === "/react-single",
});

start({
  urlRerouteOnly: true,
});
