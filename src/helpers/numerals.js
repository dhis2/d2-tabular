const ARABIC_DECIMAL = '۔'
const EASTERN_ARABIC_NUMERALS = {
  0: '۰',
  1: '۱',
  2: '۲',
  3: '۳',
  4: '٤',
  5: '۵',
  6: '٦',
  7: '۷',
  8: '۸',
  9: '۹',
  '۔': ARABIC_DECIMAL
}

const toEastArabicInt = num =>
  num
    .toString()
    .split('')
    .map(n => {
      if (EASTERN_ARABIC_NUMERALS[n]) {
        return EASTERN_ARABIC_NUMERALS[n]
      }

      return n
    })
    .join('')

export const toEastArabicNum = num => {
  if (num !== 0 && !num) {
    return ''
  }

  if (typeof num === 'number') {
    num = num.toString()
  }

  if (num.indexOf('.') > -1) {
    const arr = num.split('.')
    return `${toEastArabicInt(arr[0])}${ARABIC_DECIMAL}${toEastArabicInt(
      arr[1]
    )}`
  }

  return toEastArabicInt(num)
}
