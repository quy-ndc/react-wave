import { View, Text, Modal, ModalProps, Pressable } from "react-native"
import { alert_dialog_styles, extra_button_styles, main_text_size, sub_text_size, button_text_style, button_alignment } from "./style"
import Button from "../button"
import { ButtonAlignment, MainTextSize, SubTextSize } from "./enum"
import { ButtonRound, ButtonSize, ButtonVariant } from "../button/enum"

type Prop = ModalProps & {
    onTapOutside: () => void
    mainText: string
    mainTextSize?: MainTextSize
    subText: string
    subTextSize?: SubTextSize
    buttonAlignment?: ButtonAlignment
    button1Variant?: ButtonVariant
    button1Size?: ButtonSize
    button1Round?: ButtonRound
    button1Text: string
    button2Variant?: ButtonVariant
    button2Size?: ButtonSize
    button2Round?: ButtonRound
    button2Text: string
    button1OnPress?: () => void
    button2OnPress?: () => void
}

export default function AlertDialog({
    onTapOutside,
    mainText,
    mainTextSize = MainTextSize.DEFAULT,
    subText,
    subTextSize = SubTextSize.DEFAULT,
    buttonAlignment = ButtonAlignment.HORIZONTAL,
    button1Variant = ButtonVariant.PRIMARY,
    button1Size = ButtonSize.DEFAULT,
    button1Round = ButtonRound.DEFAULT,
    button1Text,
    button2Variant = ButtonVariant.PRIMARY,
    button2Size = ButtonSize.DEFAULT,
    button2Round = ButtonRound.DEFAULT,
    button2Text,
    button1OnPress = () => { },
    button2OnPress = () => { },
    ...modalProps
}: Prop) {

    return (
        <Modal
            {...modalProps}
            animationType="fade"
        >
            <Pressable
                style={alert_dialog_styles.modal_background}
                onPress={onTapOutside}
            >
                <Pressable style={alert_dialog_styles.outer_container}>
                    <View style={alert_dialog_styles.inner_container}>
                        <View style={alert_dialog_styles.header}>
                            <Text
                                style={[
                                    alert_dialog_styles.main_text,
                                    main_text_size[mainTextSize]
                                ]}
                            >
                                {mainText}
                            </Text>
                            <Text
                                style={[
                                    alert_dialog_styles.sub_text,
                                    sub_text_size[subTextSize]
                                ]}
                            >
                                {subText}
                            </Text>
                        </View>
                        <View
                            style={[
                                alert_dialog_styles.buttons_view,
                                button_alignment[buttonAlignment]
                            ]}
                        >
                            <Button
                                style={[extra_button_styles[buttonAlignment]]}
                                variant={button1Variant}
                                size={button1Size}
                                rounded={button1Round}
                                onPress={button1OnPress}
                            >
                                <Text
                                    style={[
                                        button_text_style[button1Variant],
                                        button_text_style.base
                                    ]}
                                >
                                    {button1Text}
                                </Text>
                            </Button>
                            <Button
                                style={[extra_button_styles[buttonAlignment]]}
                                variant={button2Variant}
                                size={button2Size}
                                rounded={button2Round}
                                onPress={button2OnPress}
                            >
                                <Text
                                    style={[
                                        button_text_style[button2Variant],
                                        button_text_style.base
                                    ]}
                                >
                                    {button2Text}
                                </Text>
                            </Button>
                        </View>
                    </View>
                </Pressable>
            </Pressable>
        </Modal>
    )
}

