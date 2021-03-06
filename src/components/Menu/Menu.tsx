import React, { useState } from 'react'
import classNames from 'classnames'
import { MenuItemProps } from './MenuItem'

type MenuMode = 'horizontal' | 'vertical'
type selectHandler = (selectedIndex: string) => void

export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: selectHandler,
  defaultOpenSubMenus?: string[]
}

interface IMenuContext {
  index: string;
  onSelect?: selectHandler,
  mode?: MenuMode,
  defaultOpenSubMenus?: string[]
}

// 创建context对象
export const MenuContext = React.createContext<IMenuContext>({ index: '0' })

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect, defaultOpenSubMenus } = props

  const [currentActive, setCurrentActive] = useState(defaultIndex)

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })

  // 点击事件的回调处理函数
  const handleClick = (index: string) => {
    setCurrentActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  // 设置context传值
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus
  }

  // 校验Menu子组件类型,必须是MenuItem
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      // 为了拿到child的属性,将child断言为FunctionComponent实例,FunctionComponent 是函数
      const childElement = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        // 自动加上index 属性
        // return child
        // return childElement
        return React.cloneElement(childElement, { index: index.toString() })
      } else {
        console.error('Warning:Menu的子元素必须是MenuItem')
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid='test-menu'>
      <MenuContext.Provider value={passedContext} >
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: []
}

export default Menu