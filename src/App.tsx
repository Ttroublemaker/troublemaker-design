import React from 'react';
import Button from './components/Button/button'
import Icon from './components/Icon/icon'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
import SubMenu from './components/Menu/SubMenu'

function App() {
  return (
    <div className="App">
      {/* Button测试*/}
      <p>Button测试</p>
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
      {/* Icon测试 */}
      <p>Icon测试</p>
      <Icon icon='arrow-down' theme='danger' size='2x' />
      {/* Menu测试 */}
      <p>Menu测试</p>
      <Menu onSelect={index => console.log(index)} mode='vertical' defaultOpenSubMenus={['1']}>
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
