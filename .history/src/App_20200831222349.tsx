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
  return (
    <div className="App">
     <input type="file" name=/>
    </div>

  )
}

export default App
