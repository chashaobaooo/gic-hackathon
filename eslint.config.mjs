// eslint.config.mjs  (or .js if your package.json has "type":"module")
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier/flat";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default [
  // (optional but nice) ignores at the top
  { ignores: [".next/**", "node_modules/**", "dist/**", "out/**", "supabase/types/**"] },

  // spread the compat configs (avoid nested array)
  ...eslintConfig,

  // keep Prettier last so it can turn off conflicting rules
  eslintConfigPrettier,
];
