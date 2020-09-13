import React, { FC, ReactNode, useContext, useState } from 'react'
import classNames from 'classnames'
import { StepProps } from './Step'
import Icon from '../Icon/icon'


export interface StepsProps {
  /**步骤条类名 */
  className?: string
  /**指定当前步骤，从 0 开始记数。在子 Step 元素中，可以通过 status 属性覆盖状态 */
  current: number
  /**指定步骤条方向。目前支持水平（horizontal）和竖直（vertical）两种方向 */
  direction?: 'horizontal' | 'vertical'
  /**指定标签放置位置，默认水平放图标右侧，可选 vertical 放图标下方 */
  labelPlacement?: 'horizontal' | 'vertical'
  /**指定大小，目前支持普通（default）和迷你（small） */
  size?: 'small' | 'default'
  /**指定当前步骤的状态，可选 wait process finish error */
  status?: 'wait' | 'process' | 'finish' | 'error'
  /**起始序号，从 0 开始记数 */
  initial?: number
  /**点击切换步骤时触发 */
  onChange?: (current: number) => void
  children: React.ReactNode
}


type selectHandler = (selectedIndex: number) => void
interface IStepsContext {
  index: number;
  status?: 'wait' | 'process' | 'finish' | 'error';
  size?: 'default' | 'small';
  onSelect?: selectHandler
}


export const StepsContext = React.createContext<IStepsContext>({ index: 0 })

export const Steps: FC<StepsProps> = props => {
  const { className, current, direction, labelPlacement, size, status, initial, onChange, children } = props
  const [currentActive, setCurrentActive] = useState(current)
  const classes = classNames('tr-steps', className, {
    [`tr-steps-${size}`]: size,
    [`tr-steps-${direction}`]: direction
  })
  // 点击事件的回调处理函数
  const handleClick = (index: number) => {
    setCurrentActive(index)
    if (onChange) {
      onChange(index)
    }
    console.log('you clicked:', index)
  }
  // 设置context传值
  const passedContext: IStepsContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
    status,
    size
  }
  // 校验Steps子组件类型,必须是Step
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      // 为了拿到child的属性,将child断言为FunctionComponent实例,FunctionComponent 是函数
      const childElement = child as React.FunctionComponentElement<StepProps>
      const { displayName } = childElement.type
      if (displayName === 'Step') {
        return React.cloneElement(childElement, { index: initial ? initial + index : index })
      } else {
        console.error('Warning:Steps的子元素必须是Step')
      }
    })
  }
  return (
    <div className={classes}>
      <StepsContext.Provider value={passedContext} >
        {renderChildren()}
      </StepsContext.Provider>
    </div>
  )
}


Steps.defaultProps = {
  direction: 'horizontal',
  labelPlacement: 'horizontal',
  size: 'default',
  status: 'process',
  initial: 0
}

export default Steps
