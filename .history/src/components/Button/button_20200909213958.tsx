import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
// import classNames from 'classnames'

export type ButtonType = 'default' | 'primary' | 'danger' | 'link' | 'text'

export type ButtonSize = 'lg' | 'sm'

interface BaseButtonProps {
  className?: string;
  /**设置Button是否禁用 */
  disabled?: boolean;
  /**设置Button尺寸大小 */
  size?: ButtonSize,
  /**设置Button类型 */
  btnType?: ButtonType;
  children: React.ReactNode,
  /**设置link Button的链接 */
  href?: string,
}

// type:类型别名,&:交叉类型，将多个类型合并为一个类型
// React.ButtonHTMLAttributes<HTMLElement> 是为了在组件上绑定原生标签的属性、事件等
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
// Partial<>将所有属性变成可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

/**
 * buttom 按钮用于开始一个即时操作。
 * ### 组件引入
 * ~~~js
 * import {Button} from 'troublemaker-design'
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
  const { btnType, className, disabled, size, children, href, ...restProps } = props
  // const classes = classNames('btn', className, {
  //   [`btn-${btnType}`]: btnType,
  //   [`btn-${size}`]: size,
  //   'disabled': disabled
  // })
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