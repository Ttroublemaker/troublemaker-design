import React, { FC } from 'react';
import Button from './components/Button/button'
const App: FC = () => {
  return (
    <div className="App">
      <Button btnType="danger" />
      <Button btnType="pr" />
      <Button btnType="danger" />
      <Button btnType="danger" />
    </div>

  )
}

export default App
