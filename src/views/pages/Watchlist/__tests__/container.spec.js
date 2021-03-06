import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import WatchlistPage, { WatchlistPageContainer } from '../container'

jest.mock('react-intl', () => ({
  injectIntl: jest.fn(component => component)
}))

jest.mock('Store/concepts/watchlist/selectors', () => ({
  getWatchlistMoviesSelector: jest.fn(() => ({
    isEmpty: false
  }))
}))

jest.mock('Store/concepts/account/selectors', () => ({
  userIdSelector: jest.fn(() => 43)
}))

jest.mock('Store/concepts/data/selectors', () => ({
  loadingSelector: jest.fn()
}))

jest.mock('react-router-dom', () => ({
  withRouter: component => component
}))

describe('WatchlistPage', () => {
  const store = configureStore()()
  const props = {
    location: {
      search: ''
    },
    userId: 3,
    movies: {
      isEmpty: false
    },
    intl: {
      formatMessage: jest.fn(() => 'test')
    }
  }
  const wrapper = shallow(
    <WatchlistPage
      store={store}
      {...props}
    />
  )
  const container = diveTo(wrapper, WatchlistPageContainer)

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot()
  })

  describe('componentDidUpdate()', () => {
    const anotherContainer = diveTo(wrapper, WatchlistPageContainer)
    jest.spyOn(anotherContainer.instance(), 'getData')
    anotherContainer.setProps({ userId: 2 })
    anotherContainer.setProps({ userId: undefined })
    anotherContainer.setProps({ location: { search: 'test' } })
    anotherContainer.setProps({ location: { search: 'test' } })

    expect(anotherContainer).toMatchSnapshot()
  })
})
