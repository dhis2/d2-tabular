import React, { Component } from 'react'
import Sheet from './components/Sheet'
import { DIR_LTR, DIR_RTL } from './constants'

import s from './styles.css'
import './locales'

function setDirection(dir) {
  document.documentElement.setAttribute('dir', dir)
}

/**
 * Responsible as a Container component to send properties down to Sheet
 * Sheet should be a dump component. SheetApp works as a top a level layout
 * component for the Sheet
 */
class SheetApp extends Component {
  componentDidMount() {
    setDirection(this.props.dir)
  }

  componentDidUpdate() {
    setDirection(this.props.dir)
  }

  render() {
    let { width, height, dir } = this.props
    width = width || 800
    height = height || 500
    const style = {
      width,
      height
    }

    return (
      <div className={s.container} style={style}>
        <Sheet dir={dir} width={width} height={height} />
      </div>
    )
  }
}

export default SheetApp
