import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () => System.import<LifeCycles>("@single-spa/welcome"),
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
  name: "@ab/react-lazy",
  app: () => System.import<LifeCycles>("@ab/react-lazy"),
  activeWhen: ["/react-lazy"],
});

registerApplication({
  name: "@ab/react-route",
  app: () => System.import<LifeCycles>("@ab/react-route"),
  activeWhen: (location) => location.pathname === "/react-route",
});

registerApplication({
  name: "@ab/react-header",
  app: () => System.import<LifeCycles>("@ab/react-header"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
