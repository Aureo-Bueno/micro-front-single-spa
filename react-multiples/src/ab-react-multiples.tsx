import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { AppRoutes } from "./routes";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: AppRoutes,
  errorBoundary(err, info, props) {
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
