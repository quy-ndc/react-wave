import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native"
import { button_variant, button_size, button_round, button_pressed } from "./style"
import { ButtonRound, ButtonSize, ButtonVariant } from "./enum"

type Prop = PressableProps & {
    variant?: ButtonVariant,
    size?: ButtonSize,
    rounded?: ButtonRound,
    style?: StyleProp<ViewStyle>,
}

export default function Button({
    children,
    variant = ButtonVariant.PRIMARY,
    size = ButtonSize.DEFAULT,
    rounded = ButtonRound.DEFAULT,
    style,
    ...pressableProps
}: Prop) {

    return (
        <Pressable
            {...pressableProps}
            style={({ pressed }) => [
                style,
                button_variant[variant],
                button_size[size],
                button_round[rounded],
                pressed && button_pressed[variant],
            ]}
        >
            {children}
        </Pressable>
    )
}