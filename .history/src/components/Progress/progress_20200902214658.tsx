import React, { FC } from 'react'
import 
export interface ProgressProps {
  percent: number;
  height?: number;
  showText?: boolean;
  styles?: React.CSSProperties;
  theme?:
}

const Progress: FC<ProgressProps> = (props) => {
  return (
    <div className="progress-bar"></div>
  )
}