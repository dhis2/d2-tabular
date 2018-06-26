import React from 'react'
import TitleRow from './TitleRow'
import TitleCol from './TitleCol'
import {DIR_RTL, getRowTitles, getColTitles} from 'helpers'

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

    const width = titles.rows.length * DEFAULT_COL_WIDTH

    view.push(
      <TitleRow
        key={`st-rows`}
        dir={dir}
        titles={titles.rows}
        width={width}
        defaultColWidth={DEFAULT_COL_WIDTH}
        scrollToX={this.props.scrollToX}
      />
    )

    view.push(
      <TitleCol
        key={`st-cols`}
        dir={dir}
        titles={titles.cols}
        left={dir === DIR_RTL ? width : 0}
      />
    )

    return view
  }
}
