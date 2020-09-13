import React, { FC, ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { StepsContext } from './Steps'
import Icon from '../Icon/icon'

export interface StepProps {
  index?: number
  /**步骤的详情描述，可选 */
  description?: string
  /**步骤图标的类型，可选 */
  icon?: ReactNode
  /**指定状态。当不配置该属性时，会使用 Steps 的 current 来自动指定状态。可选：wait process finish error */
  status?: 'wait' | 'process' | 'finish' | 'error'
  /**标题 */
  title?: string | ReactNode
  /**子标题 */
  subTitle?: string | ReactNode
  /**禁用点击 */
  disabled?: boolean
}

export const Step: FC<StepProps> = props => {
  const { index, description, icon, status, title, subTitle, disabled } = props
  const context = useContext(StepsContext)
  console.log(context)
  let itemClasses
  // 如果设置了status,则由status决定状态,如果没有设置,会使用 Steps 的 current 来自动指定状态
  if (status) {
    itemClasses = classNames('tr-steps-item', {
      disabled: disabled,
      'is-active': context.index === (index as number), // 设置当前step
      [`is-${status}`]: status
    })

  } else {
    itemClasses = classNames('tr-steps-item', {
      disabled: disabled,
      'is-active': context.index === (index as number), // 设置当前step
      'is-finish': context.index > (index as number),
      'is-wait': context.index < (index as number),
      'is-process': context.index === (index as number) && !context.status,
      /**指定当前步骤的状态，可选 wait process finish error */
      [`is-${context.status}`]: context.status && context.index === (index as number)
    })
  }
  const iconClasses = classNames('tr-steps-item-icon', {
    // [`is-${status}`]: status
  })
  const onSelectHandler = () => {
    if (context.onSelect && !disabled && (typeof index === "number")) {
      context.onSelect(index)
    }
  }
  return (
    <div className={itemClasses} data-index={index}>
      <div className='tr-steps-item-container'>
        <div className={iconClasses} onClick={onSelectHandler}>
          {icon ? icon : <>
            {
              status ? <>
                {status === 'error' && <Icon icon={['fal', "times-circle"]} size='2x' style={{ color: 'red' }} />}
                {status === 'finish' && <Icon icon={['fal', 'check-circle']} size="2x" style={{ color: '#1890ff' }} />}
                {(status === 'wait' || status === 'process') && <div className="tr-steps-item-index">{index as number + 1}</div>}
              </> : <>
                  {(context.index > (index as number)) && <Icon icon={['fal', 'check-circle']} size="2x" />}
                  {(context.index < (index as number)) && <div className="tr-steps-item-index">{index as number + 1}</div>}
                  {
                    context.index === (index as number) && <>
                      {context.status === 'error' && <Icon icon={['fal', "times-circle"]} size="2x" style={{ color: 'red' }} />}
                      {context.status === 'finish' && <Icon icon={['fal', 'check-circle']} size="2x" style={{ color: '#1890ff' }} />}
                      {(context.status === 'wait' || context.status === 'process') && <div className="tr-steps-item-index">{index as number + 1}</div>}
                    </>
                  }
                </>
            }
          </>
          }
        </div>
        {
          title && <div className='tr-steps-item-content'>
            <div className="tr-steps-item-title">
              {title}
              {
                subTitle &&
                <div className="tr-steps-item-subTitle">{subTitle}</div>
              }
            </div>
            {
              description &&
              <div className="tr-steps-item-description">{description}</div>
            }
          </div>
        }
      </div>
    </div>
  )
}

Step.defaultProps = {
  disabled: false
}

Step.displayName = 'Step'

export default Step
