import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const projectRoot = resolve(__dirname, "../..");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: /^@namui\/(.*)/,
        replacement: resolve(projectRoot, "packages", "$1"),
      },
    ],
  },
});
