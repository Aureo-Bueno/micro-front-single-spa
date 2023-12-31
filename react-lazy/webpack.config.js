const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "ab",
    projectName: "react-lazy",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    externals: ["react-router-dom"],
  });
};
