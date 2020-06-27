import React from 'react';
import Button, { ButtonSize, ButtonType } from './compontents/Button/button'

function App() {
  return (
    <div className="App">
      <Button>hello</Button>
      <Button btnType={ButtonType.Danger}>hello</Button>
      <Button>hello</Button>
      <Button>hello</Button>
    </div>
  );
}

export default App;
