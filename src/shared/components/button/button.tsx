import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import s from './button.module.scss'

interface ButtonProps extends  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode,
    variant: 'primary',
}

export const Button = (props: ButtonProps) => {
    const { children, disabled, variant, ...restProps} = props;

    const styles = clsx(s.base, {
        [s.primary]: variant === 'primary',
    });
    
    return (
        <button
            className={styles}
            disabled={disabled}
            {...restProps}>
            {children}
        </button>
    )
}