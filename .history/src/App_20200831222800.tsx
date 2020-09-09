import React, { FC, useEffect, useState } from 'react';
import axios from 'axios'

const App: FC = () => {
  const [title, setTitle] = useState('')
  const postData = { title: 'test' }
  useEffect(() => {

  })
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const uploadedFile = files[0]
      const formData = new FormData()
      formData.append(uploadedFile.name, uploadedFile)
      axios.post('https://jsonplaceholder.typicode.com/posts', formData, {
        headers: {
          'Content'
        }
      })
        .then(res => {
          console.log(res)
        })
    }
  }
  return (
    <div className="App">
      <input type="file" name='myFile' onChange={handleFileChange} />
    </div>

  )
}

export default App
