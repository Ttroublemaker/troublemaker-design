import React, { FC } from 'react'
export interface ProgressProps {
  percent: number;
  height?:number;
  showText
}

const Progress: FC<ProgressProps> = (props) => {
  return (
    <div className="progress-bar"></div>
  )
}