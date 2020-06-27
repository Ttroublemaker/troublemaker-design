import React from 'react';
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
  children: React.ReactNode
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const { btnType, disabled, size, children } = props

}