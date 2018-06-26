import React from 'react'
import TitleRow from './TitleRow'
import TitleCol from './TitleCol'
import { getRowTitles, getColTitles } from './helpers'

const DEFAULT_COL_WIDTH = 100
export default class Sheet extends React.Component {
  state = {
    stats: {
      rows: 15,
      cols: 20
    },
    titles: {
      rows: [],
      cols: []
    },
    active: {
      row: [-1],
      col: [-1]
    }
  }

  componentWillMount() {
    const { dir } = this.props
    const { stats: { rows, cols } } = this.state
    this.setState({
      titles: {
        rows: getRowTitles(0, rows, dir),
        cols: getColTitles(0, cols, dir)
      }
    })
  }

  render() {
    const { dir } = this.props
    const { titles } = this.state
    const view = []

    view.push(
      <TitleRow
        key={`sheet-title-rows`}
        dir={dir}
        titles={titles.rows}
        scrollToX={this.props.scrollToX}
      />
    )

    view.push(
      <TitleCol
        key={`sheet-title-cols`}
        titles={titles.cols}
      />
    )

    return view
  }
}
