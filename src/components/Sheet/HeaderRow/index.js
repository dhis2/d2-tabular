import React from 'react'
import s from './styles.css'

import { ALPHABETS } from './alphabets'

function getAlphabetsFrom(start, end, list) {
  const result = []
  for (let i = start; i <= end; i += 1) {
    result.push(list[i])
  }
  return result
}

function getAlphabetsFromRange(start, end, alphabets) {
  // TODO generate alphabets from alphabets list
  // TODO pass list to getAlphabetsFrom passing in the list
}

function getTitles(start, end, dir) {
  const letters = ALPHABETS[dir]

  if (start < letters.length && end < letters.length) {
    return getAlphabetsFrom(start, end, letters)
  }

  return []
}

const COL_WIDTH = 100
export default function HeaderRow({ dir, cols: { start, end } }) {
  const list = getTitles(start, end, dir)

  const width = list.length * COL_WIDTH
  const style = {
    width
  }

  return (
    <div className={s.container} style={style}>
      {list.map((label, index) => (
        <div key={`hr-${start + index}`} className={s.item} style={{
          width: COL_WIDTH
        }}>
          {label}
        </div>
      ))}
    </div>
  )
}
