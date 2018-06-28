import { ALPHABETS } from './alphabets'
import { DIR_RTL } from 'helpers'

function generateMasterRowTitles(start, end, list) {
  const result = []
  const len = list.length
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

export function getMasterRowTitles(start, end, dir) {
  const letters = ALPHABETS[dir]
  let list = generateMasterRowTitles(start, end, letters, dir)
  return dir === DIR_RTL ? list.reverse() : list
}

export function getMasterColTitles(start, end) {
  const list = []

  for (let i = start; i < end; i += 1) {
    list.push(i + 1)
  }

  return list
}
