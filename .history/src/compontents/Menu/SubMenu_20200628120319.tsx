import React, { useContext, useState, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { MenuContext } from './Menu'
import { MenuItemProps } from './MenuItem'

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string
}


const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props
  const [menuOpen, setMenuOpen] = useState<Boolean>(false)
  const context = useContext(MenuContext)
  const classes = classNames('menu-item', className, {
    'is-active': context.index === index
  })

  // 纵向点击
  const handleChick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }

  // 横向悬浮
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: Boolean) => {
    clearTimeout(timer)
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpen(toggle)
    }, 100)
  }

  // 根据不同mode采用不同的触发模式
  const clickEvents = context.mode === 'vertical' ? { onClick: handleChick } : {}
  const hoverEvents = context.mode === 'horizontal' ? {
    onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
    onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false)
  } : {}

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
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        {title}
        {renderChildren()}
      </div>
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu