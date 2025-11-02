import { flatten, toMap } from "./utils";
import colorsJson from "./jsons/colors.json";
import layoutJsonRaw from "./jsons/layout.json";

type ColorsFlat = Record<string, string>;

// Build grouped colors from flat alias keys + palette
function buildColors(colors: any) {
    const flat = (colors.colors ?? {}) as ColorsFlat;
    const pal = (colors.palette ?? {}) as any;
    const pick = (k: string) => flat[k];

    return {
        text: {
            primary: pick("text-primary"),
            secondary: pick("text-secondary"),
            muted: pick("text-muted"),
            inverse: pick("text-inverse"),
        },
        background: {
            primary: pick("background-primary"),
            secondary: pick("background-secondary"),
        },
        color: {
            primary: pick("color-primary"),
            secondary: pick("color-secondary"),
            success: pick("color-success"),
            warning: pick("color-warning"),
            danger: pick("color-danger"),
        },
        status: {
            success: pick("status-success"),
            onSuccess: pick("status-onSuccess"),
            warning: pick("status-warning"),
            onWarning: pick("status-onWarning"),
            danger: pick("status-danger"),
            onDanger: pick("status-onDanger"),
            info: pick("status-info"),
            onInfo: pick("status-onInfo"),
        },
        border: {
            default: pick("border-default"),
            strong: pick("border-strong"),
        },
        palette: pal
    } as const;
}

// Normalize layout root
const layoutJson =
    (layoutJsonRaw as any).layout
        ? (layoutJsonRaw as any).layout
        : (layoutJsonRaw as any).layouts ?? {};

// Final tokens (DOT-ACCESS ONLY)
export const tokens = {
    colors: buildColors(colorsJson as any),
    layout: layoutJson as import("./models/layout").Layout
} as const;

export type Tokens = typeof tokens;

// Optional: flattened map for dynamic reads/debug
export const tokensMap = toMap(flatten(tokens));