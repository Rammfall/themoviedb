import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import diveTo from 'TestUtils/diveToEnzyme'

import { userIdSelector } from 'Store/concepts/account/selectors'

import ListsPage, { ListsPageContainer } from '../container'

jest.mock('Store/concepts/lists/selectors', () => ({
  isEmptyListsSelector: jest.fn(() => false)
}))

jest.mock('Store/concepts/account/selectors', () => ({
  userIdSelector: jest.fn(() => null)
}))

jest.mock('Store/concepts/data/selectors', () => ({
  loadingSelector: jest.fn()
}))

jest.mock('react-router-dom', () => ({
  withRouter: component => component
}))

describe('ListsPage', () => {
  const store = configureStore()()
  const props = {
    location: {
      search: ''
    }
  }
  const wrapper = shallow(
    <ListsPage
      store={store}
      {...props}
    />
  )

  describe('with default props', () => {
    it('matches snapshot', () => {
      const container = diveTo(wrapper, ListsPageContainer)

      expect(container).toMatchSnapshot()
    })

    describe('componentDidUpdate', () => {
      it('have been called', () => {
        const container = diveTo(wrapper, ListsPageContainer)
        const spy = jest.spyOn(container.instance(), 'componentDidUpdate')
        container.setProps({ location: { search: '?page=3' } })

        expect(spy).toHaveBeenCalled()
      })
    })

    describe('toggleCreateModal', () => {
      it('matches snapshot', () => {
        const container = diveTo(wrapper, ListsPageContainer)
        const spy = jest.spyOn(container.instance(), 'toggleCreateModal')
        container.instance().toggleCreateModal()

        expect(spy).toHaveBeenCalled()
      })
    })
  })

  describe('when userId is null', () => {
    userIdSelector.mockImplementation(() => null)
    it('matches snapshot', () => {
      const container = diveTo(wrapper, ListsPageContainer)

      expect(container).toMatchSnapshot()
    })

    describe('after componentDidUpdate', () => {
      describe('when keyword props was not changed', () => {
        it('matches snapshot', () => {
          const container = diveTo(wrapper, ListsPageContainer)
          container.setProps({ test: 'tes' })

          expect(container).toMatchSnapshot()
        })
      })

      describe('when search was changed', () => {
        it('matches snapshot', () => {
          const container = diveTo(wrapper, ListsPageContainer)
          container.setProps({ location: { search: '?page=53' } })

          expect(container).toMatchSnapshot()
        })
      })

      describe('when userId was changed', () => {
        it('matches snapshot', () => {
          const container = diveTo(wrapper, ListsPageContainer)
          container.setProps({ userId: 4 })

          expect(container).toMatchSnapshot()
        })
      })
    })
  })
})
