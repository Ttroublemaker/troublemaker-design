import React from 'react'
import { render } from "@testing-library/react"

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

describe('Menu tests', () => {
  it('是否成功加载Menu和MenuItem'), () => {

  }
  it('点击选项并执行相应回调'), () => {

  }

  it('纵向模式')
})