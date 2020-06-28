import React from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode
}