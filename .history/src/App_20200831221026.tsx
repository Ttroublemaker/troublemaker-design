import React, { FC, useEffect, useState } from 'react';
import axios from 'axios'

const App: FC = () => {
  const [title, setTitle] = useState('')
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1',{
      headers:{
        'X-requested-With':'XM'
      }
    })
      .then(res => {
        setTitle(res.data.title)
        console.log(res)
      })
  })
  return (
    <div className="App">
      <h1>test</h1>
      <h1>{title}</h1>
    </div>

  )
}

export default App
