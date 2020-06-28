import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './Menu'

export interface MenuItemProps {
  index: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties
}


const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { className, style, children, index, disabled } = props

  const context = useContext(MenuContext)

  const classes = classNames('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index
  })

  const handleClick = () => {
    if (context.onSelect && !disabled) {
      context.onSelect(index)
    }
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {

    })
  }
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}
MenuItem.displayName = 'MenuItem'

export default MenuItem