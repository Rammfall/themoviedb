import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import ListMovies, { ListMoviesContainer } from '../container'

jest.mock('react-router-dom', () => ({
  withRouter: component => component
}))

jest.mock('react-intl', () => ({
  injectIntl: component => component
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
  const store = configureStore()()
  const props = {
    match: {
      params: {
        id: '1'
      }
    },
    intl: {
      formatMessage: jest.fn(() => 'test')
    }
  }

  const wrapper = shallow(
    <ListMovies
      store={store}
      {...props}
    />
  )
  const container = diveTo(wrapper, ListMoviesContainer)

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot()
  })

  describe('handleRemoveFromList()', () => {
    it('to have been called', () => {
      const spy = jest.spyOn(container.instance(), 'handleRemoveFromList')
      container.instance().handleRemoveFromList(2)()

      expect(spy).toHaveBeenCalledWith(2)
    })
  })

  describe('deleteHandler()', () => {
    it('to have been called', () => {
      const spy = jest.spyOn(container.instance(), 'deleteHandler')
      container.instance().deleteHandler({ id: 2 })

      expect(spy).toHaveBeenCalledWith({ id: 2 })
    })
  })

  describe('actions()', () => {
    it('to have been called', () => {
      const spy = jest.spyOn(container.instance(), 'actions')
      container.instance().actions(2)

      expect(spy).toHaveBeenCalledWith(2)
    })
  })
})
