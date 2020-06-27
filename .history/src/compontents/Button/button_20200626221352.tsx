import React from 'react';
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

const Button: React.FC<BaseButtonProps> = (props) => {
  const { btnType, disabled, size, children } = props
  // btn,btn-lg btn-primary
  const classes = classNames('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    `disabled`: (btnType === ButtonType.link) && disabled
  })
if (btnType === ButtonType.Link && href) {
  return (
    <a className={classes}></a>
  )
}

}