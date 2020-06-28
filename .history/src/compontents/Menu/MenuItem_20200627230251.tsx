import React from 'react'
import classNames from 'classnames'

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { className, style, children, index, disabled } = props
  const classes = classNames('menu-item', className, {
    'is-disabled': disabled
  })

  return (
    <li className={classes} style={style}>
      children
    </li>
  )
}

MenuItem.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu