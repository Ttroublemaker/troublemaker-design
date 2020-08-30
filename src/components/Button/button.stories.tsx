import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
// import { withInfo } from '@storybook/addon-info'
import Button from './button'

const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
)

const buttonWithSize = () => (
  <>
    <Button size="lg"> large button </Button>
    <Button> default button </Button>
    <Button size="sm"> small button </Button>
  </>
)
// const styles: React.CSSProperties = {
//   textAlign: 'center'
// }

// const CenterDecorator = (storyFn: any) => <div style={styles}>{storyFn()}</div>

const buttonWithType = () => (
  <>
    <Button btnType="default"> default button </Button>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://baidu.com"> link button </Button>
    <Button btnType="text"> text button </Button>
  </>
)
storiesOf('Button Component', module)
  // .addDecorator(CenterDecorator)
  // .addDecorator(withInfo)
  // .addParameters({
  //   info: {
  //     text: 'this is a very nice component', // 还支持markdown格式 
  //     inline: true
  //   }
  // })
  .add('Button', defaultButton) // 需要与组件名一样,不然无法显示注释
  // .add('不同尺寸的 Button', buttonWithSize, { info: { inline: false } })
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)