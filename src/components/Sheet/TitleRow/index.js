import React from 'react'
import cx from 'classnames'
import s from './styles.css'

import { DIR_RTL } from '../../../constants'

const COL_WIDTH = 100
export default class TitleRow extends React.Component {
  componentDidMount() {
    if (!this.elm) {
      return
    }

    this.positionHorz()
  }

  positionHorz() {
    if (this.props.dir === DIR_RTL) {
      const { width } = this.elm.getBoundingClientRect()
      this.props.scrollToX(width)
    } else {
      this.props.scrollToX(0)
    }
  }

  render() {
    const {
      dir,
      titles
    } = this.props
    const width = titles.length * COL_WIDTH
    const style = {
      width
    }

    return (
      <div
        ref={c => (this.elm = c)}
        className={s.container}
        style={style}
      >
        {titles.map(label => (
          <div
            key={`hr-${label}`}
            className={cx(s.item, {
              [s.rtl]: dir === DIR_RTL
            })}
            style={{
              width: COL_WIDTH
            }}
          >
            {label}
          </div>
        ))}
      </div>
    )
  }
}
