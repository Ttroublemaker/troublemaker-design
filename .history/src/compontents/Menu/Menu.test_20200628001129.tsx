import React from 'react'
import { render, RenderResult, fireEvent, cleanup } from "@testing-library/react"

import Menu, { MenuProps } from './Menu'
import MenuItem from './MenuItem'

const MenuTestProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'menu-test'
}

const MenuVerTestProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical',
}

const Menus = (props) => {
  return (
    <Menu {...props}>
      <MenuItem index={0}>
        active
      </MenuItem>
      <MenuItem disabled index={1}>
        disabled
      </MenuItem>
      <MenuItem index={2}>
        test
      </MenuItem>
    </Menu>
  )
}
let wrapper: RenderResult, menuEle: HTMLElement, activeEle: HTMLElement, disabledEle: HTMLElement
describe('Menu tests', () => {
  beforeEach(() => {
    wrapper = render(Menus(MenuTestProps))
    menuEle = wrapper.getByTestId('test-menu')
    activeEle = wrapper.getByText('active')
    disabledEle = wrapper.getByText('disabled')
  })
  it('是否成功加载Menu和MenuItem', () => {
    expect(menuEle).toBeInTheDocument()
    expect(menuEle).toHaveClass('menu menu-test')
    expect(menuEle.getElementsByTagName('li').length).toEqual(3)
    expect(activeEle).toHaveClass('menu-item is-active')
    expect(disabledEle).toHaveClass('menu-item is-disabled')
  })
  it('点击选项并执行相应回调', () => {
    const thirdItem = wrapper.getByText('test')
    fireEvent.click(thirdItem)
    expect(thirdItem).toHaveClass('is-active')
    expect(activeEle).not.toHaveClass('is-active')
    expect(MenuTestProps.onSelect).toHaveBeenCalledWith(2)
    fireEvent.click(disabledEle)
    expect(disabledEle).not.toHaveClass('is-active')
    expect(MenuTestProps.onSelect).not.toHaveBeenCalledWith(1)
  })

  it('纵向模式', () => {
    // 清除beforeEach里已经渲染的节点,不然会出现多个节点导致报错
    cleanup()
    const wrapper = render(Menus(MenuTestProps))
    const menuEle = wrapper.getByTestId('test-menu')
    expect(menuEle).toHaveClass('menu-vertical')
  })
})