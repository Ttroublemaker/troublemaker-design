import React, { Children } from 'react';
import classNames from 'classNames'
import classes from '*.module.css';
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link'
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize,
  btnType?: ButtonType;
  children: React.ReactNode,
  href?: string
}

// type:类型别名,&:交叉类型，将多个类型合并为一个类型
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>

const Button: React.FC<NativeButtonProps> = (props) => {
  const { btnType, disabled, size, children, href } = props
  // btn,btn-lg btn-primary
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === ButtonType.Link) && disabled
  })
  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>{children}</a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}>
        {children}
      </button>
    )
  }
}
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default
}

export default Button