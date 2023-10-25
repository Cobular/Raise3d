import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import generatePackageJSON from "rollup-plugin-generate-package-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const dev = process.env.NODE_ENV !== "production";

export default {
  input: "src/apiClient.ts",
  output: {
    file: "dist/cjs/index.js",
    format: "cjs",
  },
  plugins: [
    nodeResolve({
      extensions: [".ts"],
    }),
    babel({
      extensions: [".ts"],
      exclude: "node_modules/**",
      presets: ["@babel/preset-typescript"],
    }),
    // generatePackageJSON({
    //   outputFolder: "dist",
    //   baseContents: (pkg) => ({
    //     name: pkg.name,
    //     main: "/dist/index.js",
    //   }),
    // }),
    // terser({
    //   ecma: 2015,
    //   mangle: { toplevel: true },
    //   compress: {
    //     toplevel: true,
    //     drop_console: !dev,
    //     drop_debugger: !dev,
    //   },
    //   output: { quote_style: 1 },
    // }),
    commonjs(),
  ],
};