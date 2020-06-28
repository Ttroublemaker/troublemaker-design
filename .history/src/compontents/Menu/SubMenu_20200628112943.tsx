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

  const handleChick = (e) => {
    e.preventDefault()
  }

  const renderChildren = () => {
    const childrenCom = React.Children.map(children, (child, index) => {
      const childEle = child as FunctionComponentElement<MenuItemProps>
      if (childEle.type.displayName === 'MenuItem') {
        return childEle
      } else {
        console.error('Warning:SubMenu的子元素必须是MenuItem')
      }
    })
    return (
      <ul className='submenu'>
        {childrenCom}
      </ul>
    )
  }
  return (
    <li key={index} className={classes}>
      <div className="submenu-title">
        {renderChildren()}
      </div>
    </li>
  )
}

SubMenu.displayName = 'SubMenu'

export default SubMenu