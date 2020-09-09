import React, { FC, useEffect, useState } from 'react';
import axios from 'axios'
import Upload from './components/Upload/upload'

const App: FC = () => {

  return (
    <div className="App">
      <input type="file" name='myFile' onChange={handleFileChange} />
      <Upload action='https://jsonplaceholder.typicode.com/posts' drag={true} />
    </div>

  )
}

export default App
