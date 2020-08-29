import React, { useContext, useState, FunctionComponentElement } from 'react'
import classNames from 'classnames'
import { MenuContext } from './Menu'
import { MenuItemProps } from './MenuItem'
import Transition from '../Transition/transition'
import { CSSTransition } from 'react-transition-group'
export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string
}


const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, title, className, children } = props
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  // 默认的展开方式，只有纵向才可以默认展开
  const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
  const [menuOpen, setMenuOpen] = useState(isOpened)
  const ind = context.index.indexOf('-')
  const classes = classNames('menu-item submenu', className, {
    'is-active': context.index.slice(0, ind) === index
  })

  // 纵向点击
  const handleChick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }

  // 横向悬浮
  let timer: any
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
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
    const subMenuClasses = classNames('submenu-items', {
      'menu-opened': menuOpen
    })

    const childrenCom = React.Children.map(children, (child, i) => {
      const childEle = child as FunctionComponentElement<MenuItemProps>
      if (childEle.type.displayName === 'MenuItem') {
        return React.cloneElement(childEle, { index: `${index}-${i}` })
      } else {
        console.error('Warning:SubMenu的子元素必须是MenuItem')
      }
    })
    return (
      <Transition
        in={menuOpen}
        timeout={300}
        animation='zoom-in-left'
      >
        <ul className={subMenuClasses}>
          {childrenCom}
        </ul>
      </Transition>
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