import React from 'react'
import { render, RenderResult } from "@testing-library/react"

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
  it('是否成功加载Menu和MenuItem'), () => {
    expect(menuEle).toBeInTheDocument()
    expect(menuEle).toHaveClass('menu menu-test')
  }
  it('点击选项并执行相应回调'), () => {

  }

  it('纵向模式')
})