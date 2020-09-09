import React, { FC } from 'react'
export interface ProgressProps {
percent:number
}

const Progress: FC<ProgressProps> = (props) => {
  return (
    <div className="progress-bar"></div>
  )
}