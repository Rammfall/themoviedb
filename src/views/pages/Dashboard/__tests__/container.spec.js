import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import { Router } from 'react-router-dom'
import DashboardPage, { MoviesList } from '../container'

jest.mock('Store/concepts/movies/selectors', () => ({
  getTrendingMoviesQuantitySelector: jest.fn(),
  getTrendingMoviesSelector: jest.fn(() => [{
    original_title: 'test',
    id: 2,
    overview: 'test',
    poster_path: 'test'
  }])
}))

jest.mock('Store/concepts/data/selectors', () => ({
  loadingSelector: jest.fn()
}))

jest.mock('react-router-dom', () => ({
  withRouter: component => component
}))


describe('DashboardPage', () => {
  const mockStore = configureStore()()

  describe('when page param excluded in url', () => {
    const routerProps = {
      location: {
        search: ''
      }
    }

    it('matches snapshot', () => {
      const wrapper = shallow(
        <DashboardPage
          store={mockStore}
          {...routerProps}
        />
      )
      const container = diveTo(wrapper, MoviesList)

      expect(container).toMatchSnapshot()
    })
  })

  describe('when in url param page have value', () => {
    const routerProps = {
      location: {
        search: '?page=2'
      }
    }

    it('matches snapshot', () => {
      const wrapper = shallow(
        <DashboardPage
          store={mockStore}
          {...routerProps}
        />
      )
      const container = diveTo(wrapper, MoviesList)

      expect(container).toMatchSnapshot()
    })
  })
})
