import React, { FC } from 'react'
export interface ProgressProps {
percent:num
}

const Progress: FC<ProgressProps> = (props) => {
  return (
    <div className="progress-bar"></div>
  )
}