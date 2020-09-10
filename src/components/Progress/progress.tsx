import React, { FC } from 'react'
import { ThemeProps } from "../Icon/icon"
import classNames from 'classnames'
export interface ProgressProps {
  percent: number;
  height?: number;
  showText?: boolean;
  theme?: ThemeProps,
  type?: 'circle' | 'line',
  width?: String
}

const Progress: FC<ProgressProps> = (props) => {
  const { percent, height, showText, theme, type, width } = props
  const classes = classNames('progress', {
    [`color-${theme}`]: theme,
    'progress-bar-inner': type === 'line',
    'progress-circle-outer': type === 'circle'
  })
  return (
    type !== 'circle' ?
      <div className="progress-bar" style={{ width: `${width}` }}>
        <div className="progress-bar-outer" style={{ height: `${height}px` }}>
          <div className={classes} style={{ width: `${percent}%` }}>
            {showText && <span className="inner-text">{`${percent}%`}</span>}
          </div>
        </div>
      </div >
      :
      <div className={classes}>
        <div className="wrap">
          {/* <!--大于180，则class=clip-auto circle，否则：circle--> */}
          <div className={classNames('circle', { 'clip-auto': percent * 3.6 > 180 })}>
            {/* <!--度数为：当前进度*3.6--> */}
            <div className="percent left" style={{ transform: `rotate(${3.6 * percent}deg)` }} ></div>
            {/* <!--大于180，则class=percent right，否则为percent right wth0--> */}
            <div className={classNames('percent right', { 'wth0': percent * 3.6 <= 180 })}></div>
          </div>
          <div className="progress-circle-inner">
            {showText && <span className="inner-text">{`${percent}%`}</span>}
          </div>
        </div>
      </div>
  )
}

Progress.defaultProps = {
  height: 12,
  showText: true,
  theme: 'primary',
  type: 'line',
  width: '100%'
}


export default Progress
