import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { CSSTransitionProps } from 'react-transition-group/CSSTransition'

type AnimationName = 'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'

type TransitionExtendProps = {
  animation?: AnimationName,
  wrapper?: boolean,
}
type TransitionProps = TransitionExtendProps & CSSTransitionProps
// An interface can only extend an object type or intersection of object types
// A class can implement an interface or type alias, both in the same exact way.Note however that a class and interface are considered static blueprints.Therefore, they can not implement / extend a type alias that names a union type.
// interface TransitionProps extends CSSTransitionProps {
//   animation?: AnimationName,
//   wrapper?: boolean,
// }

const Transition: React.FC<TransitionProps> = (props) => {
  const { children, classNames, animation, wrapper, ...restProps } = props
  return (
    <CSSTransition classNames={classNames ? classNames : animation} {...restProps}>
      {/* wrapper为了避免与内层元素的过渡属性冲突，避免过渡效果覆盖 */}
      {wrapper ? <div>{children}</div> : children}
    </CSSTransition>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition