import React from 'react'
import cx from 'classnames'
import s from './styles.css'

import { ALPHABETS } from './alphabets'
import { DIR_RTL } from '../../../constants'

function getAlphabetsFrom(start, end, list) {
  const result = []
  for (let i = start; i <= end; i += 1) {
    result.push(list[i])
  }
  return result
}

function getTitles(start, end, dir) {
  const letters = ALPHABETS[dir]

  if (start < letters.length && end < letters.length) {
    let list = getAlphabetsFrom(start, end, letters)
    return dir === DIR_RTL ? list.reverse() : list
  }

  return []
}

const COL_WIDTH = 100
export default class HeaderRow extends React.Component {
  componentDidMount() {
    if (!this.elmHeader) {
      return
    }

    this.positionHorz()
  }

  positionHorz() {
    if (this.props.dir === DIR_RTL) {
      const { width } = this.elmHeader.getBoundingClientRect()
      this.props.scrollToX(width)
    } else {
      this.props.scrollToX(0)
    }
  }

  render() {
    const {
      dir,
      cols: { start, end }
    } = this.props
    const list = getTitles(start, end, dir)
    const width = list.length * COL_WIDTH
    const style = {
      width
    }

    return (
      <div
        ref={c => (this.elmHeader = c)}
        className={s.container}
        style={style}
      >
        {list.map((label, index) => (
          <div
            key={`hr-${start + index}`}
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
