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
    'is-disabled': disabled === true
  })

  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu