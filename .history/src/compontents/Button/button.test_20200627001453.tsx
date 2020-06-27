import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'

test('', () => {
  const wrapper = render(<Button>Nice</Button>)
  const ele = wrapper.queryByText()
})