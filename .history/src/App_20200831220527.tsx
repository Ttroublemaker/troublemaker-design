import React, { FC, useEffect, useState } from 'react';
import axios from 'axios'

const App: FC = () => {
  const [title, setTitle] = useState('')
  useEffect
  return (
    <div className="App">
      <h1>{title}</h1>
    </div>

  )
}

export default App
