import React, { useState } from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'
type selectHandler = (selectedIndex: number) => void

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: selectHandler
}

interface IMenuContext {
  index: number;
  onSelect?: selectHandler
}

// 创建context对象
export const MenuContext = React.createContext<IMenuContext>({ index: 0 })

const Menu: React.FC<MenuProps> = (props) => {
  const { className, mode, style, children, defaultIndex, onSelect } = props

  const [currentActive, setCurrentActive] = useState(defaultIndex)

  const classes = classNames('menu', className, {
    'menu-vertical': mode === 'vertical'
  })

  // 点击事件的回调处理函数
  const handleClick = (index: number) => {
    setCurrentActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  // 设置context传值
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick
  }

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext} >
        {children}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}

export default Menu