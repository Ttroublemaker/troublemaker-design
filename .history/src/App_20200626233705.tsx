import React from 'react';
import Button, { ButtonSize, ButtonType } from './compontents/Button/button'

function App() {
  return (
    <div className="App">
      <p>size</p>
      <Button size={ButtonSize.Large}>hello</Button>
      <Button size={ButtonSize.Small}>hello</Button>
      <Button >hello</Button>
      <p>type</p>
      <Button disabled={true}>hello</Button>
      <Button btnType={ButtonType.Danger}>hello</Button>
      <Button size={ButtonSize.Large}>hello</Button>
      <Button btnType={ButtonType.Link} href="baidu.com">hello</Button>
    </div>
  );
}

export default App;