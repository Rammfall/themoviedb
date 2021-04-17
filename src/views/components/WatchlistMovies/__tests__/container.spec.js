import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import WatchlistMovies, { WatchlistMoviesContainer } from '../container'

jest.mock('antd', () => ({
  Modal: {
    confirm: jest.fn()
  }
}))

jest.mock('Store/concepts/movies/actions', () => ({
  toggleWatchlistMovie: jest.fn()
}))

jest.mock('Store/concepts/movies/selectors', () => ({
  getWatchlistMoviesSelector: () => ({
    movies: [{
      id: 1,
      original_title: 'test',
      overview: 'test',
      poster_path: 'test'
    }],
    total: 1
  })
}))

jest.mock('react-intl', () => ({
  get injectIntl() {
    return component => component
  }
}))

describe('WatchlistMovies', () => {
  const store = configureStore()()
  const props = {
    intl: {
      formatMessage: jest.fn()
    }
  }

  it('matches snapshot', () => {
    const wrapper = shallow(
      <WatchlistMovies
        store={store}
        {...props}
      />
    )
    const container = diveTo(wrapper, WatchlistMoviesContainer)

    expect(container).toMatchSnapshot()
  })

  it('handleRemoveFromList', () => {
    const wrapper = shallow(
      <WatchlistMovies
        store={store}
        {...props}
      />
    )
    const container = diveTo(wrapper, WatchlistMoviesContainer)
    const spy = jest.spyOn(container.instance(), 'handleRemoveFromList')
    container.instance().handleRemoveFromList(3)()

    expect(spy).toHaveBeenCalledWith(3)
  })

  it('actions', () => {
    const wrapper = shallow(
      <WatchlistMovies
        store={store}
        {...props}
      />
    )
    const container = diveTo(wrapper, WatchlistMoviesContainer)
    const spy = jest.spyOn(container.instance(), 'actions')
    container.instance().actions(3)

    expect(spy).toHaveBeenCalledWith(3)
  })
})
