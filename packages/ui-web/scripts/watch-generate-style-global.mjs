// packages/ui-web/scripts/watch-style-global.mjs
import { watch } from "node:fs";
import { spawn } from "node:child_process";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const colorsJsonPath = require.resolve("@reactwave/configs/jsons/colors.json");
const layoutJsonPath = require.resolve("@reactwave/configs/jsons/layout.json");

function runBuild() {
    return new Promise((res) => {
        const p = spawn(
            "node",
            ["./scripts/generate-style-global.mjs"],
            { stdio: "inherit", shell: process.platform === "win32" }
        );
        p.on("close", () => res());
    });
}

let timer = null;
const trigger = () => {
    clearTimeout(timer);
    timer = setTimeout(runBuild, 100);
};

console.log("👀 Watching @reactwave/configs JSON...");
await runBuild();

for (const file of [colorsJsonPath, layoutJsonPath]) {
    watch(file, { persistent: true }, (event) => {
        if (event === "change" || event === "rename") trigger();
    });
}
