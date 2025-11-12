import { forwardRef, ButtonHTMLAttributes } from "react"
import { ButtonRound, ButtonSize, ButtonVariant } from "./enum"
import s from './style.module.css'

export { ButtonRound, ButtonSize, ButtonVariant } from "./enum"

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    rounded?: ButtonRound;
    loading?: boolean;
    hover?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {
        children,
        className,
        variant = ButtonVariant.PRIMARY,
        size = ButtonSize.DEFAULT,
        rounded = ButtonRound.DEFAULT,
        loading = false,
        hover = false,
        disabled,
        ...rest
    },
    ref
) {
    const isDisabled = disabled || loading
    const cls = [s.btn, className].filter(Boolean).join(" ")

    return (
        <button
            ref={ref}
            className={cls}
            data-variant={variant}
            data-size={size}
            data-rounded={rounded}
            data-hover={hover}
            disabled={isDisabled}
            aria-busy={loading || undefined}
            {...rest}
        >
            {loading ? <span className={s.spinner} aria-hidden /> : null}
            {children}
        </button>
    );
});

export default Button;
