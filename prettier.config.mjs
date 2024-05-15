// @ts-check

/** @typedef { import("@ianvs/prettier-plugin-sort-imports").PluginConfig } SortImportsConfig */
/** @typedef { import("prettier").Config } PrettierConfig */

/** @type { PrettierConfig | SortImportsConfig } */
export default {
  printWidth: 100,
  singleAttributePerLine: true,
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
  importOrder: [],
};
