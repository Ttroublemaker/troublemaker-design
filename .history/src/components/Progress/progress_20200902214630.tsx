import React, { FC } from 'react'
export interface ProgressProps {
  percent: number;
  height?: number;
  showText?: boolean;
  styles?:
}

const Progress: FC<ProgressProps> = (props) => {
  return (
    <div className="progress-bar"></div>
  )
}