/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  verbose: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest", // Use babel-jest to transpile JS/JSX files
  },
  transformIgnorePatterns: [
    "\\\\node_modules\\\\", // Ignore node_modules from being transformed
  ],
};

module.exports = config;
