import { config } from "@repo/eslint-config/react-native";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...config,
  {
    ignores: ["dist/**", "coverage/**", "jest.config.*", "babel.config.*"],
  },
];
