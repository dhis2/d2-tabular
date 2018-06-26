import React, { Component } from 'react'
import cx from 'classnames'
import Sheet from './components/Sheet'
import { scrollElmToX, scrollElmToY } from './helpers'
import { DIR_RTL } from './helpers/constants'

import s from './styles.css'
import './locales'

/**
 * Responsible as a Container component to send properties down to Sheet
 * Sheet should be a dump component. SheetApp works as a top a level layout
 * component for the Sheet
 */
class SheetApp extends Component {
  state = {
    loaded: false
  }

  scrollToX = position => {
    if (!this.elmSheet) {
      setTimeout(() => scrollElmToX(this.elmSheet, position), 750)
    }
  }

  scrollY = position => {
    if (!this.elmSheet) {
      setTimeout(() => scrollElmToY(this.elmSheet, position), 750)
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true })
    }, 1000)
  }

  render() {
    let { width, height, dir } = this.props
    width = width || 800
    height = height || 500
    const style = {
      width,
      height
    }

    // TODO show loader, if sheet is loading

    return (
      <div
        ref={c => this.elmSheet = c}
        dir="ltr"
        style={style}
        className={cx(s.container, {
          [s.rtl]: dir === DIR_RTL,
          [s.visible]: this.state.loaded
        })}
      >
        <Sheet
          dir={dir}
          width={width}
          height={height}
          scrollToX={this.scrollToX}
          scrollToY={this.scrollToY}
        />
      </div>
    )
  }
}

export default SheetApp
