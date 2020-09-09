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
  const 
  return (
    <div className="progress-bar"></div>
  )
}