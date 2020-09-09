import React, { FC } from 'react';
import Button from './components/Button/button'
const App: FC = () => {
  return (
    <div className="App">
      <Button btnType="danger" />
      <Button btnType="default" />
      <Button btnType="link" />
      <Button btnType="primary" />
      <Button btnType="text" />
      <hr />
      <Button ></Button>
    </div>

  )
}

export default App
