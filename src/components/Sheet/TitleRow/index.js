import React from 'react'
import cx from 'classnames'
import { DIR_RTL } from 'helpers'
import s from './styles.css'

export default class TitleRow extends React.Component {
  componentDidMount() {
    if (this.elm) {
      this.sheetScrollX()
    }
  }

  sheetScrollX() {
    if (this.props.dir === DIR_RTL) {
      const { width } = this.elm.getBoundingClientRect()
      this.props.scrollToX(width)
    } else {
      this.props.scrollToX(0)
    }
  }

  render() {
    const { dir, defaultColWidth, width, titles } = this.props
    return (
      <div
        ref={c => (this.elm = c)}
        style={{ width }}
        className={cx(s.container, {
          [s.rtl]: dir === DIR_RTL
        })}
      >
        {titles.map(label => (
          <div
            key={`st-r-${label}`}
            style={{ width: defaultColWidth }}
            className={s.item}
          >
            {label}
          </div>
        ))}
      </div>
    )
  }
}
