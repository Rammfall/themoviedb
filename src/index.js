import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'

import StubsRoot from './components/stubs/StubsRoot'

import configureStore from './store/configureStore'
import './assets/styles/app.scss'

const store = configureStore()

render(
  <Provider store={store}>
    <StubsRoot />
  </Provider>,
  document.getElementById('app') || document.createElement('div')
)
