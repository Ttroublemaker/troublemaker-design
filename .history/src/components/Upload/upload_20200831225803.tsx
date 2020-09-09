import React, { FC, useRef, ChangeEvent } from 'react'
import axios from 'axios'
import Button from '../Button/button'

export interface UploadProps {
  action: string,
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (error: any, file: File) => void
}
export const Upload: FC<UploadProps> = (props) => {
  const { action, onProgress, onSuccess, onError } = props
  const fileInput = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) {
      return
    }
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }

  }
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files)
    postFiles.forEach(val => {
      const 
    })
  }
  return (
    <div
      className="upload-component"
    >
      <Button btnType="primary" onClick={handleClick}>Upload File</Button>
      <input
        type="file"
        ref={fileInput}
        onChange={handleFileChange}
        className="file-input"
        style={{ display: 'none' }}
      />
    </div>
  )
}


export default Upload