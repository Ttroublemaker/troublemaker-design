import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

describe('test Button', () => {
  it('加载Button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const ele = wrapper.getByText('Nice')
    expect(ele).toBeInTheDocument()
    expect(ele.tagName).toEqual('BUTTON')
    expect(ele).toHaveClass()
  })
  it('拥有不同属性的Button'), () => {

  }
  it('link类型的Button'), () => {

  }
  it('disabled为true的button'), () => {

  }
})
