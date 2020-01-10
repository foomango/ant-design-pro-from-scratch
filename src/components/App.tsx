import * as React from 'react'
import { hot } from 'react-hot-loader'
import '../assets/scss/App.scss'

const reactLogo = require('../assets/img/react_logo.svg')

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>Foo to the barz</p>
      <img alt="React logo" src={reactLogo.default} />
    </div>
  )
}

declare let module: object
export default hot(module)(App)
