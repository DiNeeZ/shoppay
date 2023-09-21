/** @type {import('next').NextConfig} */
const path = require("path");

const sassPrependData = `
  @import "./variables.scss";
  @import "./mixins.scss";
`;

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: sassPrependData,
  },
};

module.exports = nextConfig;
