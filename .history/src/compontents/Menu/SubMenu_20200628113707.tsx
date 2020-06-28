import React, { useContext, useState, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { MenuContext } from './Menu'
import { MenuItemProps } from './MenuItem'

export interface SubMenuProps {
  index?: number;
  title: string;
  className?: string
}


const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props
  const [menuOpen, setMenuOpen] = useState(false)
  const context = useContext(MenuContext)
  const classes = classNames('menu-item submenu-item', className, {
    'is-active': context.index === index
  })

  const handleChick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: Boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {

    })
  }

  const renderChildren = () => {
    const subMenuClasses = classNames('submenu', {
      'menu-opened': menuOpen
    })

    const childrenCom = React.Children.map(children, (child, index) => {
      const childEle = child as FunctionComponentElement<MenuItemProps>
      if (childEle.type.displayName === 'MenuItem') {
        return childEle
      } else {
        console.error('Warning:SubMenu的子元素必须是MenuItem')
      }
    })
    return (
      <ul className={subMenuClasses}>
        {childrenCom}
      </ul>
    )
  }
  return (
    <li key={index} className={classes}>
      <div className="submenu-title" onClick={handleChick}>
        {renderChildren()}
      </div>
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu