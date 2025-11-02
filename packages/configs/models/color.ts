export type Shade = "50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

export type Colors = {
    text: {
        primary: string;
        secondary: string;
        muted: string;
        inverse: string;
    };
    background: {
        primary: string;
        secondary: string;
    };
    color: {
        primary: string;
        secondary: string;
        success: string;
        warning: string;
        danger: string;
    };
    status: {
        success: string;
        onSuccess: string;
        warning: string;
        onWarning: string;
        danger: string;
        onDanger: string;
        info: string;
        onInfo: string;
    };
    border: {
        default: string;
        strong: string;
    };
    palette: {
        primary: Partial<Record<Shade, string>>;
        secondary: Partial<Record<Shade, string>>;
        success: Partial<Record<Shade, string>>;
        warning: Partial<Record<Shade, string>>;
        danger: Partial<Record<Shade, string>>;
        neutral: Partial<Record<Shade, string>>;
    };
};
