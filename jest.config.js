const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset({
  tsconfig: "tsconfig.test.json",
}).transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  rootDir: ".",
  testMatch: ["**/tests/**/*.test.ts"],
  transform: {
    ...tsJestTransformCfg,
  },
};