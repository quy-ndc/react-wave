import { StyleSheet } from "react-native"
import layout from "../../../../configs/jsons/layout.json"
import colors from "../../../../configs/jsons/colors.json"
import { ButtonRound, ButtonSize, ButtonVariant } from "./enum"

export const button_variant = StyleSheet.create({
    [ButtonVariant.PRIMARY]: {
        backgroundColor: colors.colors.primary,
        borderColor: colors.colors.primary,
        borderWidth: layout.layouts.width.sm
    },
    [ButtonVariant.DANGER]: {
        backgroundColor: colors.colors.danger,
        borderColor: colors.colors.danger,
        borderWidth: layout.layouts.width.sm
    },
    [ButtonVariant.OUTLINE]: {
        backgroundColor: colors.colors.ghost,
        borderColor: colors.colors.secondary,
        borderWidth: layout.layouts.width.sm
    },
    [ButtonVariant.GHOST]: {
        backgroundColor: colors.colors.ghost,
        borderColor: colors.colors.ghost,
        borderWidth: layout.layouts.width.sm
    },
    [ButtonVariant.LINK]: {
        backgroundColor: colors.colors.ghost,
        borderColor: colors.colors.ghost,
        borderWidth: layout.layouts.width.sm
    }
})

export const button_size = StyleSheet.create({
    [ButtonSize.SMALL]: {
        paddingVertical: layout.layouts.padding.md,
        paddingHorizontal: layout.layouts.padding.lg,
        borderRadius: layout.layouts.radius.sm,
    },
    [ButtonSize.DEFAULT]: {
        paddingVertical: layout.layouts.padding.lg,
        paddingHorizontal: layout.layouts.padding.xl,
        borderRadius: layout.layouts.radius.md,
    },
    [ButtonSize.LARGE]: {
        paddingVertical: layout.layouts.padding.xl,
        paddingHorizontal: layout.layouts.padding["2xl"],
        borderRadius: layout.layouts.radius.lg,
    },
})

export const button_round = StyleSheet.create({
    [ButtonRound.SMALL]: {
        borderRadius: layout.layouts.radius.sm,
    },
    [ButtonRound.DEFAULT]: {
        borderRadius: layout.layouts.radius.md,
    },
    [ButtonRound.FULL]: {
        borderRadius: layout.layouts.radius.full,
    },
})

export const button_pressed = StyleSheet.create({
    [ButtonVariant.PRIMARY]: {
        opacity: layout.layouts.opacity.xs
    },
    [ButtonVariant.DANGER]: {
        opacity: layout.layouts.opacity.xs
    },
    [ButtonVariant.OUTLINE]: {
        backgroundColor: colors.colors.fade,
    },
    [ButtonVariant.GHOST]: {
        backgroundColor: colors.colors.fade
    },
    [ButtonVariant.LINK]: {
        opacity: layout.layouts.opacity.xl
    },
})