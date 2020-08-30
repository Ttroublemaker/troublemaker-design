import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import "../src/styles/index.scss"
const wrapperStyles: React.CSSProperties = {
  padding: '20px 40px'
}
const storyWrapper = (storyFn: any) => (
  <div style={wrapperStyles}>
    <h3>组件演示</h3>
    {storyFn()}
  </div>
)

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({ info: { inline: true, header: false } })