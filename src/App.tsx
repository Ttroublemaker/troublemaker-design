import React from 'react';
import Button, { ButtonSize, ButtonType } from './compontents/Button/button'
import Icon from './compontents/Icon/icon'
import Menu from './compontents/Menu/Menu'
import MenuItem from './compontents/Menu/MenuItem'
import SubMenu from './compontents/Menu/SubMenu'
// fas 指所有图标
import { library } from '@fortawesome/fontawesome-svg-core'
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
      <Icon icon='arrow-down' theme='danger' size='10x' />
      <Menu onSelect={index => console.log(index)} mode='horizontal' defaultOpenSubMenus={['1']}>
        <MenuItem disabled>
          'MenuItem one'
        </MenuItem>
        <SubMenu title='sub-menu'>
          <MenuItem disabled>
            'MenuItem two'
          </MenuItem>
          <MenuItem>
            'MenuItem three'
          </MenuItem>
          <MenuItem>
            'MenuItem three'
          </MenuItem>
          <MenuItem>
            'MenuItem three'
          </MenuItem>
        </SubMenu>
        <MenuItem>
          'MenuItem four'
        </MenuItem>
        <MenuItem>
          'MenuItem five'
        </MenuItem>
      </Menu>
    </div>
  )
}

export default App
