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
  const fileInput = useRef<HTMLInputElement>(null)
  const handleClick = (){
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  return (
    <div
      className="upload-component"
    >
      <Button btnType="primary" onClick={handleClick}>Upload File</Button>
      <input type="file" ref={fileInput} className="file-input" style={{ display: 'none' }} />
    </div>
  )
}


export default Upload