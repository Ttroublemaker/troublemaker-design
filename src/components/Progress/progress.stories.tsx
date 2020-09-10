import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Progress from './progress'

const defaultProgress = () => (
  <>
    <Progress percent={80}></Progress>
    <br />
    <Progress percent={80} showText={false}></Progress>
    <br />
    <Progress percent={30} type="circle"></Progress>
    <br />
    <Progress percent={80} type="circle"></Progress>
    <br />
    <Progress percent={100} type="circle" ></Progress>
  </>
)
const ProgressWithTheme = () => (
  <>
    <Progress percent={80} theme="danger"></Progress>
    <br />
    <Progress percent={80} theme="dark"></Progress>
    <br />
    <Progress percent={80} theme="info"></Progress>
    <br />
    <Progress percent={80} theme="primary"></Progress>
    <br />
    <Progress percent={80} theme="secondary"></Progress>
    <br />
    <Progress percent={80} theme="success"></Progress>
    <br />
    <Progress percent={80} theme="warning"></Progress>
    <br />
    <Progress percent={80} type="circle" theme="danger"></Progress>
    <Progress percent={80} type="circle" theme="dark"></Progress>
    <Progress percent={80} type="circle" theme="info"></Progress>
    <Progress percent={80} type="circle" theme="primary"></Progress>
    <Progress percent={80} type="circle" theme="secondary"></Progress>
    <Progress percent={80} type="circle" theme="success"></Progress>
    <Progress percent={80} type="circle" theme="warning"></Progress>
  </>
)

storiesOf('Progress Component', module)
  .add('Progress', defaultProgress)
  .add('不同主题的 Progress', ProgressWithTheme)