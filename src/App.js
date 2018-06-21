import React, { Component } from 'react'
import Sheet from './components/Sheet'
import css from './App.css'
import './locales'

/**
 * Responsible as a Container component to send properties down to Sheet
 * Sheet should be a dump component. SheetApp works as a top a level layout
 * component for the Sheet
 */
class SheetApp extends Component {
  render() {
    return (
      <div className={css.container}>
        <Sheet />
      </div>
    )
  }
}

export default SheetApp
