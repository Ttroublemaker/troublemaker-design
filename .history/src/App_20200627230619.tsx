import React from 'react';
import Button, { ButtonSize, ButtonType } from './compontents/Button/button'
import Menu from './compontents/Menu/Menu'
import MenuItem from './compontents/Menu/MenuItem'

function App() {
  return (
    // <div className="App">
    //   <p>size</p>
    //   <Button size='lg'>large</Button>
    //   <Button size='sm'>small</Button>
    //   <Button >hello</Button>
    //   <p>type</p>
    //   <Button btnType='danger'>Danger</Button>
    //   <Button btnType='default'>Default</Button>
    //   <Button btnType='primary'>Primary</Button>
    //   <Button btnType='text'>Primary</Button>
    //   <Button btnType='link' href="http://baidu.com">Link</Button>
    //   <p>disabled</p>
    //   <Button disabled={true}>disabled</Button>
    //   <Button disabled>disabled</Button>
    // </div>
    <div className='App'>
      <Menu>
        <MenuItem>
          MenuItem
        </MenuItem>
        <MenuItem>
          MenuItem
        </MenuItem>
        <MenuItem>
          MenuItem
        </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
