const withBuilderDevTools = require("@builder.io/dev-tools/next")();
const path = require("path");

module.exports = withBuilderDevTools({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "css")],
  },
  trailingSlash: true,
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
});
