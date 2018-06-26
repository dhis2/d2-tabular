import React from 'react'
import TitleRow from './TitleRow'

export default class Sheet extends React.Component {
  state = {
    stats: {
      rows: 5,
      cols: 20
    },
    rows: {
      start: 0,
      end: 5
    },
    cols: {
      start: 0,
      end: 200
    },
    active: {
      row: [-1],
      col: [-1]
    }
  }

  render() {
    const { width, dir } = this.props
    const { scrollToX } = this.props
    const { cols } = this.state
    const view = []

    view.push(
      <TitleRow
        key={`sheet-title-row`}
        dir={dir}
        cols={cols}
        width={width}
        scrollToX={scrollToX}
      />
    )

    return view
  }
}
