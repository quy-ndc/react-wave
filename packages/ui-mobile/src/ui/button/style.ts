import { StyleSheet } from "react-native"
import layout from "../../../../configs/jsons/layout.json"
import colors from "../../../../configs/jsons/colors.json"
import { ButtonRound, ButtonSize, ButtonVariant } from "./enum"

export const button_variant = StyleSheet.create({
    [ButtonVariant.PRIMARY]: {
        backgroundColor: colors.colors.primary
    },
    [ButtonVariant.DANGER]: {
        backgroundColor: colors.colors.danger
    },
    [ButtonVariant.OUTLINE]: {
        backgroundColor: colors.colors.ghost,
        borderColor: colors.colors.primary,
        borderWidth: layout.layouts.width.sm
    },
    [ButtonVariant.GHOST]: {
        backgroundColor: colors.colors.ghost
    },
    [ButtonVariant.LINK]: {
        backgroundColor: colors.colors.ghost
    }
})

export const button_size = StyleSheet.create({
    [ButtonSize.SMALL]: {
        paddingVertical: layout.layouts.spacing.sm,
        paddingHorizontal: layout.layouts.spacing.md,
        borderRadius: layout.layouts.radius.sm,
    },
    [ButtonSize.DEFAULT]: {
        paddingVertical: layout.layouts.spacing.md,
        paddingHorizontal: layout.layouts.spacing.lg,
        borderRadius: layout.layouts.radius.md,
    },
    [ButtonSize.LARGE]: {
        paddingVertical: layout.layouts.spacing.lg,
        paddingHorizontal: layout.layouts.spacing.xl,
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