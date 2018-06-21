import React, { Component } from 'react'
import Sheet from './components/Sheet'
import css from './App.css'


class App extends Component {
  render() {
    return (
      <div className={css.container}>
        <Sheet />
      </div>
    )
  }
}

export default App
