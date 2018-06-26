import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { DIR_LTR, DIR_RTL } from './helpers/constants'

ReactDOM.render(<App dir={DIR_RTL} />, document.getElementById('root'))
// ReactDOM.render(<App dir={DIR_LTR} />, document.getElementById('root'))
