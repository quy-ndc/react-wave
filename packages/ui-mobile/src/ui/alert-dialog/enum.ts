export const MainTextSize = {
    SMALL: 'small',
    DEFAULT: 'default',
    LARGE: 'large',
} as const

export const SubTextSize = {
    SMALL: 'small',
    DEFAULT: 'default',
    LARGE: 'large',
} as const

export const ButtonAlignment = {
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
} as const

export type MainTextSize = typeof MainTextSize[keyof typeof MainTextSize]
export type SubTextSize = typeof SubTextSize[keyof typeof SubTextSize]
export type ButtonAlignment = typeof ButtonAlignment[keyof typeof ButtonAlignment]