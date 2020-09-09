import React, { FC } from 'react'
export interface ProgressProps {
percent
}

const Progress: FC<ProgressProps> = (props) => {
  return (
    <div className="progress-bar"></div>
  )
}