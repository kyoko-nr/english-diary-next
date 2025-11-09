import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  {
    rules: {
      curly: "error",
      "brace-style": ["error", "1tbs", { allowSingleLine: false }],
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/shared/*", "@/features/*"],
              message: "Restricted import from sub path",
            },
          ],
        },
      ],
    },
  },
  // shared 配下では '@/shared' 系の import を禁止（相対パスを使用）
  {
    files: ["shared/**/*.{ts,tsx,js,jsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/shared", "@/shared/*"],
              message: "shared 内では相対パス（../...）を使用してください。",
            },
          ],
        },
      ],
    },
  },
  // features 配下では '@/features' 系の import を禁止（相対パスを使用）
  {
    files: ["features/**/*.{ts,tsx,js,jsx}"],
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["@/features", "@/features/*"],
              message: "features 内では相対パス（../...）を使用してください。",
            },
          ],
        },
      ],
    },
  },
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  prettier,
]);

export default eslintConfig;
