import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import DashboardMovies, { DashboardMoviesContainer } from '../container'

jest.mock('Store/concepts/movies/selectors', () => ({
  getDashboardMoviesSelector: jest.fn(() => [{
    id: 1,
    name: 'test',
    description: 'test'
  }]),
  getDashboardMoviesTotalSelector: jest.fn(() => 3)
}))

describe('DashboardMovies', () => {
  const store = configureStore()()

  it('matches snapshot', () => {
    const wrapper = shallow(<DashboardMovies store={store} />)
    const container = diveTo(wrapper, DashboardMoviesContainer)

    expect(container).toMatchSnapshot()
  })
})
