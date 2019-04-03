import React from 'react'
import { render } from 'react-dom'
import App from './App'

function renderApp() {
  const App = require('./App').default
  render(<App />, document.getElementById('root'))
}

renderApp()

if ((module as any).hot) {
  (module as any).hot.accept(renderApp)
}
