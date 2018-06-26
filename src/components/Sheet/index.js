import React from 'react'
import TitleRow from './TitleRow'
import TitleCol from './TitleCol'
import {DIR_RTL, getRowTitles, getColTitles} from 'helpers'

const DEFAULT_COL_WIDTH = 150
export default class Sheet extends React.Component {
  state = {
    stats: {
      rows: 20,
      cols: 10
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
        rows: getRowTitles(0, cols, dir),
        cols: getColTitles(0, rows, dir)
      }
    })
  }

  width() {
    return this.state.titles.rows.length * DEFAULT_COL_WIDTH
  }

  titleColLeftPosition() {
    return this.props.dir === DIR_RTL ? this.width() : 0
  }

  render() {
    const { dir } = this.props
    const { titles } = this.state
    const view = []

    view.push(
      <TitleRow
        key={`st-rows`}
        dir={dir}
        titles={titles.rows}
        width={this.width()}
        defaultColWidth={DEFAULT_COL_WIDTH}
        scrollToX={this.props.scrollToX}
      />
    )

    view.push(
      <TitleCol
        key={`st-cols`}
        dir={dir}
        titles={titles.cols}
        left={this.titleColLeftPosition()}
      />
    )

    return view
  }
}
