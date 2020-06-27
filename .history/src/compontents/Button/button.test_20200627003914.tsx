import React from 'react'
import { render } from '@testing-library/react'
import Button, { ButtonProps } from './button'

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
    const wrapper = render(<Button btnType='link' href="http://dummyurl">Link</Button>)
    const element = wrapper.getByText('Link')
    expect(element).toBeInTheDocument()
    expect(element.tagName).toEqual('A')
    expect(element).toHaveClass('btn btn-link')
  }
  it('disabled为true的button'), () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>)
    const element = wrapper.getByText('Nice') as HTMLButtonElement
    expect(element).toBeInTheDocument()
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  }
})
