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
  app: () => System.import<LifeCycles>("@ab/react-single"),
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@ab/react-multiples",
  app: () => System.import<LifeCycles>("@ab/react-multiples"),
  activeWhen: ["/react-multiples"],
});

registerApplication({
  name: "@ab/react-route",
  app: () => System.import<LifeCycles>("@ab/react-route"),
  activeWhen: (location) => location.pathname === "/react-route",
});

start({
  urlRerouteOnly: true,
});
