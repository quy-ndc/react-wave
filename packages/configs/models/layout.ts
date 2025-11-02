export type Layout = {
    radius: Record<string, number>;
    spacing: Record<string, number>;
    zIndex?: Record<string, number>;
    breakpoints?: Record<string, number>;
    elevation?: Record<string, { offsetY: number; blur: number; opacity: number }>;
}
