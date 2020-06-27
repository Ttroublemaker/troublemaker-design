import React from 'react';
import classNames from 'classNames'
import { log } from 'util';
import { tuple } from '../../utils/index'
const ButtonTypes = tuple('default', 'primary', 'danger', 'link');
export type ButtonType = typeof ButtonTypes[number];
const ButtonSizes = tuple('lg', 'sm');
export type ButtonSize = typeof ButtonSizes[number];

// 枚举的弊端是使用组件时无法获取直接使用值的提示,不友好,如 btnType?: ButtonType;
// export enum ButtonSize {
//   Large = 'lg',
//   Small = 'sm',
// }
// export enum ButtonType {
//   Primary = 'primary',
//   Default = 'default',
//   Danger = 'danger',
//   Link = 'link'
// }
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
  // btn,btn-lg btn-primary
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