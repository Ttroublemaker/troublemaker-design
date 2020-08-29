import React from 'react';
import classNames from 'classNames'

export type ButtonType = 'default' | 'primary' | 'danger' | 'link' | 'text'

export type ButtonSize = 'lg' | 'sm'

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize,
  btnType?: ButtonType;
  children: React.ReactNode,
  href?: string,
}

// type:类型别名,&:交叉类型，将多个类型合并为一个类型
// React.ButtonHTMLAttributes<HTMLElement> 是为了在组件上绑定原生标签的属性、事件等
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>
// Partial<>将所有属性变成可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

const Button: React.FC<ButtonProps> = (props) => {
  const { btnType, className, disabled, size, children, href, ...restProps } = props
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })
  if (btnType === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >{children}</a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}
Button.defaultProps = {
  disabled: false,
  btnType: 'default'
}

export default Button