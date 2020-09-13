import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Steps from './Steps'
import Step from './Step'
import Icon from '../Icon/icon'
const defaultSteps = () => {
  return (
    <Steps current={0} >
      <Step description="this is description description description" title="step 1" subTitle="step 1 subTitle" />
      <Step description="this is description description description" title="step 2" subTitle="step 2 subTitle" />
      <Step description="this is description description description" title="step 3" subTitle="step 3 subTitle" />
      <Step description="this is description description description" title="step 4" subTitle="step 4 subTitle" />
    </Steps>
  )
}
const defaultStepsWithDirection = () => {
  return (
    <>
      <Steps current={0} direction="horizontal">
        <Step description="this is description description description" title="step 1" subTitle="step 1 subTitle" />
        <Step description="this is description description description" title="step 2" subTitle="step 2 subTitle" />
        <Step description="this is description description description" title="step 3" subTitle="step 3 subTitle" />
        <Step description="this is description description description" title="step 4" subTitle="step 4 subTitle" />
      </Steps>
      <br />
      <br />
      <Steps current={0} direction="vertical">
        <Step description="this is description description description" title="step 1" subTitle="step 1 subTitle" />
        <Step description="this is description description description" title="step 2" subTitle="step 2 subTitle" />
        <Step description="this is description description description" title="step 3" subTitle="step 3 subTitle" />
        <Step description="this is description description description" title="step 4" subTitle="step 4 subTitle" />
      </Steps>
    </>
  )
}
const StepsWithStatusInItems = () => {
  return (
    <Steps current={0} status='error' size="small" >
      <Step description="this is description description description" status="error" title="error" subTitle="error subTitle" />
      <Step description="this is description description description" status="finish" title="finish" subTitle="finish subTitle" />
      <Step description="this is description description description" status="process" title="process" subTitle="process subTitle" />
      <Step description="this is description description description" status="wait" title="wait" subTitle="wait subTitle" />
    </Steps>
  )
}

const StepsWithSizes = () => {
  return (
    <>
      <Steps current={0} status='error' >
        <Step description="this is description description description" status="error" title="error" subTitle="error subTitle" />
        <Step description="this is description description description" status="finish" title="finish" subTitle="finish subTitle" />
        <Step description="this is description description description" status="process" title="process" subTitle="process subTitle" />
        <Step description="this is description description description" status="wait" title="wait" subTitle="wait subTitle" />
      </Steps>
      <Steps current={0} status='error' size="small" >
        <Step description="this is description description description" status="error" title="error" subTitle="error subTitle" />
        <Step description="this is description description description" status="finish" title="finish" subTitle="finish subTitle" />
        <Step description="this is description description description" status="process" title="process" subTitle="process subTitle" />
        <Step description="this is description description description" status="wait" title="wait" subTitle="wait subTitle" />
      </Steps>
    </>
  )
}

const StepsWithStatus = () => {
  return (
    <>
      <Steps current={1} status='error'>
        <Step description="this is description description description" title="step 1" subTitle="step 1 subTitle" />
        <Step description="this is description description description" title="step 2" subTitle="step 2 subTitle" />
        <Step description="this is description description description" title="step 3" subTitle="step 3 subTitle" />
        <Step description="this is description description description" title="step 4" subTitle="step 4 subTitle" />
      </Steps>
      <Steps current={1} status='finish'>
        <Step description="this is description description description" title="step 1" subTitle="step 1 subTitle" />
        <Step description="this is description description description" title="step 2" subTitle="step 2 subTitle" />
        <Step description="this is description description description" title="step 3" subTitle="step 3 subTitle" />
        <Step description="this is description description description" title="step 4" subTitle="step 4 subTitle" />
      </Steps>
      <Steps current={1} status="process">
        <Step description="this is description description description" title="step 1" subTitle="step 1 subTitle" />
        <Step description="this is description description description" title="step 2" subTitle="step 2 subTitle" />
        <Step description="this is description description description" title="step 3" subTitle="step 3 subTitle" />
        <Step description="this is description description description" title="step 4" subTitle="step 4 subTitle" />
      </Steps>
      <Steps current={1} status='error'>
        <Step description="this is description description description" title="step 1" subTitle="step 1 subTitle" />
        <Step description="this is description description description" title="step 2" subTitle="step 2 subTitle" />
        <Step description="this is description description description" title="step 3" subTitle="step 3 subTitle" />
        <Step description="this is description description description" title="step 4" subTitle="step 4 subTitle" />
      </Steps>
    </>

  )
}

storiesOf('Steps Component', module)
  .add('Steps', defaultSteps)
  .add('不同方向的Steps', defaultStepsWithDirection)
  .add('不同size的Steps', StepsWithSizes)
  .add('在Steps上设置状态的Steps', StepsWithStatus)
  .add('在Step上设置状态的Steps', StepsWithStatusInItems)