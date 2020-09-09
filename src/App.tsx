import React, { FC } from 'react';
import Button from './components/Button/button'
import Input from './components/Input/input'
const App: FC = () => {
  return (
    <div className="App">
      <Button btnType="default"> default button </Button>
      <Button btnType="primary"> primary button </Button>
      <Button btnType="danger"> danger button </Button>
      <Button btnType="link" href="https://baidu.com"> link button </Button>
      <Button btnType="text"> text button </Button>
      <hr />
      <Button size="lg">lg button</Button>
      <Button btnType="default"> default button </Button>
      <Button size="sm">sm button</Button>
      <hr />
      <Button disabled>disabled button</Button>
    </div>
  )
}

export default App
