import React, { FC } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { library, IconProp } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fal } from '@fortawesome/pro-light-svg-icons'
library.add(fas)
library.add(far)
library.add(fal)
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'dark'

export interface BaseIconProps extends Omit<FontAwesomeIconProps, 'icon'> {
  /** 设置icon的主题 */
  theme?: ThemeProps,
  icon: IconProp
}


/**
 * Icon 基于FontAwesomeIcon进行二次开发，提供近900个svg图标。详见https://github.com/FortAwesome/react-fontawesome
 * ### 组件引入
 * ~~~js
 * import {Icon} from 'troublemaker-design'
 * ~~~
 */

export const Icon: FC<BaseIconProps> = props => {
  const { className, theme, ...restProps } = props
  const classes = classNames('icon', className, {
    [`icon-${theme}`]: theme
  })
  return (
    <FontAwesomeIcon className={classes} {...restProps} />
  )
}

Icon.defaultProps = {
  theme: 'primary'
}
export default Icon


