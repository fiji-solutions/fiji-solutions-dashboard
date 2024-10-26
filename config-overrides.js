const path = require("path");
const { override, addWebpackAlias } = require("customize-cra");

module.exports = override(
  addWebpackAlias({
    "@components": path.resolve(__dirname, "src/components"),
    "@pages": path.resolve(__dirname, "src/pages"),
    "@utils": path.resolve(__dirname, "src/utils"),
    "@services": path.resolve(__dirname, "src/services"),
    "@context": path.resolve(__dirname, "src/context"),
    "@styles": path.resolve(__dirname, "src/styles"),
  }),
);
