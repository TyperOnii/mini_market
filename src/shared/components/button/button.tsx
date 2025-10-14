import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import s from './button.module.scss'

interface ButtonProps extends  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: ReactNode,
    variant: 'primary' | 'secondary',
}

export const Button = (props: ButtonProps) => {
    const { children, disabled, variant, ...restProps} = props;

    const styles = clsx(s.base, {
        [s.primary]: variant === 'primary',
        [s.secondary]: variant === 'secondary',
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