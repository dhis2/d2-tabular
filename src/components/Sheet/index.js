import React from 'react'
import MasterRow from './MasterRow'
import MasterCol from './MasterCol'
import { DIR_RTL, getMasterRowTitles, getMasterColTitles } from 'helpers'

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
    const {
      stats: { rows, cols }
    } = this.state
    this.setState({
      titles: {
        rows: getMasterRowTitles(0, cols, dir),
        cols: getMasterColTitles(0, rows, dir)
      }
    })
  }

  width() {
    return this.state.titles.rows.length * DEFAULT_COL_WIDTH
  }

  masterColLeftPosition() {
    return this.props.dir === DIR_RTL ? this.width() : 0
  }

  render() {
    const { dir } = this.props
    const { titles } = this.state
    const view = []

    // TODO add empty corner on right-top or left-top based based on dir

    view.push(
      <MasterRow
        key={`st-rows`}
        dir={dir}
        titles={titles.rows}
        width={this.width()}
        defaultColWidth={DEFAULT_COL_WIDTH}
        scrollToX={this.props.scrollToX}
      />
    )

    view.push(
      <MasterCol
        key={`st-cols`}
        dir={dir}
        titles={titles.cols}
        left={this.masterColLeftPosition()}
      />
    )

    // TODO add Grid

    return view
  }
}
