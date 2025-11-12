// packages/ui-web/scripts/generate-style-global.mjs
// Generate style.global.css at the ROOT of ui-web package (./style.global.css)
import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const __dirname = dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = resolve(__dirname, ".."); // ui-web root

// Resolve JSON inside @reactwave/configs safely (no fragile ../../)
const colorsJsonPath = require.resolve("@reactwave/configs/jsons/colors.json");
const layoutJsonPath = require.resolve("@reactwave/configs/jsons/layout.json");

const kebab = (s) =>
    String(s).replaceAll("_", "-").replaceAll(" ", "-").replaceAll(".", "-").toLowerCase();

const loadJson = async (p) => JSON.parse(await readFile(p, "utf-8"));

const emit = (colors, layout) => {
    const lines = [];
    lines.push("/* AUTO-GENERATED FROM @reactwave/configs JSON. DO NOT EDIT MANUALLY. */");
    lines.push(":root {");

    // colors.colors -> --color-*
    if (colors?.colors && typeof colors.colors === "object") {
        for (const [k, v] of Object.entries(colors.colors)) {
            lines.push(`  --color-${kebab(k)}: ${v};`);
        }
    }
    // colors.palette -> --palette-<family>-<shade>
    if (colors?.palette && typeof colors.palette === "object") {
        for (const [family, shades] of Object.entries(colors.palette)) {
            if (typeof shades === "object") {
                for (const [shade, val] of Object.entries(shades)) {
                    lines.push(`  --palette-${kebab(family)}-${kebab(shade)}: ${val};`);
                }
            }
        }
    }

    // layouts.*
    const layouts = layout?.layouts ?? {};
    const scalarGroups = [
        ["radius", "radius"],
        ["padding", "pad"],
        ["text", "text"],
        ["gap", "gap"],
        ["width", "width"],
        ["height", "height"],
        ["lineHeight", "lh"],
        ["opacity", "opacity"]
    ];
    for (const [groupKey, prefix] of scalarGroups) {
        const group = layouts[groupKey];
        if (group && typeof group === "object") {
            for (const [k, v] of Object.entries(group)) {
                const withUnit = typeof v === "number" ? `${v}${prefix === "opacity" ? "" : "px"}` : v;
                lines.push(`  --${prefix}-${kebab(k)}: ${withUnit};`);
            }
        }
    }
    for (const other of ["breakpoints", "zIndex"]) {
        const group = layouts[other];
        if (group && typeof group === "object") {
            for (const [k, v] of Object.entries(group)) {
                lines.push(`  --${kebab(other)}-${kebab(k)}: ${v};`);
            }
        }
    }

    lines.push("}");
    lines.push("");
    return lines.join("\n");
};

const main = async () => {
    const [colors, layout] = await Promise.all([
        loadJson(colorsJsonPath),
        loadJson(layoutJsonPath),
    ]);

    const css = emit(colors, layout);
    const outFile = resolve(PKG_ROOT, "src/style.global.css");
    await writeFile(outFile, css, "utf-8");
    console.log(`✅ Wrote ${outFile}`);
};

main().catch((e) => {
    console.error("❌ Failed to generate style.global.css:", e);
    process.exit(1);
});
