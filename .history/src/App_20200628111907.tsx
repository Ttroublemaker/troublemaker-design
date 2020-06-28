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
      <Menu onSelect={index => console.log(index)} mode="vertical">
        <MenuItem>
          'MenuItem one'
        </MenuItem>
        <MenuItem disabled>
          'MenuItem two'
        </MenuItem>
        <MenuItem>
          'MenuItem three'
        </MenuItem>
        <MenuItem>
          'MenuItem four'
        </MenuItem>
        <MenuItem>
          'MenuItem five'
        </MenuItem>
      </Menu>
    </div>
  );
}

export default App;
