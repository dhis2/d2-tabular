import React from 'react'
import cx from 'classnames'
import s from './styles.css'
import { DIR_RTL, toEastArabicNum } from 'helpers'

function Item({ label }) {
  return <div className={s.item}>{label}</div>
}

export default class MasterCol extends React.Component {
  render() {
    const { dir, titles, left } = this.props
    const isRTL = dir === DIR_RTL
    const style = { left }
    return (
      <div
        style={style}
        className={cx(s.container, {
          [s.rtl]: isRTL
        })}
      >
        {titles.map(label => (
          <Item
            key={`col-${label}`}
            label={isRTL ? toEastArabicNum(label) : label}
          />
        ))}
      </div>
    )
  }
}
