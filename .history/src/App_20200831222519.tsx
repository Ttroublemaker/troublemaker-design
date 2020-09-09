import React, { FC, useEffect, useState } from 'react';
import axios from 'axios'

const App: FC = () => {
  const [title, setTitle] = useState('')
  const postData = { title: 'test' }
  useEffect(() => {
    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
      .then(res => {
        console.log(res)
      })
  })
  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    const files= e.target.fi
  }
  return (
    <div className="App">
      <input type="file" name='myFile' onChange={handleFileChange} />
    </div>

  )
}

export default App
