import React, { FC } from 'react'
import { ThemeProps } from "../Icon/icon"
import classNames from 'classnames'
export interface ProgressProps {
  percent: number;
  height?: number;
  showText?: boolean;
  style?: React.CSSProperties;
  theme?: ThemeProps
}

const Progress: FC<ProgressProps> = (props) => {
  const { percent, height, showText, style, theme } = props
  const classes = classNames('progress-bar-inner', {
    [`color-${theme}`]: theme
  })
  return (
    <div className="progress-bar" style={style}>
      <div className="progress-bar-outer" style={{ height: `${height}px` }}>
        <div className={classes} style={{width:''}}></div>
      </div>
    </div >
  )
}

Progress.defaultProps = {
  height: 15,
  showText: true,
  theme: 'primary'
}

