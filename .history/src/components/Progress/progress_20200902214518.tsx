import React, { FC } from 'react'
export interface ProgressProps {
per
}

const Progress: FC<ProgressProps> = (props) => {
  return (
    <div className="progress-bar"></div>
  )
}