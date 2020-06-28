import React from 'react'
import classNames from 'classnames'

export interface MenuItemProps {
  index?: number
}

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex } = props
  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical'
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