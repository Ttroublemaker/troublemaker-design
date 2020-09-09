import React, { FC } from 'react'
export interface ProgressProps {
perc
}

const Progress: FC<ProgressProps> = (props) => {
  return (
    <div className="progress-bar"></div>
  )
}