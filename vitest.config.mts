import { fileURLToPath } from "node:url"
import { defineConfig } from "vitest/config"

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL(".", import.meta.url)),
    },
  },
  test: {
    environment: "node",
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["app/api/contact/route.ts", "features/contact/**/*.ts", "lib/server/**/*.ts"],
      thresholds: {
        statements: 60,
        branches: 55,
        functions: 75,
        lines: 60,
      },
    },
  },
})
