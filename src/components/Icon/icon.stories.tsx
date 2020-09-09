import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Icon from './icon'

const BaseIcon = () => {
  return (
    <>
      <Icon icon="search" />
      <Icon icon="coffee" />
      <Icon icon="spinner" />
    </>
  )
}

const ThemeIcon = () => {
  return (
    <>
      <Icon icon="search" theme="danger" />
      <Icon icon="search" theme="dark" />
      <Icon icon="search" theme="info" />
      <Icon icon="search" theme="light" />
      <Icon icon="search" theme="primary" />
      <Icon icon="search" theme="secondary" />
      <Icon icon="search" theme="success" />
      <Icon icon="search" theme="warning" />
    </>
  )
}

const RestIcon = () => {
  return (
    <>
      <Icon icon="check-square" border />
      <Icon icon="coffee" pull="right" />
      <Icon icon='coffee' transform={{ rotate: 90 }} />
    </>
  )
}

storiesOf('Icon Component', module)
  .add('Icon', BaseIcon)
  .add('不同主题的Icon', ThemeIcon)
  .add('Icon 的其他属性', RestIcon)