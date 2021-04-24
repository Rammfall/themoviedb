import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import ListMovies, { ListMoviesContainer } from '../container'

jest.mock('react-router-dom', () => ({
  withRouter: component => component
}))

jest.mock('Store/concepts/listDetails/selectors', () => ({
  getListDetailsMoviesSelector: jest.fn(() => ({
    total: 1,
    movies: [{
      original_title: 'test',
      id: 1
    }]
  }))
}))

describe('ListMovies', () => {
  it('matches snapshot', () => {
    const store = configureStore()()
    const props = {
      match: {
        params: {
          id: 1
        }
      }
    }

    const wrapper = shallow(
      <ListMovies
        store={store}
        {...props}
      />
    )
    const container = diveTo(wrapper, ListMoviesContainer)

    expect(container).toMatchSnapshot()
  })
})
