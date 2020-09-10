import React, { FC } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'dark'

export interface IconProps extends FontAwesomeIconProps {
  /** 设置icon的主题 */
  theme?: ThemeProps
}
/**
 * Icon 基于FontAwesomeIcon进行二次开发，提供近900个svg图标。详见https://github.com/FortAwesome/react-fontawesome
 * ### 组件引入
 * ~~~js
 * import {Icon} from 'troublemaker-design'
 * ~~~
 */

export const Icon: FC<IconProps> = props => {
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


