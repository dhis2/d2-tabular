import React from 'react'
import cx from 'classnames'
import s from './styles.css'

import { ALPHABETS } from './alphabets'
import { DIR_RTL } from '../../../constants'

function generateTitles(start, end, list, dir) {
  const result = []
  const len = list.length
  const max = len ** len
  let title

  for (let i = 0; i < max; i += 1) {
    if (i >= start && i <= end) {
      if (i < len) {
        title = list[i]
      } else {
        let diff = i - len
        title = list[Math.floor(diff / len)] + list[diff % len]
      }
      result.push(title)
    } else if (i > end) {
      break
    }
  }

  return result
}

function getTitles(start, end, dir) {
  const letters = ALPHABETS[dir]
  let list = generateTitles(start, end, letters, dir)
  return dir === DIR_RTL ? list.reverse() : list
}

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
      cols: { start, end }
    } = this.props
    const list = getTitles(start, end, dir)
    const width = list.length * COL_WIDTH
    const style = {
      width
    }

    return (
      <div
        ref={c => (this.elm = c)}
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
