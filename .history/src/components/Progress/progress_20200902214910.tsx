import React, { FC } from 'react'
import { ThemeProps } from "../Icon/icon"
export interface ProgressProps {
  percent: number;
  height?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?: ThemeProps
}

const Progress: FC<ProgressProps> = (props) => {
  const { percent, height, showText, styles, theme } = props
  return (
    <div className="progress-bar">
      div.
    </div>
  )
}

Progress.defaultProps = {
  height: 15,
  showText: true,
  theme: 'primary'
}

