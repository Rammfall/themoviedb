import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import ListDetailsPage, { ListDetailsPageContainer } from '../container'

jest.mock('react-router-dom', () => ({
  withRouter: component => component
}))

jest.mock('Store/concepts/listDetails/selectors', () => ({
  isBlankSelector: jest.fn(() => true)
}))

describe('ListDetailsPage', () => {
  const store = configureStore()()
  const props = {
    match: {
      params: {
        id: '1'
      }
    },
    location: {
      search: ''
    }
  }
  const wrapper = shallow(
    <ListDetailsPage
      store={store}
      {...props}
    />
  )
  const container = diveTo(wrapper, ListDetailsPageContainer)

  it('matches snapshot', () => {
    expect(container).toMatchSnapshot()
  })

  describe('componentDidUpdate()', () => {
    it('matches snapshot', () => {
      const spy = jest.spyOn(container.instance(), 'componentDidUpdate')
      container.setProps({ location: { search: '?page=3' } })
      container.setProps({ location: { search: '?page=3' } })

      expect(spy).toHaveBeenCalled()
    })
  })
})
