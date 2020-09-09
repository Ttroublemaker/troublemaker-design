import React, { FC } from 'react'
import { ThemeProps } from "../Icon/icon"
export interface ProgressProps {
  percent: number;
  height?: number;
  showText?: boolean;
  style?: React.CSSProperties;
  theme?: ThemeProps
}

const Progress: FC<ProgressProps> = (props) => {
  const { percent, height, showText, style, theme } = props
  return (
    <div className="progress-bar" style={style}>
      <div className="progress-bar-outer" style={{ height: `${height}px` }}>
div.progress
      </div>
    </div >
  )
}

Progress.defaultProps = {
  height: 15,
  showText: true,
  theme: 'primary'
}

