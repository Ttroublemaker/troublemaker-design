import React, { FC, useEffect } from 'react';
import axios from 'axios'

const App: FC = () => {
  const [title, setTitle]= useState(initialState)
  return (
    <div className="App">
      <h1>{title}</h1>
    </div>

  )
}

export default App
