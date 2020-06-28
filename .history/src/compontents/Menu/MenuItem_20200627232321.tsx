import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './Menu'

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties
}


const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { className, style, children, index, disabled } = props
  const context = useContext(MenuContext)

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled
  })

  return (
    <li className={classes} style={style}>
      {children}
    </li>
  )
}

export default MenuItem