import React, { useContext, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { MenuContext } from './Menu'

export interface SubMenuProps {
  index?: number;
  title: string;
  className?: string
}


const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })

  const renderChildren = () => {
    const childrenCom = React.Children.map(children, (child, index) => {

    })
  }
  return (
    <li key={index} className={classes}>
      <div className="submenu-title"></div>
    </li>
  )
}