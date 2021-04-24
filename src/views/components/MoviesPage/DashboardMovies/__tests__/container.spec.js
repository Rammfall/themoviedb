import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import DashboardMovies, { DashboardMoviesContainer } from '../container'

jest.mock('Store/concepts/dashboard/selectors', () => ({
  getDashboardMoviesSelector: jest.fn(() => ({
    movies: [{
      id: 1,
      name: 'test',
      description: 'test'
    }],
    total: 1
  }))
}))

describe('DashboardMovies', () => {
  const store = configureStore()()

  it('matches snapshot', () => {
    const wrapper = shallow(<DashboardMovies store={store} />)
    const container = diveTo(wrapper, DashboardMoviesContainer)

    expect(container).toMatchSnapshot()
  })
})
