import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import WatchlistMovies, { WatchlistMoviesContainer } from '../container'

jest.mock('Store/concepts/movies/selectors', () => ({
  getWatchlistMoviesSelector: jest.fn(() => ({
    movies: {
      movies: [],
      total: 1
    }
  }))
}))

describe('WatchlistMovies', () => {
  const store = configureStore()()

  it('matches snapshot', () => {
    const wrapper = shallow(
      <WatchlistMovies
        store={store}
      />
    )
    const container = diveTo(wrapper, WatchlistMoviesContainer)

    expect(container).toMatchSnapshot()
  })
})
