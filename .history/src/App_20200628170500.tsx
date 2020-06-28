import React from 'react';
import Button, { ButtonSize, ButtonType } from './compontents/Button/button'
import Icon from './compontents/Icon/icon'
import { library } from '@fortawesome/fontawesome-svg-core'
// fas 指所有图标
import { fas, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fas, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <p>size</p>
      <Button size='lg'>large</Button>
      <Button size='sm'>small</Button>
      <Button >hello</Button>
      <p>type</p>
      <Button btnType='danger'>Danger</Button>
      <Button btnType='default'>Default</Button>
      <Button btnType='primary'>Primary</Button>
      <Button btnType='text'>Primary</Button>
      <Button btnType='link' href="http://baidu.com">Link</Button>
      <p>disabled</p>
      <Button disabled={true}>disabled</Button>
      <Button disabled>disabled</Button>
      <Icon icon='arrow-down' theme="info" size='10x' />
    </div>
  );
}

export default App;
