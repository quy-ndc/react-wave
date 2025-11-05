export const ButtonVariant = {
    PRIMARY: "primary",
    DANGER: "danger",
    OUTLINE: "outline",
    GHOST: "ghost",
    LINK: "link",
} as const;

export const ButtonSize = {
    SMALL: "small",
    DEFAULT: "default",
    LARGE: "large",
} as const;

export const ButtonRound = {
    SMALL: "small",
    DEFAULT: "default",
    FULL: "full",
} as const;

export type ButtonVariant = typeof ButtonVariant[keyof typeof ButtonVariant];
export type ButtonSize = typeof ButtonSize[keyof typeof ButtonSize];
export type ButtonRound = typeof ButtonRound[keyof typeof ButtonRound];
