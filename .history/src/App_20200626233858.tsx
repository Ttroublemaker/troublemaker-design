import React from 'react';
import Button, { ButtonSize, ButtonType } from './compontents/Button/button'

function App() {
  return (
    <div className="App">
      <p>size</p>
      <Button size={ButtonSize.Large}>large</Button>
      <Button size={ButtonSize.Small}>small</Button>
      <Button >hello</Button>
      <p>type</p>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button btnType={ButtonType.Default}>Default</Button>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Link} href="baidu.com">Link</Button>
      <p>disabled</p>
      <Button disabled={true}>hello</Button>
      <Button disabled>hello</Button>
    </div>
  );
}

export default App;
