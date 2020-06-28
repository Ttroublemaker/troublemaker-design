import React from 'react'
import { render, RenderResult, fireEvent, cleanup, wait } from "@testing-library/react"

import Menu, { MenuProps } from './Menu'
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'

const MenuTestProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'menu-test'
}

const MenuVerTestProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
}

const Menus = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem >
        active
      </MenuItem>
      <MenuItem disabled >
        disabled
      </MenuItem>
      <MenuItem>
        test
      </MenuItem>
      <SubMenu title='sub-test'>
        <MenuItem>
          subMenu
        </MenuItem>
        <MenuItem>
          subMenu
        </MenuItem>
      </SubMenu>
    </Menu>
  )
}
const createStyle = () => {
  const cssStyle: string = `
    .submenu {
      display: none;
    }
    .submenu.menu-opened {
      display: block;
    }
  `
  const style = document.createElement('style')
  style.type = 'text/css'
  style.innerHTML = cssStyle
  return style
}
let wrapper: RenderResult, menuEle: HTMLElement, activeEle: HTMLElement, disabledEle: HTMLElement
describe('Menu tests', () => {
  beforeEach(() => {
    wrapper = render(Menus(MenuTestProps))
    wrapper.container.append(createStyle()) // 插入css文件
    menuEle = wrapper.getByTestId('test-menu')
    activeEle = wrapper.getByText('active')
    disabledEle = wrapper.getByText('disabled')
  })
  it('是否成功加载Menu和MenuItem', () => {
    expect(menuEle).toBeInTheDocument()
    expect(menuEle).toHaveClass('menu menu-test')
    // expect(menuEle.getElementsByTagName('li').length).toEqual(3) // 获取所有层级的li
    expect(menuEle.querySelectorAll(':scope>li').length).toEqual(4) // 获取当前层级的li
    expect(activeEle).toHaveClass('menu-item is-active')
    expect(disabledEle).toHaveClass('menu-item is-disabled')
  })
  it('点击选项并执行相应回调', () => {
    const thirdItem = wrapper.getByText('test')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeEle).not.toHaveClass('is-active')
    expect(MenuTestProps.onSelect).toHaveBeenCalledWith('2')
    fireEvent.click(disabledEle)
    expect(disabledEle).not.toHaveClass('is-active')
    expect(MenuTestProps.onSelect).not.toHaveBeenCalledWith('1')
  })

  it('纵向模式', () => {
    // 清除beforeEach里已经渲染的节点,不然会出现多个节点导致报错
    cleanup()
    const wrapper = render(Menus(MenuVerTestProps))
    const menuEle = wrapper.getByTestId('test-menu')
    expect(menuEle).toHaveClass('menu menu-vertical')
  })
  it('subMenu悬浮展开', async () => {
    expect(wrapper.queryByText('subMenu')).not.toBeVisible() // 不出现在视图上
    const dropdownEle = wrapper.getByText('subMenu')
    fireEvent.mouseEnter(dropdownEle)
    // 由于使用了延时器,测试则是马上执行,所以需要使用wait 方法
    await wait(() => {
      expect(wrapper.queryByText('subMenu')).toBeVisible()
    })
    fireEvent.click(wrapper.getByText('subMenu'))
    expect(MenuVerTestProps.onSelect).toHaveBeenCalledWith('3-0')
    fireEvent.mouseLeave(dropdownEle)
    await wait(() => {
      expect(wrapper.queryByText('subMenu')).not.toBeVisible()
    })
  })
})