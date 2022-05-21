import { babel } from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";
import external from "rollup-plugin-peer-deps-external";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "umd",
    name: "ReactWebMask",
    exports: "named",
    globals: {
      react: "React",
    },
  },
  plugins: [
    external(),
    copy({
      targets: [
        {
          src: "src/masks/utils",
          dest: "dist/",
        },
        {
          src: "src/index.d.ts",
          dest: "dist/",
        },
      ],
    }),
    resolve({ jsnext: true }),
    babel({
      babelHelpers: "bundled",
    }),
  ],
};
