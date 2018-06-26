import React from 'react'
import cx from 'classnames'
import s from './styles.css'
import { DIR_RTL, toEastArabicNum } from 'helpers'

function Item({ label }) {
  return <div className={s.item}>{toEastArabicNum(label)}</div>
}

export default class TitleRow extends React.Component {
  render() {
    const {
      dir,
      titles,
      left
    } = this.props
    const style = { left }

    return (
      <div
        style={style}
        className={cx(s.container, {
          [s.rtl]: dir === DIR_RTL
        })}
      >
        {titles.map(label => <Item key={`row-${label}`} label={label} />)}
      </div>
    )
  }
}
