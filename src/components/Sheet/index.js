import React from 'react'
import Row from './Row'
import HeaderRow from './HeaderRow'
import { DIR_LTR, DIR_RTL } from '../../constants'

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
      end: 20
    },
    active: {
      row: [-1],
      col: [-1]
    }
  }

  render() {
    const { width, height, dir } = this.props
    const { stats, rows, cols, active } = this.state
    const view = []

    // TODO show based on language chosen, RTL or LTR
    view.push(<HeaderRow key={`sheet-header-row`} dir={dir} cols={cols} width={width} />)

    // for (let i = 0; i < stats.rows; i += 1) {
    //   view.push(
    //     <Row key={`row-${i}`} dir={dir} row={i} cols={stats.cols} active={active} />
    //   )
    // }

    return view
  }
}
