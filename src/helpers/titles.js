import { ALPHABETS } from './alphabets'
import { DIR_RTL } from 'helpers'

function generateRowTitles(start, end, list, dir) {
  const result = []
  const len = list.length
  const max = len ** len
  let title

  for (let i = start; i < end; i += 1) {
    if (i < len) {
      title = list[i]
    } else {
      let diff = i - len
      title = list[Math.floor(diff / len)] + list[diff % len]
    }

    result.push(title)
  }

  return result
}

export function getRowTitles(start, end, dir) {
  const letters = ALPHABETS[dir]
  let list = generateRowTitles(start, end, letters, dir)
  return dir === DIR_RTL ? list.reverse() : list
}

export function getColTitles(start, end, dir) {
  const list = []

  for (let i = start; i < end; i += 1) {
    list.push(i + 1)
  }

  return list
}
