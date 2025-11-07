import { Dimensions, StyleSheet } from "react-native"
import layouts from "@configs/jsons/layout.json"
import colors from "@configs/jsons/colors.json"
import { ButtonAlignment, MainTextSize, SubTextSize } from "./enum"
import { ButtonVariant } from "../button/enum"

const { width } = Dimensions.get('window')

export const alert_dialog_styles = StyleSheet.create({
    modal_background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    outer_container: {
        width: width * layouts.layouts.screen.width["5xl"],
        backgroundColor: colors.colors.inverse,
        borderRadius: layouts.layouts.radius.md,
    },
    inner_container: {
        paddingHorizontal: layouts.layouts.padding["4xl"],
        paddingVertical: layouts.layouts.padding["5xl"],
        flexDirection: 'column',
        gap: layouts.layouts.gap.lg,
    },
    header: {
        flexDirection: 'column',
        gap: layouts.layouts.gap.sm,
    },
    main_text: {
        fontWeight: 'bold',
        textAlign: 'left',
        letterSpacing: layouts.layouts.spacing.xs,
    },
    sub_text: {
        textAlign: 'left',
        letterSpacing: layouts.layouts.spacing.xs,
        color: colors.colors.secondary,
    },
    buttons_view: {
        alignItems: 'center',
        gap: layouts.layouts.gap.lg,
        paddingTop: layouts.layouts.padding.sm,
        width: '100%'
    }
})

export const main_text_size = StyleSheet.create({
    [MainTextSize.SMALL]: {
        fontSize: layouts.layouts.text.xl,
    },
    [MainTextSize.DEFAULT]: {
        fontSize: layouts.layouts.text["2xl"],
    },
    [MainTextSize.LARGE]: {
        fontSize: layouts.layouts.text["3xl"],
    }
})

export const sub_text_size = StyleSheet.create({
    [SubTextSize.SMALL]: {
        fontSize: layouts.layouts.text.md,
    },
    [SubTextSize.DEFAULT]: {
        fontSize: layouts.layouts.text.lg,
    },
    [SubTextSize.LARGE]: {
        fontSize: layouts.layouts.text.xl,
    }
})

export const button_alignment = StyleSheet.create({
    [ButtonAlignment.HORIZONTAL]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    [ButtonAlignment.VERTICAL]: {
        flexDirection: 'column',
    },
})

export const extra_button_styles = StyleSheet.create({
    [ButtonAlignment.HORIZONTAL]: {
        width: '100%',
        flex: 1,
    },
    [ButtonAlignment.VERTICAL]: {
        width: '100%',
    },
})

export const button_text_style = StyleSheet.create({
    base: {
        fontWeight: 'bold',
        letterSpacing: layouts.layouts.spacing.xs,
        textAlign: 'center',
    },
    [ButtonVariant.PRIMARY]: {
        color: colors.colors.inverse,
    },
    [ButtonVariant.DANGER]: {
        color: colors.colors.inverse,
    },
    [ButtonVariant.OUTLINE]: {
        color: colors.colors.primary,
    },
    [ButtonVariant.GHOST]: {
        color: colors.colors.primary,
    },
    [ButtonVariant.LINK]: {
        color: colors.colors.primary,
    },
})