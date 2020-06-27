import React from 'react';
import Button, { ButtonSize, ButtonType } from './compontents/Button/button'

function App() {
  return (
    <div className="App">
      <Button>hello</Button>
      <Button btnType={ButtonType.Danger}>hello</Button>
      <Button size={ButtonSize.Large}>hello</Button>
      <Button btnType={ButtonType.Link} href="baidu.co">hello</Button>
    </div>
  );
}

export default App;
