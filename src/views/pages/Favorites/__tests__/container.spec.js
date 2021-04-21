import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import FavoritesPage, { FavoritesPageContainer } from '../container'

jest.mock('react-intl', () => ({
  injectIntl: jest.fn(component => component)
}))

jest.mock('Store/concepts/movies/selectors', () => ({
  getFavoritesMoviesSelector: jest.fn(() => ({
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

describe('FavoritesPage', () => {
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
    <FavoritesPage
      store={store}
      {...props}
    />
  )
  const container = diveTo(wrapper, FavoritesPageContainer)

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot()
  })

  describe('componentDidUpdate()', () => {
    const anotherContainer = diveTo(wrapper, FavoritesPageContainer)
    jest.spyOn(anotherContainer.instance(), 'getData')
    anotherContainer.setProps({ userId: 2 })
    anotherContainer.setProps({ userId: undefined })
    anotherContainer.setProps({ location: { search: 'test' } })
    anotherContainer.setProps({ location: { search: 'test' } })

    expect(anotherContainer).toMatchSnapshot()
  })
})
