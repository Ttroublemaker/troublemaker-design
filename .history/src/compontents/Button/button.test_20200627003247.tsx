import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

test('button test', () => {
  const wrapper = render(<Button>Nice</Button>)
  const ele = wrapper.queryByText('Nice')
  expect(ele).toBeTruthy()
  expect(ele).toBeInTheDocument()
})

describe('test Button', () => {
  it('加载Button', () => {

  })
  it('拥有不同属性的Button'), () => {

  }
  it('link类型的Button'), () => {

  }
  it('')
})