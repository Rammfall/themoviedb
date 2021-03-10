import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { IntlProvider } from 'react-intl'

import configureStore from './store/configureStore'
import en from './locales/en'
import AppRoot from './views/AppRoot'

import './assets/styles/app.scss'

const store = configureStore()

render(
  <Provider store={store}>
    <IntlProvider
      locale="en"
      messages={en.messages}
    >
      <AppRoot />
    </IntlProvider>
  </Provider>,
  document.getElementById('app') || document.createElement('div')
)
