import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'
const testProps: ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'klass'
}
describe('test Button', () => {
  it('加载Button', () => {
    const wrapper = render(<Button>Nice</Button>)
    const ele = wrapper.getByText('Nice')
    expect(ele).toBeInTheDocument()
    expect(ele.tagName).toEqual('BUTTON')
    expect(ele).toHaveClass('btn btn-default')
  })
  it('拥有不同属性的Button'), () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-lg klass')
  }
  it('link类型的Button'), () => {

  }
  it('disabled为true的button'), () => {

  }
})
