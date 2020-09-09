import React, { FC, useRef } from 'react'
import axios from 'axios'
import Button from '../Button/button'

export interface UploadProps {
  actions: string,
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (error: any, file: File) => void
}
export const Upload: FC<UploadProps> = (props) => {
  const { actions, onProgress, onSuccess, onError } = props
  return (
    <div
      className="upload-component"
    >

    </div>
  )
}


export default Upload